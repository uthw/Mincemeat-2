LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("miencraft:wither")
        .removeLoot("art_of_forging:fragment_of_eden");
});
