ServerEvents.highPriorityData((event) => {
    const replacements = {
        type: "minecraft:chest",
        pools: [
            {
                rolls: 1,
                entries: [
                    {
                        type: "minecraft:item",
                        weight: 2,
                        name: "kubejs:cell",
                    },
                ],
            },
        ],
    };

    event.addJson(
        "minecells:loot_tables/chests/ramparts/ramparts_weapons.json",
        replacements
    );
});

// ORIGINAL

// {
//         type: "minecraft:chest",
//         pools: [
//             {
//                 rolls: 1,
//                 entries: [
//                     {
//                         type: "minecraft:item",
//                         weight: 2,
//                         name: "minecells:assassins_dagger",
//                     },
//                     {
//                         type: "minecraft:item",
//                         weight: 3,
//                         name: "minecells:broadsword",
//                     },
//                     {
//                         type: "minecraft:item",
//                         weight: 2,
//                         name: "minecells:balanced_blade",
//                     },
//                     {
//                         type: "minecraft:item",
//                         weight: 3,
//                         name: "minecells:crowbar",
//                     },
//                     {
//                         type: "minecraft:item",
//                         weight: 3,
//                         name: "minecells:nutcracker",
//                     },
//                     {
//                         type: "minecraft:item",
//                         weight: 3,
//                         name: "minecells:spite_sword",
//                     },
//                     {
//                         type: "minecraft:item",
//                         weight: 2,
//                         name: "minecells:frost_blast",
//                     },
//                     {
//                         type: "minecraft:item",
//                         weight: 2,
//                         name: "minecells:phaser",
//                     },
//                 ],
//             },
//         ],
//     };
