ServerEvents.recipes((event) => {
    const recipes = [
        {
            output: "3x modularrouters:blank_module",
            inputs: ["ars_nouveau:blank_parchment", "#forge:nuggets/cloggrum"],
        },
    ];

    recipes.forEach((recipe) => {
        let re = event.recipes.create.compacting(recipe.output, recipe.inputs);
        if (recipe.heated) re.heated();
        else if (recipe.superheated) re.superheated();
        else {
            event.recipes.create.compacting(recipe.output, recipe.inputs);
        }
    });
});
