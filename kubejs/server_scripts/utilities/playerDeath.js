const $GameRules = Java.loadClass("net.minecraft.world.level.GameRules");
const r = 50;

EntityEvents.death("minecraft:player", (event) => {
    // const { x, y, z } = event.player;
    const { entity, player, server, level } = event;
    if (!player) return;
    const { x, y, z } = player;
    let pData = player.persistentData;
    pData.deathx = x.toFixed(0);
    pData.deathy = y.toFixed(0);
    pData.deathz = z.toFixed(0);
    pData.deathreset = 1;
    pData.deathDimension = event.level.dimension.path;

    // XP storage
    let keepInvEnabled = event.server.gameRules.getBoolean($GameRules.RULE_KEEPINVENTORY);

    if (!keepInvEnabled) {
        let retainedXp = Math.floor(player.xp * 0.75);
        pData.remove("retainedXp");
        pData.putInt("retainedXp", retainedXp);

        player.setXpLevel(0);
        player.setXp(0);
    }

    // Refills a percentage of nearby bosses' health that diminishes with the number of players nearby.
    let dim = `${event.level.dimension.namespace}:${event.level.dimension.path}`;

    let survivingPlayerCount = level
        .getPlayers()
        .filter((p) => p.distanceToEntity(player) <= r && p.uuid !== player.uuid && p.isAlive())
        .size();

    // bossesAndMinions is defined in tags/tagsEntity.js. I would use mincemeat:heal_on_player_death instead
    // but idk how to read datapack tags with kubejs without commands.
    let bosses = level
        .getEntitiesWithin(
            AABB.of(
                player.x - r,
                player.y - r,
                player.z - r,
                player.x + r,
                player.y + r,
                player.z + r,
            ),
        )
        .filter((e) => bossesAndMinions.some((boss) => e.type.toString() === boss));

    if (bosses.size() > 0) {
        try {
            for (let boss of bosses) {
                // getHealth, getMaxHealth, and setHealth are not valid for some entities (like dropped items)
                // I think this causes them to not be reported by probejs, however they work in game.
                let currentHealth = boss.getHealth();
                let maxHealth = boss.getMaxHealth();

                let percentageToHeal = 1.0 / (survivingPlayerCount + 1); // 50% if 1 player, 33% if 2 players, so on
                let healthToAdd = maxHealth * percentageToHeal;

                // I don't think you can go over max health, but just in case
                let newHealth = Math.min(currentHealth + healthToAdd, maxHealth);

                boss.setHealth(newHealth);
            }
        } catch (error) {
            console.log(
                `Error while healing bosses on player death: ${error}. Falling back to old method.`,
            );
            event.server.runCommandSilent(
                // This works in 0.5.1 but you can switch to runCommand if weird things are happening
                `execute in ${dim} positioned ${x} ${y} ${z} unless entity @a[distance=2..10] as @e[distance=..50,type=#mincemeat:heal_on_player_death] run data modify entity @s Health set value 9999.0`,
            );
        }
    }

    event.server.scheduleInTicks(4, () => {
        // This section is unrelated to the grave scroll item and made by me
        // Hotfix for duplication glitch with Blue Skies arc (see #120)
        // The blue skies devs have a fix for this on 1.20.4 and 1.21 but don't seem to plan on backporting it

        event.entity.server.runCommandSilent(
            `execute in ${dim} positioned ${pData.deathx} ${pData.deathy} ${pData.deathz} run kill @e[type=item,name="Dusk Arc"]`,
        );
        event.entity.server.runCommandSilent(
            `execute in ${dim} positioned ${pData.deathx} ${pData.deathy} ${pData.deathz} run kill @e[type=item,name="Nature Arc"]`,
        );
        event.entity.server.runCommandSilent(
            `execute in ${dim} positioned ${pData.deathx} ${pData.deathy} ${pData.deathz} run kill @e[type=item,name="Poisonous Arc"]`,
        );
        event.entity.server.runCommandSilent(
            `execute in ${dim} positioned ${pData.deathx} ${pData.deathy} ${pData.deathz} run kill @e[type=item,name="Ethereal Arc"]`,
        );
    });
});

// TODO Wait for movement before giving a scroll
PlayerEvents.respawned((event) => {
    let keepInvEnabled = event.server.gameRules.getBoolean($GameRules.RULE_KEEPINVENTORY);
    if (event.player.persistentData.contains("retainedXp") && !keepInvEnabled) {
        let restoredXp = event.player.persistentData.getInt("retainedXp");
        event.player.xp = restoredXp;
        event.player.persistentData.remove("retainedXp");
    }

    // 40% chance the player gets a gravescroll when they respawn
    if (event.player.stats.timeSinceDeath >= 10) {
        return;
    }
    let rng = Math.random();
    if (rng > 0.6) {
        event.player.give("kubejs:grave_scroll");
    }
});
