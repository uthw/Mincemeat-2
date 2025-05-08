LootJS.modifiers((event) => {
    event
        .addLootTableModifier(/^.*chests\/.*/)
        .removeLoot("art_of_forging:vobrite_crystal")
        .removeLoot("art_of_forging:ancient_flail")
        .removeLoot("art_of_forging:ancient_blade")
        .removeLoot("art_of_forging:ancient_axe");
});
