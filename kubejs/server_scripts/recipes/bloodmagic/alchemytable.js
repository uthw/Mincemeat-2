ServerEvents.recipes((event) => {
    const recipes = [
        // {
        //     type: "bloodmagic:alchemytable",
        //     input: [
        //         {
        //             item: "minecraft:sugar",
        //         },
        //         {
        //             tag: "forge:dusts/redstone",
        //         },
        //         {
        //             tag: "forge:dusts/glowstone",
        //         },
        //         {
        //             tag: "forge:gunpowder",
        //         },
        //         {
        //             tag: "forge:crops/nether_wart",
        //         },
        //     ],
        //     output: {
        //         count: 2,
        //         item: "bloodmagic:simplecatalyst",
        //     },
        //     syphon: 200,
        //     ticks: 100,
        //     upgradeLevel: 2,
        // },
        {
            inputs: [
                { item: "forbidden_arcanus:dark_matter" },
                {
                    item: "naturesaura:aura_bottle",
                    nbt: '{stored_type:"naturesaura:nether"}',
                },
            ],
            output: "eidolon:unholy_symbol",
            tier: 2,
            time: 10,
            syphon: 10,
            upgradeLevel: 2,
        },
    ];

    // KubeJS Blood Magic please update
    recipes.forEach((recipe) => {
        event.custom({
            type: "bloodmagic:alchemytable",
            input: recipe.inputs,
            output: { item: recipe.output },
            syphon: recipe.syphon ? recipe.syphon : 0, // Tier time syphon
            ticks: recipe.time,
            upgradeLevel: recipe.upgradeLevel,
        });
    });
});
