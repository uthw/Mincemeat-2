// ServerEvents.highPriorityData(event => {
//     let tweak = {
//         pools: [
//             {
//                 entries: [
//                     {
//                         type: "item",
//                         name: "farmersdelight:iron_knife",
//                         weight: 3,
//                         functions: [
//                             {
//                                 function: "set_count",
//                                 count: {
//                                     min: 1,
//                                     max: 1,
//                                 },
//                             },
//                             {
//                                 function: "enchant_with_levels",
//                                 treasure: true,
//                                 levels: {
//                                     min: 10,
//                                     max: 25,
//                                 },
//                             },
//                         ],
//                     },
//                     {
//                         type: "item",
//                         name: "farmersdelight:flint_knife",
//                         weight: 2,
//                         functions: [
//                             {
//                                 function: "set_count",
//                                 count: {
//                                     min: 1,
//                                     max: 1,
//                                 },
//                             },
//                             {
//                                 function: "enchant_with_levels",
//                                 treasure: "true",
//                                 levels: {
//                                     min: 10,
//                                     max: 25,
//                                 },
//                             },
//                         ],
//                     },
//                     {
//                         type: "item",
//                         name: "autumnity:turkey_piece",
//                         weight: 3,
//                         functions: [
//                             {
//                                 function: "set_count",
//                                 count: {
//                                     min: 2,
//                                     max: 3,
//                                 },
//                             },
//                         ],
//                     },
//                     {
//                         type: "item",
//                         name: "alexsmobs:moose_ribs",
//                         weight: 1,
//                         functions: [
//                             {
//                                 function: "set_count",
//                                 count: {
//                                     min: 1,
//                                     max: 1,
//                                 },
//                             },
//                         ],
//                     },
//                     {
//                         type: "item",
//                         name: "delightful:venison_chops",
//                         weight: 2,
//                         functions: [
//                             {
//                                 function: "set_count",
//                                 count: {
//                                     min: 1,
//                                     max: 3,
//                                 },
//                             },
//                         ],
//                     },
//                     {
//                         type: "item",
//                         name: "delightful:cooked_venison_chops",
//                         weight: 2,
//                         functions: [
//                             {
//                                 function: "set_count",
//                                 count: {
//                                     min: 1,
//                                     max: 2,
//                                 },
//                             },
//                         ],
//                     },
//                     {
//                         type: "item",
//                         name: "alexsdelight:raw_bison",
//                         weight: 2,
//                         functions: [
//                             {
//                                 function: "set_count",
//                                 count: {
//                                     min: 1,
//                                     max: 1,
//                                 },
//                             },
//                         ],
//                     },
//                     {
//                         type: "item",
//                         name: "alexsdelight:cooked_bison",
//                         weight: 2,
//                         functions: [
//                             {
//                                 function: "set_count",
//                                 count: {
//                                     min: 1,
//                                     max: 2,
//                                 },
//                             },
//                         ],
//                     },
//                     {
//                         type: "item",
//                         name: "autumnity:cooked_turkey_piece",
//                         weight: 3,
//                         functions: [
//                             {
//                                 function: "set_count",
//                                 count: {
//                                     min: 1,
//                                     max: 2,
//                                 },
//                             },
//                         ],
//                     },
//                     {
//                         type: "item",
//                         name: "alexsmobs:cooked_kangaroo_meat",
//                         weight: 2,
//                         functions: [
//                             {
//                                 function: "set_count",
//                                 count: {
//                                     min: 1,
//                                     max: 1,
//                                 },
//                             },
//                         ],
//                     },
//                 ],
//             },
//         ],
//     };

//     event.addJson("hunters_return:loot_tables/chests/illager_woodhut.json", tweak);
// })