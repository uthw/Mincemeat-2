ServerEvents.highPriorityData((event) => {
    // let tweak = {
    //     type: "minecraft:block",
    //     pools: [
    //         {
    //             rolls: 1,
    //             entries: [
    //                 {
    //                     type: "minecraft:item",
    //                     name: "forbidden_arcanus:spawner_scrap",
    //                 },
    //             ],
    //         },
    //     ],
    // };

    // event.addJson("forbidden_arcanus:loot_tables/blocks/additions.json", tweak);

    let tweak = {
        type: "no_loot_type",
        chance: 0.0001,
        conditions: [
            {
                condition: "minecraft:inverted",
                term: {
                    condition: "minecraft:match_tool",
                    predicate: {
                        enchantments: [
                            {
                                enchantment: "minecraft:silk_touch",
                                levels: {
                                    min: 2,
                                },
                            },
                        ],
                    },
                },
            },
            {
                condition: "forge:loot_table_id",
                loot_table_id: "minecraft:blocks/spawner",
            },
        ],
        loot_addition: "forbidden_arcanus:blocks/additions/spawner_additions",
    };

    event.addJson(
        "forbidden_arcanus:loot_modifiers/spawner_additions.json",
        tweak
    );
});
