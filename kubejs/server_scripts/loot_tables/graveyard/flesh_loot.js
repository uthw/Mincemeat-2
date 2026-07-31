LootJS.modifiers((event) => {
    event
        .addLootTableModifier("graveyard:chests/flesh_loot")
        .randomChance(0.1)
        .addWeightedLoot([1, 2], ["eidolon:zombie_heart"]);
})