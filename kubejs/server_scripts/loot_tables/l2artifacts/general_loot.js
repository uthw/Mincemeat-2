LootJS.modifiers((event) => {
    event
        .addLootTableModifier(/^minecraft:chests\/.*/)
        .addWeightedLoot(
            [1, 1],
            [
                Item.of("l2artifacts:random_1").withChance(0.008),
                Item.of("l2artifacts:random_2").withChance(0.007),
                Item.of("l2artifacts:random_3").withChance(0.006),
            ]
        );
});
