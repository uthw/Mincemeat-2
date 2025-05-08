// LootJS.modifiers((event) => {
//     event.addEntityLootModifier("conjurer_illager:conjurer").addWeightedLoot(
//         [1, 1],
//         [
//             Item.of(
//                 "enigmaticlegacy:enigmatic_amulet",
//                 "{AssignedColor:0.2f}"
//             ).withChance(0.6), // 15% sprint speed
//         ]
//     );
// });

EntityEvents.drops("conjurer_illager:conjurer", (event) => {
    event.addDrop(
        Item.of("enigmaticlegacy:enigmatic_amulet", "{AssignedColor:0.2f}"),
        1
    );
});