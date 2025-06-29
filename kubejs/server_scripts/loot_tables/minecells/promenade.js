ServerEvents.highPriorityData((event) => {
    const replacement = {
        pools: [
            {
                rolls: 1,
                entries: [
                    // {
                    //     type: "minecraft:item",
                    //     weight: 3,
                    //     name: "kubejs:cell",
                    // },
                ],
                conditions: [
                    { condition: "minecraft:random_chance", chance: 0.4 },
                ],
            },
            {
                rolls: { min: 2, max: 7 },
                entries: [
                    {
                        type: "minecraft:item",
                        weight: 5,
                        name: "minecraft:iron_nugget",
                    },
                    {
                        type: "minecraft:item",
                        weight: 5,
                        name: "minecraft:gold_nugget",
                    },
                    {
                        type: "minecraft:item",
                        weight: 4,
                        name: "minecraft:iron_ingot",
                    },
                    {
                        type: "minecraft:item",
                        weight: 4,
                        name: "minecraft:gold_ingot",
                    },
                    {
                        type: "minecraft:item",
                        weight: 4,
                        name: "minecraft:emerald",
                    },
                    {
                        type: "minecraft:item",
                        weight: 1,
                        name: "minecraft:diamond",
                    },
                ],
            },
            {
                rolls: 1,
                entries: [
                    {
                        type: "minecraft:item",
                        name: "minecraft:book",
                        functions: [
                            {
                                function: "minecraft:enchant_with_levels",
                                levels: { min: 24, max: 28 },
                                treasure: true,
                            },
                        ],
                    },
                ],
                conditions: [
                    { condition: "minecraft:random_chance", chance: 0.25 },
                ],
            },
            {
                rolls: 1,
                entries: [
                    { type: "minecraft:item", name: "minecells:health_flask" },
                ],
                conditions: [
                    { condition: "minecraft:random_chance", chance: 0.2 },
                ],
            },
            {
                rolls: { min: 2, max: 5 },
                entries: [
                    {
                        type: "minecraft:item",
                        weight: 1,
                        name: "minecells:guts",
                    },
                    {
                        type: "minecraft:item",
                        weight: 2,
                        name: "minecraft:rotten_flesh",
                    },
                    {
                        type: "minecraft:item",
                        weight: 4,
                        name: "minecells:putrid_log",
                    },
                    {
                        type: "minecraft:item",
                        weight: 2,
                        name: "minecells:wilted_leaves",
                    },
                    {
                        type: "minecraft:item",
                        weight: 1,
                        name: "minecells:red_wilted_leaves",
                    },
                    {
                        type: "minecraft:item",
                        weight: 4,
                        name: "minecells:big_chain",
                    },
                    {
                        type: "minecraft:item",
                        weight: 3,
                        name: "minecraft:chain",
                    },
                ],
                functions: [
                    {
                        function: "minecraft:set_count",
                        count: { min: 1, max: 3 },
                    },
                ],
            },
            {
                rolls: 1,
                entries: [
                    { type: "minecraft:item", name: "minecraft:compass" },
                ],
                conditions: [
                    { condition: "minecraft:random_chance", chance: 0.1 },
                ],
            },
        ],
    };

    event.addJson("minecells:loot_tables/chests/promenade.json", replacement);
});
