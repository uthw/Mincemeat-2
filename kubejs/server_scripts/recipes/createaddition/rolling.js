ServerEvents.recipes((event) => {
    let recipes = [
        {
            input: { tag: "minecraft:wool" },
            output: { item: "forbidden_arcanus:cloth" },
        },
    ];

    recipes.forEach((recipe) => {
        event.custom({
            type: "createaddition:rolling",
            input: recipe.input,
            result: recipe.output,
        });
    });
});
