// LootJS.modifiers((event) => {
//     event.addEntityLootModifier("cataclysm:ignis").addWeightedLoot(
//         [1, 1],
//         [
//             Item.of(
//                 "enigmaticlegacy:enigmatic_amulet",
//                 "{AssignedColor:0.6f}"
//             ).withChance(1), // 10% lifesteal
//         ]
//     );
// });

EntityEvents.drops("cataclysm:ignis", event => {
    event.addDrop(
        Item.of("enigmaticlegacy:enigmatic_amulet", "{AssignedColor:0.6f}"), 1
    );
})