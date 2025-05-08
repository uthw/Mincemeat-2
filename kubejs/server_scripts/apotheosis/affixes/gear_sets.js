// this will take a long time, this file is just a placeholder for when i feel like doing this. in the absence of hostile mobs right now its probably not worth it

ServerEvents.highPriorityData((event) => {
    let bossLoadouts = [
        {
            name: "iron",
            mainhands: [
                { weight: 10, stack: { item: "minecraft:iron_sword" } },
                { weight: 7, stack: { item: "minecraft:iron_axe" } },
                { weight: 7, stack: { item: "minecraft:iron_shovel" } },
                { weight: 7, stack: { item: "minecraft:iron_pickaxe" } },
                { weight: 1, stack: { item: "spartanweaponry:iron_dagger" } },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:iron_longsword" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:iron_katana" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:iron_saber" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:iron_rapier" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:iron_greatsword" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:iron_hammer" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:iron_warhammer" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:iron_spear" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:iron_halberd" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:iron_pike" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:iron_lance" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:iron_throwing_knife" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:iron_tomahawk" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:iron_javelin" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:iron_battleaxe" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:iron_flanged_mace" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:iron_flanged_mace" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:iron_glaive" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:iron_quarterstaff" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:iron_scythe" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:iron_boomerang" },
                },
                {
                    weight: 6,
                    stack: { item: "farmersdelight:iron_knife" },
                },
                {
                    weight: 6,
                    stack: { item: "nethersdelight:iron_machete" },
                },
            ],
            offhands: [
                {
                    weight: 1,
                    stack: { item: "spartanshields:iron_basic_shield" },
                },
            ],
            boots: [{ weight: 1, stack: { item: "minecraft:iron_boots" } }],
            leggings: [
                { weight: 1, stack: { item: "minecraft:iron_leggings" } },
            ],
            chestplate: [
                { weight: 1, stack: { item: "minecraft:iron_chestplate" } },
            ],
            helmets: [{ weight: 1, stack: { item: "minecraft:iron_helmet" } }],
        },
        {
            name: "diamond",
            weight: 1,
            quality: 5,
            mainhands: [
                { weight: 10, stack: { item: "minecraft:diamond_sword" } },
                { weight: 7, stack: { item: "minecraft:diamond_pickaxe" } },
                { weight: 7, stack: { item: "minecraft:diamond_axe" } },
                { weight: 7, stack: { item: "minecraft:diamond_shovel" } },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:diamond_dagger" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:diamond_longsword" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:diamond_katana" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:diamond_saber" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:diamond_rapier" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:diamond_greatsword" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:diamond_hammer" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:diamond_warhammer" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:diamond_spear" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:diamond_halberd" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:diamond_pike" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:diamond_lance" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:diamond_throwing_knife" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:diamond_tomahawk" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:diamond_javelin" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:diamond_battleaxe" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:diamond_flanged_mace" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:diamond_flanged_mace" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:diamond_glaive" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:diamond_quarterstaff" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:diamond_scythe" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:diamond_boomerang" },
                },
                {
                    weight: 6,
                    stack: { item: "farmersdelight:diamond_knife" },
                },
                {
                    weight: 6,
                    stack: { item: "nethersdelight:diamond_machete" },
                },
            ],
            offhands: [
                {
                    weight: 1,
                    stack: { item: "spartanshields:diamond_basic_shield" },
                },
            ],
            boots: [{ weight: 1, stack: { item: "minecraft:diamond_boots" } }],
            leggings: [
                { weight: 1, stack: { item: "minecraft:diamond_leggings" } },
            ],
            chestplate: [
                { weight: 1, stack: { item: "minecraft:diamond_chestplate" } },
            ],
            helmets: [
                { weight: 1, stack: { item: "minecraft:diamond_helmet" } },
            ],
            tags: ["overworld", "the_nether"],
        },
        {
            weight: 1,
            quality: 6,
            name: "netherite",
            mainhands: [
                { weight: 10, stack: { item: "minecraft:netherite_sword" } },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:netherite_dagger" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:netherite_longsword" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:netherite_katana" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:netherite_saber" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:netherite_rapier" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:netherite_greatsword" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:netherite_hammer" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:netherite_warhammer" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:netherite_spear" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:netherite_halberd" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:netherite_pike" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:netherite_lance" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:netherite_throwing_knife" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:netherite_tomahawk" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:netherite_javelin" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:netherite_battleaxe" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:netherite_flanged_mace" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:netherite_flanged_mace" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:netherite_glaive" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:netherite_quarterstaff" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:netherite_scythe" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:netherite_boomerang" },
                },
                {
                    weight: 6,
                    stack: { item: "farmersdelight:netherite_knife" },
                },
                {
                    weight: 6,
                    stack: { item: "nethersdelight:netherite_machete" },
                },
            ],
            offhands: [
                {
                    weight: 1,
                    stack: { item: "spartanshields:netherite_basic_shield" },
                },
            ],
            boots: [
                { weight: 1, stack: { item: "minecraft:netherite_boots" } },
            ],
            leggings: [
                { weight: 1, stack: { item: "minecraft:netherite_leggings" } },
            ],
            chestplate: [
                {
                    weight: 1,
                    stack: { item: "minecraft:netherite_chestplate" },
                },
            ],
            helmets: [
                { weight: 1, stack: { item: "minecraft:netherite_helmet" } },
            ],
            tags: ["overworld", "the_nether"],
        },
        // Osmium
        {
            name: "osmium",
            quality: 4,
            weight: 3,
            mainhands: [
                {
                    weight: 10,
                    stack: "mekanismtools:osmium_sword",
                },
                { weight: 3, stack: "delightful:osmium_knife" },
            ],
            offhands: [
                {
                    weight: 1,
                    stack: { item: "mekanismtools:osmium_shield" },
                },
            ],
            boots: [
                { weight: 1, stack: { item: "mekanismtools:osmium_boots" } },
            ],
            leggings: [
                { weight: 1, stack: { item: "mekanismtools:osmium_leggings" } },
            ],
            chestplate: [
                {
                    weight: 1,
                    stack: { item: "mekanismtools:osmium_chestplate" },
                },
            ],
            helmets: [
                { weight: 1, stack: { item: "mekanismtools:osmium_helmet" } },
            ],
        },
        // // cincinnatsite
        // {
        //     name: "cin",
        //     quality: 4,
        //     weight: 4,
        //     mainhands: [
        //         {
        //             weight: 10,
        //             stack: { item: "betternether:cincinnasite_sword" },
        //         },
        //         {
        //             weight: 10,
        //             stack: { item: "betternether:cincinnasite_pickaxe" },
        //         },
        //         {
        //             weight: 10,
        //             stack: { item: "betternether:cincinnasite_shovel" },
        //         },
        //         {
        //             weight: 10,
        //             stack: { item: "betternether:cincinnasite_axe" },
        //         },
        //         {
        //             weight: 2,
        //             stack: { item: "betternether:cincinnasite_hoe" },
        //         },
        //     ],
        //     offhands: [],
        //     boots: [
        //         {
        //             weight: 1,
        //             stack: { item: "betternether:cincinnasite_boots" },
        //         },
        //     ],
        //     leggings: [
        //         {
        //             weight: 1,
        //             stack: { item: "betternether:cincinnasite_leggings" },
        //         },
        //     ],
        //     chestplate: [
        //         {
        //             weight: 1,
        //             stack: { item: "betternether:cincinnasite_chestplate" },
        //         },
        //     ],
        //     helmets: [
        //         {
        //             weight: 1,
        //             stack: { item: "betternether:cincinnasite_helmet" },
        //         },
        //     ],
        //     tags: ["overworld", "the_nether"],
        // },
        {
            weight: 6,
            quality: 4,
            name: "silver",
            mainhands: [
                { weight: 10, stack: { item: "iceandfire:silver_sword" } },
                { weight: 6, stack: { item: "iceandfire:silver_pickaxe" } },
                { weight: 6, stack: { item: "iceandfire:silver_axe" } },
                { weight: 6, stack: { item: "iceandfire:silver_shovel" } },
                { weight: 6, stack: { item: "iceandfire:silver_hoe" } },
                { weight: 6, stack: { item: "delightful:silver_knife" } },
                { weight: 1, stack: { item: "spartanweaponry:silver_dagger" } },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:silver_longsword" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:silver_katana" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:silver_saber" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:silver_rapier" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:silver_greatsword" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:silver_hammer" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:silver_warhammer" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:silver_spear" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:silver_halberd" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:silver_pike" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:silver_lance" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:silver_throwing_knife" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:silver_tomahawk" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:silver_javelin" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:silver_battleaxe" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:silver_flanged_mace" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:silver_flanged_mace" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:silver_glaive" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:silver_quarterstaff" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:silver_scythe" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:silver_boomerang" },
                },
                {
                    weight: 6,
                    stack: { item: "farmersdelight:silver_knife" },
                },
            ],
            offhands: [
                {
                    weight: 1,
                    stack: { item: "spartanshields:silver_basic_shield" },
                },
            ],
            boots: [
                {
                    weight: 1,
                    stack: { item: "caverns_and_chasms:silver_boots" },
                },
            ],
            leggings: [
                {
                    weight: 1,
                    stack: { item: "caverns_and_chasms:silver_leggings" },
                },
            ],
            chestplate: [
                {
                    weight: 1,
                    stack: { item: "caverns_and_chasms:silver_chestplate" },
                },
            ],
            helmets: [
                {
                    weight: 1,
                    stack: { item: "caverns_and_chasms:silver_helmet" },
                },
            ],
        },
        {
            weight: 3,
            name: "lapis_lazuli",
            quality: 5,
            mainhands: [
                {
                    weight: 3,
                    stack: { item: "mekanismtools:lapis_lazuli_sword" },
                },
                {
                    weight: 2,
                    stack: { item: "mekanismtools:lapis_lazuli_axe" },
                },
                {
                    weight: 2,
                    stack: { item: "mekanismtools:lapis_lazuli_pickaxe" },
                },
            ],
            offhands: [
                {
                    weight: 1,
                    stack: { item: "mekanismtools:lapis_lazuli_shield" },
                },
            ],
            boots: [
                {
                    weight: 1,
                    stack: { item: "mekanismtools:lapis_lazuli_boots" },
                },
            ],
            leggings: [
                {
                    weight: 1,
                    stack: { item: "mekanismtools:lapis_lazuli_leggings" },
                },
            ],
            chestplates: [
                {
                    weight: 1,
                    stack: { item: "mekanismtools:lapis_lazuli_chestplate" },
                },
            ],
            helmets: [
                {
                    weight: 1,
                    stack: { item: "mekanismtools:lapis_lazuli_helmet" },
                },
            ],
        },
        {
            weight: 4,
            name: "bronze",
            quality: 4,
            mainhands: [
                { weight: 10, stack: { item: "mekanismtools:bronze_sword" } },
                { weight: 5, stack: { item: "mekanismtools:bronze_axe" } },
                { weight: 5, stack: { item: "mekanismtools:bronze_pickaxe" } },
                { weight: 5, stack: { item: "delightful:bronze_knife" } },
                { weight: 1, stack: { item: "spartanweaponry:bronze_dagger" } },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:bronze_longsword" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:bronze_katana" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:bronze_saber" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:bronze_rapier" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:bronze_greatsword" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:bronze_hammer" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:bronze_warhammer" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:bronze_spear" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:bronze_halberd" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:bronze_pike" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:bronze_lance" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:bronze_throwing_knife" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:bronze_tomahawk" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:bronze_javelin" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:bronze_battleaxe" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:bronze_flanged_mace" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:bronze_flanged_mace" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:bronze_glaive" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:bronze_quarterstaff" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:bronze_scythe" },
                },
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:bronze_boomerang" },
                },
            ],
            offhands: [
                { weight: 1, stack: { item: "mekanismtools:bronze_shield" } },
                {
                    weight: 1,
                    stack: { item: "spartanshields:bronze_basic_shield" },
                },
            ],
            boots: [
                { weight: 1, stack: { item: "mekanismtools:bronze_boots" } },
            ],
            leggings: [
                { weight: 1, stack: { item: "mekanismtools:bronze_leggings" } },
            ],
            chestplates: [
                {
                    weight: 1,
                    stack: { item: "mekanismtools:bronze_chestplate" },
                },
            ],
            helmets: [
                { weight: 1, stack: { item: "mekanismtools:bronze_helmet" } },
            ],
        },
        // {
        //     name: "nether_ruby",
        //     weight: 2,
        //     quality: 5,
        //     mainhands: [
        //         {
        //             weight: 6,
        //             stack: { item: "betternether:nether_ruby_sword" },
        //         },
        //         {
        //             weight: 1,
        //             stack: { item: "betternether:nether_ruby_pickaxe" },
        //         },
        //         {
        //             weight: 1,
        //             stack: { item: "betternether:nether_ruby_axe" },
        //         },
        //         {
        //             weight: 1,
        //             stack: { item: "betternether:nether_ruby_shovel" },
        //         },
        //     ],
        //     offhands: [],
        //     boots: [
        //         {
        //             weight: 1,
        //             stack: "betternether:nether_ruby_boots",
        //         },
        //     ],
        //     leggings: [
        //         {
        //             weight: 1,
        //             stack: "betternether:nether_ruby_leggings",
        //         },
        //     ],
        //     chestplates: [
        //         {
        //             weight: 1,
        //             stack: "betternether:nether_ruby_chestplate",
        //         },
        //     ],
        //     helmets: [
        //         {
        //             weight: 1,
        //             stack: "betternether:nether_ruby_helmet",
        //         },
        //     ],
        //     tags: ["overworld", "the_nether"],
        // },
        {
            name: "manasteel",
            weight: 5,
            quality: 4,
            mainhands: [
                { weight: 2, stack: { item: "botania:manasteel_sword" } },
                { weight: 1, stack: { item: "botania:manasteel_axe" } },
                { weight: 1, stack: { item: "botania:manasteel_pickaxe" } },
                {
                    weight: 1,
                    stack: { item: "delightful:manasteel_knife" },
                },
            ],
            offhands: [
                {
                    weight: 1,
                    stack: { item: "spartanshields:manasteel_basic_shield" },
                },
            ],
            boots: [{ weight: 1, stack: { item: "botania:manasteel_boots" } }],
            leggings: [
                { weight: 1, stack: { item: "botania:manasteel_leggings" } },
            ],
            chestplates: [
                { weight: 1, stack: { item: "botania:manasteel_chestplate" } },
            ],
            helmets: [
                { weight: 1, stack: { item: "botania:manasteel_helmet" } },
            ],
        },
        {
            name: "steel",
            weight: 2,
            quality: 4,
            mainhands: [
                { weight: 3, stack: { item: "mekanismtools:steel_sword" } },
                { weight: 2, stack: { item: "mekanismtools:steel_axe" } },
                { weight: 2, stack: { item: "mekanismtools:steel_pickaxe" } },
                { weight: 1, stack: { item: "delightful:steel_knife" } },
            ],
            offhands: [
                {
                    weight: 1,
                    stack: { item: "spartanweaponry:steel_basic_shield" },
                },
            ],
            boots: [
                { weight: 1, stack: { item: "mekanismtools:steel_boots" } },
            ],
            leggings: [
                { weight: 1, stack: { item: "mekanismtools:steel_leggings" } },
            ],
            chestplates: [
                {
                    weight: 1,
                    stack: { item: "mekanismtools:steel_chestplate" },
                },
            ],
            helmets: [
                { weight: 1, stack: { item: "mekanismtools:steel_helmet" } },
            ],
            tags: ["overworld", "the_nether"],
        },
    ];

    bossLoadouts.forEach((loadout) => {
        let data = {
            weight: loadout.weight ? loadout.weight * 100 : 1000,
            quality: loadout.quality ? loadout.quality : 3,
            tags: loadout.tags ? loadout.tags : ["overworld"],
            mainhands: loadout.mainhands,
            offhands: loadout.offhands,
            helmets: loadout.helmets,
            chestplates: loadout.chestplates,
            leggings: loadout.leggings,
            boots: loadout.boots,
        };

        event.addJson(`apotheosis:gear_sets/${loadout.name}.json`, data);
    });
});
