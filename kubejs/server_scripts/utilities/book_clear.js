PlayerEvents.advancement((event) => {
    if (event.getAdvancement() != "iceandfire:iceandfire/root") {
        return;
    }

    // This advancement is granted right after a player loads into a world
    // Utils.server.runCommandSilent("clear @p patchouli:guide_book");

    // initial inventory
    event.server.runCommandSilent("clear @p patchouli:guide_book");
    event.server.runCommandSilent("give @p ftbquests:book");
    event.server.runCommandSilent("clear @p enigmaticlegacy:cursed_ring");
    event.server.runCommandSilent(
        'give @p delightful:smore{RepairCost:0,display:{Name:\'{"text":"Starting Gift"}\'}}'
    );
    // Item.of(
    //     "delightful:cheeseburger",
    //     '{RepairCost:0,display:{Name:\'{"text":"Starting Gift 2"}\'}}'
    // );

    // I'm so stupid, i thought akashic tome was on 1.20
    // Utils.server.runCommandSilent("give @p ")
});

// PlayerEvents.respawned((event) => {
//     event.server.runCommand(
//         'give @p delightful:cheeseburger{RepairCost:0,display:{Name:\'{"text":"Starting Gift 2"}\'}}'
//     );
// });
