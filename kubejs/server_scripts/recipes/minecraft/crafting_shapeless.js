ServerEvents.recipes((event) => {
    const recipes = [
        [
            "4x forbidden_arcanus:mundabitur_dust",
            [
                "forbidden_arcanus:arcane_crystal_dust",
                "occultism:burnt_otherstone",
                "minecraft:blaze_powder",
                "alexscaves:moth_dust",
                "blue_skies:moonstone_shard",
                "eidolon:ender_calx",
            ],
        ],
        [
            "4x enigmaticlegacy:astral_dust",
            [
                "minecraft:blaze_powder",
                "#outer_end:crystal_shards",
                "forbidden_arcanus:arcane_crystal_dust",
                // "#forge:dusts/ender_pearl",
            ],
        ],
        [
            "cataclysm:abyssal_sacrifice",
            [
                "minecraft:nautilus_shell",
                "betternether:nether_ruby",
                "eidolon:zombie_heart",
                "paraglider:spirit_orb",
            ],
        ],
        [
            "4x reliquary:aphrodite_potion",
            [
                "reliquary:fertile_essence",
                "farmersdelight:rice",
                "naturesaura:gold_powder",
            ],
        ],
        [
            "reliquary:infernal_tear",
            [
                "reliquary:void_tear",
                "cataclysm:koboleton_bone",
                "botania:endoflame",
            ],
        ],
        [
            "reliquary:void_tear",
            ["minecraft:ghast_tear", "alexscaves:moth_dust"],
        ],
        [
            "reliquary:destruction_catalyst",
            [
                "reliquary:catalyzing_gland",
                "irons_spellbooks:fire_rune",
                "ars_nouveau:source_gem",
            ],
        ],
        [
            "4x reliquary:holy_hand_grenade",
            [
                "reliquary:glowing_water",
                "2x forbidden_arcanus:xpetrified_orb",
                "minecraft:gold_ingot",
            ],
        ],
        [
            "reliquary:infernal_claw",
            ["alexsmobs:dropbear_claw", "betternether:nether_ruby"],
        ],
        ["ftbquests:book", ["minecraft:book", "minecraft:paper"]],
        [
            "kubejs:grave_scroll",
            ["enigmaticlegacy:thicc_scroll", "iceandfire:ectoplasm"],
        ],
        [
            "4x spartanweaponry:handle",
            ["4x #forge:rods/wooden", "forbidden_arcanus:cloth"],
        ],
        [
            "4x spartanweaponry:handle",
            ["4x #forge:rods/wooden", "eidolon:tattered_cloth"],
        ],
        [
            "4x spartanweaponry:pole",
            ["8x #forge:rods/wooden", "forbidden_arcanus:cloth"],
        ],
        [
            "4x spartanweaponry:pole",
            ["8x #forge:rods/wooden", "eidolon:tattered_cloth"],
        ],
        [
            "irons_spellbooks:arcane_essence",
            [
                "forbidden_arcanus:arcane_crystal_dust",
                "supplementaries:ash",
                "mekanism:salt",
            ],
        ],
        [
            "4x nomowanderer:trader_cloth_piece",
            ["forbidden_arcanus:cloth", "#forge:dyes/red", "#forge:dyes/blue"],
        ],
        [
            "4x computercraft:cable",
            ["4x prettypipes:pipe", "createaddition:copper_wire"],
        ],
        [
            "4x forbidden_arcanus:arcane_bone_meal",
            [
                "forbidden_arcanus:arcane_crystal_dust",
                "nethersdelight:propelplant_cane",
                "4x minecraft:bone_meal",
            ],
        ],
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe[0], recipe[1]);
    });
});
