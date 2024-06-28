ServerEvents.highPriorityData((event) => {
    let tweak = {
        structures: [
            {
                structure: "cataclysm:cursed_pyramid",
                weight: 1,
            },
        ],
        placement: {
            type: "cataclysm:cataclysm_random_spread",
            salt: 9167234589,
            spacing: 160, // 80
            separation: 75, // 50
            super_exclusion_zone: {
                chunk_count: 10,
                other_set: "#cataclysm:cursed_pyramid_avoid",
            },
        },
    };

    event.addJson(
        "cataclysm:worldgen/structure_set/cursed_pyramid.json",
        tweak
    );
});
