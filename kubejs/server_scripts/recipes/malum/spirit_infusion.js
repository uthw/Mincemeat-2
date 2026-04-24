ServerEvents.recipes(event => {
    // Lazy

    event.custom({
        type: "malum:spirit_infusion",
        extra_items: [
            {
                count: 4,
                item: "forbidden_arcanus:xpetrified_orb",
            },
            {
                count: 4,
                item: "malum:alchemical_calx",
            },
        ],
        input: {
            count: 1,
            item: "malum:gilded_ring",
        },
        output: {
            item: "malum:ring_of_arcane_prowess",
        },
        spirits: [
            {
                type: "arcane",
                count: 32,
            },
        ],
    });

    event.custom({
        type: "malum:spirit_infusion",
        extra_items: [
            {
                count: 2,
                item: "forbidden_arcanus:xpetrified_orb",
            },
            {
                count: 1,
                item: "malum:hex_ash",
            },
        ],
        input: {
            count: 2,
            item: "malum:runewood_planks",
        },
        output: {
            item: "malum:brilliant_obelisk",
        },
        spirits: [
            {
                type: "aerial",
                count: 16,
            },
            {
                type: "aqueous",
                count: 8,
            },
        ],
    });

    event.custom({
        type: "malum:spirit_infusion",
        extra_items: [],
        input: {
            count: 1,
            item: "thermal:sulfur",
        },
        output: {
            item: "malum:hex_ash",
        },
        spirits: [
            {
                type: "arcane",
            },
        ],
    });
})