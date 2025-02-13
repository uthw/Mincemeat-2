ServerEvents.recipes((event) => {
    let recipes = [
        {
            type: "jumbofurnace:jumbo_smelting",
            ingredients: [{ item: "forbidden_arcanus:obsidian_with_iron" }],
            result: { item: "forbidden_arcanus:obsidian_ingot" },
            experience: 0.1,
        },
    ];

    recipes.forEach((recipe) => {
        event.custom(recipe);
    });
});
