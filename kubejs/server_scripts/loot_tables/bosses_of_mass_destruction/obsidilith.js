LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("bosses_of_mass_destruction:obsidilith")
        .randomChance(1)
        .addWeightedLoot([6, 9], Item.of("enigmaticlegacy:etherium_ore"));
});
