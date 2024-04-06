ServerEvents.recipes((event) => {
    const recipes = [
        [
            "create:depot",
            ["supplementaries:pedestal", "create:andesite_casing"],
        ],
        // [
        //     "create:belt_connector",
        //     ["5x immersiveengineering:hemp_fabric", "#minecraft:coals"],
        // ],
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe[0], recipe[1]);
    });
});
