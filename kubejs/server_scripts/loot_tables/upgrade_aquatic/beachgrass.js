LootJS.modifiers((event) => {
    event
        .addBlockLootModifier("upgrade_aquatic:beachgrass")
        .randomChance(0.15)
        .addWeightedLoot(
            [1, 1],
            Item.of("occultism:datura_seeds").withChance(100)
    );
    
    event
        .addBlockLootModifier("upgrade_aquatic:tall_beachgrass")
        .randomChance(0.15)
        .addWeightedLoot(
            [1, 1],
            Item.of("occultism:datura_seeds").withChance(100)
    );
});
