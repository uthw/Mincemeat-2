// Base loot: potato, baked_potato, emerald, leather, oak_planks

LootJS.modifiers(event => {
    let carts = ["large_carts", "large_carts_2", "cart"];

    carts.forEach(cart => {
        // forbidden_arcanus:cloth
        event
            .addLootTableModifier(`mvs:${cart}`)
            .randomChance(0.1)
            .addWeightedLoot(
                [1, 2],
                [Item.of("forbidden_arcanus:cloth").withChance(100)]
            );

        // alexsmobs:kangaroo_hide
        event
            .addLootTableModifier(`mvs:${cart}`)
            .randomChance(0.1)
            .addWeightedLoot(
                [1, 1],
                [Item.of("alexsmobs:kangaroo_hide").withChance(100)]
            );

        // supplementaries:jar
        event
            .addLootTableModifier(`mvs:${cart}`)
            .randomChance(0.3)
            .addWeightedLoot(
                [1, 1],
                [Item.of("supplementaries:jar").withChance(100)]
            );

        // miners_delight:copper_cup
        event
            .addLootTableModifier(`mvs:${cart}`)
            .randomChance(0.3)
            .addWeightedLoot(
                [1, 1],
                [Item.of("miners_delight:copper_cup").withChance(100)]
            );

        // neapolitan:dried_banana
        event
            .addLootTableModifier(`mvs:${cart}`)
            .randomChance(0.4)
            .addWeightedLoot(
                [1, 9],
                [Item.of("neapolitan:dried_banana").withChance(100)]
            );

        // alexsmobs:banana_peel
        event
            .addLootTableModifier(`mvs:${cart}`)
            .randomChance(0.4)
            .addWeightedLoot(
                [1, 5],
                [Item.of("alexsmobs:banana_peel").withChance(100)]
            );

        // farmersdelight:cooked_bacon
        event
            .addLootTableModifier(`mvs:${cart}`)
            .randomChance(0.3)
            .addWeightedLoot(
                [1, 4],
                [Item.of("farmersdelight:cooked_bacon").withChance(100)]
            );
    })
})