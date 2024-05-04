ServerEvents.highPriorityData((event) => {
    let dungeons = [
        {
            name: "boss_dungeon",
            "forge:conditions": [
                {
                    type: "apotheosis:module",
                    module: "adventure",
                },
            ],
            feature: "apotheosis:boss_dungeon",
            placement: [
                {
                    type: "minecraft:count",
                    count: 1,
                },
                {
                    type: "minecraft:in_square",
                },
                {
                    type: "minecraft:height_range",
                    height: {
                        type: "minecraft:uniform",
                        max_inclusive: {
                            below_top: 0,
                        },
                        min_inclusive: {
                            absolute: 0,
                        },
                    },
                },
                {
                    type: "minecraft:biome",
                },
            ],
        },
        {
            name: "boss_dungeon_2",
            "forge:conditions": [
                {
                    type: "apotheosis:module",
                    module: "adventure",
                },
            ],
            feature: "apotheosis:boss_dungeon_2",
            placement: [
                {
                    type: "minecraft:count",
                    count: 1,
                },
                {
                    type: "minecraft:in_square",
                },
                {
                    type: "minecraft:height_range",
                    height: {
                        type: "minecraft:uniform",
                        max_inclusive: {
                            below_top: 0,
                        },
                        min_inclusive: {
                            absolute: 0,
                        },
                    },
                },
                {
                    type: "minecraft:biome",
                },
            ],
        },
        {
            name: "boss_dungeon_deep",
            "forge:conditions": [
                {
                    type: "apotheosis:module",
                    module: "adventure",
                },
            ],
            feature: "apotheosis:boss_dungeon",
            placement: [
                {
                    type: "minecraft:count",
                    count: 2,
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
        },
        {
            name: "boss_dungeon_2_deep",
            "forge:conditions": [
                {
                    type: "apotheosis:module",
                    module: "adventure",
                },
            ],
            feature: "apotheosis:boss_dungeon_2",
            placement: [
                {
                    type: "minecraft:count",
                    count: 2,
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
        },
    ];
    let dungeonTypes = [
        "boss_dungeon",
        "boss_dungeon_deep",
        "boss_dungeon_2",
        "boss_dungeon_2_deep",
    ];

    dungeons.forEach((dungeon) => {
        event.addJson(
            `apotheosis:worldgen/placed_feature/${dungeon.name}.json`,
            dungeon
        );
    });
});
