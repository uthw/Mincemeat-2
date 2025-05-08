// Is the tag still gonna be #forge when we switch to NeoForge? If so it won't be TOO hard to fix...

ServerEvents.recipes((event) => {
    // Array of arrays, the nested arrays have a JSON object, the item to be replaced, and the replacement item.
    let replacements = [
        [{ mod: "littlelogistics" }, "#forge:ingots/iron", "#forge:ingots/tin"],

        // Copied over from Mincemeat 1.16.5

        [
            { mod: "aquamirae" },
            "minecraft:diamond",
            "aquaculture:neptunium_ingot",
        ],
        // need to change AN lang to accomodate this eventually
        [
            { output: "ars_nouveau:end_fiber" },
            "minecraft:popped_chorus_fruit",
            "undergarden:forgotten_nugget",
        ],
        [
            { output: "ars_nouveau:blaze_fiber" },
            "minecraft:blaze_powder",
            "aether:ambrosium_shard",
        ],
        [
            { output: "ars_nouveau:ring_of_greater_discount" },
            "minecraft:diamond",
            "aether:ambrosium_shard",
        ],
        [
            { mod: "ars_nouveau" },
            "minecraft:lapis_block",
            "forbidden_arcanus:arcane_crystal_block",
        ],
        [
            { mod: "ars_nouveau" },
            "minecraft:lapis_lazuli",
            "forbidden_arcanus:arcane_crystal",
        ],
        [
            { mod: "ars_nouveau", output: "ars_nouveau:runic_chalk" },
            "minecraft:bone_meal",
            "#create:stone_types/limestone",
        ],
        [{ mod: "ars_nouveau" }, "minecraft:hopper", "prettypipes:pipe"],
        [
            { output: "ars_nouveau:belt_of_levitation" },
            "#forge:feathers",
            "aquamirae:oxygelium",
        ],
        [
            { output: "ars_nouveau:ritual_fertility" },
            "minecraft:blaze_powder",
            "create:tree_fertilizer",
        ],
        [
            { mod: "botania" },
            "minecraft:blaze_powder",
            "forbidden_arcanus:arcane_crystal_dust",
        ],
        [{ mod: "botania" }, "minecraft:ender_eye", "iceandfire:ectoplasm"],
        [
            { mod: "botania" },
            "minecraft:brewing_stand",
            "eidolon:wooden_brewing_stand",
        ],
        [
            { mod: "botania" },
            "minecraft:prismarine_crystals",
            "theurgy:sal_ammoniac_crystal",
        ],
        [{ mod: "botania" }, "minecraft:quartz", "thermal:sulfur"],
        [{}, "mythicbotany:alfsteel_pylon", "botania:natura_pylon"],
        [{ mod: "capsule" }, "minecraft:ender_pearl", "paraglider:spirit_orb"],
        // create
        // Thermal items havent been ported yet
        [
            { output: "create:furnace_engine" },
            "minecraft:sticky_piston",
            "thermal:dynamo_stirling",
        ],
        [{ output: "create:rope_pulley" }, "#minecraft:wool", "#forge:rope"],
        [
            { output: "create:gantry_shaft" },
            "minecraft:redstone",
            "#forge:rods/iron",
        ],
        [
            { output: "create:windmill_bearing" },
            "#forge:stone",
            "create:copper_casing",
        ],
        // Uses thermal item
        [
            { output: "create:large_cogwheel" },
            "create:andesite_alloy",
            "#forge:ingots/tin",
        ],
        [
            { output: "create:cogwheel" },
            "create:andesite_alloy",
            "#forge:ingots/tin",
        ],
        // Uses Immersive Engineering item
        // [
        //     { output: "create:filter" },
        //     "#minecraft:wool",
        //     "immersiveengineering:hemp_fabric",
        // ],
        // [
        //     { output: "create:attribute_filter" },
        //     "#minecraft:wool",
        //     "immersiveengineering:hemp_fabric",
        // ],
        // [
        //     { output: "create:brass_funnel" },
        //     "minecraft:dried_kelp",
        //     "immersiveengineering:hemp_fabric",
        // ],
        [
            { output: "createaddition:rolling_mill" },
            "create:andesite_alloy",
            "#forge:ingots/zinc",
        ],
        [
            { output: "darkutils:charm_experience" },
            "minecraft:emerald",
            "forbidden_arcanus:xpetrified_orb",
        ],
        [
            { output: "darkutils:charm_experience" },
            "minecraft:xp_bottle",
            "enigmaticlegacy:tattered_tome",
        ],
        // [{}, "engineersdecor:metal_bar", "#forge:rods/iron"],
        [
            { output: "industrialforegoing:machine_frame_simple" },
            "minecraft:nether_brick",
            "theurgy:sal_ammoniac_crystal",
        ],
        [
            { output: "industrialforegoing:machine_frame_simple" },
            "minecraft:iron_ingot",
            "#forge:ingots/osmium",
        ],
        [
            { mod: "industrialforegoing" },
            "minecraft:lapis_lazuli",
            "ars_nouveau:mana_gem",
        ],
        [
            { output: "industrialforegoing:fluid_transporter_type" },
            "minecraft:ender_pearl",
            "create:mechanical_pump",
        ],
        [
            { output: "industrialforegoing:item_transporter_type" },
            "minecraft:ender_pearl",
            "industrialforegoing:conveyor",
        ],
        [
            { output: "industrialforegoing:machine_frame_advanced" },
            "minecraft:gold_ingot",
            "aether_redux:gravitite_ingot",
        ],
        [
            { output: "industrialforegoing:machine_frame_advanced" },
            "minecraft:netherite_scrap",
            "undergarden:cloggrum_nugget", // TODO Change this ingredient
        ],
        [
            { output: "industrialforegoing:machine_frame_supreme" },
            "minecraft:diamond",
            "undergarden:cloggrum_ingot",
        ],
        // Uses gears not currently in the modpack
        [
            { mod: "industrialforegoing" },
            "#forge:gears/iron",
            "#forge:gears/silver",
        ],
        [
            { mod: "industrialforegoing" },
            "#forge:gears/iron",
            "#forge:gears/lumium",
        ],
        [
            { output: "industrialforegoing:material_stonework_factory" },
            "minecraft:diamond_pickaxe",
            "undergarden:cloggrum_pickaxe",
        ],
        // thermal
        [
            { mod: "industrialforegoing" },
            "minecraft:redstone",
            "thermal:rf_coil",
        ],
        // engineer's decor
        // [
        //     { mod: "industrialforegoing" },
        //     "minecraft:piston",
        //     "engineersdecor:labeled_crate",
        // ],
        [{ mod: "mcwbridges" }, "minecraft:string", "#forge:rope"],
        [
            { output: "mekanismgenerators:solar_panel" },
            "#forge:glass_panes",
            "#thermal:glass/hardened",
        ],
        [
            { output: "mekanism:basic_thermodynamic_conductor" },
            "#forge:ingots/copper",
            "#forge:plates/constantan",
        ],
        [
            { mod: "modularrouters" },
            "minecraft:iron_ingot",
            "undergarden:cloggrum_ingot",
        ],
        [
            { mod: "modularrouters" },
            "minecraft:iron_bars",
            "undergarden:cloggrum_bars",
        ],
        [
            { mod: "modularrouters" },
            "minecraft:gold_nugget",
            "undergarden:cloggrum_nugget",
        ],
        [
            { mod: "modularrouters" },
            "minecraft:quartz",
            "undergarden:froststeel_ingot",
        ],
        [
            { mod: "modularrouters" },
            "minecraft:paper",
            "undergarden:twistytwig",
        ],
        [
            { mod: "modularrouters" },
            "minecraft:ender_pearl",
            "forbidden_arcanus:dark_matter",
        ],
        // [
        //     { mod: "naturesaura", type: "naturesaura_tree_ritual" },
        //     "minecraft:gold_ingot",
        //     "#forge:gems/arcane_crystal",
        // ],
        // [
        //     { mod: "naturesaura", type: "crafting_shaped" },
        //     "minecraft:gold_ingot",
        //     "#forge:gems/arcane_crystal",
        // ],
        // [
        //     { output: "naturesaura:eye" },
        //     "minecraft:spider_eye",
        //     "alexsmobs:guster_eye",
        // ],
        // // Botania
        // [
        //     { output: "naturesaura:aura_cache" },
        //     "minecraft:bucket",
        //     "botania:mana_pool",
        // ],
        // [
        //     { output: "naturesaura:oak_generator" },
        //     "minecraft:bone_meal",
        //     "create:tree_fertilizer",
        // ],
        // [
        //     { mod: "naturesaura" },
        //     "minecraft:brewing_stand",
        //     "eidolon:wooden_brewing_stand",
        // ],
        // [
        //     { mod: "naturesaura" },
        //     "minecraft:ghast_tear",
        //     "iceandfire:ectoplasm",
        // ],
        // [
        //     { mod: "naturesaura" },
        //     "minecraft:mossy_cobblestone",
        //     "minecraft:moss_block",
        // ],
        // [
        //     { mod: "naturesaura" },
        //     "minecraft:ender_pearl",
        //     "paraglider:spirit_orb",
        // ],
        // thermal
        [
            { output: "powah:capacitor_basic" },
            "minecraft:redstone_block",
            "thermal:rf_coil",
        ],
        [
            { output: "powah:capacitor_basic" },
            "minecraft:iron_ingot",
            "#forge:plates/iron",
        ],
        [
            { output: "powah:thermoelectric_paste" },
            "minecraft:blaze_powder",
            "create:super_glue",
        ],
        [
            { output: "powah:dielectric_rod" },
            "minecraft:iron_bars",
            "prettypipes:pipe",
        ],
        [
            { output: "powah:dielectric_rod_horizontal" },
            "minecraft:iron_bars",
            "prettypipes:pipe",
        ],
        [
            { output: "powah:photoelectric_pane" },
            "minecraft:lapis_lazuli",
            "#forge:silicon",
        ],
        [
            { mod: "refinedstorage" },
            "minecraft:redstone",
            "rubinated_nether:ruby",
        ],
        // Enigmatic Legacy
        [
            { output: "sophisticatedbackpacks:magnet_upgrade" },
            "minecraft:diamond",
            "enigmaticlegacy:magnet_ring",
        ],
        // Thermal
        [
            { mod: "sophisticatedbackpacks" },
            "minecraft:redstone",
            "thermal:cinnabar",
        ],
        [
            { output: "createaddition:rolling_mill" },
            "create:shaft",
            "#forge:plates/nickel",
        ],
        // iron spells
        [
            { output: "irons_spellbooks:pumpkin_helmet" },
            "minecraft:leather_helmet",
            "galosphere:sterling_helmet",
        ],
        [
            { output: "irons_spellbooks:pumpkin_chestplate" },
            "minecraft:leather",
            "alexsmobs:kangaroo_hide",
        ],
        [
            { output: "irons_spellbooks:pumpkin_leggings" },
            "minecraft:leather",
            "alexsmobs:kangaroo_hide",
        ],
        [
            { output: "irons_spellbooks:gold_spell_book" },
            "minecraft:gold_ingot",
            "forbidden_arcanus:stellarite_piece",
        ],
        [
            { output: "irons_spellbooks:gold_spell_book" },
            "irons_spellbooks:hogskin",
            "adventurez:rhino_leather",
        ],
        [
            { output: "irons_spellbooks:iron_spell_book" },
            "#forge:leather",
            "eidolon:tattered_cloth",
        ],
        [
            { output: "irons_spellbooks:arcane_anvil" },
            "minecraft:netherite_ingot",
            "aether:life_shard",
        ],
        [
            { output: "irons_spellbooks:arcane_anvil" },
            "minecraft:amethyst_block",
            "aether:zanite_block",
        ],
        [
            { output: "irons_spellbooks:netherite_spell_book" },
            "minecraft:netherite_ingot",
            "cataclysm:monstrous_horn",
        ],
        [
            { output: "irons_spellbooks:dragonskin_spell_book" },
            "#forge:obsidian",
            "alexscaves:occult_gem",
        ],
        [
            { output: "prettypipes:pressurizer" },
            "minecraft:iron_ingot",
            "#forge:ingots/tin",
        ],
        [
            { output: "prettypipes:item_terminal" },
            "#forge:storage_blocks/iron",
            "#forge:storage_blocks/tin",
        ],
        [
            { mod: "prettypipes" },
            "minecraft:ender_pearl",
            "iceandfire:ectoplasm",
        ],
        [
            { output: "prettypipes:low_filter_module" },
            "minecraft:hopper",
            "create:filter",
        ],
        [
            { output: "prettypipes:medium_speed_module" },
            "minecraft:sugar",
            "#supplementaries:cookies",
        ],
        [
            { output: "prettypipes:high_speed_module" },
            "minecraft:sugar",
            "create:hand_crank",
        ],
        [
            { mod: "prettypipes" },
            "minecraft:gold_ingot",
            "eidolon:pewter_ingot",
        ],
        [{ mod: "prettypipes" }, "minecraft:quartz", "#forge:ingots/copper"],
        [
            { mod: "prettypipes" },
            "minecraft:stone_slab",
            "create:dark_scoria_cobblestone_slab",
        ],
        [{ mod: "prettypipes" }, "minecraft:piston", "supplementaries:jar"],
        [
            { output: "supplementaries:planter" },
            "minecraft:bone_meal",
            "create:tree_fertilizer",
        ],
        [
            { output: "create:tree_fertilizer" },
            "minecraft:bone_meal",
            "#forge:gems/niter",
        ],
        [
            { output: "thermal:phytogro" },
            "minecraft:bone_meal",
            "create:tree_fertilizer",
        ],
        [
            {
                output: "pneumaticcraft:pressure_tube",
            },
            "#forge:glass",
            "#thermal:glass/hardened",
        ],
        [
            { output: "#botanypots:all_botany_pots" },
            "minecraft:flower_pot",
            "supplementaries:planter",
        ],
        [
            { output: "storagedrawers:emerald_storage_upgrade" },
            "minecraft:emerald",
            "thermal:cinnabar",
        ],
        [
            { output: "storagedrawers:void_upgrade" },
            "#forge:obsidian",
            "forbidden_arcanus:dark_rune",
        ],
        [
            { mod: "storagedrawers" },
            "#forge:rods/wooden",
            "farmersdelight:straw",
        ],
        [
            { output: "storagedrawers:obsidian_storage_upgrade" },
            "#forge:obsidian",
            "aether:holystone_bricks",
        ],
        [
            { output: "storagedrawers:iron_storage_upgrade" },
            "minecraft:iron_ingot",
            "#forge:ingots/zinc",
        ],
        [
            { output: "toms_storage:ts.crafting_terminal" },
            "minecraft:gold_ingot",
            "#forge:ingots/pewter",
        ],
        [
            { output: "toms_storage:ts.crafting_terminal" },
            "#forge:workbench",
            "toms_storage:ts.inventory_cable", // Why is it spelled like this? Inside joke?
        ],
        [
            { output: "grapplemod:swingupgradeitem" },
            "minecraft:feather",
            "aquaculture:iron_hook",
        ],
        [{ mod: "grapplemod" }, "minecraft:lead", "#supplementaries:ropes"],
        [
            { mod: "sophisticatedbackpacks" },
            "#forge:ingots/iron",
            "#forge:ingots/tin",
        ],
        [{}, "xreliquary:zombie_heart", "eidolon:zombie_heart"],
        [
            { output: "thermal:rubber" },
            "minecraft:dandelion",
            "#minecraft:flowers",
        ],
        // [
        //     { output: "thermal:rf_coil" },
        //     "minecraft:gold_ingot",
        //     "#forge:rods/gold",
        // ],
        [
            { output: "thermal:machine_frame" },
            "minecraft:iron_ingot",
            "#forge:plates/iron",
        ],
        [
            { output: "sophisticatedbackpacks:tank_upgrade" },
            "#forge:glass",
            "thermal:cured_rubber",
        ],
        [
            { output: "sophisticatedbackpacks:advanced_puup_upgrade" },
            "minecraft:dispenser",
            "rangedpumps:pump",
        ],
        [
            { mod: "sophisticatedbackpacks" },
            "minecraft:netherite_block",
            "#forge:storage_blocks/steel",
        ],
        [
            { output: "create:crushing_wheel" },
            "create:andesite_alloy",
            "#forge:ingots/invar",
        ],
        [{ mod: "grapplemod" }, "minecraft:lead", "#forge:rope"],
        [{ mod: "grapplemod" }, "minecraft:gold_ingot", "thermal:cinnabar"],
        [
            { mod: "grapplemod" },
            "minecraft:piston",
            "immersive_aircraft:engine",
        ],
        [
            { output: "enigmaticlegacy:ender_rod" },
            "#forge:ender_pearls",
            "alexscaves:sulfur_dust",
        ],
        [
            { output: "reliquary:harvest_rod" },
            "minecraft:rose_bush",
            "#botania:petals",
        ],
        [
            { output: "reliquary:harvest_rod" },
            "minecraft:vine",
            "environmental:cattail",
        ],
        [
            { mod: "prettypipes" },
            "minecraft:iron_ingot",
            "minecraft:copper_ingot",
        ],
        [
            { output: "sophisticatedstorage:upgrade_base" },
            "minecraft:iron_ingot",
            "#forge:ingots/tin",
        ],
        [
            { mod: "sophisticatedstorage" },
            "minecraft:redstone",
            "thermal:cinnabar",
        ],
        [
            { input: "sophisticatedstorage:upgrade_base" },
            "minecraft:iron_ingot",
            "#forge:ingots/tin",
        ],
        [
            { mod: "sophisticatedstorage" },
            "minecraft:piston",
            "supplementaries:ash_brick",
        ],
        [
            { mod: "sophisticatedbackpacks" },
            "minecraft:piston",
            "supplementaries:ash_brick",
        ],
        [
            { mod: "sophisticatedstorage" },
            "#forge:stone",
            "quark:polished_tuff",
        ],
        [
            { mod: "sophisticatedstorage" },
            "minecraft:comparator",
            "forbidden_arcanus:xpetrified_orb",
        ],
        [
            { mod: "sophisticatedstorage" },
            "minecraft:repeater",
            "forbidden_arcanus:arcane_crystal",
        ],
        [
            { mod: "toms_storage" },
            "toms_storage:ts.inventory_cable",
            "prettypipes:pipe",
        ],
        [
            { output: "forbidden_arcanus:cloth" },
            "minecraft:white_wool",
            "eidolon:tattered_cloth",
        ],
        [
            { output: "minecraft:item_frame" },
            "minecraft:leather",
            "eidolon:tattered_cloth",
        ],
        [
            { output: "create_new_age:nuclear_fuel" },
            "create_new_age:radioactive_thorium",
            "alexscaves:uranium",
        ],
        [
            { output: "create_new_age:heat_pump" },
            "create_new_age:thorium",
            "#forge:ingots/nickel",
        ],
        [
            { output: "create_new_age:heat_pipe" },
            "#minecraft:terracotta",
            "create:ochrum",
        ],
        [
            { output: "create_enchantment_industry:printer" },
            "minecraft:dried_kelp",
            "ars_nouveau:runic_chalk",
        ],
        [
            { output: "ars_nouveau:manipulation_essence" },
            "minecraft:stone_button",
            "thermal:apatite",
        ],
        [
            { output: "ars_nouveau:manipulation_essence" },
            "minecraft:clock",
            "delightful:green_tea_leaf",
        ],
        [
            { output: "ars_nouveau:glyph_aoe" },
            "minecraft:firework_star",
            "thermal:basalz_rod",
        ],
        [
            { output: "ars_nouveau:glyph_accelerate" },
            "minecraft:powered_rail",
            "neapolitan:chocolate_bar",
        ],
        [
            { output: "ars_nouveau:glyph_accelerate" },
            "minecraft:clock",
            "theurgy:sal_ammoniac_crystal",
        ],
        [
            { output: "ars_nouveau:glyph_amplify" },
            "minecraft:diamond_pickaxe",
            "#forge:scales/sea_serpent",
        ],
        [
            { output: "ars_nouveau:glyph_dampen" },
            "minecraft:nether_brick",
            "#forge:death_worm_chitins",
        ],
        [
            { output: "ars_nouveau:glyph_decelerate" },
            "minecraft:clock",
            "autumnity:snail_goo",
        ],
        [
            { output: "ars_nouveau:glyph_decelerate" },
            "minecraft:soul_sand",
            "alexsmobs:banana_slug_slime",
        ],
        [
            { output: "ars_nouveau:glyph_duration_down" },
            "minecraft:glowstone_dust",
            "autumnity:snail_goo",
        ],
        [
            { output: "ars_nouveau:glyph_extend_time" },
            "minecraft:redstone_block",
            "thermal:cured_rubber",
        ],
        [
            { output: "ars_nouveau:glyph_fortune" },
            "minecraft:rabbit_foot",
            "eidolon:zombie_heart",
        ],
        [
            { output: "ars_nouveau:glyph_pierce" },
            "minecraft:arrow",
            "theurgy:sal_ammoniac_crystal",
        ],
        [
            { output: "ars_nouveau:glyph_randomize" },
            "minecraft:pink_carpet",
            "forbidden_arcanus:dark_matter",
        ],
        [
            { output: "ars_nouveau:glyph_sensitive" },
            "minecraft:scaffolding",
            "delightful:salmonberries",
        ],
        [
            { output: "ars_nouveau:glyph_sensitive" },
            "minecraft:water_bucket",
            "delightful:salmonberries",
        ],
        [
            { output: "ars_nouveau:glyph_split" },
            "minecraft:stonecutter",
            "#quark:shards",
        ],
        [
            { output: "ars_nouveau:glyph_animate_block" },
            "#forge:obsidian",
            "create_new_age:magnetite_block",
        ],
        [
            { output: "ars_nouveau:glyph_blink" },
            "#forge:ender_pearls",
            "eidolon:wraith_heart",
        ],
        [
            { output: "ars_nouveau:glyph_break" },
            "minecraft:iron_pickaxe",
            "createoreexcavation:drill",
        ],
        [
            { output: "mekanism:osmium_compressor" },
            "minecraft:bucket",
            "thermal:rose_gold_gear",
        ],
        [
            { output: "eidolon:planter" },
            "minecraft:dirt",
            "farmersdelight:rich_soil",
        ],
        [
            { output: "explorerscompass:explorerscompass" },
            "minecraft:cobweb",
            "thermal:apatite",
        ],
        [{}, "eidolon:candle", "#minecraft:candles"],
        [
            { output: "hexerei:tallow" },
            "minecraft:string",
            "supplementaries:ash",
        ],
        [{}, "delightful:animal_fat", "hexerei:animal_fat"],
        [
            { output: "hexerei:willow_broom" },
            "minecraft:gold_block",
            "apotheosis:uncommon_material",
        ],
        [
            { output: "hexerei:witch_hazel_broom" },
            "minecraft:diamond",
            "apotheosis:rare_material",
        ],
        [
            { output: "hexerei:mahogany_broom" },
            "minecraft:netherite_ingot",
            "alexscaves:occult_gem",
        ],
        [{ mod: "hexerei" }, "minecraft:wheat", "farmersdelight:straw"],
        [
            { output: "hexerei:pestle_and_mortar" },
            "minecraft:quartz",
            "create:shaft",
        ],
        [
            { output: "botania:travel_belt" },
            "botania:manasteel_ingot",
            "miners_delight:gossypium",
        ],
        [
            { output: "botania:speed_up_belt" },
            "minecraft:sugar",
            "neapolitan:chocolate_bar",
        ],
        [
            { output: "botania:cloud_pendant" },
            "botania:manasteel_ingot",
            "#aether:aerclouds",
        ],
        [
            { output: "ars_nouevau:ritual_cloudshaping" },
            "minecraft:feather",
            "#aether:aerclouds",
        ],
        [
            { output: "ars_elemental:glyph_arc_projectile" },
            "minecraft:slime_ball",
            "undergarden:goo_ball",
        ],
        [
            { output: "ars_elemental:glyph_homing_projectile" },
            "minecraft:ender_eye",
            "alexsmobs:guster_eye",
        ],
        [
            { output: "ars_elemental:glyph_homing_projectile" },
            "minecraft:nether_star",
            "alexscaves:notor_gizmo",
        ],
        [
            { output: "ars_nouveau:glyph_extract" },
            "minecraft:emerald",
            "alexsmobs:shark_tooth",
        ],
        [
            { output: "ars_nouveau:glyph_bounce" },
            "#forge:slimeballs",
            "thermal:florb",
        ],
        // [
        //     { output: "relics:researching_table" },
        //     "#minecraft:wooden_slabs",
        //     "forbidden_arcanus:aurum_slab",
        // ],
        // [
        //     { output: "relics:researching_table" },
        //     "#minecraft:wooden_planks",
        //     "forbidden_arcanus:aurum_planks",
        // ],
        [
            { output: "ars_nouveau:burst" },
            "minecraft:fire_charge",
            "thermal:earth_charge",
        ],
        [
            { output: "ars_elemental:glyph_discharge" },
            "minecraft:lightning_rod",
            "thermal:lightning_charge",
        ],
        [
            { output: "ars_elemental:glyph_charm" },
            "minecraft:cake",
            "farmersdelight:apple_pie_slice",
        ],
        [
            { output: "ars_elemental:glyph_charm" },
            "minecraft:golden_carrot",
            "farmersdelight:chocolate_pie_slice",
        ],
        [
            { output: "ars_elemental:glyph_charm" },
            "ars_nouveau:source_berry_pie",
            "delightful:source_berry_pie_slice",
        ],
        [
            { output: "ars_nouveau:glyph_cold_snap" },
            "minecraft:ice",
            "irons_spellbooks:frozen_bone",
        ],
        [
            { output: "ars_elemental:glyph_conjure_terrain" },
            "minecraft:dirt",
            "farmersdelight:organic_compost",
        ],
        [
            { output: "ars_nouveau:glyph_craft" },
            "minecraft:crafting_table",
            "eidolon:worktable",
        ],
        [
            { output: "ars_nouveau:glyph_crush" },
            "minecraft:piston",
            "create:mechanical_press",
        ],
        [
            { output: "ars_nouveau:glyph_crush" },
            "minecraft:grindstone",
            "forbidden_arcanus:iron_blacksmith_gavel",
        ],
        [
            { output: "ars_nouveau:glyph_cut" },
            "minecraft:iron_sword",
            "farmersdelight:iron_knife",
        ],
        [
            { output: "ars_elemental:glyph_discharge" },
            "minecraft:lightning_rod",
            "thermal:lightning_charge",
        ],
        [
            { output: "ars_elemental:glyph_envenom" },
            "minecraft:poisonous_potato",
            "mowziesmobs:naga_fang",
        ],
        [
            { output: "ars_elemental:glyph_envenom" },
            "minecraft:suspicious_stew",
            "mowziesmobs:dart",
        ],
        [
            { output: "ars_elemental:glyph_envenom" },
            "minecraft:fermented_spider_eye",
            "miners_delight:squid",
        ],
        [
            { output: "ars_nouveau:glyph_evaporate" },
            "minecraft:sponge",
            "irons_spellbooks:ice_rune",
        ],
        [
            { output: "ars_nouveau:glyph_exchange" },
            "#forge:ender_pearls",
            "caverns_and_chasms:spinel",
        ],
        [
            { output: "create:weighted_ejector" },
            "create:depot",
            "supplementaries:spring_launcher",
        ],
        [{}, "mekanism:fluorite_gem", "thermal:sulfur"],
        [{}, "mekanism:dust_fluorite", "thermal:sulfur_dust"],
        [
            { output: "ars_nouveau:vitalic_sourcelink" },
            "minecraft:glistering_melon_slice",
            "delightful:matcha",
        ],
        [
            { output: "ars_nouveau:alchemical_sourcelink" },
            "minecraft:brewing_stand",
            "eidolon:wooden_brewing_stand",
        ],
        [
            { output: "ars_nouveau:mycelial_sourcelink" },
            "minecraft:mushroom_stew",
            "thermal:slime_mushroom_spores",
        ],
        [{}, "forbidden_arcanus:spawner_scrap", "paraglider:spirit_orb"],
        [
            { output: "enderio:primitive_alloy_smelter" },
            "minecraft:deepslate",
            "create:andesite_alloy",
        ],
        [
            { output: "enderio:primitive_alloy_smelter" },
            "enderio:grains_of_infinity",
            "create:cogwheel",
        ],
        [
            { output: "enderio:basic_capacitor" },
            "minecraft:gold_nugget",
            "#forge:nuggets/zinc",
        ],
        [{ output: "smallships:sail" }, "#minecraft:wool", "create:white_sail"],
        [{ mod: "smallships" }, "minecraft:lead", "#forge:rope"],
        [{ output: "smallships:sail" }, "#minecraft:logs", "#quark:posts"],
        [
            { output: "botania:fel_pumpkin" },
            "minecraft:string",
            "alexscaves:dark_tatters",
        ],
        [
            { output: "easy_villagers:converter" },
            "minecraft:rotten_flesh",
            "eidolon:zombie_heart",
        ],
        [
            { output: "easy_villagers:auto_trader" },
            "minecraft:netherite_ingot",
            "aether:swet_ball",
        ],
        [
            { output: "easy_villagers:auto_trader" },
            "minecraft:redstone",
            "create:belt_connector",
        ],
        [
            { output: "easy_villagers:farmer" },
            "minecraft:dirt",
            "farmersdelight:rich_soil",
        ],
        [
            { output: "easy_villagers:iron_farm" },
            "minecraft:stone",
            "conjurer_illager:throwable_ball",
        ],
        //
        [
            { output: "enigmaticlegacy:insignia" },
            "minecraft:ender_eye",
            "irons_spellbooks:rare_ink",
        ],
        [
            { output: "enigmaticlegacy:insignia" },
            "minecraft:gold_ingot",
            "aether_redux:veridium_ingot",
        ],
        [
            { output: "enigmaticlegacy:insignia" },
            "minecraft:prismarine_crystals",
            "forbidden_arcanus:arcane_crystal",
        ],
        [{}, "minecraft:bowl", "#forge:bowls"],
        [
            { output: "pneumaticcraft:turbine_blade" },
            "minecraft:gold_ingot",
            "#forge:ingots/zinc",
        ],
        [
            { output: "pneumaticcraft:pneumatic_wrench" },
            "minecraft:orange_dye",
            "miners_delight:gossypium",
        ],
        [
            { output: "pneumaticcraft:charging_station" },
            "minecraft:brick",
            "#forge:ingots/electrum",
        ],
        [
            { output: "pneumaticcraft:jackhammer" },
            "minecraft:diamond",
            "aether_redux:gravitite_ingot",
        ],
        [{}, "reliquary:bat_wing", "miners_delight:bat_wing"],
        [{}, "forbidden_arcanus:bat_wing", "miners_delight:bat_wing"],
        [{}, "galosphere:silver_ingot", "#forge:ingots/silver"],
        [{}, "minecraft:crafting_table", "#forge:workbench"],
        [
            { output: "immersiveengineering:cokebrick" },
            "minecraft:clay_ball",
            "farmersdelight:straw",
        ],
        [
            { output: "immersiveengineering:cokebrick" },
            "#forge:ingots/brick",
            "architects_palette:algal_brick",
        ],
        [
            { output: "immersiveengineering:cokebrick" },
            "#forge:sandstone",
            "#create:stone_types/limestone",
        ],
        [
            { output: "immersiveen:capacitor_mv" },
            "#forge:ingots/steel",
            "#forge:ingots/brass",
        ],
        [
            { output: "immersiveengineering:capacitor_hv" },
            "#forge:ingots/steel",
            "#forge:ingots/electrum",
        ],
        [
            { output: "immersiveengineering:conveyor_dropping" },
            "minecraft:iron_trapdoor",
            "create:chute",
        ],
        [
            { output: "immersiveengineering:windmill" },
            "#forge:ingots/iron",
            "#forge:ingots/steel",
        ],
        [
            { output: "immersiveengineering:conveyor_basic" },
            "#forge:ingots/iron",
            "#forge:ingots/zinc",
        ],
        [
            { output: "immersiveengineering:wirecoil_copper" },
            "#forge:sticks/wooden",
            "#forge:rods/iron",
        ],
        [
            { output: "immersiveengineering:coil_lv" },
            "minecraft:iron_ingot",
            "thermal:rf_coil",
        ],
        [
            { output: "immersiveengineering:dynamo" },
            "minecraft:iron_ingot",
            "#forge:plates/steel",
        ],
        [
            { output: "immersiveengineering:blastbrick" },
            "minecraft:nether_brick",
            "supplementaries:ash_brick",
        ],
        [
            { output: "immersiveengineering:blastbrick" },
            "#forge:ingots/brick",
            "#forge:plates/zinc",
        ],
        [
            { output: "immersiveengineering:component_iron" },
            "minecraft:copper_ingot",
            "create:andesite_alloy",
        ],
        [
            { output: "immersiveengineering:component_steel" },
            "minecraft:copper_ingot",
            "create:andesite_alloy",
        ],
        [
            { output: "immersiveengineering:item_batcher" },
            "minecraft:redstone",
            "refinedstorage:silicon",
        ],
        [
            { output: "immersiveengineering:insulating_glass" },
            "#forge:glass",
            "#thermal:glass/hardened",
        ],
        [
            { output: "immersiveengineering:thermoelectric_generator" },
            "immersiveengineering:coil_lv",
            "galosphere:combustion_table",
        ],
        [{}, "actuallyadditions:bats_wing", "miners_delight:bat_wing"],
        [
            { output: "actuallyadditions:advanced_coil" },
            "minecraft:gold_nugget",
            "#forge:nuggets/constantan",
        ],
        [
            { output: "actuallyadditions:lens" },
            "#forge:glass",
            "thermal:signalum_glass",
        ],
        [
            { output: "actuallyadditions:iron_casing" },
            "#forge:rods/wooden",
            "forge:plates/zinc",
        ],
        [
            // [
            //     {
            //         not: { output: "actuallyadditions:black_quartz_block" },
            //     },
            //     {
            //         not: {
            //             output: "actuallyadditions:black_quartz_pillar_block",
            //         },
            //     },
            // ],
            "actuallyadditions:black_quartz",
            "forbidden_arcanus:arcane_crystal_dust",
        ],
        [
            { output: "thermal:machine_frame" },
            "thermal:tin_gear",
            "createaddition:capacitor",
        ],
        [
            { output: "actuallyadditions:ring_of_magnetizing" },
            "minecraft:lapis_lazuli",
            "alexscaves:scarlet_neodymium_ingot",
        ],
        [
            { output: "actuallyadditions:ring_of_magnetizing" },
            "actuallyadditions:restonia_crystal",
            "alexscaves:azure_neodymium_ingot",
        ],
        [
            { output: "actuallyadditions:ender_casing" },
            "#forge:ender_pearls",
            "eidolon:ender_calx",
        ],
        [
            { output: "actuallyadditions:feeder" },
            "#minecraft:planks",
            "farmersdelight:straw_bale",
        ],
        [
            { output: "actuallyadditions:feeder" },
            "minecraft:golden_carrot",
            "majruszsaccessories:idol_of_fertility",
        ],
        [
            { output: "actuallyadditions:energizer" },
            "actuallyadditions:advanced_coil",
            "create_new_age:overcharged_diamond",
        ],
        [
            { output: "actuallyadditions:enervator" },
            "actuallyadditions:advanced_coil",
            "create_new_age:overcharged_diamond",
        ],
        [
            { output: "actuallyadditions:canola_press" },
            "#forge:cobblestone",
            "create:industrial_iron_block",
        ],
        [
            { output: "actuallyadditions:oil_generator" },
            "#forge:cobblestone",
            "create:industrial_iron_block",
        ],
        [
            { output: "actuallyadditions:dropper" },
            "#forge:cobblestone",
            "quark:iron_plate",
        ],
        [
            { output: "#domesticationinnovation:pet_beds" },
            "minecraft:bone",
            "supplementaries:doormat",
        ],
        [
            { output: "caverns_and_chasms:large_arrow" },
            "minecraft:feather",
            "minersdelight:gossypium",
        ],
        [
            { output: "minecraft:bread" },
            "minecraft:wheat",
            "farmersdelight:wheat_dough",
        ],
        [
            { output: "cataclysm:abyss_eye" },
            "minecraft:crying_obsidian",
            "aquamirae:abyssal_amethyst",
        ],
        // [
        //     { output: "cataclysm:abyss_eye" },
        //     "minecraft:obsidian",
        //     "betternether:weeping_obsidian",
        // ],
        [
            { output: "cataclysm:mech_eye" },
            "minecraft:iron_ingot",
            "alexscaves:energized_galena_neutral",
        ],
        [
            { output: "cataclysm:mech_eye" },
            "minecraft:redstone_block",
            "irons_spellbooks:lightning_bottle",
        ],
        [
            { output: "thermal:watering_can" },
            "minecraft:bucket",
            "miners_delight:copper_cup",
        ],
        [
            { output: "cold_sweat:thermolith" },
            "#minecraft:terracotta",
            "atmospheric:smooth_arid_sandstone",
        ],
        [
            { output: "cold_sweat:minecart_insulation" },
            "minecraft:leather",
            "forbidden_arcanus:cloth",
        ],
        [
            { mod: "meetyourfight" },
            "minecraft:amethyst_shard",
            "aether:zanite_gemstone",
        ],
        [
            { output: "meetyourfight:tomb_planeter" },
            "#minecraft:dirt",
            "farmersdelight:rich_soil",
        ],
        [
            { output: "meetyourfight:blossoming_mind" },
            "minecraft:lapis_lazuli",
            "alexscaves:occult_gem",
        ],
        [
            { output: "meetyourfight:wilted_ideals" },
            "#c:black_dyes",
            "#botania:petals/black",
        ],
        [
            { output: "bosses_of_mass_destruction:void_lily" },
            "minecraft:amethyst_shard",
            "forbidden_arcanus:dark_matter",
        ],
        [
            { output: "bosses_of_mass_destruction:void_lily" },
            "minecraft:lily_of_the_valley",
            "atmospheric:yucca_flower",
        ],
        [
            { output: "irons_spellbooks:wayward_compass" },
            "minecraft:soul_lantern",
            "quark:soul_bead",
        ],
        [
            { output: "dragonseeker:epic_dragonseeker" },
            "minecraft:nether_star",
            "cataclysm:black_steel_ingot",
        ],
        [
            { output: "darkutils:redstone_randomizer" },
            "minecraft:quartz",
            "caverns_and_chasms:spinel",
        ],
        [
            { output: "darkutils:redstone_randomizer" },
            "minecraft:ender_pearl",
            "irons_spellbooks:arcane_essence",
        ],
        [
            { mod: "industrialforegoing" },
            "minecraft:ender_eye",
            "alexscaves:ferrouslime_ball",
        ],
        [
            { mod: "industrialforegoing" },
            "minecraft:ender_pearl",
            "graveyard:corruption",
        ],
        [
            { output: "graveyard:bone_dagger" },
            "minecraft:bone",
            "irons_spellbooks:frozen_bone",
        ],
        [
            { output: "botania:fel_pumpkin" },
            "minecraft:bone",
            "irons_spellbooks:frozen_bone",
        ],
        [
            { output: "reliquary:mob_charm" },
            "#forge:leather",
            "forbidden_arcanus:cloth",
        ],
        [
            { output: "immersive_aircraft:enhanced_propeller" },
            "minecraft:copper_ingot",
            "#forge:ingots/brass",
        ],
        [
            { output: "immersive_aircraft:boiler" },
            "minecraft:furnace",
            "cold_sweat:boiler",
        ],
        [
            { output: "immersive_aircraft:gyroscope" },
            "minecraft:comparator",
            "create:electron_tube",
        ],
        [
            { output: "immersive_aircraft:hull_reinforcement" },
            "minecraft:iron_ingot",
            "pneumaticcraft:ingot_iron_compressed",
        ],
        [
            { output: "irons_spellbooks:alchemist_cauldron" },
            "#c:iron_ingots",
            "#forge:ingots/silver",
        ],
        [
            { output: "irons_spellbooks:alchemist_cauldron" },
            "irons_spellbooks:cinder_essence",
            "mowziesmobs:naga_fang",
        ],
        [
            { output: "supplementaries:cannon" },
            "minecraft:iron_ingot",
            "#forge:ingots/aluminum",
        ],
        // [
        //     { output: "sawmill:sawmill" },
        //     "minecraft:iron_ingot",
        //     "thermal:saw_blade",
        // ],
        [
            { output: "framedblocks:framing_saw" },
            "minecraft:iron_ingot",
            "thermal:saw_blade",
        ],
        [
            { output: "framedblocks:powered_framing_saw" },
            "minecraft:iron_ingot",
            "thermal:saw_blade",
        ],
        [
            { mod: "elevatorid" },
            "minecraft:ender_pearl",
            "ars_nouveau:manipulation_essence",
        ],
        [
            { output: "create:item_drain" },
            "minecraft:iron_bars",
            "famersdelight:canvas",
        ],
        [{ output: "create:spout" }, "minecraft:dried_kelp", "quark:chute"],
        [
            { output: "grapplemod:block_grapple_modifier" },
            "minecraft:anvil",
            "galosphere:combustion_table",
        ],
        [
            { output: "irons_spellbooks:netherite_spell_book" },
            "irons_spellbooks:lightning_bottle",
            "dungeonnowloading:chaotic_hexahedron",
        ],
        [
            { output: "skyarena:ice_eye" },
            "minecraft:snow_block",
            "irons_spellbooks:frozen_bone",
        ],
        [
            { output: "skyarena:ice_eye" },
            "minecraft:packed_ice",
            "aquamirae:fin",
        ],
        // [
        //     { output: "skyarena:crimson_eye" },
        //     "minecraft:blaze_powder",
        //     "betternether:nether_ruby",
        // ], // TODO replace with rubinated nether
        [
            { output: "skyarena:crimson_eye" },
            "minecraft:polished_blackstone",
            "netherexp:necromium_plating",
        ],
        [
            { output: "hexcasting:lens" },
            "hexcasting:amethyst_dust",
            "irons_spellbooks:divine_pearl",
        ],
        [
            { output: "hexcasting:lens" },
            "minecraft:glass",
            "hexcasting:amethyst_dust",
        ],
        [
            { output: "hexcasting:focus" },
            "minecraft:glowstone_dust",
            "irons_spellbooks:arcane_essence",
        ],
        [
            { output: "hexcasting:focus" },
            "minecraft:paper",
            "ars_nouveau:magebloom_fiber",
        ],
        [
            { output: "hexcasting:focus" },
            "#forge:leather",
            "farmersdelight:canvas",
        ],
        [
            { output: "caverns_and_chasms:living_flesh" },
            "minecraft:ghast_tear",
            "alexscaves:bioluminesscence",
        ],
        [
            { output: "irons_spellbooks:nature_rune" },
            "minecraft:poisonous_potato",
            "alexscaves:pewen_branch",
        ],
        [
            { output: "celestisynth:celestial_core" },
            "minecraft:amethyst_shard",
            "galosphere:pink_salt_shard",
        ],
        [
            { output: "ars_additions:ender_source_jar" },
            "minecraft:popped_chorus_fruit",
            "eidolon:gold_inlay",
        ],
        [
            { output: "art_of_forging:resonant_alloy" },
            "minecraft:netherite_scrap",
            "caverns_and_chasms:living_flesh",
        ],
        [
            { output: "art_of_forging:endsteel_ingot" },
            "minecraft:dragon_breath",
            "aquamirae:abyssal_amethyst",
        ],
        [
            { output: "art_of_forging:life_fiber" },
            "tetra:dragon_sinew",
            "enigmaticlegacy:infinimeal"
        ]
        //     // replace all aluminum with zinc, just for the sake of not adding too many ores
        //     [{}, "#forge:ingots/aluminum", "#forge:ingots/zinc"],
        //     [{}, "#forge:plates/aluminum", "#forge:plates/zinc"],
        //     [{}, "#forge:wires/aluminum", "#forge:wires/iron"],
        //     [{}, "#forge:rods/aluminum", "#forge:rods/iron"],
        //     [
        //         {},
        //         "immersiveengineering:sheetmetal_aluminum",
        //         "immersiveengineering:sheetmetal_silver",
        //     ],
        //     [{}, "immersiveengineering:"],
    ];

    replacements.forEach((replacement) => {
        event.replaceInput(replacement[0], replacement[1], replacement[2]); // Lmao how did I forget this line for so long
    });
});
