// LootJS.modifiers((event) => {
//     event.addEntityLootModifier("galosphere:berserker").addWeightedLoot(
//         [1, 1],
//         [
//             Item.of(
//                 "enigmaticlegacy:enigmatic_amulet",
//                 "{AssignedColor:0.5f}"
//             ).withChance(1), // 25% mining speed
//         ]
//     );
// });

EntityEvents.drops("galosphere:berserker", (event) => {
    event.addDrop(
        Item.of("enigmaticlegacy:enigmatic_amulet", "{AssignedColor:0.5f}"),
        1
    );
});