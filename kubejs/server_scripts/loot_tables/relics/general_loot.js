LootJS.modifiers((event) => {
    event
        .addLootTableModifier(/^.*chests\/.*/)
        .removeLoot("relics:arrow_quiver")
        .removeLoot("relics:infinity_ham");
});
