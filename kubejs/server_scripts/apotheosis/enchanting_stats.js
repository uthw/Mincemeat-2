// // This script has been moved to beloved Open Loader under the ApotheosisTweaks data pack because it wasn't working here for whatever reason

// // Valid formatting
// // {
// // 	"block": "minecraft:amethyst_cluster", // Can also be a tag
// // 	"stats": {
// // 		"maxEterna": 0,
// // 		"eterna": 0,
// // 		"quanta": 0,
// // 		"arcana": 0,
// // 		"rectification": 1.5,
// // 		"clues": 0
// // 	}
// // }

// ServerEvents.highPriorityData((event) => {
//     let stats = [
//         {
//             tag: "supplementaries:candle_holders",
//             stats: {
//                 arcana: 1.5,
//             },
//         },
//         {
//             block: "supplementaries:goblet",
//             stats: {
//                 maxEterna: 15,
//                 eterna: 0.5,
//                 quanta: 0.5,
//                 arcana: 0.5,
//             },
//         },
//         {
//             block: "supplementaries:globe_sepia",
//             stats: {
//                 maxEterna: 17.5,
//                 eterna: 1.25,
//                 quanta: 0,
//                 arcana: 1.5,
//             },
//         },
//         {
//             block: "ars_nouveau:arcane_pedestal",
//             stats: {
//                 maxEterna: 15,
//                 eterna: 2,
//                 quanta: 2,
//             },
//         },
//         {
//             block: "ars_nouveau:arcane_core",
//             stats: {
//                 maxEterna: 15,
//                 eterna: 4,
//                 quanta: 2,
//                 arcana: 2,
//             },
//         },
//         {
//             block: "ars_nouveau:enchanting_apparatus",
//             stats: {
//                 maxEterna: 15,
//                 eterna: 4,
//                 quanta: 2,
//             },
//         },
//         {
//             block: "eidolon:wooden_altar",
//             stats: { eterna: 1, quanta: -3 },
//         },
//         {
//             block: "eidolon:stone_altar",
//             stats: { eterna: 1, quanta: -3 },
//         },
//         {
//             block: "eidolon:brazier",
//             stats: {
//                 eterna: 3,
//                 quanta: -5,
//                 arcana: 2,
//             },
//         },
//         {
//             block: "eidolon:necrotic_focus",
//             stats: {
//                 maxEterna: 15,
//                 eterna: 2,
//                 quanta: -5,
//             },
//         },
//         {
//             block: "eidolon:straw_effigy",
//             stats: {
//                 quanta: -10,
//             },
//         },
//         {
//             block: "eidolon:censer",
//             stats: {
//                 maxEterna: 16,
//                 eterna: 1.5,
//                 quanta: 3,
//             },
//         },
//         {
//             block: "eidolon:goblet",
//             stats: {
//                 maxEterna: 18,
//                 eterna: 1.5,
//                 quanta: 1.5,
//                 arcana: 1.5,
//                 rectification: 0,
//                 clues: 0,
//             },
//         },
//         {
//             block: "eidolon:unholy_effigy",
//             stats: {
//                 maxEterna: 15,
//                 eterna: 5,
//                 quanta: 10,
//             },
//         },
//         {
//             block: "irons_spellbooks:alchemist_cauldron",
//             stats: {
//                 maxEterna: 15,
//                 eterna: 4,
//                 arcana: 4,
//             },
//         },
//         {
//             block: "forbidden_arcanus:darkstone_pedestal",
//             stats: {
//                 maxEterna: 22.5,
//                 eterna: 3.5,
//             },
//         },
//         {
//             block: "galosphere:glinted_amethyst_cluster",
//             stats: {
//                 rectification: 2,
//             },
//         },
//         {
//             block: "galosphere:allurite_cluster",
//             stats: {
//                 rectification: 1.5,
//             },
//         },
//         {
//             block: "galosphere:glinted_allurite_cluster",
//             stats: {
//                 rectification: 2,
//             },
//         },
//         {
//             block: "galosphere:lumiere_cluster",
//             stats: {
//                 rectification: 1.5,
//             },
//         },
//         {
//             block: "galosphere:glinted_lumiere_cluster",
//             stats: {
//                 rectification: 2,
//             },
//         },
//         {
//             block: "hexerei:mahogany_broom_stand",
//             stats: {
//                 maxEterna: 15,
//                 eterna: 2,
//             },
//         },
//         // Stopped above here
//         {
//             block: "hexerei:willow_broom_stand",
//             stats: {
//                 maxEterna: 15,
//                 eterna: 2,
//             },
//         },
//         {
//             block: "hexerei:witch_hazel_broom_stand",
//             stats: {
//                 maxEterna: 15,
//                 eterna: 2,
//             },
//         },
//         {
//             block: "hexerei:crystal_ball",
//             stats: {
//                 maxEterna: 17.5,
//                 eterna: 2,
//                 arcana: 5,
//                 rectification: 1,
//             },
//         },
//         {
//             block: "hexerei:candelabra",
//             stats: {
//                 arcana: 6,
//             },
//         },
//         {
//             block: "alexscaves:beholder",
//             stats: {
//                 maxEterna: 20,
//                 eterna: 4,
//                 quanta: -15,
//             },
//         },
//         {
//             block: "alexscaves:abyssal_altar",
//             stats: {
//                 maxEterna: 20,
//                 eterna: 4,
//                 arcana: 2,
//             },
//         },
//         {
//             block: "bosses_of_mass_destruction:mob_ward",
//             stats: {
//                 maxEterna: 45,
//                 eterna: 30,
//                 quanta: 15,
//                 arcana: 45,
//             },
//         },
//         {
//             block: "bosses_of_mass_destruction:levitation_block",
//             stats: {
//                 maxEterna: 25,
//                 eterna: 10,
//                 quanta: 8,
//                 arcana: 4,
//             },
//         },
//         {
//             block: "paraglider:goddess_statue",
//             stats: {
//                 maxEterna: 15,
//                 eterna: 5,
//                 arcana: 5,
//                 rectification: 1.5,
//             },
//         },
//         {
//             block: "paraglider:kakariko_goddess_statue",
//             stats: {
//                 maxEterna: 15,
//                 eterna: 5,
//                 arcana: 5,
//                 rectification: 1.5,
//             },
//         },
//         {
//             block: "paraglider:goron_goddess_statue",
//             stats: {
//                 maxEterna: 15,
//                 eterna: 5,
//                 arcana: 5,
//                 rectification: 1.5,
//             },
//         },
//         {
//             block: "paraglider:rito_goddess_statue",
//             stats: {
//                 maxEterna: 15,
//                 eterna: 5,
//                 arcana: 5,
//                 rectification: 1.5,
//             },
//         },
//         {
//             block: "paraglider:horned_statue",
//             stats: {
//                 maxEterna: 15,
//                 eterna: 3,
//                 quanta: -5,
//             },
//         },
//     ];
//     stats.forEach((stat) => {
//         let filePath = stat.block ? stat.block : stat.tag;
//         // split instead?
//         filePath = filePath.split(":")[1];
//         // filePath = filePath.replace(/:/g, "_");
//         event.addJson(
//             `apotheosis:enchanting_stats/${filePath}.json`,
//             stat.stats
//         );
//         console.log(`filePath is: ${filePath}`);
//     });
// });
