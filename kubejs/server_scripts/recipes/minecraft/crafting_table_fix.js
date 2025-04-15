ServerEvents.recipes((event) => {
    let missingWoodTypes = [
        {
            name: "environmental:pine", // Required
            result: "biomeswevegone:pine_crafting_table", // Optional
        },
        {
            name: "environmental:plum",
        },
        {
            name: "atmospheric:laurel",
        },
    ];

    missingWoodTypes.forEach((wood) => {
        let result = wood.result ? wood.result : "minecraft:crafting_table";
        event.shaped(result, ["AA ", "AA ", "   "], {
            A: `${wood.name}_planks`,
        });
    });
});
