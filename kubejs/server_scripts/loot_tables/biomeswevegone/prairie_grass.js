LootJS.modifiers(event => {
    event.addBlockLootModifier("biomeswevegone:prairie_grass")
        .randomChance(0.15)
        .addWeightedLoot([1, 1], Item.of("immersiveengineering:seed").withChance(100));
    
    event.addBlockLootModifier("biomeswevegone:tall_prairie_grass")
        .randomChance(0.15)
        .addWeightedLoot([1, 1], Item.of("immersiveengineering:seed").withChance(100));
})