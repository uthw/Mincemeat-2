
LootJS.modifiers(event => {
    // atmospheric:yucca_fruit
    event
        .addLootTableModifier("mvs:houses_desert")
        .randomChance(0.2)
        .addWeightedLoot(
            [1, 4],
            [Item.of("atmospheric:yucca_fruit").withChance(100)]
    );

    // atmospheric:carmine_husk
    event
        .addLootTableModifier("mvs:houses_desert")
        .randomChance(0.1)
        .addWeightedLoot(
            [1, 4],
            [Item.of("atmospheric:carmine_husk").withChance(100)]
    );

    // atmospheric:dragon_fruit
    event
        .addLootTableModifier("mvs:houses_desert")
        .randomChance(0.1)
        .addWeightedLoot(
            [1, 4],
            [Item.of("atmospheric:dragon_fruit").withChance(100)]
    );

    // delightful:cactus_flesh
    event
        .addLootTableModifier("mvs:houses_desert")
        .randomChance(0.2)
        .addWeightedLoot(
            [1, 4],
            [Item.of("delightful:cactus_flesh").withChance(100)]
    );

    // delightful:cactus_soup_cup
    event
        .addLootTableModifier("mvs:houses_desert")
        .randomChance(0.1)
        .addWeightedLoot(
            [1, 1],
            [Item.of("delightful:cactus_soup_cup").withChance(100)]
    );

    // yungscavebiomes:prickly_peach
    event
        .addLootTableModifier("mvs:houses_desert")
        .randomChance(0.2)
        .addWeightedLoot(
            [1, 4],
            [Item.of("yungscavebiomes:prickly_peach").withChance(100)]
    );

    // architects_palette:sunmetal_blend
    event
        .addLootTableModifier("mvs:houses_desert")
        .randomChance(0.1)
        .addWeightedLoot(
            [1, 2],
            [Item.of("architects_palette:sunmetal_blend").withChance(100)]
    );

    // biomeswevegone:aloe_vera
    event
        .addLootTableModifier("mvs:houses_desert")
        .randomChance(0.2)
        .addWeightedLoot(
            [1, 4],
            [Item.of("biomeswevegone:aloe_vera").withChance(100)]
    );

    // atmospheric:yucca_flower
    event
        .addLootTableModifier("mvs:houses_desert")
        .randomChance(0.2)
        .addWeightedLoot(
            [1, 4],
            [Item.of("atmospheric:yucca_flower").withChance(100)]
    );
})