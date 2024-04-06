// This is from someone on the latvian dev discord

// const set = {
//     name: "oresabovediamonds:netherite_opal",
//     effects: [
//         {
//             effect: "night_vision",
//             duration: 400,
//             amplifier: 0,
//         },
//     ],
// };

// const sets = [set];

// PlayerEvents.tick((e) => {
//     const { headArmorItem, chestArmorItem, legsArmorItem, feetArmorItem } =
//         e.player;
//     if (e.player.level.time % 100 == 0) {
//         for (let armorSet in sets) {
//             if (
//                 headArmorItem.id === sets[armorSet].name + "_helmet" &&
//                 chestArmorItem.id === sets[armorSet].name + "_chestplate" &&
//                 legsArmorItem.id === sets[armorSet].name + "_leggings" &&
//                 feetArmorItem.id === sets[armorSet].name + "_boots"
//             ) {
//                 for (let x in sets[armorSet].effects) {
//                     e.player.potionEffects.add(
//                         sets[armorSet].effects[x].effect,
//                         sets[armorSet].effects[x].duration,
//                         sets[armorSet].effects[x].amplifier
//                     );
//                 }
//             }
//         }
//     }
// });
