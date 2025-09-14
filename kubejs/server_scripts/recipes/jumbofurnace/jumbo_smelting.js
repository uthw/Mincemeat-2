ServerEvents.recipes((event) => {
    let recipes = [
        {
            type: "jumbofurnace:jumbo_smelting",
            ingredients: [{ item: "forbidden_arcanus:obsidian_with_iron" }],
            result: { item: "forbidden_arcanus:obsidian_ingot" },
            experience: 0.1,
        },
        {
            type: "jumbofurnace:jumbo_smelting",
            ingredients: [{ item: "forbidden_arcanus:edelwood_log" }],
            result: { item: "forbidden_arcanus:dark_matter" },
            experience: 0.4,
        },
    ];

    recipes.forEach((recipe) => {
        event.custom(recipe);
    });
});
