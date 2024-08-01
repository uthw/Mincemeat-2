// let buffs = [
//     {
//         path: "sword/heavy_blade",
//         // translation: {
//         //     primaryAttributes: { "generic.attack_damage": 2.5 }, // +0.5
//         //     secondaryAttributes: {
//         //         "generic.attack_damage": 1.25,
//         //         "generic.attack_speed": -1, // no change
//         //     }, // +.25
//         // },
//         variants: [
//             {
//                 attributes: {
//                     "generic.attack_damage": 0.9,
//                 },
//             },
//         ],
//     },
//     // {
//     //     path: "double/basic_hammer/basic_hammer",
//     //     translation: {
//     //         primaryAttributes: { "generic.attack_damage": 2.5 }, // +0.5
//     //         secondaryAttributes: {
//     //             "generic.attack_damage": 3.75,
//     //         },
//     //     },
//     // },
//     // {
//     //     path: "double/basic_axe/basic_axe",
//     //     translation: {
//     //         primaryAttributes: { "generic.attack_damage": 2.5 },
//     //         secondaryAttributes: {
//     //             "generic.attack_damage": 1.25, // +0.5
//     //             "generic.attack_speed": -1, // test to make them faster
//     //         },
//     //     },
//     // },
//     // // aof
//     // {
//     //     path: "single/head/halberd_head/halberd_head",
//     //     translation: {
//     //         secondaryAttributes: {
//     //             "generic.attack_damage": 1.25,
//     //         },
//     //     },
//     // },
//     // {
//     //     path: "single/head/quarter_staff_head/quarter_staff_head",
//     //     translation: {
//     //         secondaryAttributes: {
//     //             "generic.attack_damage": 1.25,
//     //         },
//     //     },
//     // },
//     // {
//     //     path: "sword/katana/katana_blade",
//     //     translation: {
//     //         primaryAttributes: {
//     //             "generic.attack_damage": 9,
//     //         },
//     //     },
//     // },
//     // {
//     //     path: "sword/crucible/crucible_blade",
//     //     translation: {
//     //         primaryAttributes: {
//     //             "generic.attack_speed": -1,
//     //         },
//     //         secondaryAttributes: {
//     //             "generic.attack_speed": 1.25,
//     //         },
//     //     },
//     // },
// ];
// ServerEvents.highPriorityData((event) => {
//     buffs.forEach((buff) => {
//         event.addJson(`tetra:modules/${buff.path}.json`, buff);
//     });
// });
