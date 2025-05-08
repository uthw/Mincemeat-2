LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("irons_spellbooks:citadel_keeper")
        .addWeightedLoot(
            [2, 6],
            [Item.of("art_of_forging:shards_of_malice").randomChance(0.65)]
        );
});
