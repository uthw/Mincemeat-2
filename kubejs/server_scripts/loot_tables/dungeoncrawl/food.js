LootJS.modifiers((event) => {
    let poolProps = [
        {
            name: "dungeoncrawl:chests/food",
            baseChance: 0.05,
        },
    ];

    poolProps.forEach((pool) => {
        event
            .addLootTableModifier(pool.name)
            .randomChance(pool.baseChance)
            .addWeightedLoot(
                [2, 3],
                [Item.of("alexsdelight:cooked_kangaroo_shank").withChance(100)]
            );

        event
            .addLootTableModifier(pool.name)
            .randomChance(pool.baseChance)
            .addWeightedLoot(
                [2, 3],
                [Item.of("alexscaves:caramel_apple").withChance(100)]
            );

        event
            .addLootTableModifier(pool.name)
            .randomChance(pool.baseChance)
            .addWeightedLoot(
                [2, 5],
                [Item.of("alexsmobs:cooked_bison").withChance(100)]
            );

        event
            .addLootTableModifier(pool.name)
            .randomChance(pool.baseChance)
            .addWeightedLoot(
                [2, 6],
                [Item.of("autumnity:turkey_piece").withChance(100)]
            );

        event
            .addLootTableModifier(pool.name)
            .randomChance(pool.baseChance)
            .addWeightedLoot(
                [2, 6],
                [Item.of("alexsdelight:bison_patty").withChance(100)]
            );

        event
            .addLootTableModifier(pool.name)
            .randomChance(pool.baseChance)
            .addWeightedLoot(
                [2, 10],
                [Item.of("alexsdelight:cooked_catfish_slice").withChance(100)]
            );

        // pumpkin bread
        event
            .addLootTableModifier(pool.name)
            .randomChance(pool.baseChance)
            .addWeightedLoot(
                [2, 5],
                [Item.of("autumnity:pumpkin_bread").withChance(100)]
            );

        // berry_good:sweet_berry_meatballs
        event
            .addLootTableModifier(pool.name)
            .randomChance(pool.baseChance)
            .addWeightedLoot(
                [2, 11],
                [Item.of("berry_good:sweet_berry_meatballs").withChance(100)]
            );

        // farmersdelight:ham
        event
            .addLootTableModifier(pool.name)
            .randomChance(pool.baseChance)
            .addWeightedLoot(
                [2, 5],
                [Item.of("farmersdelight:ham").withChance(100)]
            );

        // smoked ham
        event
            .addLootTableModifier(pool.name)
            .randomChance(pool.baseChance)
            .addWeightedLoot(
                [2, 5],
                [Item.of("farmersdelight:smoked_ham").withChance(100)]
            );

        // fried egg
        event
            .addLootTableModifier(pool.name)
            .randomChance(pool.baseChance)
            .addWeightedLoot(
                [2, 5],
                [Item.of("farmersdelight:fried_egg").withChance(100)]
            );

        // melon_popsicle
        event
            .addLootTableModifier(pool.name)
            .randomChance(pool.baseChance)
            .addWeightedLoot(
                [2, 7],
                [Item.of("farmersdelight:melon_popsicle").withChance(100)]
            );

        // cooked bacon
        event
            .addLootTableModifier(pool.name)
            .randomChance(pool.baseChance)
            .addWeightedLoot(
                [2, 6],
                [Item.of("farmersdelight:cooked_bacon").withChance(100)]
            );

        // neapolitan:chocolate_bar
        event
            .addLootTableModifier(pool.name)
            .randomChance(pool.baseChance)
            .addWeightedLoot(
                [2, 6],
                [Item.of("neapolitan:chocolate_bar").withChance(100)]
            );

        // miners_delight:baked_cave_carrot
        event
            .addLootTableModifier(pool.name)
            .randomChance(pool.baseChance)
            .addWeightedLoot(
                [2, 9],
                [Item.of("miners_delight:baked_cave_carrot").withChance(100)]
            );

        // farmersdelight:help_roll
        event
            .addLootTableModifier(pool.name)
            .randomChance(pool.baseChance)
            .addWeightedLoot(
                [2, 7],
                [Item.of("farmersdelight:help_roll").withChance(100)]
            );
    });
});
