LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("opposing_force:rambler")
        .removeLoot("opposing_force:heavy_bone")
        .randomChance(0.25)
        .addWeightedLoot([1, 2], [Item.of("alexscaves:heavy_bone")]);
});
