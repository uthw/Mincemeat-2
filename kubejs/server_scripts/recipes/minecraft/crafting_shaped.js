ServerEvents.recipes((event) => {
    const recipes = [
        [
            "darkutils:charm_portal",
            ["AAA", "BCB", " D "],
            {
                A: "#forge:string",
                B: "forbidden_arcanus:darkstone",
                C: "undergarden:catalyst",
                D: "#forge:obsidian",
            },
        ],
        [
            "4x darkutils:blank_plate",
            ["AA ", "   ", "   "],
            {
                A: "forbidden_arcanus:darkstone",
            },
        ],
        [
            "iceandfire:dragon_flute",
            ["  A", "ABA", "CA "],
            {
                A: "iceandfire:dragonbone",
                B: "supplementaries:flute",
                C: "minecraft:gold_ingot",
            },
        ],
        [
            "iceandfire:tide_trident",
            ["ABC", "DED", " F "],
            {
                A: "ecologics:crab_claw",
                B: "iceandfire:sea_serpent_fang",
                C: "alexsmobs:bone_serpent_tooth",
                D: "#forge:scales/sea_serpent",
                E: "aquamirae:abyssal_amethyst",
                F: "iceandfire:dragonbone",
            },
        ],
        [
            "iceandfire:ghost_ingot",
            ["AAA", "ABA", "AAA"],
            {
                A: "iceandfire:ectoplasm",
                B: "enigmaticlegacy:etherium_ingot",
            },
        ],
        [
            "iceandfire:dragon_horn",
            ["AB ", "AAC", " A "],
            {
                A: "iceandfire:dragonbone",
                B: "#forge:ingots/arcane_gold",
                C: "alexsmobs:gazelle_horn",
            },
        ],
        [
            "industrialforegoing:machine_frame_pity",
            ["ABA", "BCB", "ABA"],
            {
                A: "#minecraft:logs",
                B: "#blue_skies:ingots/horizonite",
                C: "#forge:gears/invar",
            },
        ],
        [
            "integrateddynamics:drying_basin",
            [" A ", "BCB", " A "],
            {
                A: "architects_palette:algal_brick",
                B: "#forge:ingots/tin",
                C: "create:basin",
            },
        ],
        [
            "mekanism:metallurgic_infuser",
            ["ABA", "CDC", "AEA"],
            {
                A: "#forge:ingots/steel",
                B: "create:asurine",
                C: "#forge:ingots/osmium",
                D: "alexscaves:fissile_core",
                E: "thermal:machine_furnace",
            },
        ],
        [
            "mekanism:energy_tablet",
            ["ABA", "CDC", "ABA"],
            {
                A: "minecraft:redstone",
                B: "#forge:ingots/zinc",
                C: "mekanism:alloy_infused",
                D: "thermal:rf_potato",
            },
        ],
        [
            "paraglider:heart_container",
            ["ABA", "BAB", "ABA"],
            {
                A: "scalinghealth:heart_crystal",
                B: "paraglider:spirit_orb",
            },
        ],
        // [
        //     "numina:component_glider_wing",
        //     [" AA", "BCB", "CB "],
        //     {
        //         A: "immersiveengineering:component_steel",
        //         B: "#forge:ingots/aluminum",
        //         C: "immersiveengineering:windmill_blade",
        //     },
        // ],
        // [
        //     Item.of(
        //         "productivebees:nest_locator",
        //         '{productivebees_locator_nest:{nestName:"Bee Nest",nest:"minecraft:bee_nest"}}'
        //     ),
        //     ["A A", " B ", " C "],
        //     {
        //         A: "#forge:rods/gold",
        //         B: "minecraft:compass",
        //         C: "enigmaticlegacy:gem_ring",
        //     },
        // ],
        [
            "sophisticatedbackpacks:pickup_upgrade",
            [" A ", "BCB", "DED"],
            {
                A: "alexsmobs:bear_fur",
                B: "#forge:string",
                C: "sophisticatedbackpacks:upgrade_base",
                D: "#forge:gems/cinnabar",
                E: "minecraft:redstone",
            },
        ],
        [
            "sophisticatedstorage:pickup_upgrade",
            [" A ", "BCB", "DED"],
            {
                A: "alexsmobs:bear_fur",
                B: "#forge:string",
                C: "sophisticatedstorage:upgrade_base",
                D: "#forge:gems/cinnabar",
                E: "minecraft:redstone",
            },
        ],
        [
            "sophisticatedbackpacks:filter_upgrade",
            ["ABA", "CDC", "AEA"],
            {
                A: "#forge:gems/cinnabar",
                B: "create:filter",
                C: "#forge:string",
                D: "sophisticatedbackpacks:upgrade_base",
                E: "thermal:redstone_servo",
            },
        ],
        [
            "sophisticatedstorage:filter_upgrade",
            ["ABA", "CDC", "AEA"],
            {
                A: "#forge:gems/cinnabar",
                B: "create:filter",
                C: "#forge:string",
                D: "sophisticatedstorage:upgrade_base",
                E: "thermal:redstone_servo",
            },
        ],
        [
            "sophisticatedbackpacks:xp_pump_upgrade",
            ["ABA", "BCB", "ADA"],
            {
                A: "#forge:gems/cinnabar",
                B: "forbidden_arcanus:xpetrified_orb",
                C: "sophisticatedbackpacks:upgrade_base",
                D: "ars_nouveau:experience_gem",
            },
        ],
        [
            "sophisticatedstorage:xp_pump_upgrade",
            ["ABA", "BCB", "ADA"],
            {
                A: "#forge:gems/cinnabar",
                B: "forbidden_arcanus:xpetrified_orb",
                C: "sophisticatedstorage:upgrade_base",
                D: "ars_nouveau:experience_gem",
            },
        ],
        [
            "sophisticatedbackpacks:pump_upgrade",
            ["ABA", "BCB", "ADA"],
            {
                A: "create:fluid_pipe",
                B: "create:mechanical_pump",
                C: "sophisticatedbackpacks:upgrade_base",
                D: "supplementaries:jar",
            },
        ],
        [
            "sophisticatedstorage:pump_upgrade",
            ["ABA", "BCB", "ADA"],
            {
                A: "create:fluid_pipe",
                B: "create:mechanical_pump",
                C: "sophisticatedstorage:upgrade_base",
                D: "supplementaries:jar",
            },
        ],
        [
            "sophisticatedbackpacks:battery_upgrade",
            ["ABA", "BCB", "ABA"],
            {
                A: "createaddition:copper_wire",
                B: "thermal:rf_potato",
                C: "sophisticatedbackpacks:upgrade_base",
            },
        ],
        // Guess this item doesn't exist
        // [
        //     "sophisticatedstorage:battery_upgrade",
        //     ["ABA", "BCB", "ABA"],
        //     {
        //         A: "createaddition:copper_wire",
        //         B: "thermal:rf_potato",
        //         C: "sophisticatedstorage:upgrade_base",
        //     },
        // ],
        [
            "sophisticatedbackpacks:inception_upgrade",
            ["ABA", "CDC", "ACA"],
            {
                A: "alexscaves:occult_gem",
                B: "iceandfire:ghost_ingot",
                C: "#forge:gems/amethyst",
                D: "sophisticatedbackpacks:upgrade_base",
            },
        ],
        [
            "4x sophisticatedbackpacks:upgrade_base",
            ["ABA", "BCB", "ABA"],
            {
                A: "#forge:ingots/tin",
                B: "paraglider:spirit_orb",
                C: "#forge:leather",
            },
        ],
        [
            "2x sophisticatedstorage:upgrade_base",
            ["ABA", "BAB", "ABA"],
            {
                A: "#minecraft:planks",
                B: "#forge:ingots/tin",
            },
        ],
        [
            "storagenetwork:master",
            ["ABA", "BCB", "ABA"],
            {
                A: "#storagedrawers:drawers",
                B: "forbidden_arcanus:darkstone",
                C: "minecraft:diamond",
            },
        ],
        [
            "storagenetwork:inventory",
            ["ABA", "BCB", "ABA"],
            {
                A: "#forge:nuggets/silver",
                B: "forbidden_arcanus:darkstone",
                C: "minecraft:diamond",
            },
        ],
        [
            "storagenetwork:inventory_remote",
            ["A  ", "BCB", "DED"],
            {
                A: "createaddition:connector",
                B: "create:andesite_alloy",
                C: "#forge:gears/copper",
                D: "#forge:ingots/silver",
                E: "storagenetwork:master",
            },
        ],
        [
            "storagenetwork:crafting_remote",
            ["A  ", "BCB", "DED"],
            {
                A: "createaddition:large_connector",
                B: "#forge:silicon",
                C: "minecraft:crafting_table",
                D: "#forge:ingots/silver",
                E: "storagenetwork:master",
            },
        ],
        [
            "thermal:xp_crystal",
            ["BA ", "C  ", "   "],
            {
                A: "alexscaves:sea_glass_shards",
                B: "minecraft:book",
                C: "aether:zanite_gemstone",
            },
        ],
        [
            "undergarden:catalyst",
            ["ABA", "BCB", "ABA"],
            {
                A: "thermal:apatite",
                B: "aether:ambrosium_shard",
                C: "forbidden_arcanus:rune",
            },
        ],
        // Enigmatic Legacy recipes
        [
            "enigmaticlegacy:heaven_scroll",
            [" A ", "BCD", " E "],
            {
                A: "forbidden_arcanus:orb_of_temporary_flight",
                B: "minecraft:firework_rocket",
                C: "enigmaticlegacy:thicc_scroll",
                D: Item.of(
                    "naturesaura:aura_bottle",
                    '{stored_type:"naturesaura:nether"}'
                ),
                E: "enigmaticlegacy:angel_blessing",
            },
        ],
        [
            "enigmaticlegacy:monster_charm",
            [" A ", "BCD", "   "],
            {
                A: "artifacts:golden_hook",
                B: "thermal:xp_crystal",
                C: "#forge:heads",
                D: Item.of("minecraft:enchanted_book").enchant(
                    "minecraft:looting",
                    3
                ),
            },
        ],
        [
            "6x enigmaticlegacy:ender_rod",
            ["  A", "BCB", "A  "],
            {
                A: "#forge:rods/blaze",
                B: "enigmaticlegacy:astral_dust",
                C: "#forge:ender_pearls",
            },
        ],
        [
            "enigmaticlegacy:cursed_stone",
            ["ABA", "CDC", "EFE"],
            {
                A: "minecraft:lava_bucket",
                B: "enigmaticlegacy:twisted_core",
                C: "enigmaticlegacy:evil_essence",
                D: "alexsmobs:rocky_shell",
                E: "forbidden_arcanus:arcane_crystal",
                F: "iceandfire:fire_dragon_heart",
            },
        ],
        [
            "enigmaticlegacy:magnet_ring",
            [" A ", "BCD", " E "],
            {
                A: "#forge:ingots/nickel",
                B: "#forge:ingots/tin",
                C: "enigmaticlegacy:iron_ring",
                D: "#forge:ingots/zinc",
                E: "#forge:ingots/silver",
            },
        ],
        [
            "enigmaticlegacy:super_magnet_ring",
            [" A ", "BCD", " E "],
            {
                A: "alexscaves:azure_neodymium_ingot",
                B: "minecraft:ender_eye",
                C: "enigmaticlegacy:magnet_ring",
                D: "eidolon:ender_calx",
                E: "alexscaves:scarlet_neodymium_ingot",
            },
        ],
        [
            "enigmaticlegacy:infinimeal",
            ["ABC", "DEF", "GHI"],
            {
                A: "betternether:ink_bush_seed",
                B: "blue_skies:winter_leaf_seeds",
                C: "blue_skies:fiery_bean_seeds",
                D: "thermal:barley_seeds",
                E: "enigmaticlegacy:earth_heart",
                F: "undergarden:gloomgourd_seeds",
                G: "farmersdelight:rice",
                H: "ars_nouveau:magebloom_crop",
                I: "forbidden_arcanus:golden_orchid_seeds",
            },
        ],
        [
            "thermal:rf_coil",
            ["  A", " B ", "A  "],
            {
                A: "minecraft:redstone",
                B: "#forge:rods/gold",
            },
        ],
        [
            "reliquary:mercy_cross",
            [" AB", " BA", "C  "],
            {
                A: "reliquary:withered_rib",
                B: "forbidden_arcanus:deorum_ingot",
                C: "aether:golden_amber",
            },
        ],
        [
            "reliquary:fortune_coin",
            [" A ", "ABA", " A "],
            {
                A: "forbidden_arcanus:arcane_crystal_dust",
                B: "thermal:gold_coin",
            },
        ],
        [
            "reliquary:glacial_staff",
            ["  B", " A ", "A  "],
            {
                A: "blue_skies:starlit_stick",
                B: "iceandfire:ice_dragon_blood",
            },
        ],
        [
            "3x reliquary:glowing_water",
            [" A ", "BCB", "   "],
            {
                A: "minecraft:gunpowder",
                B: "minecraft:glow_berries",
                C: Item.of("minecraft:potion", '{Potion:"minecraft:water"}'),
            },
        ],
        [
            "torchmaster:megatorch",
            ["AAA", "CBC", "DBD"],
            {
                A: "minecraft:torch",
                B: "quark:azalea_log",
                C: "forbidden_arcanus:arcane_crystal",
                D: "minecraft:gold_block",
            },
        ],
        [
            "torchmaster:dreadlamp",
            ["AAA", "BCB", "ADA"],
            {
                A: "#forge:obsidian",
                B: "#forge:glass_panes",
                C: "irons_spellbooks:blank_runestone",
                D: "ars_nouveau:source_gem",
            },
        ],
        [
            "8x prettypipes:pipe",
            ["ABA", " C ", "   "],
            {
                A: "#forge:ingots/copper",
                B: "create:belt_connector",
                C: "minecraft:redstone",
            },
        ],
        [
            "sophisticatedstorage:storage_tool",
            [" AB", " CD", "C  "],
            {
                A: "forbidden_arcanus:arcane_crystal",
                B: "blue_skies:moonstone_shard",
                C: "#forge:rods/wooden",
                D: "#forge:ingots/tin",
            },
        ],
        [
            "relics:researching_table",
            ["ABA", " C ", "DED"],
            {
                A: "minecraft:red_wool",
                B: "irons_spellbooks:arcane_essence",
                C: "#forge:storage_blocks/gold",
                D: "forbidden_arcanus:aurum_slab",
                E: "forbidden_arcanus:aurum_planks",
            },
        ],
        [
            "iceandfire:dragonbone_sword",
            [" A ", " B ", " C "],
            {
                A: "iceandfire:dragonbone",
                B: "alexscaves:heavy_bone",
                C: "iceandfire:witherbone",
            },
        ],
        [
            "iceandfire:dragonbone_pickaxe",
            ["ABA", " C ", " C "],
            {
                A: "iceandfire:dragonbone",
                B: "alexscaves:heavy_bone",
                C: "iceandfire:witherbone",
            },
        ],
        [
            "iceandfire:dragonbone_axe",
            ["AB ", "BC ", " C "],
            {
                A: "alexscaves:heavy_bone",
                B: "iceandfire:dragonbone",
                C: "iceandfire:witherbone",
            },
        ],
        [
            "iceandfire:dragonbone_hoe",
            ["AB ", " C ", " C "],
            {
                A: "iceandfire:dragonbone",
                B: "alexscaves:heavy_bone",
                C: "iceandfire:witherbone",
            },
        ],
        [
            "createoreexcavation:vein_finder",
            ["AB ", "CD ", " E "],
            {
                A: "forbidden_arcanus:xpetrified_orb",
                B: "alexscaves:telecore",
                C: "tetra:geode",
                D: "thermal:blizz_rod",
                E: "#forge:rods/wooden",
            },
        ],
        [
            "mekanism:basic_fluid_tank",
            ["ABA", "B B", "ACA"],
            {
                A: "create:andesite_alloy",
                B: "#forge:glass",
                C: "create:fluid_tank",
            },
        ],
        [
            "miners_delight:copper_pot",
            [" A ", "BCB", " B "],
            {
                A: "iceandfire:copper_shovel",
                B: "minecraft:copper_ingot",
                C: "farmersdelight:cooking_pot",
            },
        ],
        [
            "hexerei:mixing_cauldron",
            ["A A", "BCB", "BBB"],
            {
                A: "eidolon:soul_shard",
                B: "#forge:ingots/silver",
                C: "minecraft:cauldron",
            },
        ],
        [
            "minecraft:candle",
            [" A ", " B ", "   "],
            {
                A: "#forge:string",
                B: "eidolon:tallow",
            },
        ],
        [
            "hexerei:herb_drying_rack",
            [" A ", " B ", "CDC"],
            {
                A: "aquaculture:iron_hook",
                B: "minecraft:string",
                C: "#forge:rods/wooden",
                D: "#minecraft:wooden_slabs",
            },
        ],
        [
            "waystones:warp_stone",
            ["ABA", "BCB", "ABA"],
            {
                A: "aether:zanite_gemstone",
                B: "forbidden_arcanus:arcane_crystal",
                C: "alexscaves:pearl",
            },
        ],
        [
            "enderio:alloy_smelter",
            ["ABA", "BCB", "DED"],
            {
                A: "enderio:dark_steel_ingot",
                B: "minecraft:furnace",
                C: "enderio:void_chassis",
                D: "#forge:plates/zinc",
                E: "#forge:dusts/copper",
            },
        ],
        [
            "enderio:sag_mill",
            ["AAA", "BCB", "DED"],
            {
                A: "minecraft:flint",
                B: "enderio:dark_steel_ingot",
                C: "enderio:void_chassis",
                D: "enderio:dark_bimetal_gear",
                E: "#forge:dusts/copper",
            },
        ],
        [
            "2x prettypipes:blank_module",
            [" A ", "ABA", " C "],
            {
                A: "#forge:ingots/nickel",
                B: "minecraft:paper",
                C: "thermal:cinnabar",
            },
        ],
        [
            "smallships:cannon",
            ["  A", "BBC", "DED"],
            {
                A: "minecraft:string",
                B: "minecraft:iron_block",
                C: "create:hand_crank",
                D: "#minecraft:logs",
                E: "#forge:gears/copper",
            },
        ],
        [
            "ars_nouveau:basic_spell_turret",
            [" A ", "BCB", " BD"],
            {
                A: "minecraft:gold_ingot",
                B: "ars_nouveau:source_gem",
                C: "smallships:cannon",
                D: "forbidden_arcanus:rune",
            },
        ],
    ];

    recipes.forEach((recipe) => {
        console.log(`size: ${recipe.length} output: ${recipe[0]}`);
        event.shaped(recipe[0], recipe[1], recipe[2]);
    });
});
