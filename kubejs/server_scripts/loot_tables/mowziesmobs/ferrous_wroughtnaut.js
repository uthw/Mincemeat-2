// LootJS.modifiers((event) => {
//     event
//         .addEntityLootModifier("mowziesmobs:ferrous_wroughtnaut")
//         // TODO fix this and all others later. idk why it drops 2
//         .addLoot(
//             Item.of(
//                 "enigmaticlegacy:enigmatic_amulet",
//                 "{AssignedColor:0.3f}" // 15% deflect chance
//             ).withChance(1.0)
//         );
// });
//
EntityEvents.drops("mowziesmobs:ferrous_wroughtnaut", (event) => {
    event.addDrop(
        Item.of("enigmaticlegacy:enigmatic_amulet", "{AssignedColor:0.3f}"),
        1
    );
});