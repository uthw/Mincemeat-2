ServerEvents.recipes((event) => {
    let recipes = [
        {
            ingredients: { item: "minecraft:dragon_head" },
            result: [{ item: "forbidden_arcanus:dragon_scale", count: 3 }],
            tool: {
                // must enable probe to see how this works
                tag: "forge:tools/knives",
            },
        },
    ];

    recipes.forEach((recipe) => {
        event.custom({
            type: "farmersdelight:cutting",
            ingredients: [recipe.ingredients],
            result: recipe.result,
            tool: recipe.tool,
        });
    });
});
