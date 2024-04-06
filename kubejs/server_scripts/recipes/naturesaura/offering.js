ServerEvents.recipes((event) => {
    const recipes = [
        {
            input: { item: "enigmaticlegacy:iron_ring" },
            startItem: { item: "botania:manasteel_ingot" },
            output: { item: "botania:mana_ring" },
        },
    ];

    recipes.forEach((recipe) => {
        event.custom({
            type: "naturesaura:offering",
            input: recipe.input,
            start_item: recipe.startItem,
            output: recipe.output,
        });
    });
});
