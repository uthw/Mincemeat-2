const restrictions = [
    ["waystones:waystone", "nether_access"],
    ["waystones:mossy_waystone", "nether_access"],
    ["waystones:sandy_waystone", "nether_access"],
    ["waystones:deepslate_waystone", "nether_access"],
    ["waystones:blackstone_waystone", "nether_access"],
    ["waystones:end_stone_waystone", "nether_access"],
];

restrictions.forEach((restriction) => { 
    PlayerEvents.inventoryChanged(restriction[0], (event) => {
        if (event.player.isCreative()) return;

        if (event.player.stages.has(restriction[1])) return;

        event.player.inventory.clear(restriction[0]);
        event.player.tell(
            Text.red(
                "The Waystone disintegrates in your hands, as you lack the knowledge to use it.",
            ),
        );
    });
});