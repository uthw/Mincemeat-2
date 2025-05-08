// LootJS.modifiers((event) => {
//     event
//         .addEntityLootModifier("minecells:concierge")
//         .addWeightedLoot(
//             [1, 1],
//             [
//                 Item.of(
//                     "enigmaticlegacy:enigmatic_amulet",
//                     "{AssignedColor:0.1f}"
//                 ).withChance(1.0) // attack damage
//             ]
//         );
// });

EntityEvents.drops("minecells:concierge", (event) => {
    event.addDrop(
        Item.of("enigmaticlegacy:enigmatic_amulet", "{AssignedColor:0.1f}"),
        1
    );
});