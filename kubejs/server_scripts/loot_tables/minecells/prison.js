// TODO Replace with more interesting, modded items

ServerEvents.highPriorityData((event) => {
    const replacement = {
        type: "minecraft:chest",
        pools: [
            {
                rolls: 1,
                entries: [
                    // {
                    //     type: "minecraft:item",
                    //     weight: 5,
                    //     name: "kubejs:cell", // This replaces all possibility for a weapon to appear in these chests with custom items called cells..
                    // },
                ],
                // functions: [
                //     {
                //         function: "minecraft:enchant_with_levels",
                //         levels: { min: 6, max: 12 },
                //         treasure: true,
                //         conditions: [
                //             {
                //                 condition: "minecraft:random_chance",
                //                 chance: 0.1,
                //             },
                //         ],
                //     },
                // ],
                conditions: [
                    { condition: "minecraft:random_chance", chance: 0.2 },
                ],
            },
            {
                rolls: { min: 2, max: 6 },
                entries: [
                    {
                        type: "minecraft:item",
                        weight: 5,
                        name: "minecraft:iron_nugget",
                    },
                    {
                        type: "minecraft:item",
                        weight: 4,
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
                        weight: 3,
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
                                levels: { min: 22, max: 26 },
                                treasure: true,
                            },
                        ],
                    },
                ],
                conditions: [
                    { condition: "minecraft:random_chance", chance: 0.33 },
                ],
            },
            {
                rolls: 1,
                entries: [
                    { type: "minecraft:item", name: "minecells:health_flask" },
                ],
                conditions: [
                    { condition: "minecraft:random_chance", chance: 0.25 },
                ],
            },
            {
                rolls: { min: 4, max: 12 },
                entries: [
                    {
                        type: "minecraft:item",
                        weight: 8,
                        name: "minecraft:chain",
                    },
                    {
                        type: "minecraft:item",
                        weight: 4,
                        name: "minecraft:cobweb",
                    },
                    {
                        type: "minecraft:item",
                        weight: 6,
                        name: "minecraft:paper",
                    },
                    {
                        type: "minecraft:item",
                        weight: 6,
                        name: "minecraft:string",
                    },
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
                ],
            },
        ],
    };

    event.addJson("minecells:loot_tables/chests/prison.json", replacement);
});
