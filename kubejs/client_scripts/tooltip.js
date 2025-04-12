// ClientEvents.
ItemEvents.tooltip((event) => {
    const akashicTomeBooks = []; // Akashic Tome hasn't been ported

    const noLongerNeedsEnergy = [];

    // event.addAdvanced()

    event.add("mekanism:flamethrower", "IMPORTANT: Crashes your game if you have shaders enabled");
    event.add("irons_spellbooks:frostward_ring", "Do not equip this if you're on a server. A bug is causing this item to make unpleasant sounds for other players");
    event.add("mekanismtools:refined_glowstone_boots", "IMPORTANT: Crashes your game if you apply an armor trim")
    event.add("mekanismtools:refined_glowstone_leggings", "IMPORTANT: Crashes your game if you apply an armor trim")
    event.add("mekanismtools:refined_glowstone_chestplate", "IMPORTANT: Crashes your game if you apply an armor trim")
    event.add("mekanismtools:refined_glowstone_helmet", "IMPORTANT: Crashes your game if you apply an armor trim")
});
