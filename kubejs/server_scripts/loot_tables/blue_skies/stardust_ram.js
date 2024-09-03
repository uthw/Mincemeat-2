// let coeff = 2.0;

// // all wool colors
// let colors = [
//     "black",
//     "blue",
//     "brown",
//     "cyan",
//     "gray",
//     "green",
//     "light_blue",
//     "light_green",
//     "lime",
//     "magenta",
//     "orange",
//     "pink",
//     "purple",
//     "red",
//     "white",
//     "yellow",
// ];

// ServerEvents.highPriorityData((event) => {
//     // increase amount of wool given by stardust rams when killed
//     colors.forEach((color) => {
//         event.addJson(
//             `blue_skies:loot_tables/entities/stardust_ram/${color}.json`,
//             {
//                 type: "minecraft:entity",
//                 pools: [
//                     {
//                         bonus_rolls: 0.0,
//                         entries: [
//                             {
//                                 type: "minecraft:item",
//                                 name: `minecraft:${color}_wool`,
//                             },
//                         ],
//                         rolls: 1.0 * coeff,
//                     },
//                     {
//                         bonus_rolls: 0.0,
//                         entries: [
//                             {
//                                 type: "minecraft:loot_table",
//                                 name: "blue_skies:entities/stardust_ram",
//                             },
//                         ],
//                         rolls: 1.0,
//                     },
//                 ],
//                 random_sequence: `blue_skies:entities/stardust_ram/${color}`,
//             }
//         );
//     });
// });
