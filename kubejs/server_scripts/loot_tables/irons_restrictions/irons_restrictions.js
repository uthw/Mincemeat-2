LootJS.modifiers((event) => {
    event.addLootTableModifier(/^.*chests\/.*/).removeLoot("irons_restrictions:fragment");
});
