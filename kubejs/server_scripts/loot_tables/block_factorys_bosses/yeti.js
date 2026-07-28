LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("block_factorys_bosses:yeti")
        .removeLoot("block_factorys_bosses:ice_gauntlet")
        .addLoot("irons_spellbooks:boreal_blade");
});
