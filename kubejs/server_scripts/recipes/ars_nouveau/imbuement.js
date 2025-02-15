ServerEvents.recipes((event) => {
    let recipes = [
        {
            input: "galosphere:allurite_shard",
            output: "forbidden_arcanus:arcane_crystal",
            source: 500
        },
    ];

    recipes.forEach((recipe) => {
        event.recipes.ars_nouveau.imbuement(recipe.input, recipe.output, recipe.source, []);
    });
});
