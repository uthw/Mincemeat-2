LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("minecraft:ender_dragon")
        .addWeightedLoot([4, 4], Item.of("enigmaticlegacy:etherium_ore"));
});
