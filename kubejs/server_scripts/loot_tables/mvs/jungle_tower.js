
LootJS.modifiers(event => { 
    // atmospheric:dragon_roots
    event
        .addLootTableModifier("mvs:jungle_tower")
        .randomChance(0.1)
        .addWeightedLoot(
            [1, 4],
            [Item.of("atmospheric:dragon_roots").withChance(100)]
    );

    // atmopsheric:currant
    event
        .addLootTableModifier("mvs:jungle_tower")
        .randomChance(0.1)
        .addWeightedLoot(
            [1, 4],
            [Item.of("atmospheric:currant").withChance(100)]
    );

    // atmopsheric:aloe_leaves
    event
        .addLootTableModifier("mvs:jungle_tower")
        .randomChance(0.1)
        .addWeightedLoot(
            [5, 12],
            [Item.of("atmospheric:aloe_leaves").withChance(100)]
    );

    // neapolitan:chocolate_bar
    event
        .addLootTableModifier("mvs:jungle_tower")
        .randomChance(0.1)
        .addWeightedLoot(
            [1, 4],
            [Item.of("neapolitan:chocolate_bar").withChance(100)]
    );

    // neapolitan:mint_chocolate
    event
        .addLootTableModifier("mvs:jungle_tower")
        .randomChance(0.1)
        .addWeightedLoot(
            [1, 4],
            [Item.of("neapolitan:mint_chocolate").withChance(100)]
    );

    
})