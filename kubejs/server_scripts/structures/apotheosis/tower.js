// the code of this is causing some error

// ServerEvents.highPriorityData((event) => {
//     let towerTweak = {
//         "forge:conditions": [
//             {
//                 type: "apotheosis:module",
//                 module: "adventure",
//             },
//         ],
//         structures: [
//             {
//                 // structure: "apotheosis:tower_spruce",
//                 weight: 1,
//             },
//         ],
//         placement: {
//             type: "minecraft:random_spread",
//             spacing: 80,
//             separation: 30,
//         },
//     };

//     let towerTypes = ["_main", "_spruce", "_sand", "_leaf"];

//     let towerSalts = [12121818, 89021723, 15192020, 11114412];

//     for (let i = 0; i < towerTypes.length; i++) {
//         towerTweak.placement.salt = towerSalts[i];
//         towerTweak.structures.structure = `apotheosis:tower${towerTypes[i]}`;

//         // Hopefully this works :p
//         event.addJson(
//             `apotheosis:worldgen/structure_set/tower${towerTypes[i]}.json`,
//             towerTweak
//         );
//     }
// });
