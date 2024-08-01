// ServerEvents.highPriorityData((event) => {
//     let surface = {
//         feature: "minecraft:disabled",
//         placement: [
//             {
//                 type: "minecraft:rarity_filter",
//                 chance: 1,
//             },
//             {
//                 type: "minecraft:in_square",
//             },
//             {
//                 type: "minecraft:heightmap",
//                 heightmap: "WORLD_SURFACE_WG",
//             },
//             {
//                 type: "minecraft:biome",
//             },
//             {
//                 type: "pneumaticcraft:oil_lake_filter",
//             },
//         ],
//     };

//     let underground = {
//         feature: "pneumaticcraft:oil_lake",
//         placement: [
//             {
//                 type: "minecraft:rarity_filter",
//                 chance: 1, // 6 originally
//             },
//             {
//                 type: "minecraft:in_square",
//             },
//             {
//                 type: "minecraft:height_range",
//                 height: {
//                     type: "minecraft:uniform",
//                     max_inclusive: {
//                         below_top: 0,
//                     },
//                     min_inclusive: {
//                         absolute: 0,
//                     },
//                 },
//             },
//             {
//                 type: "minecraft:environment_scan",
//                 direction_of_search: "down",
//                 max_steps: 32,
//                 target_condition: {
//                     type: "minecraft:all_of",
//                     predicates: [
//                         {
//                             type: "minecraft:not",
//                             predicate: {
//                                 type: "minecraft:matching_blocks",
//                                 blocks: "minecraft:air",
//                             },
//                         },
//                         {
//                             type: "minecraft:inside_world_bounds",
//                             offset: [0, -5, 0],
//                         },
//                     ],
//                 },
//             },
//             {
//                 type: "minecraft:surface_relative_threshold_filter",
//                 heightmap: "OCEAN_FLOOR_WG",
//                 max_inclusive: -5,
//             },
//             {
//                 type: "minecraft:biome",
//             },
//             {
//                 type: "pneumaticcraft:oil_lake_filter",
//             },
//         ],
//     };

//     event.addJson(
//         "pneumaticcraft:worldgen/placed_feature/oil_lake_surface.json",
//         surface
//     );
//     event.addJson(
//         "pneumaticcraft:worldgen/placed_feature/oil_lake_underground.json",
//         underground
//     );
// });
