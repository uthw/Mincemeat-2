// From Mincemeat 1

ServerEvents.recipes((event) => {
    const recipes = [
        {
            inputs: [
                {
                    item: "botania:manasteel_ingot",
                },
                {
                    item: "botania:mana_pearl",
                },
                {
                    tag: "forge:gems/mana",
                },
                {
                    tag: "forge:ingots/pewter",
                },
                {
                    tag: "forge:ingots/arcane_gold",
                },
            ],
            output: "botania:terrasteel_ingot",
            mana: 500000,
        },
    ];

    recipes.forEach((recipe) => {
        event.custom({
            type: "botania:terra_plate",
            mana: recipe.mana,
            ingredients: recipe.inputs,
            result: { item: recipe.output },
        });
    });
});
