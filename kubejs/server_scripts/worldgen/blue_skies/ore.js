// makes ores more common in everbright/dawn

ServerEvents.highPriorityData((event) => {
    let tweaks = [
        {
            name: "aquite",
            count: 20,
        },
        {
            name: "charoite",
            count: 8,
            minHeight: 0,
            maxHeight: 24
        },
        {
            name: "diopside",
            count: 8,
            minHeight: 0,
            maxHeight: 24
        },
        {
            name: "pyrope",
            count: 24,
        },
        {
            name: "everbright_falsite",
            count: 25,
        },
        {
            name: "everbright_ventium",
            count: 25,
        },
        {
            name: "everdawn_horizonite",
            count: 16,
        },
        // {
        //     name: "moonstone",
        //     count: 20,
        // },
    ];

    // {
    //   "type": "minecraft:count",
    //   "count": 1
    // },
    // {
    //   "type": "minecraft:in_square"
    // },
    // {
    //   "type": "minecraft:height_range",
    //   "height": {
    //     "type": "minecraft:uniform",
    //     "max_inclusive": {
    //       "absolute": 13
    //     },
    //     "min_inclusive": {
    //       "absolute": 0
    //     }
    //   }
    // },
    // {
    //   "type": "minecraft:biome"
    // }

    tweaks.forEach((tweak) => {
        if (tweak.maxHeight && tweak.minHeight) {
            event.addJson(
                `blue_skies:woldgen/placed_feature/ore_${tweak.name}.json`,
                {
                    placement: [
                        {
                            type: "minecraft:count",
                            count: tweak.count,
                        },
                        {
                            type: "minecraft:in_square",
                        },
                        {
                            type: "minecraft:height_range",
                            height: {
                                type: "minecraft:uniform",
                                max_inclusive: {
                                    absolute: tweak.maxHeight,
                                },
                                min_inclusive: {
                                    absolute: tweak.minHeight,
                                },
                            },
                        },
                        {
                            type: "minecraft:biome",
                        },
                    ],
                }
            );
            return;
        }
        event.addJson(
            `blue_skies:woldgen/placed_feature/ore_${tweak.name}.json`,
            {
                placement: [
                    {
                        type: "minecraft:count",
                        count: tweak.count,
                    },
                ],
            }
        );
    });
});
