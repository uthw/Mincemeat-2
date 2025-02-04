// ClientEvents.
ItemEvents.tooltip((event) => {
    const akashicTomeBooks = []; // Akashic Tome hasn't been ported

    const noLongerNeedsEnergy = [];

    // event.addAdvanced()

    event.add("mekanism:flamethrower", "IMPORTANT: Crashes your game if you have shaders enabled");
    event.add("irons_spellbooks:frostward_ring", "Do not equip this if you're on a server. A bug is causing this item to make unpleasant sounds for other players");
});
