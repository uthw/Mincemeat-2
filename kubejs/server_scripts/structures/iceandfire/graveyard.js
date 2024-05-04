ServerEvents.highPriorityData((event) => {
    let graveyardTweak = {
        placement: {
            type: "minecraft:random_spread",
            salt: 44712661,
            separation: 24,
            spacing: 48,
        },
        structures: [
            {
                structure: "iceandfire:graveyard",
                weight: 1,
            },
        ],
    };

    event.addJson(
        "iceandfire:worldgen/structure_set/graveyard.json",
        graveyardTweak
    );
});
