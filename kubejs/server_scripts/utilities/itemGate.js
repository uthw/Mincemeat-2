const restrictions = [
    ["waystones:waystone", "nether_access"],
    ["waystones:mossy_waystone", "nether_access"],
    ["waystones:sandy_waystone", "nether_access"],
    ["waystones:deepslate_waystone", "nether_access"],
    ["waystones:blackstone_waystone", "nether_access"],
    ["waystones:end_stone_waystone", "nether_access"],
];

PlayerEvents.inventoryChanged((event) => {
    if (event.player.isCreative()) return;

    restrictions.forEach((restriction) => {
        if (event.item.id === restriction[0]) {
            event.player.inventory.clear(restriction[0]);
            event.player.tell(
                Text.red(
                    "The Waystone disintegrates in your hands, as you lack the knowledge to use it.",
                ),
            );
        }
    });
});