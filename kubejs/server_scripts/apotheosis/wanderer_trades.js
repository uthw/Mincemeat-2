ServerEvents.highPriorityData((event) => {
    let tweaks = [
        {
            path: "arachnids_fear",
            conditions: [
                {
                    type: "apotheosis:module",
                    module: "village",
                },
            ],
            type: "apotheosis:basic_trade",
            rare: true,
            input_1: {
                item: "iceandfire:dragonbone_sword",
                count: 1,
            },
            input_2: {
                item: "minecraft:emerald",
                count: 45,
            },
            output: {
                item: "iceandfire:dragonbone_sword",
                count: 1,
                nbt: {
                    Enchantments: [
                        {
                            lvl: 10,
                            id: "minecraft:bane_of_arthropods",
                        },
                        {
                            lvl: 1,
                            id: "minecraft:mending",
                        },
                        {
                            lvl: 5,
                            id: "minecraft:looting",
                        },
                        {
                            lvl: 5,
                            id: "minecraft:unbreaking",
                        },
                        {
                            lvl: 5,
                            id: "minecraft:fire_aspect",
                        },
                    ],
                    display: {
                        Name: '{"translate":"name.apotheosis.merch_spider_sword", "italic": false, "color": "#C11101"}',
                    },
                    Damage: 0,
                },
            },
            max_trades: 1,
            xp: 500,
            price_mult: 1.0,
        },
        {
            path: "bonesplitter",
            conditions: [
                {
                    type: "apotheosis:module",
                    module: "village",
                },
            ],
            type: "apotheosis:basic_trade",
            rare: true,
            input_1: {
                item: "forbidden_arcanus:reinforced_deorum_axe",
                count: 1,
            },
            input_2: {
                item: "minecraft:emerald",
                count: 64,
            },
            output: {
                item: "forbidden_arcanus:reinforced_deorum_axe",
                count: 1,
                nbt: {
                    Enchantments: [
                        {
                            lvl: 10,
                            id: "minecraft:sharpness",
                        },
                        {
                            lvl: 1,
                            id: "minecraft:mending",
                        },
                        {
                            lvl: 2,
                            id: "apotheosis:scavenger",
                        },
                        {
                            lvl: 2,
                            id: "apotheosis:capturing",
                        },
                        {
                            lvl: 5,
                            id: "minecraft:looting",
                        },
                        {
                            lvl: 3,
                            id: "minecraft:unbreaking",
                        },
                    ],
                    display: {
                        Name: '{"translate":"name.apotheosis.merch_axe2", "italic": false, "color": "#9AB091"}',
                    },
                    Damage: 0,
                },
            },
            max_trades: 1,
            xp: 500,
            price_mult: 1.0,
        },
        {
            path: "captive_dreams",
            conditions: [
                {
                    type: "apotheosis:module",
                    module: "village",
                },
            ],
            type: "apotheosis:basic_trade",
            rare: true,
            input_1: {
                item: "blue_skies:charoite_sword",
                count: 1,
            },
            input_2: {
                item: "minecraft:emerald",
                count: 45,
            },
            output: {
                item: "blue_skies:charoite_sword",
                count: 1,
                nbt: {
                    Enchantments: [
                        {
                            lvl: 5,
                            id: "minecraft:sharpness",
                        },
                        {
                            lvl: 1,
                            id: "minecraft:mending",
                        },
                        {
                            lvl: 4,
                            id: "minecraft:looting",
                        },
                        {
                            lvl: 5,
                            id: "minecraft:unbreaking",
                        },
                        {
                            lvl: 5,
                            id: "apotheosis:capturing",
                        },
                    ],
                    display: {
                        Name: '{"translate":"name.apotheosis.merch_sword", "italic": false, "color": "#ADD8E6"}',
                    },
                    Damage: 0,
                },
            },
            max_trades: 1,
            xp: 500,
            price_mult: 1.0,
        },
        {
            path: "eternal_vigilance",
            conditions: [
                {
                    type: "apotheosis:module",
                    module: "village",
                },
            ],
            type: "apotheosis:basic_trade",
            rare: true,
            input_1: {
                item: "aether:zanite_gemstone",
                count: 64,
            },
            input_2: {
                item: "minecraft:phantom_membrane",
                count: 32,
            },
            output: {
                item: "aether:zanite_sword",
                count: 1,
                nbt: {
                    Enchantments: [
                        {
                            lvl: 10,
                            id: "minecraft:sharpness",
                        },
                        {
                            lvl: 5,
                            id: "apotheosis:life_mending",
                        },
                        {
                            lvl: 5,
                            id: "minecraft:looting",
                        },
                        {
                            lvl: 5,
                            id: "minecraft:unbreaking",
                        },
                        {
                            lvl: 5,
                            id: "apotheosis:scavenger",
                        },
                    ],
                    display: {
                        Name: '{"translate":"name.apotheosis.vigilance", "italic": false, "color": "#1ABBE0"}',
                    },
                    Damage: 0,
                },
            },
            max_trades: 1,
            xp: 1000,
            price_mult: 0.0,
        },
        {
            path: "greatplate_of_eternity",
            conditions: [
                {
                    type: "apotheosis:module",
                    module: "village",
                },
            ],
            type: "apotheosis:basic_trade",
            rare: true,
            input_1: {
                item: "eidolon:bonelord_chestplate",
                count: 1,
            },
            input_2: {
                item: "minecraft:emerald",
                count: 55,
            },
            output: {
                item: "eidolon:bonelord_chestplate",
                count: 1,
                nbt: {
                    Enchantments: [
                        {
                            lvl: 5,
                            id: "minecraft:protection",
                        },
                        {
                            lvl: 5,
                            id: "minecraft:projectile_protection",
                        },
                        {
                            lvl: 1,
                            id: "minecraft:mending",
                        },
                        {
                            lvl: 5,
                            id: "minecraft:unbreaking",
                        },
                        {
                            lvl: 2,
                            id: "apotheosis:berserkers_fury",
                        },
                    ],
                    display: {
                        Name: '{"translate":"name.apotheosis.merch_chest", "italic": false, "color": "#1ABBE0"}',
                    },
                    Damage: 0,
                },
            },
            max_trades: 1,
            xp: 500,
            price_mult: 1.0,
        },
        {
            path: "rune_forged_greaves",
            conditions: [
                {
                    type: "apotheosis:module",
                    module: "village",
                },
            ],
            type: "apotheosis:basic_trade",
            rare: true,
            input_1: {
                item: "ars_nouveau:battlemage_boots",
                count: 1,
            },
            input_2: {
                item: "minecraft:emerald",
                count: 45,
            },
            output: {
                item: "ars_nouveau:battlemage_boots",
                count: 1,
                nbt: {
                    Enchantments: [
                        {
                            lvl: 5,
                            id: "minecraft:protection",
                        },
                        {
                            lvl: 1,
                            id: "minecraft:mending",
                        },
                        {
                            lvl: 5,
                            id: "minecraft:unbreaking",
                        },
                        {
                            lvl: 1,
                            id: "apotheosis:stable_footing",
                        },
                        {
                            lvl: 5,
                            id: "minecraft:feather_falling",
                        },
                    ],
                    display: {
                        Name: '{"translate":"name.apotheosis.merch_boots", "italic": false, "color": "#1ABBE0"}',
                    },
                    Damage: 0,
                },
            },
            max_trades: 1,
            xp: 500,
            price_mult: 1.0,
        },
        {
            path: "stonebreaker",
            conditions: [
                {
                    type: "apotheosis:module",
                    module: "village",
                },
            ],
            type: "apotheosis:basic_trade",
            rare: true,
            input_1: {
                item: "aquaculture:neptunium_pickaxe",
                count: 1,
            },
            input_2: {
                item: "minecraft:emerald",
                count: 45,
            },
            output: {
                item: "aquaculture:neptunium_pickaxe",
                count: 1,
                nbt: {
                    Enchantments: [
                        {
                            lvl: 5,
                            id: "minecraft:efficiency",
                        },
                        {
                            lvl: 1,
                            id: "minecraft:mending",
                        },
                        {
                            lvl: 4,
                            id: "minecraft:fortune",
                        },
                        {
                            lvl: 5,
                            id: "minecraft:unbreaking",
                        },
                        {
                            lvl: 4,
                            id: "apotheosis:earths_boon",
                        },
                    ],
                    display: {
                        Name: '{"translate":"name.apotheosis.merch_pick", "italic": false, "color": "#1ABBE0"}',
                    },
                    Damage: 0,
                },
            },
            max_trades: 1,
            xp: 500,
            price_mult: 1.0,
        },
        {
            path: "thunder_forged_legguards",
            conditions: [
                {
                    type: "apotheosis:module",
                    module: "village",
                },
            ],
            type: "apotheosis:basic_trade",
            rare: true,
            input_1: {
                item: "blue_skies:diopside_leggings",
                count: 1,
            },
            input_2: {
                item: "minecraft:emerald",
                count: 55,
            },
            output: {
                item: "blue_skies:diopside_leggings",
                count: 1,
                nbt: {
                    Enchantments: [
                        {
                            lvl: 5,
                            id: "minecraft:protection",
                        },
                        {
                            lvl: 1,
                            id: "minecraft:mending",
                        },
                        {
                            lvl: 5,
                            id: "minecraft:unbreaking",
                        },
                        {
                            lvl: 10,
                            id: "apotheosis:rebounding",
                        },
                    ],
                    display: {
                        Name: '{"translate":"name.apotheosis.merch_legs", "italic": false, "color": "#1ABBE0"}',
                    },
                    Damage: 0,
                },
            },
            max_trades: 1,
            xp: 500,
            price_mult: 1.0,
        },
        {
            path: "timeworn_visage",
            conditions: [
                {
                    type: "apotheosis:module",
                    module: "village",
                },
            ],
            type: "apotheosis:basic_trade",
            rare: true,
            input_1: {
                item: "betternether:nether_ruby_helmet",
                count: 1,
            },
            input_2: {
                item: "minecraft:emerald",
                count: 45,
            },
            output: {
                item: "betternether:nether_ruby_helmet",
                count: 1,
                nbt: {
                    Enchantments: [
                        {
                            lvl: 5,
                            id: "minecraft:protection",
                        },
                        {
                            lvl: 1,
                            id: "minecraft:mending",
                        },
                        {
                            lvl: 5,
                            id: "minecraft:unbreaking",
                        },
                        {
                            lvl: 5,
                            id: "minecraft:respiration",
                        },
                        {
                            lvl: 1,
                            id: "minecraft:aqua_affinity",
                        },
                    ],
                    display: {
                        Name: '{"translate":"name.apotheosis.merch_helm", "italic": false, "color": "#1ABBE0"}',
                    },
                    Damage: 0,
                },
            },
            max_trades: 1,
            xp: 500,
            price_mult: 1.0,
        },
        {
            path: "treecapitator",
            conditions: [
                {
                    type: "apotheosis:module",
                    module: "village",
                },
            ],
            type: "apotheosis:basic_trade",
            rare: true,
            input_1: {
                item: "minecraft:netherite_axe",
                count: 1,
            },
            input_2: {
                item: "minecraft:emerald",
                count: 45,
            },
            output: {
                item: "minecraft:netherite_axe",
                count: 1,
                nbt: {
                    Enchantments: [
                        {
                            lvl: 10,
                            id: "minecraft:efficiency",
                        },
                        {
                            lvl: 1,
                            id: "minecraft:mending",
                        },
                        {
                            lvl: 1,
                            id: "minecraft:silk_touch",
                        },
                        {
                            lvl: 5,
                            id: "minecraft:unbreaking",
                        },
                        {
                            lvl: 1,
                            id: "apotheosis:chainsaw",
                        },
                    ],
                    display: {
                        Name: '{"translate":"name.apotheosis.merch_axe",  "italic": false, "color": "#608F07"}',
                    },
                    Damage: 0,
                },
            },
            max_trades: 1,
            xp: 500,
            price_mult: 1.0,
        },
        {
            path: "affix/diamond_epic",
            conditions: [
                {
                    type: "apotheosis:module",
                    module: "adventure",
                },
            ],
            type: "apotheosis:affix",
            rare: true,
            input_1: {
                item: "minecraft:diamond",
                count: 25,
            },
            input_2: {
                item: "minecraft:emerald",
                count: 50,
            },
            rarities: "apotheosis:rare",
            entries: [
                "apotheosis:overworld/bow",
                "apotheosis:the_nether/diamond_axe",
                "apotheosis:the_nether/diamond_boots",
                "apotheosis:the_nether/diamond_chestplate",
                "apotheosis:the_nether/diamond_helmet",
                "apotheosis:the_nether/diamond_leggings",
                "apotheosis:the_nether/diamond_pickaxe",
                "apotheosis:the_nether/diamond_shovel",
                "apotheosis:the_nether/diamond_sword",
            ],
        },
        {
            path: "affix/iron_rare",
            conditions: [
                {
                    type: "apotheosis:module",
                    module: "adventure",
                },
            ],
            type: "apotheosis:affix",
            rare: false,
            input_1: {
                item: "minecraft:iron_ingot",
                count: 15,
            },
            input_2: {
                item: "minecraft:emerald",
                count: 25,
            },
            rarities: "apotheosis:uncommon",
            entries: [
                "apotheosis:overworld/bow",
                "apotheosis:overworld/iron_axe",
                "apotheosis:overworld/iron_boots",
                "apotheosis:overworld/iron_chestplate",
                "apotheosis:overworld/iron_helmet",
                "apotheosis:overworld/iron_leggings",
                "apotheosis:overworld/iron_pickaxe",
                "apotheosis:overworld/iron_shovel",
                "apotheosis:overworld/iron_sword",
            ],
        },
    ];
    tweaks.forEach((tweak) => {
        event.addJson(`apotheosis:wanderer_trades/${tweak.path}.json`, tweak);
        console.log(`tweak.path: ${tweak.path}`);
    });
});
