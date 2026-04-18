BlockEvents.modification((event) => {
    const waystones = [
        "waystones:waystone",
        "waystones:mossy_waystone",
        "waystones:sandy_waystone",
        "waystones:deepslate_waystone",
        "waystones:blackstone_waystone",
        "waystones:end_stone_waystone",
    ]

    waystones.forEach((waystone) => {
        event.modify(waystone, (block) => {
            block.setDestroySpeed(50);
            block.setExplosionResistance(1200);
            block.setRequiresTool(true);
        });
    });
});