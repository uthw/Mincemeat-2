LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("alexsmobs:murmur")
        .randomChance(0.75)
        .addWeightedLoot([1, 1], [Item.of("art_of_forging:vobrite_crystal")]);
});
