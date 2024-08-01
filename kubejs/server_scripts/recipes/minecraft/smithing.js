ServerEvents.recipes((event) => {
    const changes = [
        [
            "iceandfire:ghost_sword",
            "outer_end:sinker_dagger",
            "iceandfire:ghost_ingot",
        ],
        [
            "enigmaticlegacy:etherium_helmet",
            "deep_aether:stratus_helmet",
            "enigmaticlegacy:etherium_ingot",
        ],
        [
            "enigmaticlegacy:etherium_chestplate",
            "deep_aether:stratus_chestplate",
            "enigmaticlegacy:etherium_ingot",
        ],
        [
            "enigmaticlegacy:etherium_leggings",
            "deep_aether:stratus_leggings",
            "enigmaticlegacy:etherium_ingot",
        ],
        [
            "enigmaticlegacy:etherium_boots",
            "deep_aether:stratus_boots",
            "enigmaticlegacy:etherium_ingot",
        ],
    ];

    changes.forEach((change) => {
        event.smithing(change[0], change[1], change[2]);
    });
});
