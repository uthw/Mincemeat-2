ServerEvents.recipes((event) => {
    const changes = [
        [
            "iceandfire:ghost_sword",
            "betterend:aeternium_sword",
            "iceandfire:ghost_ingot",
        ],
        [
            "enigmaticlegacy:etherium_helmet",
            "betterend:aeternium_helmet",
            "enigmaticlegacy:etherium_ingot",
        ],
        [
            "enigmaticlegacy:etherium_chestplate",
            "betterend:aeternium_chestplate",
            "enigmaticlegacy:etherium_ingot",
        ],
        [
            "enigmaticlegacy:etherium_leggings",
            "betterend:aeternium_leggings",
            "enigmaticlegacy:etherium_ingot",
        ],
        [
            "enigmaticlegacy:etherium_boots",
            "betterend:aeternium_boots",
            "enigmaticlegacy:etherium_ingot",
        ],
    ];

    changes.forEach((change) => {
        event.smithing(change[0], change[1], change[2]);
    });
});
