LootJS.modifiers((event) => {
    event.addLootTableModifier(/^.*chests\/.*/).addLoot(
        LootEntry.of("l2artifacts:random_1").when((c) => c.randomChance(0.01)), // 1%

        LootEntry.of("l2artifacts:random_2").when((c) => c.randomChance(0.008)), // 0.8%

        LootEntry.of("l2artifacts:random_3").when((c) => c.randomChance(0.006)) // 0.6%
    );
});
