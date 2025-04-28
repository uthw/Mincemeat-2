LootJS.modifiers((event) => {
    event
        .addLootTableModifier(/^minecraft:chests\/.*/)
        .removeLoot("celestisynth:lunar_stone");
});
