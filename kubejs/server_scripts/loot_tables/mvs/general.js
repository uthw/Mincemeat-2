// Base loot: iron ingot, iron nugget, oak planks, emerald, wheat seeds, bread

LootJS.modifiers((event) => {
    event
        .addLootTableModifier("mvs:general")
        .randomChance(0.1)
        .addWeightedLoot(
            [2, 6],
            [Item.of("caverns_and_chasms:silver_ingot").withChance(100)]
    );
    
    // tattered cloth
    event
        .addLootTableModifier("mvs:general")
        .randomChance(0.05)
        .addWeightedLoot(
            [1, 4],
            [Item.of("eidolon:tatterd_cloth").withChance(100)]
    );

    // farmersdelight:rice
    event
        .addLootTableModifier("mvs:general")
        .randomChance(0.05)
        .addWeightedLoot(
            [1, 5],
            [Item.of("farmersdelight:rice").withChance(100)]
    );

    // supplementaries:rope
    event
        .addLootTableModifier("mvs:general")
        .randomChance(0.1)
        .addWeightedLoot(
            [1, 3],
            [Item.of("supplementaries:rope").withChance(100)]
    );

    // thermal:cinnabar
    event
        .addLootTableModifier("mvs:general")
        .randomChance(0.05)
        .addWeightedLoot(
            [1, 3],
            [Item.of("thermal:cinnabar").withChance(100)]
    );

    // farmersdelight:tomato
    event
        .addLootTableModifier("mvs:general")
        .randomChance(0.07)
        .addWeightedLoot(
            [1, 5],
            [Item.of("farmersdelight:tomato").withChance(100)]
    );

    // farmersdelight:tomato_seeds
    event
        .addLootTableModifier("mvs:general")
        .randomChance(0.07)
        .addWeightedLoot(
            [1, 5],
            [Item.of("farmersdelight:tomato_seeds").withChance(100)]
    );

    // farmersdelight:cabbage
    event
        .addLootTableModifier("mvs:general")
        .randomChance(0.07)
        .addWeightedLoot(
            [1, 5],
            [Item.of("farmersdelight:cabbage").withChance(100)]
    );

    // farmersdelight:cabbage_seeds
    event
        .addLootTableModifier("mvs:general")
        .randomChance(0.07)
        .addWeightedLoot(
            [1, 5],
            [Item.of("farmersdelight:cabbage_seeds").withChance(100)]
    );

    // neapolitan:adzuki_beans
    event
        .addLootTableModifier("mvs:general")
        .randomChance(0.04)
        .addWeightedLoot(
            [1, 5],
            [Item.of("neapolitan:adzuki_beans").withChance(100)]
    );

    // thermal:tin_ingot
    event
        .addLootTableModifier("mvs:general")
        .randomChance(0.09)
        .addWeightedLoot(
            [1, 3],
            [Item.of("thermal:tin_ingot").withChance(100)]
    );

    // eidolon:lead_ingot
    event
        .addLootTableModifier("mvs:general")
        .randomChance(0.09)
        .addWeightedLoot(
            [1, 3],
            [Item.of("eidolon:lead_ingot").withChance(100)]
    );
});
