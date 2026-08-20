LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("minecells:grenadier")
        .addWeightedLoot([0, 2], [Item.of("eidolon:lead_ingot")]);
});
