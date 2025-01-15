ServerEvents.highPriorityData((event) => {
    let tweak = {
        structures: [
            {
                structure: "aquamirae:ice_maze/common",
                weight: 5,
            },
            {
                structure: "aquamirae:ice_maze/arch",
                weight: 2,
            },
            {
                structure: "aquamirae:ice_maze/spiral",
                weight: 1,
            },
        ],
        placement: {
            type: "minecraft:random_spread",
            salt: 9191766080,
            spacing: 45,
            separation: 25,
        },
    };

    event.addJson("aquamirae:worldgen/structure_set/ice_maze.json", tweak);
});
