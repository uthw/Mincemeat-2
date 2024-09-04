// doubles durability for all materials from tetra

ServerEvents.highPriorityData((event) => {
    let tweak = [
        { name: "bone/bone", durability: 240 },
        // { name: "wool/wool", durability: 400 },
        // { name: "wool/wool_black", durability: 400 },
        // { name: "wool/wool_blue", durability: 400 },
        // { name: "wool/wool_brown", durability: 400 },
        // { name: "wool/wool_cyan", durability: 400 },
        // { name: "wool/wool_gray", durability: 400 },
        // { name: "wool/wool_green", durability: 400 },
        // { name: "wool/wool_light_blue", durability: 400 },
        // { name: "wool/wool_light_gray", durability: 400 },
        // { name: "wool/wool_lime", durability: 400 },
        // { name: "wool/wool_magenta", durability: 400 },
        // { name: "wool/wool_orange", durability: 400 },
        // { name: "wool/wool_pink", durability: 400 },
        // { name: "wool/wool_purple", durability: 400 },
        // { name: "wool/wool_red", durability: 400 },
        // { name: "wool/wool_yellow", durability: 400 },
        { name: "fibre/dragon_sinew", durability: 2300 },
        { name: "fibre/phantom_membrane", durability: 2300 },
        { name: "fibre/string", durability: 400 },
        { name: "fibre/twisting_vine", durability: 400 },
        { name: "fibre/vine", durability: 360 },
        { name: "fibre/weeping_vine", durability: 640 },
        { name: "gem/amethyst", durability: 1700 },
        { name: "gem/diamond", durability: 3122 },
        { name: "gem/emerald", durability: 1700 },
        { name: "metal/copper", durability: 360 },
        { name: "metal/gold", durability: 64 },
        { name: "metal/iron", durability: 500 },
        { name: "metal/netherite", durability: 4062 },
        // // { name: "misc/vent_plate", durability: 1200 },
        { name: "misc/vent_plate", durability: 1200 },
        { name: "rod/bamboo", durability: 30, density: 0.35 },
        { name: "rod/blaze_rod", durability: 222 },
        { name: "rod/end_rod", durability: 284 },
        { name: "rod/forged_beam", durability: 1900 },
        { name: "rod/stick", durability: 80, desnity: 0.6 },
        { name: "scale/shulker_shell", durability: 400 },
        { name: "scale/turtle_scute", durability: 400 },
        { name: "skin/hide", durability: 400 },
        { name: "skin/leather", durability: 400 },
        {
            name: "socket/amethyst",
            durability: 96,
            effects: { reaching: [0, 0.45] },
        },
        { name: "socket/diamond", durability: 1024 },
        { name: "socket/emerald", durability: 96 },
        { name: "socket/ender_pearl", durability: 96 },
        { name: "socket/lapis", durability: 96 },
        { name: "socket/nether_star", durability: 96 },
        { name: "socket/pristine_amethyst", durability: 96 },
        { name: "socket/pristine_diamond", durability: 1428 },
        { name: "socket/pristine_emerald", durability: 96 },
        { name: "socket/pristine_lapis", durability: 96 },
        { name: "stone/andesite", durability: 360 },
        { name: "stone/blackstone", durability: 1000 },
        { name: "stone/diorite", durability: 360 },
        { name: "stone/flint", durability: 262 },
        { name: "stone/granite", durability: 360 },
        { name: "stone/obsidian", durability: 1160 },
        { name: "stone/stone", durability: 262 },
        { name: "wood/acacia", durability: 108 },
        { name: "wood/birch", durability: 108 },
        { name: "wood/crimson", durability: 300 },
        { name: "wood/dark_oak", durability: 108 },
        { name: "wood/jungle", durability: 108 },
        { name: "wood/oak", durability: 108 },
        { name: "wood/spruce", durability: 108 },
        { name: "wood/warped", durability: 300 },

        //     // Aetheric Tetranomicon

        { name: "fibre/aether_redux_gilded_vine", durability: 1536 },
        { name: "fibre/aether_redux_golden_vine", durability: 1536 },
        { name: "fibre/deep_aether_sunroot_hanger", durability: 2048 },
        { name: "fibre/deep_aether_yagroot_vines", durability: 2048 },
        { name: "gem/aether_gravitite", durability: 3122, primary: 7 }, // +2 buff for gravitite
        { name: "gem/aether_redux_gravitite", durability: 3122, primary: 7 },
        { name: "gem/aether_zanite", durability: 500, primary: 6 }, // +1
        { name: "gem/deep_aether_skyjade", durability: 300, primary: 6 },
        { name: "metal/aether_phoenix", durability: 3122, primary: 11 },
        { name: "metal/aether_redux_veridium", durability: 1500 },
        { name: "metal/aether_valkyrie", durability: 3122, primary: 7 },
        // { name: "metal/ancient_aether_valkyrum", durability: 4062, primary: 9 },
        { name: "metal/deep_aether_stratus", durability: 4062, primary: 10 },
        { name: "socket/socket_aether_golden_amber", durability: 1024.0 },
        { name: "socket/socket_aether_zanite", durability: 1024.0 },
        // Is this supposed to be 0.0? will leave it be for now ig
        // { name: "socket/socket_deep_aether_skyjade", durability: 0.0 },
        { name: "stone/deep_aether_clorite", durability: 896 },
        { name: "stone/deep_aether_aseterite", durability: 896 },
        { name: "stone/aether_redux_vitrium", durability: 1536 },
        { name: "stone/aether_holystone", durability: 262 },
        { name: "wood/deep_aether_yagroot", durability: 2048 },
        { name: "wood/deep_aether_sunroot", durability: 2560 },
        { name: "wood/deep_aether_roseroot", durability: 1536 },
        { name: "wood/deep_aether_conberry", durability: 1536 },
        { name: "wood/deep_aether_cruderoot", durability: 1024 },
        // { name: "wood/ancient_aether_sakura", durability: 2048 },
        // { name: "wood/ancient_aether_highsproot", durability: 1536 },
        { name: "wood/aether_skyroot", durability: 108 },
        { name: "wood/aether_redux_springshroom", durability: 1536 },
        { name: "wood/aether_redux_glacia", durability: 2048 },
        { name: "wood/aether_redux_fieldsprout", durability: 2560 },
        { name: "wood/aether_redux_crystal_wood", durability: 1536 },
        { name: "wood/aether_redux_cloudcap", durability: 2048 },
        { name: "wood/aether_redux_blightwillow", durability: 500 },

        //     // Tetranomicon - I am only adding materials from mods in the pack currently

        //     // wood - no support for wilderwild or natures_spirit sadly
        { name: "wood/ecologics_walnut", durability: 1024 },
        { name: "wood/ecologics_flowering_azalea", durability: 768 },
        { name: "wood/ecologics_coconut", durability: 262 },
        { name: "wood/ecologics_azalea", durability: 768 },
        // { name: "wood/deeperdarker_echo_wood", durability: 4062 },
        {
            name: "wood/blue_skies_starlit_wood",
            durability: 108,
            improvements: {
                "dimasctetracompat/fairweather": 0,
            },
        },
        {
            name: "wood/blue_skies_maple",
            durability: 108,
            improvements: {
                "dimasctetracompat/fairweather": 0,
            },
        },
        {
            name: "wood/blue_skies_frostbright",
            durability: 108,
            improvements: {
                "dimasctetracompat/fairweather": 0,
            },
        },
        {
            name: "wood/blue_skies_dusk",
            durability: 108,
            improvements: {
                "dimasctetracompat/fairweather": 0,
            },
        },
        {
            name: "wood/blue_skies_comet",
            durability: 108,
            improvements: {
                "dimasctetracompat/fairweather": 0,
            },
        },
        {
            name: "wood/blue_skies_comet",
            durability: 200,
            improvements: {
                "dimasctetracompat/fairweather": 0,
            },
        },
        {
            name: "wood/blue_skies_bluebright",
            durability: 108,
            improvements: {
                "dimasctetracompat/fairweather": 0,
            },
        },
        { name: "wood/alexscaves_thornwood", durability: 1536 },
        { name: "wood/alexscaves_pewen", durability: 96 },
        // stone
        // { name: "stone/deeperdarker_sculk_stone", durability: 3122 },
        // { name: "stone/deeperdarker_gloomslate", durability: 2048 },
        { name: "stone/create_veridium", durability: 262 },
        { name: "stone/create_scoria", durability: 192 },
        { name: "stone/create_scorchia", durability: 384 },
        { name: "stone/create_ochrum", durability: 192 },
        { name: "stone/create_limestone", durability: 192 },
        { name: "stone/create_crimsite", durability: 262 },
        { name: "stone/create_asurine", durability: 262 },
        {
            name: "stone/blue_skies_umber",
            durability: 384,
            improvements: {
                "dimasctetracompat/fairweather": 0,
            },
        },
        {
            name: "stone/blue_skies_turquoise_stone",
            durability: 262,
            improvements: {
                "dimasctetracompat/fairweather": 0,
            },
        },
        {
            name: "stone/blue_skies_taratite",
            durability: 500,
            improvements: {
                "dimasctetracompat/fairweather": 0,
            },
        },
        {
            name: "stone/blue_skies_rimestone",
            durability: 1000,
            improvements: {
                "dimasctetracompat/fairweather": 0,
            },
        },
        {
            name: "stone/blue_skies_lunar_stone",
            durability: 262,
            improvements: {
                "dimasctetracompat/fairweather": 0,
            },
        },
        {
            name: "stone/blue_skies_cinderstone",
            durability: 1024,
            improvements: {
                "dimasctetracompat/fairweather": 0,
            },
        },
        { name: "stone/alexscaves_radrock", durability: 1024 },
        { name: "stone/alexscaves_limestone", durability: 192 },
        { name: "stone/alexscaves_guanostone", durability: 262 },
        { name: "stone/alexscaves_galena", durability: 1024 },
        { name: "stone/alexscaves_flood_basalt", durability: 360 },
        { name: "stone/alexscaves_coprolith", durability: 262 },
        { name: "stone/alexscaves_abyssmarine", durability: 1024 },
        // { name: "socket/socket_deeperdarker_soul_crystal", durability: 1024.0 },
        // {
        //     name: "socket/socket_deeperdarker_reinforced_echo_shard",
        //     durability: 1024.0,
        // },
        {
            name: "socket/socket_blue_skies_sunstone_crystal",
            durability: 1024.0,
        },
        { name: "socket/socket_blue_skies_pyrope", durability: 1428.0 },
        { name: "socket/socket_blue_skies_moonstone", durability: 0.0 },
        { name: "socket/socket_blue_skies_diopside", durability: 1428.0 },
        { name: "socket/socket_blue_skies_charoite", durability: 1024.0 },
        { name: "socket/socket_blue_skies_aquite", durability: 0.0 },
        {
            name: "socket/socket_aquamirae_echo_of_the_ship_graveyard",
            durability: 1428.0,
        },
        {
            name: "socket/socket_aquamirae_abyssal_amethyst",
            durability: 1024.0,
        },
        { name: "socket/socket_alexscaves_uranium", durability: 1024.0 },
        { name: "socket/socket_alexscaves_occult_gem", durability: 0.0 },
        { name: "socket/socket_alexscaves_amber_curiosity", durability: 0.0 },
        { name: "skin/alexscaves_tough_hide", durability: 400 },
        { name: "metal/iceandfire_lightning_dragonsteel", durability: 16000 },
        { name: "metal/iceandfire_ice_dragonsteel", durability: 16000 },
        { name: "metal/iceandfire_fire_dragonsteel", durability: 16000 },
        { name: "metal/create_zinc", durability: 400 },
        { name: "metal/create_shadow_steel", durability: 2730 },
        { name: "metal/create_refined_radiance", durability: 1752 },
        { name: "metal/create_brass", durability: 924 },
        { name: "metal/create_andesite_alloy", durability: 396 },
        {
            name: "metal/blue_skies_horizonite",
            durability: 500,
            improvements: {
                "dimasctetracompat/fairweather": 0,
            },
        },
        // { name: "gem/deeperdarker_warden", durability: 5038, primary: 9 },
        {
            name: "gem/blue_skies_pyrope",
            durability: 400,
            improvements: {
                "dimasctetracompat/fairweather": 0,
            },
        },
        {
            name: "gem/blue_skies_moonstone",
            durability: 500,
            improvements: {
                "dimasctetracompat/fairweather": 0,
            },
        },
        {
            name: "gem/blue_skies_diopside",
            durability: 3322,
            hardness: 9,
            improvements: {
                "dimasctetracompat/fairweather": 0,
            },
        },
        {
            name: "gem/blue_skies_charoite",
            durability: 3122,
            hardness: 7,
            improvements: {
                "dimasctetracompat/fairweather": 0,
            },
        },
        {
            name: "gem/blue_skies_aquite",
            durability: 540,
            hardness: 6,
            improvements: {
                "dimasctetracompat/fairweather": 0,
            },
        },
        {
            name: "gem/blue_skies_aquite",
            durability: 540,
            improvements: {
                "dimasctetracompat/fairweather": 0,
            },
        },
        // { name: "fibre/deeperdarker_sculk_vine", durability: 2560 },
        { name: "fibre/blue_skies_starlit_vine", durability: 640 },
        { name: "fibre/blue_skies_maple_vine", durability: 360 },
        { name: "fibre/blue_skies_lunar_vine", durability: 400 },
        { name: "fibre/blue_skies_frostbright_vine", durability: 400 },
        { name: "fibre/blue_skies_dusk_vine", durability: 640 },
        { name: "fibre/blue_skies_brumble_vine", durability: 640 },
        { name: "fibre/blue_skies_bluebright_vine", durability: 400 },
        { name: "fibre/alexscaves_archaic_vine", durability: 2560 },
        // { name: "bone/deeperdarker_sculk_bone", durability: 10 },
        { name: "bone/alexscaves_heavy_bone", durability: 1024 },

        //     // Art of Forging

        { name: "socket/void_worm_eye", durability: 90 },
        { name: "socket/vobrite_crystal", durability: 30 },
        { name: "socket/shards_of_malice", durability: 40 },
        { name: "socket/heart_of_ender", durability: 96 },
        { name: "socket/fang_charm", durability: 40 },
        { name: "socket/fang_charm", durability: 40 },
        // none of the reagents added by this mod add durability
        { name: "misc/eerie_shard", durability: 20 },
        { name: "misc/echo_shard", durability: 20 },
        { name: "metal/vobrivium_ingot", durability: 2230 },
        { name: "metal/forged_steel_ingot", durability: 4118 },
        { name: "metal/endsteel_ingot", durability: 4000 },
        { name: "metal/diabolium", durability: 5100 },
        { name: "fibre/warped_muscle", durability: 2500 },
        { name: "fibre/life_fiber", durability: 2720 },

        // undergarden tetra patch

        { name: "wood/undergarden_wigglewood", durability: 108 },
        { name: "wood/undergarden_smogstem", durability: 1024 },
        { name: "wood/undergarden_grongle", durability: 500 },
        { name: "stone/undergarden_shiverstone", durability: 500 },
        { name: "stone/undergarden_depthrock", durability: 360 },
        // none of the sockets boost durability
        // { name: "socket/socket_undergarden_utherium", durability: 0 },
        { name: "metal/undergarden_froststeel", durability: 1150 },
        { name: "metal/undergarden_forgotten_metal", durability: 3752 },
        { name: "metal/undergarden_cloggrum", durability: 572 },
        { name: "gem/undergarden_utherium", durability: 2558 },

        // attempt disabling tetra extras create compat since Tetranomicon already adds it

        // {
        //     name: "metal/create/andesite_alloy"
        // },
        // {
        //     name: "metal/create/brass"
        // },
        // {
        //     name: "metal/create/zinc"
        // },

        // tetra extras

        // { name: "bone/upgrade_aquatic/thrasher_tooth", durability: "210"},
        { name: "metal/aquaculture/neptunium_ingot", durability: 3584 },
        { name: "metal/cataclysm/ignitium_ingot", durability: 17260 },
        { name: "metal/cataclysm/witherite_ingot", durability: 4062 },
        {
            name: "metal/enigmatic_legacy/etherium",
            durability: 4852,
            primary: 13.7,
        },
        { name: "metal/enigmatic_legacy/nefarious", durability: 6862 },
        { name: "rod/enigmatic_legacy/ender_rod", durability: 1148 },
        { name: "scale/quark/crab_shell", durability: 400 },
        { name: "scale/quark/dragon_scale", durability: 400 },
        { name: "skin/quark/ravager_hide", durability: 1200 },
        // { name: "stone/quark/myalite", durability: 1200 },
        { name: "wood/quark/azalea", durability: 108 },
        { name: "wood/quark/blossom", durability: 108 },

        // Tetracelium

        { name: "bone/dragon_bone", durability: 3320, primary: 6.5 }, // 0.5 nerf
        { name: "bone/wither_bone", durability: 1916 },
        { name: "fabric/canvas", durability: 264 },
        { name: "fibre/mana_string", durability: 500 },
        { name: "fibre/straw", durability: 80 },
        { name: "gem/ruby", durability: 3122 },
        { name: "gem/sapphire", durability: 5122 },
        { name: "metal/bronze", durability: 500 },
        { name: "metal/electrum", durability: 106 },
        { name: "metal/elementium", durability: 1440 },
        { name: "metal/infused_iron", durability: 500 },
        { name: "metal/lead", durability: 240 },
        { name: "metal/manasteel", durability: 600 },
        { name: "metal/nickel", durability: 400 },
        { name: "metal/osmium", durability: 1000 },
        { name: "metal/silver", durability: 386 }, // more than 2x for consistency with eidolon
        { name: "metal/sky", durability: 3000 },
        { name: "metal/steel", durability: 1300 },
        { name: "metal/terrasteel", durability: 4600 },
        { name: "metal/tin", durability: 252 },
        { name: "wood/ancient_wood", durability: 120 },
        { name: "wood/baobab", durability: 360 },
        { name: "wood/dreamwood", durability: 300 },
        { name: "wood/livingwood", durability: 140 },
        { name: "wood/maple", durability: 140 },

        // dimasc disable

        {
            name: "gem/charoite",
            primary: 0,
            secondary: 0,
        },
        {
            name: "gem/diopside",
            primary: 0,
            secondary: 0,
        },
        // {
        //     name: "gem/moonstone",
        //     primary: 0,
        //     secondary: 0,
        // },
        {
            name: "gem/pyrope",
            primary: 0,
            secondary: 0,
        },
        {
            name: "metal/aquite",
            primary: 0,
            secondary: 0,
        },
        {
            name: "metal/falsite",
            primary: 0,
            secondary: 0,
        },
        {
            name: "metal/horizonite",
            primary: 0,
            secondary: 0,
        },
        {
            name: "metal/ventium",
            primary: 0,
            secondary: 0,
        },
        {
            name: "stone/lunar_stone",
            primary: 0,
            secondary: 0,
        },
        {
            name: "stone/turquoise_stone",
            primary: 0,
            secondary: 0,
        },
        {
            name: "wood/bluebright",
            primary: 0,
            secondary: 0,
        },
        {
            name: "wood/comet",
            primary: 0,
            secondary: 0,
        },
        {
            name: "wood/dusk",
            primary: 0,
            secondary: 0,
        },
        {
            name: "wood/dusk",
            primary: 0,
            secondary: 0,
        },
        {
            name: "wood/frostbright",
            primary: 0,
            secondary: 0,
        },
        {
            name: "wood/lunar_wood",
            primary: 0,
            secondary: 0,
        },
        {
            name: "wood/maple",
            primary: 0,
            secondary: 0,
        },
        {
            name: "wood/starlit",
            primary: 0,
            secondary: 0,
        },
    ];
    tweak.forEach((material) => {
        event.addJson(`tetra:materials/${material.name}.json`, material);
    });
});
