LootJS.modifiers(event => {
    event.addEntityLootModifier("cataclysm:ignis")
        .randomChance(1)
        .addWeightedLoot([1, 1], [
            Item.of("enigmaticlegacy:enigmatic_amulet", "{AssignedColor:0.6f}") // 10% lifesteal
        ]);
})