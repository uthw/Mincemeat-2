ServerEvents.recipes((event) => {
    let recipes = [
        {
            output: "architects_palette:exposed_copper_nub",
            input: "minecraft:exposed_copper",
        },
        {
            output: "architects_palette:weathered_copper_nub",
            input: "minecraft:weathered_copper",
        },
        {
            output: "architects_palette:oxidized_copper_nub",
            input: "minecraft:oxidized_copper",
        },
    ];

    recipes.forEach((recipe) => {
        event.stonecutting(recipe.output, recipe.input);
    });
});
