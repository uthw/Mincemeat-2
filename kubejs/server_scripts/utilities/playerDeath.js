// See graveScroll.js for credits

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
    // global.mostRecentlyDied = player.username;
    console.log(global.mostRecentlyDied);
});

// TODO Wait for movement before giving a scroll
PlayerEvents.respawned((event) => {
    console.log("PlayerEvents.respawned");

    // 40% chance the player gets a gravescroll when they respawn
    // if (global.mostRecentlyDied != event.player.username) {
    //     return;
    // }
    if (event.player.stats.timeSinceDeath >= 10) {
        return;
    }
    let rng = Math.random();
    console.log("generated " + rng);
    if (rng > 0.6) {
        event.entity.server.runCommand(
            `execute as ${event.entity.username} run give @p kubejs:grave_scroll`
        );
    }
});
