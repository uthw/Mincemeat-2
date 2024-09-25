JEIEvents.information((event) => {
    let additions = [
        {
            item: "alexsmobs:ambergris",
            desc: "Obtained by returning beached cachalot whales into the water without harming them.",
        },
        {
            item: "jumbofurnace:jumbo_furnace",
            desc: "Can be obtained as an item by shift-right clicking a Jumbo Furnace with shears.",
        },
        {
            item: "eidolon:soul_shard",
            desc: "Dropped by undead mobs when a Crystallization Ritual is activated nearby.",
        },
        {
            item: "eidolon:unholy_symbol",
            desc: "Obtained after completing enough chants. See quests for more information.",
        },
        {
            item: "forbidden_arcanus:soulless_sand",
            desc: "Soul Sand turns into this item when a Soul Extractor is used on it.",
        },
        {
            item: "forbidden_arcanus:growing_edelwood",
            desc: "Use a Corrupt Soul on a planted oak sapling.",
        },
        {
            item: "forbidden_arcanus:soul",
            desc: "Obtained when a Soul Extractor is used on Soul Sand.",
        },
        {
            item: "create:scoria",
            desc: "Created when flowing lava collides with a chocolate source block."
        },
        {
            item: "create:limestone",
            desc: "Created when flowing lava collides with a honey source block."
        }
    ];

    additions.forEach((addition) => {
        event.addItem(addition.item, [addition.desc]);
    });
});
