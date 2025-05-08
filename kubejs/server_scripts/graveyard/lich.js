LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("graveyard:lich")
        .addWeightedLoot(
            [32, 64],
            [Item.of("art_of_forging:fragment_of_eden")]
        );
});
