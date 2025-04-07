
ServerEvents.highPriorityData((event) => {
    event.addJson("thermal:worldgen/placed_feature/cinnabar_ore.json", {
        feature: "thermal:cinnabar_ore",
        placement: [
            {
                type: "thermal:config",
                config: "cinnabar_ore",
            },
            {
                type: "minecraft:count",
                count: 4,
            },
            {
                type: "minecraft:in_square",
            },
            {
                type: "minecraft:height_range",
                height: {
                    type: "minecraft:trapezoid",
                    max_inclusive: {
                        absolute: 32,
                    },
                    min_inclusive: {
                        absolute: -48,
                    },
                },
            },
            {
                type: "minecraft:biome",
            },
        ],
    });
});
