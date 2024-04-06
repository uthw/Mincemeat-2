LootJS.modifiers((event) => {
    // Remove the Grimoire of Evocation from the Evoker's loot table
    event
        .addLootTableModifier("minecraft:entities/evoker")
        .removeLoot("irons_spellbooks:evoker_spell_book");
});
