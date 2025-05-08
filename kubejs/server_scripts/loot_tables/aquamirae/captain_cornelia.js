EntityEvents.drops("aquamirae:captain_cornelia", (event) => {
    event.addDrop("art_of_forging:ancient_blade", 1);
    event.addDrop(
        Item.of("enigmaticlegacy:enigmatic_amulet", "{AssignedColor:0.7f}"),
        1
    );
});

// LootJS.modifiers((event) => {
//     // event.addEntityLootModifier("aquamirae:captain_cornelia").addWeightedLoot(
//     //     [1, 1],
//     //     [
//     //         Item.of(
//     //             "enigmaticlegacy:enigmatic_amulet",
//     //             "{AssignedColor:0.7f}"
//     //         ).withChance(1), // 25% swim speed
//     //     ]
//     // );

//     // 25% swim speed
//     event
//         .addEntityLootModifier("aquamirae:captain_cornelia")
//         .addLoot(
//             LootEntry.of(
//                 Item.of(
//                     "enigmaticlegacy:enigmatic_amulet",
//                     "{AssignedColor:0.7f}"
//                 )
//             ).withChance(1)
//         );
// });
