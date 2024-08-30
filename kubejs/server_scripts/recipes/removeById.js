// Recipe ids in toRemove are disabled, add an item here if you want to disable crafting it a certain way but not others, for example making brass in a crafting grid with iron and copper

ServerEvents.recipes((event) => {
    let toRemove = [
        "farmersdelight:skillet",
        "ars_nouveau:novice_spell_book",
        "thermal:rf_coil",
        "reliquary:angelheart_vial",
        "reliquary:phoenix_down",
        "reliquary:aphrodite_potion",
        "reliquary:infernal_tear",
        "reliquary:void_tear",
        "reliquary:mercy_cross",
        "reliquary:destruction_catalyst",
        "reliquary:emperor_chalice",
        "enigmaticlegacy:mega_sponge",
        "reliquary:fortune_coin",
        "reliquary:glacial_staff",
        "reliquary:glowing_water",
        "reliquary:holy_hand_grenade",
        "reliquary:hero_medallion",
        "reliquary:infernal_chalice",
        "reliquary:infernal_claw",
        "reliquary:magicbane",
        "forbidden_arcanus:corrupti_dust",
        "forbidden_arcanus:dragon_scale",
        "forbidden_arcanus:deorum_ingot",
        "iceandfire:dragonbone_sword",
        "iceandfire:dragonbone_pickaxe",
        "iceandfire:dragonbone_axe",
        "iceandfire:dragonbone_hoe",
        "ars_nouveau:apprentice_spell_book_upgrade",
        "ars_nouveau:archmage_spell_book_upgrade",
        "createoreexcavation:vein_finder",
        "mekanism:fluid_tank/basic",
        "mekanism:tier_installer/basic",
        "mekanism:tier_installer/advanced",
        "mekanism:tier_installer/elite",
        "mekanism:tier_installer/ultimate",
        "mekanism:digital_miner",
        "mekanism:teleportation_core",
        "powersuits:tinkertable",
        "littlelogistics:transmitter_component",
        "miners_delight:copper_pot",
        "hexerei:mixing_cauldron",
        "hexerei:herb_drying_rack",
        "fluxnetworks:fluxcore",
        "enderio:alloy_smelter",
        "enderio:sag_mill",
        "smallships:cannon",
        "ars_nouveau:basic_spell_turret",
        "computercraft:cable",
        "xnet:controller",
        "iceandfire:ghost_sword",
        "pneumaticcraft:fluid_mixer",
        "pneumaticcraft:manual_compressor",
        "pneumaticcraft:air_compressor",
        "pneumaticcraft:minigun",
        "pneumaticcraft:empty_pcb_from_failed_pcb",
        "pneumaticcraft:jet_boots_upgrade_1",
        "movingelevators:button_block",
        "movingelevators:elevator_block",
        "movingelevators:display_block",
        "mekanism:mekasuit_helmet",
        "mekanism:mekasuit_bodyarmor",
        "mekanism:mekasuit_pants",
        "mekanism:mekasuit_boots",
        "tetra:flamberge_scroll",
        "tetra:katana_scroll",
        "reliquary:glowing_water_from_potion_vial",
        "tetra:crucible_scroll",
        "naturesaura:gold_fiber",
        "ars_nouveau:magebloom_fiber",
        "forbidden_arcanus:arcane_bone_meal",
        "enchantinginfuser:enchanting_infuser",
        "comforts:rope_and_nail",
        "enigmaticlegacy:xp_scroll",
        "enchantinginfuser:advanced_enchanting_infuser",
        "immersiveengineering:crafting/plate_aluminum_hammering",
        "thermal:machine_pulverizer",
        "thermal:machine_smelter",
        "thermal:machine_furnace",
        "refinedstorage:quartz_enriched_iron",
        "reliquary:glowing_bread",
        // "immersiveengineering:crafting/wirecoil_steel",
        // "immersiveengineering:crafting/wirecoil_redstone",
        "actuallyadditions:empty_cup",
        "actuallyadditions:ring",
        "actuallyadditions:coal_to_tiny",
        "actuallyadditions:charcoal_to_tiny",
        "actuallyadditions:engineers_goggles",
        "actuallyadditions:engineers_goggles_advanced",
        "actuallyadditions:lens_of_the_miner",
        "actuallyadditions:single_battery",
        "actuallyadditions:basic_coil",
        "actuallyadditions:double_battery",
        "actuallyadditions:triple_battery",
        "actuallyadditions:quadruple_battery",
        "actuallyadditions:quintuple_battery",
        "actuallyadditions:crusher",
        "actuallyadditions:crusher_double",
        "actuallyadditions:lava_factory_controller",
        "actuallyadditions:lava_factory_casing",
        "actuallyadditions:coal_generator",
        "actuallyadditions:ranged_collector",
    ];

    toRemove.forEach((recipeId) => {
        // console.log("Removing recipe:", recipeId);
        event.remove({ id: recipeId });
    });
});
