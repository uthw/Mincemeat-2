// LootJS.modifiers((event) => {
//     event.addEntityLootModifier("meetyourfight:bellringer").addWeightedLoot(
//         [1, 1],
//         [
//             Item.of(
//                 "enigmaticlegacy:enigmatic_amulet",
//                 "{AssignedColor:0.4f}"
//             ).withChance(0.5), // -25% gravity
//         ]
//     );
// });

EntityEvents.drops("meetyourfight:bellringer", (event) => {
    event.addDrop(
        Item.of("enigmaticlegacy:enigmatic_amulet", "{AssignedColor:0.4f}"),
        1
    );
});
