LootJS.modifiers((event) => {
    event.addBlockLootModifier("waystones:waystone").removeLoot(/./);
    event.addBlockLootModifier("waystones:mossy_waystone").removeLoot(/./);
    event.addBlockLootModifier("waystones:sandy_waystone").removeLoot(/./);
});
