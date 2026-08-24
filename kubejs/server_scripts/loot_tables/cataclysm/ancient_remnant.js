LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("cataclysm:ancient_remnant")
        .randomChance(1)
        .addWeightedLoot([1, 1], Item.of("darkutils:charm_warding"));
});
