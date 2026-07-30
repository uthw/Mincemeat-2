LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("block_factorys_bosses:kraken")
        .addWeightedLoot([3, 3], "alexsmobs:lost_tentacle");
});
