LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("mowziesmobs:ferrous_wroughtnaut")
        .randomChance(0.5)
        .addWeightedLoot(
            [1, 1],
            [
                Item.of(
                    "enigmaticlegacy:enigmatic_amulet",
                    "{AssignedColor:0.3f}" // 15% deflect chance
                ),
            ]
        );
});
//
