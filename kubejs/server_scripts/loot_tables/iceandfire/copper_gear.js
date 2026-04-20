LootJS.modifiers((event) => {
    event
        .addLootTableModifier(/^.*chests\/.*/)
        .replaceLoot("iceandfire:armor_copper_metal_helmet", "caverns_and_chasms:copper_helmet")
        .replaceLoot(
            "iceandfire:armor_copper_metal_chestplate",
            "caverns_and_chasms:copper_chestplate",
        )
        .replaceLoot("iceandfire:armor_copper_metal_leggings", "caverns_and_chasms:copper_leggings")
        .replaceLoot("iceandfire:armor_copper_metal_boots", "caverns_and_chasms:copper_boots")
        .replaceLoot("iceandfire:copper_sword", "caverns_and_chasms:copper_sword")
        .replaceLoot("iceandfire:copper_shovel", "caverns_and_chasms:copper_shovel")
        .replaceLoot("iceandfire:copper_pickaxe", "caverns_and_chasms:copper_pickaxe")
        .replaceLoot("iceandfire:copper_hoe", "caverns_and_chasms:copper_hoe")
        .replaceLoot("iceandfire:copper_axe", "caverns_and_chasms:copper_axe");
});
