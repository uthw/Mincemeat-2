
LootJS.modifiers((event) => {
    event
        .addLootTableModifier("hunters_return:chests/illager_woodhut_arrow")
        .randomChance(0.4)
        .addWeightedLoot(
            [2, 12],
            [Item.of("caverns_and_chasms:large_arrow").withChance(100)]
        );
    
    event
        .addLootTableModifier("hunters_return:chests/illager_woodhut_arrow")
        .randomChance(0.25)
        .addWeightedLoot(
            [1, 6],
            [Item.of("caverns_and_chasms:blunt_arrow").withChance(100)]
    );
    
    event
        .addLootTableModifier("hunters_return:chests/illager_woodhut_arrow")
        .randomChance(0.3)
        .addWeightedLoot(
            [4, 16],
            [Item.of("apotheosis:explosive_arrow").withChance(100)]
    );

    // apotheosis:obsidian_arrow
    event
        .addLootTableModifier("hunters_return:chests/illager_woodhut_arrow")
        .randomChance(0.15)
        .addWeightedLoot(
            [4, 10],
            [Item.of("apotheosis:obsidian_arrow").withChance(100)]
    );

    // apotheosis:broadhead_arrow
    event
        .addLootTableModifier("hunters_return:chests/illager_woodhut_arrow")
        .randomChance(0.15)
        .addWeightedLoot(
            [4, 10],
            [Item.of("apotheosis:broadhead_arrow").withChance(100)]
    );

    // apotheosis:iron_mining_arrow
    event
        .addLootTableModifier("hunters_return:chests/illager_woodhut_arrow")
        .randomChance(0.15)
        .addWeightedLoot(
            [4, 10],
            [Item.of("apotheosis:iron_mining_arrow").withChance(100)]
    );

    // apotheosis:diamond_mining_arrow
    event
        .addLootTableModifier("hunters_return:chests/illager_woodhut_arrow")
        .randomChance(0.05)
        .addWeightedLoot(
            [3, 6],
            [Item.of("apotheosis:diamond_mining_arrow").withChance(100)]
    );
});
