ServerEvents.recipes((event) => {
    let recipes = [
        {
            output: "mekanism:basic_tier_installer",
            inputs: [
                "sophisticatedstorage:upgrade_base",
                "mekanism:basic_control_circuit",
            ],
        },
        {
            output: "mekanism:advanced_tier_installer",
            inputs: [
                "sophisticatedstorage:upgrade_base",
                "mekanism:advanced_control_circuit",
            ],
        },
        {
            output: "mekanism:elite_tier_installer",
            inputs: [
                "sophisticatedstorage:upgrade_base",
                "mekanism:elite_control_circuit",
            ],
        },
        {
            output: "mekanism:ultimate_tier_installer",
            inputs: [
                "sophisticatedstorage:upgrade_base",
                "mekanism:ultimate_control_circuit",
            ],
        },
    ];

    recipes.forEach((recipe) => {
        event.recipes.create.deploying(recipe.output, recipe.inputs);
    });
});
