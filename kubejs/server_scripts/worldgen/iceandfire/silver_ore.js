// silver ore can not be generated

let replacement = {
    feature: "iceandfire:silver_ore",
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
                type: "minecraft:trapezoid",
                max_inclusive: {
                    absolute: 112,
                },
                min_inclusive: {
                    absolute: -16,
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
        "iceandfire:worldgen/placed_feature/silver_ore.json",
        replacement
    );
});
