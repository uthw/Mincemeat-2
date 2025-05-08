LootJS.modifiers((event) => {
    event
        .addLootTableModifier(/^.*chests\/.*/)
        .removeLoot("celestisynth:lunar_stone");
});
