LootJS.modifiers(event => {
    // Random scroll
    event
        .addLootTableModifier("mvs:crystal")
        .randomChance(0.1)
        .addWeightedLoot(
            [1, 1],
            [LootEntry.of("irons_spellbooks:scroll").customFunction({
                function: "irons_spellbooks:randomize_spell",
                quality: {
                    min: 0.1,
                    max: 0.5,
                },
            })]
    );
    
    // hexcasting:charged_amethyst
    event
        .addLootTableModifier("mvs:crystal")
        .randomChance(0.2)
        .addWeightedLoot(
            [1, 1],
            [Item.of("hexcasting:charged_amethyst").withChance(100)]
    );
    
    // forbidden_arcanus:arcane_crystal
    event
        .addLootTableModifier("mvs:crystal")
        .randomChance(0.2)
        .addWeightedLoot(
            [1, 8],
            [Item.of("forbidden_arcanus:arcane_crystal").withChance(100)]
    );

    // thermal:cinnabar
    event
        .addLootTableModifier("mvs:crystal")
        .randomChance(0.2)
        .addWeightedLoot(
            [1, 8],
            [Item.of("thermal:cinnabar").withChance(100)]
    );

    // thermal:apatite
    event
        .addLootTableModifier("mvs:crystal")
        .randomChance(0.18)
        .addWeightedLoot(
            [5, 20],
            [Item.of("thermal:apatite").withChance(100)]
    );

    // theurgy:sal_ammoniac_crystal
    event
        .addLootTableModifier("mvs:crystal")
        .randomChance(0.1)
        .addWeightedLoot(
            [1, 4],
            [Item.of("theurgy:sal_ammoniac_crystal").withChance(100)]
    );
})