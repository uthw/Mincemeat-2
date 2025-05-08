LootJS.modifiers((event) => {
    event
        .addLootTableModifier(/^.*chests\/.*/)
        .removeLoot("enderio:dark_steel_ingot")
        .removeLoot("enderio:dark_steel_sword");
});
