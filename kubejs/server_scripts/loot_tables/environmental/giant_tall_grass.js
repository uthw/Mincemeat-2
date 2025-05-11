LootJS.modifiers((event) => {
    event
        .addBlockLootModifier("environmental:giant_tall_grass")
        .randomChance(0.2)
        .addLoot("actuallyadditions:coffee_beans");
});
