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
                count: 1, // The changed value
            },
            {
                type: "minecraft:in_square",
            },
            {
                type: "minecraft:height_range",
                height: {
                    type: "minecraft:uniform",
                    max_inclusive: {
                        absolute: -1,
                    },
                    min_inclusive: {
                        above_bottom: 6,
                    },
                },
            },
            {
                type: "minecraft:biome",
            },
        ],
    };

    event.addJson(
        "apotheosis:worldgen/placed_feature/rogue_spawner_deep.json",
        spawnerTweak
    );
});
