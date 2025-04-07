
LootJS.modifiers((event) => {
    event
        .addBlockLootModifier("minecraft:spawner")
        .removeLoot("forbidden_arcanus:spawner_scrap")
        .removeLoot("dungeonnowloading:spawner_fragment");
});
