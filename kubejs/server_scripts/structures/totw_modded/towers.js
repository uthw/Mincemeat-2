ServerEvents.highPriorityData((event) => {
    // make towers more common in the overworld

    let newData = {
        structures: [
            {
                structure: "totw_modded:regular",
                weight: 1,
            },
            {
                structure: "totw_modded:desert",
                weight: 1,
            },
            {
                structure: "totw_modded:ice",
                weight: 1,
            },
            {
                structure: "totw_modded:derelict",
                weight: 1,
            },
            {
                structure: "totw_modded:derelict_grass",
                weight: 1,
            },
            {
                structure: "totw_modded:jungle",
                weight: 1,
            },
            {
                structure: "totw_modded:badlands",
                weight: 1,
            },
            {
                structure: "totw_modded:ocean_warm",
                weight: 1,
            },
            {
                structure: "totw_modded:ocean",
                weight: 1,
            },
        ],
        placement: {
            type: "minecraft:random_spread",
            spacing: 50, // 45
            separation: 15, // 25
            salt: 293423488,
        },
    };

    event.addJson("totw_modded:worldgen/structure_set/overworld.json", newData);
});
