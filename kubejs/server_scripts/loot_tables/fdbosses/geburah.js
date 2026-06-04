LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("fdbosses:geburah")
        .addWeightedLoot([10, 15], Item.of("enigmaticlegacy:etherium_ore"));
});
