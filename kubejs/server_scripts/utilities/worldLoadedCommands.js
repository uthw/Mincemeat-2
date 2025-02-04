// commands run every time someone logs in
// these are for things like balance changes so that way they can be applied in existing worlds after updating

PlayerEvents.loggedIn((event) => {
    let commands = [
        "gamerule artifacts.crystalHeart.healthBonus 6",
        "gamerule artifacts.eternalSteak.enabled false",
        "gamerule artifacts.everlastingBeef.enabled false",
        "gamerule persistentAnimals false",
        "gamerule playersSleepingPercentage 1",
    ];

    commands.forEach((command) => {
        event.server.runCommandSilent(command);
    });
});
