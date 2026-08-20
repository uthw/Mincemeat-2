LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("quark:forgotten")
        .addWeightedLoot([0, 2], [Item.of("thermal:cinnabar")]);
});
