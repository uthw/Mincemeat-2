// // Remove rice crops from grass

// ServerEvents.highPriorityData((event) => {
//     const rice = {
//         type: "doggytalents:rice_from_grass",
//         conditions: [
//             {
//                 condition: "forge:loot_table_id",
//                 loot_table_id: "minecraft:blocks/grass",
//             },
//             {
//                 condition: "minecraft:inverted",
//                 term: {
//                     condition: "minecraft:match_tool",
//                     predicate: {
//                         items: ["minecraft:shears"],
//                     },
//                 },
//             },
//             {
//                 chance: 0,
//                 condition: "minecraft:random_chance",
//             },
//         ],
//     };

//     event.addJson(
//         "doggytalents:loot_modifiers/rice_from_grass_modifier.json",
//         rice
//     );

//     const soy = {
//         type: "doggytalents:soy_from_zombie",
//         conditions: [
//             {
//                 condition: "minecraft:entity_properties",
//                 entity: "killer",
//                 predicate: {
//                     type: "doggytalents:dog",
//                 },
//             },
//             {
//                 condition: "minecraft:entity_properties",
//                 entity: "this",
//                 predicate: {
//                     type: "#doggytalents:drop_soy_when_dog_kill",
//                 },
//             },
//             {
//                 chance: 0,
//                 condition: "minecraft:random_chance_with_looting",
//                 looting_multiplier: 0.05,
//             },
//         ],
//     };

//     event.addJson(
//         "doggytalents:loot_modifiers/soy_from_zombie_modifier.json",
//         soy // i like the one with the microwave for a head
//     );
// });
