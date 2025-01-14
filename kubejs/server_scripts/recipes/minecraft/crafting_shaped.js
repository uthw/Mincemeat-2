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
                A: "enigmaticlegacy:magnet_ring",
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
                A: "enigmaticlegacy:magnet_ring",
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
                A: "sophisticatedstorage:upgrade_base",
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
                C: "immersiveengineering:component_iron",
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
                C: "#forge:workbench",
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
                A: "atmospheric:aloe_kernels",
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
                B: "#quark:azalea_logs",
                C: "forbidden_arcanus:arcane_crystal",
                D: "minecraft:gold_block",
            },
        ],
        [
            "torchmaster:megatorch",
            ["AAA", "CBC", "DBD"],
            {
                A: "minecraft:torch",
                B: "#ecologics:azalea_logs",
                C: "forbidden_arcanus:arcane_crystal",
                D: "minecraft:gold_block",
            },
        ],
        [
            "torchmaster:megatorch",
            ["AAA", "CBC", "DBD"],
            {
                A: "minecraft:torch",
                B: "#ecologics:flowering_azalea_logs",
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
                A: "everythingiscopper:copper_shovel",
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
                E: "create:cogwheel",
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
        [
            "irons_spellbooks:gold_spell_book",
            ["ABB", "ACC", "ABB"],
            {
                A: "blue_skies:diopside_gem",
                B: "irons_spellbooks:arcane_essence",
                C: "forbidden_arcanus:cloth",
            },
        ],
        [
            "4x enderstorage:ender_chest",
            ["ABA", "CDC", "AEA"],
            {
                A: "eidolon:gold_inlay",
                B: "aether_redux:veridium_ingot",
                C: "#forge:ingots/obsidian",
                D: "sophisticatedstorage:diamond_chest",
                E: "#forge:obsidian",
            },
        ],
        [
            "4x enderstorage:ender_tank",
            ["ABA", "CDC", "AEA"],
            {
                A: "eidolon:gold_inlay",
                B: "aether_redux:veridium_ingot",
                C: "#forge:ingots/obsidian",
                D: "mekanism:basic_fluid_tank",
                E: "#forge:obsidian",
            },
        ],
        [
            "enderstorage:ender_pouch",
            ["ABA", "BCB", "ADA"],
            {
                A: "eidolon:gold_inlay",
                B: "forbidden_arcanus:cloth",
                C: "#forge:gems/mana",
                D: "#thermal:rockwool",
            },
        ],
        [
            "pneumaticcraft:manual_compressor",
            [" AB", " C ", "DED"],
            {
                A: "pneumaticcraft:iron_ingot_compressed",
                B: "create:hand_crank",
                C: "pneumaticcraft:pressure_tube",
                D: "thermal:silver_gear",
                E: "pneumaticcraft:stone_base",
            },
        ],
        [
            "pneumaticcraft:air_compressor",
            ["AAA", "A B", "ACD"],
            {
                A: "pneumaticcraft:reinforced_bricks",
                B: "thermal:invar_gear",
                C: "create:encased_fan",
                D: "#forge:storage_blocks/nickel",
            },
        ],
        [
            "movingelevators:elevator_block",
            ["ABA", "ACA", "ADA"],
            {
                A: "#forge:ingots/silver",
                B: "#forge:ingots/nickel",
                C: "create:mechanical_piston",
                D: "forbidden_arcanus:arcane_crystal",
            },
        ],
        [
            "movingelevators:display_block",
            ["ABA", "ACA", "ABA"],
            {
                A: "#forge:ingots/silver",
                B: "forbidden_arcanus:xpetrified_orb",
                C: "supplementaries:crystal_display",
            },
        ],
        [
            "movingelevators:button_block",
            ["ABA", "ACA", "ADA"],
            {
                A: "#forge:ingots/silver",
                B: "createaddition:connector",
                C: "create:copper_casing",
                D: "thermal:redstone_servo",
            },
        ],
        [
            Item.of(
                "tetra:scroll_rolled",
                '{BlockEntityTag:{data:[{details:"art_of_forging",glyphs:[I;6,15,4,7],intricate:0b,key:"tetra/flamberge_blade",material:2,ribbon:"ff9612",schematics:["tetra:sword/flamberge_blade"]}]}}'
            ),
            [" A ", "BC ", " D "],
            {
                A: "aquamirae:sharp_bones",
                B: "forbidden_arcanus:rune",
                C: "enigmaticlegacy:thicc_scroll",
                D: "eidolon:wraith_heart",
            },
        ],
        [
            Item.of(
                "tetra:scroll_rolled",
                '{BlockEntityTag:{data:[{details:"art_of_forging",glyphs:[I;8,1,4,5],intricate:0b,key:"single/head/halberd_head/halberd_head",material:1,ribbon:"444aff",schematics:["tetra:single/head/halberd_head/halberd_head"]}]}}'
            ),
            [" A ", "BC ", "   "],
            {
                A: "ecologics:crab_claw",
                B: "upgrade_aquatic:prismarine_rod",
                C: "enigmaticlegacy:thicc_scroll",
            },
        ],
        [
            Item.of(
                "tetra:scroll_rolled",
                '{BlockEntityTag:{data:[{details:"art_of_forging",glyphs:[I;0,1,9,4],intricate:0b,key:"sword/key_guard",material:1,ribbon:"fae409",schematics:["tetra:sword/key_guard"]}]}}'
            ),
            [" A ", " BC", " C "],
            {
                A: "supplementaries:key",
                B: "enigmaticlegacy:thicc_scroll",
                C: "hexerei:sage",
            },
        ],
        [
            Item.of(
                "tetra:scroll_rolled",
                '{BlockEntityTag:{data:[{details:"art_of_forging",glyphs:[I;9,3,6,2],intricate:0b,key:"single/head/mace_head/mace_head",material:1,ribbon:"560060",schematics:["tetra:single/head/mace_head/mace_head"]}]}}'
            ),
            [" A ", "DBD", " C "],
            {
                A: "forbidden_arcanus:rune",
                B: "enigmaticlegacy:thicc_scroll",
                C: "#spartanweaponry:flanged_maces",
                D: "#forge:storage_blocks/silver",
            },
        ],
        [
            Item.of(
                "tetra:scroll_rolled",
                '{BlockEntityTag:{data:[{details:"art_of_forging",glyphs:[I;5,10,13,2],intricate:0b,key:"sword/katana/katana_blade",material:2,ribbon:"dbff10",schematics:["tetra:sword/katana/katana_blade","tetra:sword/tsuba_guard"]}]}}'
            ),
            [" A ", "BCB", " D "],
            {
                A: "#spartanweaponry:katanas",
                B: "iceandfire:dragonbone",
                C: "enigmaticlegacy:thicc_scroll",
                D: "forbidden_arcanus:rune",
            },
        ],
        [
            Item.of(
                "tetra:scroll_rolled",
                '{BlockEntityTag:{data:[{details:"art_of_forging",glyphs:[I;8,7,9,2],intricate:0b,key:"tetra/crucible_blade",material:2,ribbon:"ff1e00",schematics:["tetra:sword/crucible_blade"]}]}}'
            ),
            [" A ", "BCB", " D "],
            {
                A: "art_of_forging:enigmatic_construct",
                B: "nethersdelight:propelplant_cane",
                C: "enigmaticlegacy:thicc_scroll",
                D: "apotheosis:epic_material",
            },
        ],
        [
            Item.of(
                "tetra:scroll_rolled",
                '{BlockEntityTag:{data:[{glyphs:[I;15,14,15,15],intricate:1b,key:"hone/gild_1",material:2,ribbon:"c9ae69",schematics:["tetra:hone/gild_1"]}]}}'
            ),
            [" A ", "BCB", " D "],
            {
                A: "ars_nouveau:source_gem",
                B: "forbidden_arcanus:arcane_crystal_dust",
                C: "enigmaticlegacy:thicc_scroll",
                D: "eidolon:wraith_heart",
            },
        ],
        [
            "2x occultism:sacrificial_bowl",
            ["ABA", "AAA", "   "],
            {
                A: "occultism:otherstone",
                B: "hexerei:wax_blend",
            },
        ],
        [
            "enchantinginfuser:enchanting_infuser",
            [" A ", "BCB", "CDC"],
            {
                A: "eidolon:wraith_heart",
                B: "irons_spellbooks:magic_cloth",
                C: "ars_nouveau:sourcestone",
                D: "minecraft:enchanting_table",
            },
        ],
        [
            "enchantinginfuser:advanced_enchanting_infuser",
            [" A ", "BCB", "CDC"],
            {
                A: "bosses_of_mass_destruction:crystal_fruit",
                B: "alexscaves:metal_swarf",
                C: "aether_redux:veridium_ingot",
                D: "enchantinginfuser:enchanting_infuser",
            },
        ],
        [
            "immersiveengineering:workbench",
            ["A B", "DCC", "E E"],
            {
                A: "#create:toolboxes",
                B: "create:empty_schematic",
                C: "#forge:treated_wood_slab",
                D: "#farmersdelight:cabinets/wooden",
                E: "immersiveengineering:treated_fence",
            },
        ],
        [
            "immersiveengineering:turntable",
            [" A ", "BCB", "DED"],
            {
                A: "create:turntable",
                B: "immersiveengineering:component_iron",
                C: "immersiveengineering:coil_lv",
                D: "create:andesite_alloy",
                E: "#forge:ingots/silver",
            },
        ],
        [
            "immersiveengineering:sorter",
            ["ABA", "CDC", "AEA"],
            {
                A: "#forge:treated_wood",
                B: "prettypipes:pipe",
                C: "#forge:plates/copper",
                D: "immersiveengineering:component_iron",
                E: "#forge:silicon",
            },
        ],
        [
            "immersiveengineering:capacitor_lv",
            ["ABA", "CDC", "AEA"],
            {
                A: "#forge:ingots/copper",
                B: "create:andesite_alloy",
                C: "thermal:cured_rubber",
                D: "immersiveengineering:wirecoil_copper",
                E: "#forge:plates/copper",
            },
        ],
        [
            "4x immersiveengineering:hemp_fabric",
            ["AAA", "ABA", "AAA"],
            {
                A: "immersiveengineering:hemp_fiber",
                B: "#forge:rods/wooden",
            },
        ],
        [
            "immersiveengineering:capacitor_mv",
            ["ABA", "CDC", "AEA"],
            {
                A: "#forge:ingots/silver",
                B: "immersiveengineering:component_iron",
                C: "#forge:silicon",
                D: "immersiveengineering:wirecoil_electrum",
                E: "#forge:plates/silver",
            },
        ],
        [
            Item.of(
                "tetra:scroll_rolled",
                '{BlockEntityTag:{data:[{details:"art_of_forging",glyphs:[I;8,1,9,5],intricate:0b,key:"bow/stave/dreadnought_stave",material:1,ribbon:"f3b31f",schematics:["tetra:bow/stave/dreadnought_stave","tetra:bow/stave/dreadnought_cross_stave"]}]}}'
            ),
            [" A ", "BCB", " D "],
            {
                A: "spartanweaponry:handle",
                B: "irons_spellbooks:cinder_essence",
                C: "enigmaticlegacy:thicc_scroll",
                D: "iceandfire:dragonbone_arrow",
            },
        ],
        [
            Item.of(
                "tetra:scroll_rolled",
                '{BlockEntityTag:{data:[{details:"art_of_forging",glyphs:[I;15,13,12,14],intricate:0b,key:"bow/string/compound_string",material:1,ribbon:"19e588",schematics:["tetra:bow/string/compound_string","tetra:crossbow/string/compound_cross_string"]}]}}'
            ),
            [" A ", "BCB", " D "],
            {
                A: "ars_nouveau:magebloom_fiber",
                B: "#forge:rope",
                C: "enigmaticlegacy:darkest_scroll",
                D: "tetra:vent_plate",
            },
        ],
        [
            "art_of_forging:devils_soul_gem",
            [" A ", "BCB", " B "],
            {
                A: "forbidden_arcanus:dark_rune",
                B: "tetra:metal_scrap",
                C: "iceandfire:witherbone",
            },
        ],
        [
            "thermal:machine_pulverizer",
            [" A ", "BCB", "DED"],
            {
                A: "integrateddynamics:drying_basin",
                B: "apotheosis:common_material",
                C: "thermal:machine_frame",
                D: "#forge:gears/steel",
                E: "thermal:rf_coil",
            },
        ],
        [
            "thermal:machine_smelter",
            [" A ", "BCB", "DED"],
            {
                A: "extractionator:extractionator",
                B: "forbidden_arcanus:polished_darkstone",
                C: "thermal:machine_frame",
                D: "#forge:dusts/tin",
                E: "thermal:rf_coil",
            },
        ],
        [
            "thermal:machine_furnace",
            [" A ", "BCB", "DED"],
            {
                A: "createaddition:connector",
                B: "upgrade_aquatic:embedded_ammonite",
                C: "thermal:machine_frame",
                D: "#forge:plates/zinc",
                E: "thermal:rf_coil",
            },
        ],
        [
            "theurgy:pyromantic_brazier",
            [" A ", "ABA", "CCC"],
            {
                A: "eidolon:elder_brick",
                B: "hexerei:infused_fabric",
                C: "forbidden_arcanus:aurum_planks",
            },
        ],
        [
            "theurgy:calcination_oven",
            [" A ", "ABA", " C "],
            {
                A: "eidolon:elder_brick",
                B: "alexsmobs:rocky_shell",
                C: "miners_delight:copper_pot",
            },
        ],
        [
            "theurgy:sal_ammoniac_tank",
            ["A A", "A A", "CBC"],
            {
                A: "eidolon:pewter_ingot",
                B: "create:fluid_tank",
                C: "#mcwbridges:wooden_piers",
            },
        ],
        [
            "actuallyadditions:empty_cup",
            ["A A", "BCB", " D "],
            {
                A: "thermal:obsidian_glass",
                B: "irons_spellbooks:fire_rune",
                C: "actuallyadditions:coffee_beans",
                D: "miners_delight:copper_cup",
            },
        ],
        [
            "actuallyadditions:ring",
            ["A  ", " B ", "   "],
            {
                A: "eidolon:arcane_gold_ingot",
                B: "enigmaticlegacy:iron_ring",
            },
        ],
        [
            "3x actuallyadditions:laser_upgrade_range",
            ["AAB", "CDC", "BAA"],
            {
                A: "actuallyadditions:restonia_crystal",
                B: "actuallyadditions:advanced_coil",
                C: "forbidden_arcanus:arcane_crystal_dust",
                D: "sophisticatedstorage:magnet_upgrade",
            },
        ],
        [
            "4x actuallyadditions:laser_upgrade_invisibility",
            ["AAA", "BCB", "AAA"],
            {
                A: "quark:framed_glass",
                B: "actuallyadditions:void_crystal",
                C: "actuallyadditions:advanced_coil",
            },
        ],
        [
            "actuallyadditions:atomic_reconstructor",
            ["ABA", "BCB", "ABA"],
            {
                A: "enderio:conductive_alloy_ingot",
                B: "create:cogwheel",
                C: "actuallyadditions:iron_casing",
            },
        ],
        [
            "actuallyadditions:crate_keeper",
            [" A ", " B ", " C "],
            {
                A: "actuallyadditions:restonia_crystal",
                B: "storagenetwork:inventory_remote",
                C: "#sophisticatedstorage:base_tier_wooden_storage",
            },
        ],
        [
            "actuallyadditions:iron_casing",
            ["ABA", "BCB", "ABA"],
            {
                A: "#forge:ingots/iron",
                B: "#forge:plates/iron",
                C: "immersiveengineering:component_iron",
            },
        ],
        [
            "actuallyadditions:lens_of_the_miner",
            ["ABC", "DEF", "GHI"],
            {
                A: "minecraft:diamond",
                B: "#forge:ingots/lead",
                C: "#forge:ingots/zinc",
                D: "#forge:ingots/iron",
                E: "actuallyadditions:lens",
                F: "#forge:ingots/aluminum",
                G: "#forge:ingots/silver",
                H: "#forge:ingots/nickel",
                I: "forbidden_arcanus:arcane_crystal",
            },
        ],
        [
            "actuallyadditions:single_battery",
            ["ABA", "BCB", "DAD"],
            {
                A: "actuallyadditions:restonia_crystal",
                B: "actuallyadditions:enori_crystal",
                C: "thermal:rf_potato",
                D: "#forge:ingots/lead",
            },
        ],
        [
            "actuallyadditions:basic_coil",
            [" A ", "ABA", " A "],
            {
                A: "actuallyadditions:restonia_crystal",
                B: "immersiveengineering:wirecoil_copper",
            },
        ],
        [
            "actuallyadditions:double_battery",
            [" A ", "BCB", "DBD"],
            {
                A: "actuallyadditions:single_battery",
                B: "actuallyadditions:enori_crystal",
                C: "actuallyadditions:advanced_coil",
                D: "create:polished_rose_quartz",
            },
        ],
        [
            "actuallyadditions:triple_battery",
            [" A ", "BCB", "DBD"],
            {
                A: "actuallyadditions:double_battery",
                B: "actuallyadditions:empowered_enori_crystal",
                C: "immersiveengineering:wirecoil_electrum",
                D: "#forge:dusts/cinnabar",
            },
        ],
        [
            "actuallyadditions:quadruple_battery",
            [" A ", "BCB", "DBD"],
            {
                A: "actuallyadditions:triple_battery",
                B: "actuallyadditions:empowered_diamatine_crystal",
                C: "immersiveengineering:wirecoil_steel",
                D: "thermal:rosin",
            },
        ],
        [
            "actuallyadditions:quintuple_battery",
            [" A ", "BCB", "DBD"],
            {
                A: "actuallyadditions:quadruple_battery",
                B: "#forge:plates/bronze",
                C: "immersiveengineering:wirecoil_steel",
                D: "create_new_age:overcharged_iron",
            },
        ],
        [
            "actuallyadditions:crusher",
            [" A ", "BCB", " D "],
            {
                A: "actuallyadditions:empowered_emeradic_crystal",
                B: "architects_palette:plating_block",
                C: "actuallyadditions:iron_casing",
                D: "thermal:machine_pulverizer",
            },
        ],
        [
            "actuallyadditions:crusher_double",
            ["ABA", "CDC", "ABA"],
            {
                A: "createaddition:capacitor",
                B: "actuallyadditions:advanced_coil",
                C: "actuallyadditions:crusher",
                D: "immersiveengineering:coil_mv",
            },
        ],
        [
            "4x actuallyadditions:lava_factory_casing",
            ["   ", "ABA", "   "],
            {
                A: "enderio:industrial_insulation_block",
                B: "actuallyadditions:iron_casing",
            },
        ],
        [
            "actuallyadditions:coal_generator",
            ["ABA", "CDC", "AEA"],
            {
                A: "architects_palette:molten_nether_bricks",
                B: "#railways:coalburner_stack",
                C: "refinedstorage:quartz_enriched_iron",
                D: "immersiveengineering:furnace_heater",
                E: "irons_spellbooks:energized_core",
            },
        ],
        [
            "actuallyadditions:ranged_collector",
            [" A ", "BCB", "DED"],
            {
                A: "create_new_age:electrical_connector",
                B: "forbidden_arcanus:arcane_crystal",
                C: "immersiveengineering:component_iron",
                D: "#forge:ingots/tin",
                E: "thermal:flux_magnet",
            },
        ],
        [
            "4x spartanweaponry:explosive_arrow",
            [" A ", " B ", " C "],
            {
                A: "spartanweaponry:explosive_charge",
                B: "#forge:rods/wooden",
                C: "eidolon:enchanted_ash"
            }
        ],
        [
            "4x minecraft:arrow",
            [" A ", " B ", " C "],
            {
                A: "minecraft:flint",
                B: "#forge:rods/wooden",
                C: "farmersdelight:straw"
            }
        ],
        [
            "4x caverns_and_chasms:large_arrow",
            [" A ", " B ", " C "],
            {
                A: "#forge:ingots/silver",
                B: "#forge:rods/wooden",
                C: "farmersdelight:straw"
            }
        ],
    ];

    recipes.forEach((recipe) => {
        console.log(`size: ${recipe.length} output: ${recipe[0]}`);
        event.shaped(recipe[0], recipe[1], recipe[2]);
    });
});
