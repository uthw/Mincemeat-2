EntityEvents.death("minecraft:player", (event) => {
    // const { x, y, z } = event.player;
    const { entity, player, server } = event;
    if (!player) return;
    const { x, y, z } = player;
    let pData = player.persistentData;
    pData.deathx = x.toFixed(0);
    pData.deathy = y.toFixed(0);
    pData.deathz = z.toFixed(0);
    pData.deathreset = 1;
    pData.deathDimension = event.level.dimension.path;

    // health refill
    let dim = `${event.level.dimension.namespace}:${event.level.dimension.path}`;
    event.server.runCommand(
        `execute in ${dim} positioned ${x} ${y} ${z} unless entity @a[distance=2..10] as @e[distance=..50,type=#minecraft:heal_on_player_death] run data modify entity @s Health set value 9999.0`
    );

    event.server.scheduleInTicks(4, () => {
        // This section is unrelated to the grave scroll item and made by me
        // Hotfix for duplication glitch with Blue Skies arc (see #120)
        // The blue skies devs have a fix for this on 1.20.4 and 1.21 but don't seem to plan on backporting it

        event.entity.server.runCommand(
            `execute in ${dim} positioned ${pData.deathx} ${pData.deathy} ${pData.deathz} run kill @e[type=item,name="Dusk Arc"]`
        );
        event.entity.server.runCommand(
            `execute in ${dim} positioned ${pData.deathx} ${pData.deathy} ${pData.deathz} run kill @e[type=item,name="Nature Arc"]`
        );
        event.entity.server.runCommand(
            `execute in ${dim} positioned ${pData.deathx} ${pData.deathy} ${pData.deathz} run kill @e[type=item,name="Poisonous Arc"]`
        );
        event.entity.server.runCommand(
            `execute in ${dim} positioned ${pData.deathx} ${pData.deathy} ${pData.deathz} run kill @e[type=item,name="Ethereal Arc"]`
        );
    });
});

// TODO Wait for movement before giving a scroll
PlayerEvents.respawned((event) => {
    // console.log("PlayerEvents.respawned");

    // 40% chance the player gets a gravescroll when they respawn
    // if (global.mostRecentlyDied != event.player.username) {
    //     return;
    // }
    if (event.player.stats.timeSinceDeath >= 10) {
        return;
    }
    let rng = Math.random();
    if (rng > 0.6) {
        event.entity.server.runCommand(
            `execute as ${event.entity.username} run give @s kubejs:grave_scroll`
        );
    }
});
