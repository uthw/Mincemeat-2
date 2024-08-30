ServerEvents.recipes((event) => {
    // let recipes = [
    //     {
    //         // fluidTag amount just use a snippet for help
    //         // heatRequirement accepts heated and superheated
    //         ingredients: [
    //             { tag: "forge:ingots/copper" },
    //             { tag: "forge:ingots/tin" },
    //             { tag: "forge:ingots/lead" },
    //         ],
    //         results: [{ item: "eidolon:pewter_ingot", count: 3 }],
    //         heatRequirement: "none",
    //     },
    // ];

    // Updated for kubeJS Create
    const recipes = [
        {
            output: "3x eidolon:pewter_blend",
            inputs: [
                "#forge:ingots/copper",
                "#forge:ingots/tin",
                "#forge:ingots/iron",
            ],
            heated: false,
            // superheated: true
        },
        {
            output: "4x forbidden_arcanus:corrupti_dust",
            inputs: [
                "#forge:ingots/obsidian",
                "#forge:dusts/lapis",
                "minecraft:nether_wart",
                "forbidden_arcanus:arcane_crystal_dust",
            ],
            heated: true,
        },
        {
            output: "3x thermal:invar_dust",
            inputs: ["2x #forge:ingots/iron", "#forge:ingots/nickel"],
            superheated: true,
        },
        {
            output: "enderio:dark_steel_ingot",
            inputs: [
                "minecraft:iron_ingot",
                "#forge:dusts/coal",
                "#forge:obsidian",
            ],
        },
        {
            output: "4x actuallyadditions:rice_slimeball",
            inputs: [
                "4x actuallyadditions:rice_dough",
                Fluid.of("minecraft:water", 1000),
            ],
        },
    ];

    recipes.forEach((recipe) => {
        let re = event.recipes.create.mixing(recipe.output, recipe.inputs);
        if (recipe.heated) re.heated();
        else if (recipe.superheated) re.superheated();
        else {
            event.recipes.create.mixing(recipe.output, recipe.inputs);
        }
    });
});
