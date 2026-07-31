LootJS.modifiers((event) => {
    event
        .addLootTableModifier("idas:chests/tinkers_workshop/tinkers_workshop_vault")
        .removeLoot("create:brass_ingot")
        .removeLoot("create:brass_hand")
        .removeLoot("create:brass_nugget");
    
    event
        .addLootTableModifier("idas:chests/tinkers_citadel/tinkers_citadel_vault")
        .removeLoot("create:brass_ingot")
        .removeLoot("create:brass_hand")
        .removeLoot("create:brass_nugget");
    
    event.addLootTableModifier("integrated_stronghold:chests/secret_lab")
        .removeLoot("create:brass_hand");
});
