LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("minecells:concierge")
        .randomChance(1.0)
        .addWeightedLoot(
            [1, 1],
            [
                Item.of(
                    "enigmaticlegacy:enigmatic_amulet",
                    "{AssignedColor:0.1f}"
                ), // attack damage
            ]
        );
});
