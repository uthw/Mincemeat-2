ServerEvents.recipes((event) => {
    const changes = [
        [
            "iceandfire:ghost_sword",
            "outer_end:sinker_dagger",
            "iceandfire:ghost_ingot",
        ],
        [
            "enigmaticlegacy:etherium_helmet",
            "deeperdarker:warden_helmet",
            "enigmaticlegacy:etherium_ingot",
        ],
        [
            "enigmaticlegacy:etherium_chestplate",
            "deeperdarker:warden_chestplate",
            "enigmaticlegacy:etherium_ingot",
        ],
        [
            "enigmaticlegacy:etherium_leggings",
            "deeperdarker:warden_leggings",
            "enigmaticlegacy:etherium_ingot",
        ],
        [
            "enigmaticlegacy:etherium_boots",
            "deeperdarker:warden_boots",
            "enigmaticlegacy:etherium_ingot",
        ],
    ];

    changes.forEach((change) => {
        event.smithing(change[0], change[1], change[2]);
    });
});
