LootJS.modifiers((event) => {
    event
        .addLootTableModifier("minecraft:chests/end_city_treasure")
        .removeLoot("enigmaticlegacy:etherium_ore");
});
