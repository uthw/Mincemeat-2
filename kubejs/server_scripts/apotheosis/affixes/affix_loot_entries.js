// TODO finish this when there are more RPG mods

ServerEvents.highPriorityData((event) => {
    let equipment = [
        {
            type: "BOW",
            entries: [
                {
                    dimensions: ["aether:the_aether"],
                    item: "aether:phoenix_bow",
                    max_rarity: "epic",
                    min_rarity: "common",
                    quality: 3,
                    weight: 25,
                },
                {
                    dimensions: [
                        "minecraft:overworld",
                        "aether:the_aether",
                        "minecraft:the_nether",
                        "minecraft:the_end",
                    ],
                    item: "minecraft:bow",
                    weight: 50,
                    max_rarity: "uncommon",
                    min_rarity: "common",
                    quality: 3,
                    weight: 50,
                },
                {
                    dimensions: ["minecraft:overworld"],
                    item: "botania:livingwood_bow",
                    weight: 20,
                    max_rarity: "uncommon",
                    min_rarity: "common",
                    quality: 3,
                    weight: 50,
                },
                {
                    dimensions: ["minecraft:overworld"],
                    item: "botania:crystal_bow",
                    weight: 20,
                    max_rarity: "uncommon",
                    min_rarity: "common",
                    quality: 3,
                    weight: 50,
                },
                {
                    dimensions: [
                        "minecraft:overworld",
                        "aether:the_aether",
                        "minecraft:the_nether",
                        "minecraft:the_end",
                    ],
                    item: "minecraft:crossbow",
                    weight: 50,
                    max_rarity: "uncommon",
                    min_rarity: "common",
                    quality: 3,
                    weight: 50,
                },
            ],

            // TODO add Infernal Expansion, Botania, any other mods with bows
        },
        {
            type: "ARMOR",
            entries: [
                { item: "minecraft:iron_boots" },
                { item: "minecraft:iron_leggings" },
                { item: "minecraft:iron_helmet" },
                { item: "minecraft:iron_chestplate" },

                { item: "minecraft:diamond_helmet", weight: 25, quality: 5 },
                {
                    item: "minecraft:diamond_chestplate",
                    weight: 25,
                    quality: 5,
                },
                {
                    item: "minecraft:diamond_leggings",
                    weight: 25,
                    quality: 5,
                },
                {
                    item: "minecraft:diamond_boots",
                    weight: 25,
                    quality: 5,
                },

                {
                    item: "minecraft:netherite_helmet",
                    weight: 3,
                    quality: 6,
                },
                {
                    item: "minecraft:netherite_chestplate",
                    weight: 3,
                    quality: 6,
                },
                {
                    item: "minecraft:netherite_leggings",
                    weight: 3,
                    quality: 6,
                },
                {
                    item: "minecraft:netherite_boots",
                    weight: 3,
                    quality: 6,
                },

                { item: "mekanism:lapis_lazuli_leggings", weight: 15 },
                { item: "mekanism:lapis_lazuli_boots", weight: 15 },
                { item: "mekanism:lapis_lazuli_helmet", weight: 15 },
                { item: "mekanism:lapis_lazuli_chestplate", weight: 15 },

                { item: "mekanism:bronze_leggings", weight: 15 },
                { item: "mekanism:bronze_boots", weight: 15 },
                { item: "mekanism:bronze_helmet", weight: 15 },
                { item: "mekanism:bronze_chestplate", weight: 15 },

                {
                    item: "mekanismtools:refined_glowstone_helmet",
                    weight: 5,
                    quality: 6,
                },
                {
                    item: "mekanismtools:refined_glowstone_chestplate",
                    weight: 5,
                    quality: 6,
                },
                {
                    item: "mekanismtools:refined_glowstone_leggings",
                    weight: 5,
                    quality: 6,
                },
                {
                    item: "mekanismtools:refined_glowstone_boots",
                    weight: 5,
                    quality: 6,
                },

                { item: "eidolon:silver_helmet", weight: 30 },
                {
                    item: "eidolon:silver_chestplate",
                    weight: 30,
                },
                { item: "eidolon:silver_leggings", weight: 30 },
                { item: "eidolon:silver_boots", weight: 30 },

                { item: "botania:manasteel_helmet", weight: 25, quality: 4.5 },
                {
                    item: "botania:manasteel_chestplate",
                    weight: 25,
                    quality: 4.5,
                },
                {
                    item: "botania:manasteel_leggings",
                    weight: 25,
                    quality: 4.5,
                },
                { item: "botania:manasteel_boots", weight: 25, quality: 4.5 },

                { item: "thermal:diving_helmet", weight: 18 },
                { item: "thermal:diving_chestplate", weight: 18 },
                { item: "thermal:diving_leggings", weight: 18 },
                { item: "thermal:diving_boots", weight: 18 },

                { item: "undergarden:cloggrum_helmet", weight: 10 },
                { item: "undergarden:cloggrum_chestplate", weight: 10 },
                { item: "undergarden:cloggrum_leggings", weight: 10 },
                { item: "undergarden:cloggrum_boots", weight: 10 },

                { item: "ars_nouveau:sorceror_hood", weight: 30 },
                { item: "ars_nouveau:sorceror_robes", weight: 30 },
                { item: "ars_nouveau:sorceror_leggings", weight: 30 },
                { item: "ars_nouveau:sorceror_boots", weight: 30 },

                { item: "ars_nouveau:arcanist_hood", weight: 15, quality: 4 },
                { item: "ars_nouveau:arcanist_robes", weight: 15, quality: 4 },
                {
                    item: "ars_nouveau:arcanist_leggings",
                    weight: 15,
                    quality: 4,
                },
                { item: "ars_nouveau:arcanist_boots", weight: 15, quality: 4 },

                { item: "ars_nouveau:battlemage_hood", weight: 4, quality: 5 },
                { item: "ars_nouveau:battlemage_robes", weight: 4, quality: 5 },
                {
                    item: "ars_nouveau:battlemage_leggings",
                    weight: 4,
                    quality: 5,
                },
                { item: "ars_nouveau:battlemage_boots", weight: 4, quality: 5 },

                {
                    item: "irons_spellbooks:wandering_magician_helmet",
                },
                {
                    item: "irons_spellbooks:wandering_magician_chestplate",
                },
                {
                    item: "irons_spellbooks:wandering_magician_leggings",
                },
                {
                    item: "irons_spellbooks:wandering_magician_boots",
                },

                {
                    item: "create:copper_diving_helmet",
                },

                // { item: "betternether:cincinnasite_helmet", weight: 15 },
                // { item: "betternether:cincinnasite_chestplate", weight: 15 },
                // { item: "betternether:cincinnasite_leggings", weight: 15 },
                // { item: "betternether:cincinnasite_boots", weight: 15 },

                // { item: "betternether:nether_ruby_helmet", weight: 10 },
                // { item: "betternether:nether_ruby_chestplate", weight: 10 },
                // { item: "betternether:nether_ruby_leggings", weight: 10 },
                // { item: "betternether:nether_ruby_boots", weight: 10 },

                { item: "galosphere:sterling_helmet", weight: 18 },
                { item: "galosphere:sterling_chestplate", weight: 18 },
                { item: "galosphere:sterling_leggings", weight: 18 },
                { item: "galosphere:sterling_boots", weight: 18 },

                // { item: "betternether:flaming_ruby_helmet", weight: 4 },
                // { item: "betternether:flaming_ruby_chestplate", weight: 4 },
                // { item: "betternether:flaming_ruby_leggings", weight: 4 },
                // { item: "betternether:flaming_ruby_boots", weight: 4 },

                { item: "autumnity:snail_shell_chestplate", weight: 10 },
            ],
        },
        {
            type: "SHIELD",
            entries: [
                { item: "minecraft:shield", weight: 100 },
                { item: "spartanshields:iron_basic_shield", weight: 20 },
                { item: "spartanshields:diamond_basic_shield", weight: 20 },
                {
                    item: "spartanshields:netherite_basic_shield",
                    weight: 10,
                    quality: 5,
                },
                { item: "spartanshields:copper_basic_shield", weight: 20 },
                { item: "spartanshields:bronze_basic_shield", weight: 10 },
                { item: "spartanshields:steel_basic_shield", weight: 20 },
                { item: "spartanshields:silver_basic_shield", weight: 20 },
                { item: "spartanshields:lead_basic_shield", weight: 20 },
                { item: "spartanshields:nickel_basic_shield", weight: 20 },
                { item: "spartanshields:invar_basic_shield", weight: 20 },
                { item: "spartanshields:constantan_basic_shield", weight: 20 },
                {
                    item: "spartanshields:manasteel_basic_shield",
                    weight: 20,
                    quality: 5,
                },
                {
                    item: "spartanshields:terrasteel_basic_shield",
                    weight: 10,
                    quality: 5,
                },
                {
                    item: "spartanshields:refined_glowstone_basic_shield",
                    weight: 10,
                },
                {
                    item: "spartanshields:signalum_basic_shield",
                    weight: 8,
                },
                {
                    item: "spartanshields:lumium_basic_shield",
                    weight: 8,
                },
                {
                    item: "spartanshields:enderium_basic_shield",
                    weight: 5,
                    quality: 5,
                },

                { item: "undergarden:cloggrum_shield", weight: 6 },
                { item: "alexsmobs:shield_of_the_deep", weight: 14 },
                { item: "endermanoverhaul_corrupted_shield", weight: 14 },
            ],
        },
        {
            type: "SWORD",
            entries: [
                { item: "minecraft:iron_sword" },
                { item: "minecraft:diamond_sword", weight: 25 },
                { item: "minecraft:netherite_sword", weight: 5, quality: 5 },

                { item: "iceandfire:silver_sword", weight: 38 },
                { item: "iceandfire:dragonbone_sword", weight: 4 },

                {
                    item: "forbidden_arcanus:reinforced_deorum_sword",
                    weight: 5,
                    quality: 6,
                },

                { item: "undergarden:cloggrum_sword", weight: 12 },
                { item: "undergarden:froststeel_sword", weight: 4 },

                { item: "mekanismtools:bronze_sword", weight: 25 },
                { item: "mekanismtools:refined_glowstone_sword", weight: 5 },
                { item: "mekanismtools:steel_sword", weight: 15 },

                { item: "botania:manasteel_sword", weight: 25 },

                // { item: "betternether:cincinnasite_sword", weight: 25 },
                // { item: "betternether:nether_ruby_sword", weight: 15 },
                // { item: "betternether:flaming_ruby_sword", weight: 4 },

                { item: "spartanweaponry:studded_club", weight: 25 },
                { item: "spartanweaponry:studded_cestus", weight: 25 },
            ],
        },
        {
            type: "AXE",
            entries: [
                { item: "minecraft:iron_axe" },
                { item: "minecraft:diamond_axe", weight: 25 },
                { item: "minecraft:netherite_axe", weight: 5, quality: 5 },

                { item: "iceandfire:silver_axe", weight: 38 },
                { item: "iceandfire:dragonbone_axe", weight: 4 },

                {
                    item: "forbidden_arcanus:reinforced_deorum_axe",
                    weight: 5,
                    quality: 6,
                },

                { item: "undergarden:cloggrum_axe", weight: 12 },
                { item: "undergarden:froststeel_axe", weight: 4 },

                { item: "mekanismtools:bronze_axe", weight: 25 },
                { item: "mekanismtools:refined_glowstone_axe", weight: 5 },
                { item: "mekanismtools:steel_axe", weight: 15 },

                { item: "botania:manasteel_axe", weight: 25 },

                // { item: "betternether:cincinnasite_axe", weight: 25 },
                // { item: "betternether:nether_ruby_axe", weight: 15 },
                // { item: "betternether:flaming_ruby_axe", weight: 4 },
            ],
        },
        {
            type: "PICKAXE",
            entries: [
                { item: "minecraft:iron_pickaxe" },
                { item: "minecraft:diamond_pickaxe", weight: 25 },
                { item: "minecraft:netherite_pickaxe", weight: 5, quality: 5 },

                { item: "iceandfire:silver_pickaxe", weight: 38 },
                { item: "iceandfire:dragonbone_pickaxe", weight: 4 },

                {
                    item: "forbidden_arcanus:reinforced_deorum_pickaxe",
                    weight: 5,
                    quality: 6,
                },

                { item: "undergarden:cloggrum_pickaxe", weight: 12 },
                { item: "undergarden:froststeel_pickaxe", weight: 4 },

                { item: "mekanismtools:bronze_pickaxe", weight: 25 },
                { item: "mekanismtools:refined_glowstone_pickaxe", weight: 5 },
                { item: "mekanismtools:steel_pickaxe", weight: 15 },

                { item: "botania:manasteel_pickaxe", weight: 25 },

                // { item: "betternether:cincinnasite_pickaxe", weight: 25 },
                // { item: "betternether:nether_ruby_pickaxe", weight: 15 },
                // { item: "betternether:flaming_ruby_pickaxe", weight: 4 },
            ],
        },
        {
            type: "SHOVEL",
            entries: [
                { item: "minecraft:iron_shovel" },
                { item: "minecraft:diamond_shovel", weight: 25 },
                { item: "minecraft:netherite_shovel", weight: 5, quality: 5 },

                { item: "iceandfire:silver_shovel", weight: 38 },
                { item: "iceandfire:dragonbone_shovel", weight: 4 },

                {
                    item: "forbidden_arcanus:reinforced_deorum_shovel",
                    weight: 5,
                    quality: 6,
                },

                { item: "undergarden:cloggrum_shovel", weight: 12 },
                { item: "undergarden:froststeel_shovel", weight: 4 },

                { item: "mekanismtools:bronze_shovel", weight: 25 },
                { item: "mekanismtools:refined_glowstone_shovel", weight: 5 },
                { item: "mekanismtools:steel_shovel", weight: 15 },

                { item: "botania:manasteel_shovel", weight: 25 },

                // { item: "betternether:cincinnasite_shovel", weight: 25 },
                // { item: "betternether:nether_ruby_shovel", weight: 15 },
                // { item: "betternether:flaming_ruby_shovel", weight: 4 },
            ],
        },
    ];

    // For Spartan Weaponry items
    let weaponTypes = [
        "dagger",
        "longsword",
        "katana",
        "saber",
        "rapier",
        "greatsword",
        "battle_hammer",
        "warhammer",
        "spear",
        "halberd",
        "pike",
        "lance",
        // "throwing_knife",
        // "tomahawk",
        // "javelin",
        "battleaxe",
        "flanged_mace",
        "glaive",
        "quarterstaff",
        "scythe",
    ];

    let weaponMaterials = [
        "wooden",
        "stone",
        "iron",
        "diamond",
        "copper",
        "bronze",
        "steel",
        "silver",
        "invar",
        "tin",
        "electrum",
        "lead",
        "nickel",
        "constantan",
    ];

    weaponTypes.forEach((weaponType) => {
        for (let i = 0; i < weaponMaterials.length; i++) {
            // adds a spartan weaponry item with the current material and type to the swords entries (3)
            equipment[3].entries.push({
                item: `spartanweaponry:${weaponMaterials[i]}_${weaponType}`,
                weight: 1,
            });
        }
    });
    // end spartan weaponry items

    equipment.forEach((eq) => {
        eq.entries.forEach((entry) => {
            let data = {
                // If an entry is missing any of these values, the ternary operators will fill in defaults. as such, the only required value here is "item"

                // type: eq.type,
                stack: { item: entry.item, count: 1, nbt: "{Damage:0}" },
                weight: entry.weight ? entry.weight : 50,
                quality: entry.quality ? entry.quality : 4,
                dimensions: entry.dimensions
                    ? entry.dimensions
                    : [
                          "minecraft:overworld",
                          "minecraft:the_nether",
                          "minecraft:the_end",
                          "aether:the_aether",
                      ],
                min_rarity: entry.min_rarity
                    ? `apotheosis:${entry.min_rarity}`
                    : "apotheosis:common",
                max_rarity: entry.max_rarity
                    ? `apotheosis:${entry.max_rarity}`
                    : "apotheosis:uncommon",
            };

            let fileName = entry.item.split(":")[1];
            event.addJson(
                `apotheosis:affix_loot_entries/${fileName}.json`,
                data
            );
        });
    });
});
