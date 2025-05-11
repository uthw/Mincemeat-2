LootJS.modifiers((event) => {
    event
        .addBlockLootModifier(/^hexerei:chests.*/)
        .removeLoot("hexerei:mushroom_witch_hat");
});
