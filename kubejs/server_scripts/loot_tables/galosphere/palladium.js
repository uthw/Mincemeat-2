LootJS.modifiers((event) => {
    // Remove galosphere:palladium_nugget from pillager loot tables
    event.addEntityLootModifier("pillager").removeLoot("galosphere:silver_nugget");

    event
        .addEntityLootModifier("pillager")
        .randomChance(0.35)
        .addWeightedLoot([1, 4], [Item.of("caverns_and_chasms:silver_nugget")]);
});
