let replacement = {
    feature: "eidolon:silver_ore",
    placement: [
        {
            type: "minecraft:count",
            count: 0,
        },
        {
            type: "minecraft:in_square",
        },
        {
            type: "minecraft:height_range",
            height: {
                type: "minecraft:uniform",
                max_inclusive: {
                    absolute: 33,
                },
                min_inclusive: {
                    absolute: -60,
                },
            },
        },
        {
            type: "minecraft:biome",
        },
    ],
};
ServerEvents.highPriorityData((event) => {
    event.addJson(
        "eidolon:worldgen/placed_feature/silver_ore_placed.json",
        replacement
    );
});
