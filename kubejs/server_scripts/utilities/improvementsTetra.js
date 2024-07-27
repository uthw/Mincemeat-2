ServerEvents.highPriorityData((event) => {
    let tweaks = [
        [
            {
                path: "sword/shared_blade/valkyrie",
                key: "aetheric_tetranomicon/valkyrie_whole",
                effects: {
                    "aetheric_tetranomicon:valkyrie": 1,
                },
                attributes: {
                    "forge:reach_distance": 0.75,
                    "forge:attack_range": 0.75,
                },
            },
        ],
        [
            {
                path: "single/shared_head/valkyrie",
                key: "aetheric_tetranomicon/valkyrie_whole",
                effects: {
                    "aetheric_tetranomicon:valkyrie": 1,
                },
                attributes: {
                    "forge:reach_distance": 0.75,
                    "forge:attack_range": 0.75,
                },
            },
        ],
        [
            {
                path: "double/shared_head/valkyrie",
                key: "aetheric_tetranomicon/valkyrie_half",
                effects: {
                    "aetheric_tetranomicon:valkyrie": 1,
                },
                attributes: {
                    "forge:reach_distance": 0.375,
                    "forge:attack_range": 0.375,
                },
            },
        ],
    ];

    event.addJson(`tetra:improvements/${tweaks[0].path}`, tweak);
});
