LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("alexsmobs:void_worm")
        .addWeightedLoot([9, 13], Item.of("enigmaticlegacy:etherium_ore"));
});
