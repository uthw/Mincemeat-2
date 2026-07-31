let flowers = [
    "buzzier_bees:white_clover",
    "buzzier_bees:pink_clover",
    "buzzier_bees:buttercup",
    "biomeswevegone:pink_allium",
    "biomeswevegone:white_allium",
    "biomeswevegone:rose",
    "biomeswevegone:begonia",
    "biomeswevegone:orange_daisy",
    "environmental:cartwheel",
    "environmental:yellow_hibiscus",
    "environmental:orange_hibiscus",
    "environmental:red_hibiscus",
    "environmental:pink_hibiscus",
    "environmental:purple_hibiscus",
    "environmental:magenta_hibiscus",
    "windswept:nightshade",
    "windswept:bluebells",
    "windswept:blue_rose",
];

LootJS.modifiers((event) => { 
    flowers.forEach((flower) => {
        event
            .addLootTableModifier("graveyard:chests/flower_loot")
            .randomChance(0.05)
            .addWeightedLoot([1, 1], [flower]);
    });
});