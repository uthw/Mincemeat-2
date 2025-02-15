ServerEvents.highPriorityData((event) => {
    let spawnerTweak = {
        "forge:conditions": [
            {
                type: "apotheosis:module",
                module: "adventure",
            },
        ],
        feature: "apotheosis:rogue_spawner",
        placement: [
            {
                type: "minecraft:count",
                count: 1, // changed value
            },
            {
                type: "minecraft:in_square",
            },
            // {
            //     type: "minecraft:height_range",
            //     height: {
            //         type: "minecraft:uniform",
            //         max_inclusive: {
            //             below_top: 0,
            //         },
            //         min_inclusive: {
            //             absolute: 0,
            //         },
            //     },
            // },
            {
                type: "minecraft:biome",
            },
        ],
    };

    event.addJson(
        `apotheosis:worldgen/placed_feature/rogue_spawner.json`,
        spawnerTweak
    );
});
