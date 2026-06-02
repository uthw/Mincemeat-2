LootJS.modifiers((event) => {
    event
        .addBlockLootModifier("environmental:duckweed")
        .randomChance(0.25)
        .addWeightedLoot([1, 1], Item.of("hexerei:sage_seed").withChance(100));
});
