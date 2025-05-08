LootJS.modifiers(event => {
    event.addEntityLootModifier("galosphere:berserker")
        .randomChance(1)
        .addWeightedLoot([1, 1], [
            Item.of("enigmaticlegacy:enigmatic_amulet", "{AssignedColor:0.5f}") // 25% mining speed
        ]);
})