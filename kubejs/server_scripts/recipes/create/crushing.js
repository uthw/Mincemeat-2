ServerEvents.recipes((event) => {
    event.recipes.create.crushing(
        [
            "farmersdelight:wheat_dough",
            Item.of("farmersdelight:wheat_dough").withCount(2).withChance(0.25),
            Item.of("wheat_seeds").withChance(0.25),
        ],
        "minecraft:wheat",
    );
});
