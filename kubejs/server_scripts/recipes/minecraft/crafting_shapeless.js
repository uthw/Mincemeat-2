ServerEvents.recipes((event) => {
    const recipes = [
        [
            "forbidden_arcanus:mundabitur_dust",
            [
                "forbidden_arcanus:arcane_crystal_dust",
                "minecraft:redstone",
                "minecraft:blaze_powder",
                "alexscaves:moth_dust",
                "blue_skies:moonstone_shard",
                "minecraft:gunpowder",
            ],
        ],
        [
            "4x enigmaticlegacy:astral_dust",
            [
                "minecraft:blaze_powder",
                "betterend:crystal_shards",
                "#forge:dusts/ender_pearl",
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
            ["enigmaticlegacy:thiccscroll", "iceandfire:ectoplasm"],
        ],
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe[0], recipe[1]);
    });
});
