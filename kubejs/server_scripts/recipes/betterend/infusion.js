// // Valid keys for Catalysts: north north_east north_west
// //                           south south_east south_west
// //                           east  west

// ServerEvents.recipes((event) => {
//     let recipes = [
//         {
//             input: "minecraft:iron_sword",
//             result: "aquamirae:terrible_sword",
//             time: 100,
//             catalysts: {
//                 north: { item: "aquamirae:ship_graveyard_echo" },
//                 east: { item: "aquaculture:neptunium_ingot" },
//                 south: { item: "aquaculture:neptunium_ingot" },
//                 west: { item: "aquaculture:neptunium_ingot" },
//                 north_east: { item: "aquamirae:anglers_fang" },
//                 north_west: { item: "aquamirae:anglers_fang" },
//             },
//         },
//         {
//             input: "eidolon:basic_amulet",
//             result: "forbidden_arcanus:spectral_eye_amulet",
//             time: 100,
//             catalysts: {
//                 north: { item: "alexsmobs:void_worm_eye" },
//                 east: { item: "eidolon:pewter_blend" },
//                 west: { item: "eidolon:pewter_blend" },
//                 south: { item: "minecraft:ender_eye" },
//                 north_east: { item: "iceandfire:ectoplasm" },
//                 north_west: { item: "iceandfire:ectoplasm" },
//                 south_east: { item: "iceandfire:ectoplasm" },
//                 south_west: { item: "iceandfire:ectoplasm" },
//             },
//         },
//         {
//             input: "forbidden_arcanus:stellarite_piece",
//             result: "forbidden_arcanus:eternal_stella",
//             time: 100,
//             catalysts: {
//                 north: { item: "alexscaves:tough_hide" },
//                 south: { item: "forbidden_arcanus:xpetrified_orb" },
//                 east: { item: "forbidden_arcanus:xpetrified_orb" },
//                 west: { item: "forbidden_arcanus:xpetrified_orb" },
//                 north_east: { item: "botania:elementium_ingot" },
//                 north_west: { item: "botania:elementium_ingot" },
//                 south_east: { item: "botania:elementium_ingot" },
//                 south_west: { item: "botania:elementium_ingot" },
//             },
//         },
//         {
//             catalysts: {
//                 north: { item: "forbidden_arcanus:golden_dragon_scale" },
//                 north_east: { tag: "iceandfire:scales/dragon" },
//                 east: { item: "forbidden_arcanus:silver_dragon_scale" },
//                 south_east: { tag: "iceandfire:scales/dragon" },
//                 south: { item: "forbidden_arcanus:silver_dragon_scale" },
//                 south_west: { tag: "iceandfire:scales/dragon" },
//                 west: { item: "forbidden_arcanus:silver_dragon_scale" },
//                 north_west: { tag: "iceandfire:scales/dragon" },
//             },
//             input: "forbidden_arcanus:draco_arcanus_helmet",
//             result: "forbidden_arcanus:tyr_helmet",
//             time: 100,
//         },
//         {
//             catalysts: {
//                 north: { item: "forbidden_arcanus:golden_dragon_scale" },
//                 north_east: { tag: "iceandfire:scales/dragon" },
//                 east: { item: "forbidden_arcanus:aquatic_dragon_scale" },
//                 south_east: { tag: "iceandfire:scales/dragon" },
//                 south: { item: "forbidden_arcanus:aquatic_dragon_scale" },
//                 south_west: { tag: "iceandfire:scales/dragon" },
//                 west: { item: "forbidden_arcanus:aquatic_dragon_scale" },
//                 north_west: { tag: "iceandfire:scales/dragon" },
//             },
//             input: "forbidden_arcanus:draco_arcanus_chestplate",
//             result: "forbidden_arcanus:tyr_chestplate",
//             time: 100,
//         },
//         {
//             catalysts: {
//                 north: { item: "forbidden_arcanus:golden_dragon_scale" },
//                 north_east: { tag: "iceandfire:scales/dragon" },
//                 east: { item: "forbidden_arcanus:silver_dragon_scale" },
//                 south_east: { tag: "iceandfire:scales/dragon" },
//                 south: { item: "forbidden_arcanus:silver_dragon_scale" },
//                 south_west: { tag: "iceandfire:scales/dragon" },
//                 west: { item: "forbidden_arcanus:silver_dragon_scale" },
//                 north_west: { tag: "iceandfire:scales/dragon" },
//             },
//             input: "forbidden_arcanus:draco_arcanus_leggings",
//             result: "forbidden_arcanus:tyr_leggings",
//             time: 100,
//         },
//         {
//             catalysts: {
//                 north: { item: "forbidden_arcanus:golden_dragon_scale" },
//                 north_east: { tag: "iceandfire:scales/dragon" },
//                 east: { item: "forbidden_arcanus:aquatic_dragon_scale" },
//                 south_east: { tag: "iceandfire:scales/dragon" },
//                 south: { item: "forbidden_arcanus:aquatic_dragon_scale" },
//                 south_west: { tag: "iceandfire:scales/dragon" },
//                 west: { item: "forbidden_arcanus:aquatic_dragon_scale" },
//                 north_west: { tag: "iceandfire:scales/dragon" },
//             },
//             input: "forbidden_arcanus:draco_arcanus_boots",
//             result: "forbidden_arcanus:tyr_boots",
//             time: 100,
//         }, // below requires fish's undead rising and enigmatic legacy
//         // {
//         //     catalysts: {
//         //         north: { item: "mod_lavacow:scythe_claw" },
//         //         north_east: { item: "forbidden_arcanus:dark_rune" },
//         //         east: { item: "mod_lavacow:scythe_claw" },
//         //         south_east: { item: "forbidden_arcanus:corrupted_pixie" },
//         //         south: { item: "mod_lavacow:scythe_claw" },
//         //         south_west: { item: "forbidden_arcanus:corrupted_pixie" },
//         //         west: { item: "mod_lavacow:scythe_claw" },
//         //         north_west: { item: "forbidden_arcanus:dark_rune" },
//         //     },
//         //     input: "minecraft:netherite_axe",
//         //     result: "enigmaticlegacy:forbidden_axe",
//         //     time: 100,
//         // },
//     ];

//     recipes.forEach((recipe) => {
//         event.custom({
//             type: "betterend:infusion",
//             catalysts: recipe.catalysts,
//             input: { item: recipe.input },
//             result: { item: recipe.result },
//             time: recipe.time,
//         });
//     });
// });

// // Example (group is not needed):
// //
// // {
// //   "type": "betterend:infusion",
// //   "catalysts": {
// //     "east": {
// //       "item": "minecraft:sculk_sensor"
// //     },
// //     "north": {
// //       "item": "betterend:eternal_crystal"
// //     },
// //     "north_east": {
// //       "item": "minecraft:sculk_vein"
// //     },
// //     "north_west": {
// //       "item": "minecraft:sculk_vein"
// //     },
// //     "south": {
// //       "item": "minecraft:sculk_catalyst"
// //     },
// //     "south_east": {
// //       "item": "betterend:enchanted_petal"
// //     },
// //     "south_west": {
// //       "item": "betterend:enchanted_petal"
// //     },
// //     "west": {
// //       "item": "minecraft:sculk_sensor"
// //     }
// //   },
// //   "group": "enchantment",
// //   "input": {
// //     "item": "minecraft:book"
// //   },
// //   "result": {
// //     "item": "minecraft:enchanted_book",
// //     "nbt": "{StoredEnchantments:[{id:\"minecraft:swift_sneak\",lvl:1s}]}"
// //   },
// //   "time": 500
// // }
