// TODO Uncomment this and change the structure names so that they don't crash the game

ServerEvents.highPriorityData((event) => {
    let tweak = {
        structures: [
            {
                structure: "aquamirae:surface/arch",
                weight: 5,
            },
            {
                structure: "aquamirae:surface/spiral",
                weight: 1,
            },
        ],
        placement: {
            type: "minecraft:random_spread",
            salt: 9191766080,
            spacing: 60,
            separation: 30,
        },
    };

    event.addJson("aquamirae:worldgen/structure_set/ice_maze.json", tweak);
});
