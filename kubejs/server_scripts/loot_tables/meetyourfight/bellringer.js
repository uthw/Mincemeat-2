LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("meetyourfight:bellringer")
        .randomChance(0.5)
        .addWeightedLoot(
            [1, 1],
            [
                Item.of(
                    "enigmaticlegacy:enigmatic_amulet",
                    "{AssignedColor:0.4f}"
                ), // -25% gravity
            ]
        );
});
