// Can use addWeightedLoot for adding multiple items. Need to use addLoot with loot LootEntry for enchanted items.
LootJS.modifiers((event) => {
    // Raw meats
    event
        .addLootTableModifier("hunters_return:chests/illager_woodhut")
        .randomChance(0.15)
        .addWeightedLoot(
            [2, 3],
            [Item.of("autumnity:turkey_piece").withChance(100)]
        );

    event
        .addLootTableModifier("hunters_return:chests/illager_woodhut")
        .randomChance(0.05)
        .addWeightedLoot(
            [1, 1],
            [Item.of("alexsmobs:moose_ribs").withChance(100)]
        );

    event
        .addLootTableModifier("hunters_return:chests/illager_woodhut")
        .randomChance(0.1)
        .addWeightedLoot(
            [1, 3],
            [Item.of("alexsdelight:raw_bison").withChance(100)]
        );

    // Cooked meats
    event
        .addLootTableModifier("hunters_return:chests/illager_woodhut")
        .randomChance(0.1)
        .addWeightedLoot(
            [1, 2],
            [Item.of("alexsdelight:cooked_bison").withChance(100)]
        );

    event
        .addLootTableModifier("hunters_return:chests/illager_woodhut")
        .randomChance(0.1)
        .addWeightedLoot(
            [1, 1],
            [Item.of("alexsdelight:raw_bison").withChance(100)]
        );

    event
        .addLootTableModifier("hunters_return:chests/illager_woodhut")
        .randomChance(0.1)
        .addWeightedLoot(
            [1, 2],
            [Item.of("delightful:cooked_bison").withChance(100)]
        );

    event
        .addLootTableModifier("hunters_return:chests/illager_woodhut")
        .randomChance(0.15)
        .addWeightedLoot(
            [1, 2],
            [Item.of("autumnity:cooked_turkey_piece").withChance(100)]
        );

    event
        .addLootTableModifier("hunters_return:chests/illager_woodhut")
        .randomChance(0.1)
        .addWeightedLoot(
            [1, 1],
            [Item.of("alexsmobs:cooked_kangaroo_meat").withChance(100)]
        );

    event.addLootTableModifier("hunters_return:chests/illager_woodhut").addLoot(
        LootEntry.of("farmersdelight:iron_knife")
            .when((c) => c.randomChance(0.15))
            .enchantWithLevels([10, 25], true)
    );
    event.addLootTableModifier("hunters_return:chests/illager_woodhut").addLoot(
        LootEntry.of("farmersdelight:flint_knife")
            .when((c) => c.randomChance(0.1))
            .enchantWithLevels([10, 25], true)
    );

    // // Enchanted knives
    // event
    //     .addLootTableModifier("hunters_return:chests/illager_woodhut")
    //     .randomChance(0.15)
    //     .addWeightedLoot(
    //         [1, 1],
    //         [Item.of("farmersdelight:iron_knife").withChance(100)]
    //     )
    //     .matchLoot(ItemFilter.DAMAGEABLE)
    //     .customFunction({
    //         function: "minecraft:enchant_with_levels",
    //         levels: { min: 10, max: 25 },
    //         treasure: true,
    //     });

    // event
    //     .addLootTableModifier("hunters_return:chests/illager_woodhut")
    //     .randomChance(0.1)
    //     .addWeightedLoot(
    //         [1, 1],
    //         [Item.of("farmersdelight:flint_knife").withChance(100)]
    //     )
    //     .matchLoot(ItemFilter.DAMAGEABLE)
    //     .customFunction({
    //         function: "minecraft:enchant_with_levels",
    //         levels: { min: 10, max: 25 },
    //         treasure: true,
    //     })
});
