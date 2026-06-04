LootJS.modifiers((event) => {
    event
        .addLootTableModifier("opposing_force:chests/opposing_force_ancient_city")
        .removeLoot("opposing_force:moon_shoes");
});
