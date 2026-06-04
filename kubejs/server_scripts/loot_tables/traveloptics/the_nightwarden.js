LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("traveloptics:the_nightwarden")
        .addWeightedLoot([10, 14], Item.of("enigmaticlegacy:etherium_ore"));
});
