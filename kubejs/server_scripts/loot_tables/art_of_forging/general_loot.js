LootJS.modifiers((event) => {
    event
        .addLootTableModifier(/^minecraft:chests\/.*/)
        .removeLoot("art_of_forging:vobrite_crystal");
});