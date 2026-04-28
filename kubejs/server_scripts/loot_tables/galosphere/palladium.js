LootJS.modifiers((event) => {
    // Remove galosphere:palladium_nugget from pillager loot tables
    event.addEntityLootModifier("pillager").removeLoot("galosphere:palladium_nugget");
});
