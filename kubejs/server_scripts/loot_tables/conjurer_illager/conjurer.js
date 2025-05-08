LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("conjurer_illager:conjurer")
        .randomChance(0.6)
        .addWeightedLoot(
            [1, 1],
            [
                Item.of(
                    "enigmaticlegacy:enigmatic_amulet",
                    "{AssignedColor:0.2f}"
                ), // 15% sprint speed
            ]
        );
});
