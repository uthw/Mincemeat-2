ServerEvents.highPriorityData((event) => {
    let tweak = {
        placement: {
            type: "minecraft:random_spread",
            salt: 9191766080,
            spacing: 45,
            separation: 25,
        },
    };

    event.addJson("aquamirae:worldgen/structure_set/ice_maze.json", tweak);
});
