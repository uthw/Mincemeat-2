LootJS.modifiers((event) => {
    event
        .addLootTableModifier("graveyard:chests/creeper_loot")
        .addWeightedLoot([1, 3], [Item.of("supplementaries:bomb").withChance(20)])
        .addWeightedLoot([1, 3], [Item.of("galosphere:silver_bomb").withChance(20)]);
});
