ServerEvents.recipes((event) => {
    const recipes = [
        [
            "enigmaticlegacy:golem_heart",
            ["ABB", "BCB", "BBD"],
            {
                A: "eidolon:zombie_heart",
                B: "blue_skies:ventium_ingot",
                C: "eidolon:wraith_heart",
                D: "cataclysm:koboleton_bone",
            },
        ],
        [
            "enigmaticlegacy:blazing_core",
            ["A A", "BCB", "DED"],
            {
                A: "adventurez:gilded_blackstone_shard",
                B: "alexsmobs:straddlite",
                C: "reliquary:molten_core",
                D: "irons_spellbooks:cinder_essence",
                E: "minecraft:netherite_ingot",
            },
        ],
        [
            "enigmaticlegacy:ocean_stone",
            [" A ", "BCB", " A "],
            {
                A: "aquamirae:fin",
                B: "aquaculture:neptunium_ingot",
                C: "endermanoverhaul:bubble_pearl",
            },
        ],
        [
            "enigmaticlegacy:angel_blessing",
            ["A A", "BCB", "A A"],
            {
                A: "#forge:ingots/manasteel",
                B: "bosses_of_mass_destruction:ancient_anima",
                C: "aether:golden_amber",
            },
        ],
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe[0], recipe[1], recipe[2]);
    });
});
