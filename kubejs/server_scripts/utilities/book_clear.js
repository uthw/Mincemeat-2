PlayerEvents.advancement((event) => {
    if (event.getAdvancement() != "iceandfire:iceandfire/root") {
        return;
    }

    // // This advancement is granted right after a player loads into a world
    // // Utils.server.runCommand("clear @p patchouli:guide_book");

    // // initial inventory
    // event.server.runCommand('clear @a patchouli:guide_book');

    // event.server.runCommand("give @p ftbquests:book");
    // event.server.runCommand("clear @p enigmaticlegacy:cursed_ring");
    // event.server.runCommand(
    //     'give @p delightful:smore{RepairCost:0,display:{Name:\'{"text":"Starting Gift"}\'}}'
    // );

    // event.server.runCommand("gamerule playersSleepingPercentage 50");

    // // bow nerf. uuid only needs to not exist for any other arrow damage modifier
    // event.server.runCommand("attribute @p attributeslib:arrow_damage modifier add 03879795-c80d-42fb-953d-577b3dfb4aab nerf -0.2 multiply_base")
});
