LootJS.modifiers((event) => {
    event
        .addLootTableModifier("graveyard:chests/desert_graveyard_loot")
        .randomChance(0.15)
        .addWeightedLoot([1, 2], ["biomeswevegone:firecracker_flower_bush"]);
    
    event
        .addLootTableModifier("graveyard:chests/desert_graveyard_loot")
        .randomChance(0.15)
        .addWeightedLoot([1, 3], ["biomeswevegone:flowering_barrel_cactus"]);
    
    event
        .addLootTableModifier("graveyard:chests/desert_graveyard_loot")
        .randomChance(0.15)
        .addWeightedLoot([1, 2], ["atmospheric:yucca_flower"]);
    
    event
        .addLootTableModifier("graveyard:chests/desert_graveyard_loot")
        .randomChance(0.15)
        .addWeightedLoot([1, 2], ["atmospheric:dragon_roots"]);
    
    event
        .addLootTableModifier("graveyard:chests/desert_graveyard_loot")
        .randomChance(0.15)
        .addWeightedLoot([1, 4], ["atmospheric:passion_fruit"]);
    
    event
        .addLootTableModifier("graveyard:chests/desert_graveyard_loot")
        .randomChance(0.1)
        .addWeightedLoot([1, 4], ["atmospheric:currant"]);
});
