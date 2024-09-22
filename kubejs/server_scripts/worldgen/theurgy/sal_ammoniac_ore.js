let tweakButImParanoidSoPuttingItUnderDifferentName = {
    feature: "theurgy:sal_ammoniac_ore",
    placement: [
        {
            type: "minecraft:count",
            count: 5,
        },
        {
            type: "minecraft:in_square",
        },
        {
            type: "minecraft:height_range",
            height: {
                type: "minecraft:trapezoid",
                max_inclusive: {
                    absolute: 200,
                },
                min_inclusive: {
                    absolute: -64,
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
        "theurgy:worldgen/placed_feature/sal_ammoniac_ore.json",
        tweakButImParanoidSoPuttingItUnderDifferentName
    );
});
