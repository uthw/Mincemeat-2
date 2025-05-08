LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("irons_spellbooks:citadel_keeper")
        .addWeightedLoot(
            [2, 5],
            [Item.of("art_of_forging:shards_of_malice").withChance(1)]
        );
});
