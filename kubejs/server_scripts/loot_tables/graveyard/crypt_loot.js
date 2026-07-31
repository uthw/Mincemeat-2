LootJS.modifiers((event) => {
    event
        .addLootTableModifier("graveyard:chests/crypt_loot")
        .randomChance(0.2)
        .addWeightedLoot([1, 4], ["caverns_and_chasms:silver_ingot"]);
    
    event
        .addLootTableModifier("graveyard:chests/crypt_loot")
        .randomChance(0.08)
        .addWeightedLoot([1, 1], ["enigmaticlegacy:iron_ring"]);
    
    event
        .addLootTableModifier("graveyard:chests/crypt_loot")
        .randomChance(0.3)
        .addWeightedLoot([1, 5], ["iceandfire:ectoplasm"]);
    
    event
        .addLootTableModifier("graveyard:chests/crypt_loot")
        .randomChance(0.3)
        .addWeightedLoot([1, 5], ["eidolon:tattered_cloth"]);
    
    event
        .addLootTableModifier("graveyard:chests/crypt_loot")
        .randomChance(0.2)
        .addWeightedLoot([1, 16], ["irons_spellbooks:arcane_essence"]);
    
    event
        .addLootTableModifier("graveyard:chests/crypt_loot")
        .randomChance(0.06)
        .addWeightedLoot([1, 1], ["irons_spellbooks:common_ink"]);
    
    event
        .addLootTableModifier("graveyard:chests/crypt_loot")
        .randomChance(0.06)
        .addWeightedLoot([1, 1], ["irons_spellbooks:uncommon_ink"]);
    
    event
        .addLootTableModifier("graveyard:chests/crypt_loot")
        .randomChance(0.06)
        .addWeightedLoot([1, 1], ["irons_spellbooks:rare_ink"]);
});
