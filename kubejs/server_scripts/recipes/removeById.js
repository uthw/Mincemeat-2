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
    ];

    toRemove.forEach((recipeId) => {
        console.log("Removing recipe:", recipeId); // Add a log statement
        event.remove({ id: recipeId });
    });
});
