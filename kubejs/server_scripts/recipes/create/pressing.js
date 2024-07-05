ServerEvents.recipes((event) => {
    let recipes = [
        {
            output: "4x littlelogistics:transmitter_component",
            input: "create:cut_deepslate_slab",
        },
        {
            output: "littlelogistics:receiver_component",
            input: "littlelogistics:transmitter_component",
        },
    ];

    recipes.forEach((recipe) => {
        event.recipes.create.pressing(recipe.output, recipe.input);
    });

    event.recipes.create.pressing(
        Item.of("minecraft:quartz").withChance(0.1),
        "minecraft:diorite"
    );
});
