
LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("minecraft:bat")
        .removeLoot("forbidden_arcanus:bat_wing")
        .removeLoot("reliquary:bat_wing");
});
