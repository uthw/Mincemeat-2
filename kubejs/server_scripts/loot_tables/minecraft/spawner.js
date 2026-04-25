LootJS.modifiers((event) => {
    event
        .addBlockLootModifier("minecraft:spawner")
        .removeLoot("forbidden_arcanus:spawner_scrap")
        .removeLoot("paraglider:spirit_orb")
        .removeLoot("dungeonnowloading:spawner_fragment");
});
