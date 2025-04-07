
LootJS.modifiers((event) => {
    event
        .addLootTableModifier(/^minecraft:chests\/.*/)
        .removeLoot("enderio:dark_steel_ingot")
        .removeLoot("enderio:dark_steel_sword");
});