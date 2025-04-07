// Base lotot: brown wool, oak planks, cobweb,candle, book, paper

LootJS.modifiers((event) => {
    // hexerei:candelabra
    event
        .addLootTableModifier("mvs:cathedral_base")
        .randomChance(0.1)
        .addWeightedLoot(
            [1, 1],
            [Item.of("hexerei:candelabra").withChance(100)]
        );

    // irons_spellbooks:arcane_essence
    event
        .addLootTableModifier("mvs:cathedral_base")
        .randomChance(0.1)
        .addWeightedLoot(
            [1, 1],
            [Item.of("irons_spellbooks:arcane_essence").withChance(100)]
        );

    event
        .addLootTableModifier("mvs:cartographer_tower")
        .randomChance(0.1)
        .addWeightedLoot(
            [1, 1],
            [
                LootEntry.of("irons_spellbooks:scroll").customFunction({
                    function: "irons_spellbooks:randomize_spell",
                    quality: {
                        min: 0.2,
                        max: 0.5,
                    },
                }),
            ]
        );
});
