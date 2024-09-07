let crops = [
    {
        type: "botanypots:crop",
        seed: {
            item: "miners_delight:cave_carrot",
        },
        categories: ["dirt", "farmland"],
        growthTicks: 1200,
        display: {
            type: "botanypots:aging",
            block: "miners_delight:cave_carrots",
        },
        drops: [
            {
                chance: 1.0,
                output: {
                    item: "miners_delight:cave_carrot",
                },
                minRolls: 1,
                maxRolls: 2,
            },
            {
                chance: 0.15,
                output: {
                    item: "miners_delight:cave_carrot",
                },
                minRolls: 1,
                maxRolls: 2,
            },
        ],
    },
];

ServerEvents.recipes((event) => {
    crops.forEach((crop) => {
        event.custom(crop);
    });
});
