LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("alexscaves:teletor")
        .addWeightedLoot([0, 3], [Item.of("immersiveengineering:ingot_aluminum")]);
});
