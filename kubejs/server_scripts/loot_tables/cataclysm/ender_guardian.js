LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("cataclysm:ender_guardian")
        .randomChance(1)
        .addWeightedLoot([7, 10], Item.of("enigmaticlegacy:etherium_ore"));
});
