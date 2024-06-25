// Recipe ids in toRemove are disabled, add an item here if you want to disable crafting it a certain way but not others, for example making brass in a crafting grid with iron and copper

ServerEvents.recipes((event) => {
    console.log("Event handler called"); // Add a log statement

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
    ];

    toRemove.forEach((recipeId) => {
        console.log("Removing recipe:", recipeId); // Add a log statement
        event.remove({ id: recipeId });
    });
});
