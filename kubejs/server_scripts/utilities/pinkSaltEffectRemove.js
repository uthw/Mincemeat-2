PlayerEvents.tick((event) => {
    if (event.player.age % 40 !== 0) return;

    if (event.player.hasEffect("galosphere:block_bane")) {
        event.player.removeEffect("galosphere:block_bane");
        event.player.removeEffect("minecraft:mining_fatigue");
    }
})