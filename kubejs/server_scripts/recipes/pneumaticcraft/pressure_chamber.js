// input, output, pressure

ServerEvents.recipes((event) => {
    let recipes = [
        // {
        //     type: "pneumaticcraft:pressure_chamber",
        //     inputs: [
        //         {
        //             tag: "forge:ingots/gold",
        //         },
        //         {
        //             type: "pneumaticcraft:stacked_item",
        //             count: 2,
        //             tag: "forge:dusts/redstone",
        //         },
        //     ],
        //     pressure: 1.0,
        //     results: [
        //         {
        //             item: "pneumaticcraft:turbine_blade",
        //         },
        //     ],
        // },
        {
            inputs: [
                "#forge:ingots/zinc",
                "#thermal:glass/hardened",
                "minecraft:redstone",
            ],
            pressure: 1.0,
            output: "pneumaticcraft:turbine_blade",
        },
    ];

    recipes.forEach((recipe) => {
        event.recipes.pneumaticcraft.pressure_chamber(
            recipe.inputs,
            recipe.output,
            recipe.pressure
        );
    });
});
