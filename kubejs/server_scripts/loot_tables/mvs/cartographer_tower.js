// Cartographer tower loot table
LootJS.modifiers((event) => {
    // naturescompass:natures_compass
    event
        .addLootTableModifier("mvs:cartographer_tower")
        .randomChance(0.15)
        .addWeightedLoot(
            [1, 1],
            [Item.of("naturescompass:natures_compass").withChance(100)]
        );

    // explorerscompass:explorers_compass
    event
        .addLootTableModifier("mvs:cartographer_tower")
        .randomChance(0.15)
        .addWeightedLoot(
            [1, 1],
            [Item.of("explorerscompass:explorers_compass").withChance(100)]
        );

    // quark:abacus
    event
        .addLootTableModifier("mvs:cartographer_tower")
        .randomChance(0.1)
        .addWeightedLoot([1, 1], [Item.of("quark:abacus").withChance(100)]);

    // random scroll common-rare
    event
        .addLootTableModifier("mvs:cartographer_tower")
        .randomChance(0.1)
        .addWeightedLoot(
            [1, 1],
            [LootEntry.of("irons_spellbooks:scroll").customFunction({
                function: "irons_spellbooks:randomize_spell",
                quality: {
                    min: 0.2,
                    max: 0.5,
                },
            })]
        )

    // create:schematic_and_quill
    event
        .addLootTableModifier("mvs:cartographer_tower")
        .randomChance(0.1)
        .addWeightedLoot(
            [1, 1],
            [Item.of("create:schematic_and_quill").withChance(100)]
    );
});
