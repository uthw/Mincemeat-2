// This file mainly exists to add compatibility between structure mods and biome mods.
// Cataclysm is a point of concern since its structures can only spawn in vanilla biomes.
// biome tags can be looked up using /locate autofill, #forge is normally used by forge mods and #c is used by fabric mods

ServerEvents.tags("worldgen/biome", (event) => {
    let betterNetherBiomes = [
        "betternether:bone_reef",
        "betternether:crimson_glowing_woods",
        "betternether:crimson_pinewood",
        "betternether:flooded_deltas",
        "betternether:gravel_desert",
        "betternether:magma_land",
        "betternether:nether_grasslands",
        "betternether:nether_jungle",
        "betternether:nether_mushroom_forest",
        "betternether:nether_mushroom_forest_edge",
        "betternether:nether_swampland",
        "betternether:nether_swampland_terraces",
        "betternether:old_fungiwoods",
        "betternether:old_swampwoods",
        "betternether:old_warped_woods",
        "betternether:poor_nether_grasslands",
        "betternether:soul_plain",
        "betternether:sulfuric_bone_reef",
        "betternether:upside_down_forest",
        "betternether:upside_down_forest_cleared",
        "betternether:wart_forest",
        "betternether:wart_forest_edge",
    ];

    betterNetherBiomes.forEach((biome) => {
        event.add("cataclysm:has_structure/burning_arena_biomes", biome);
        event.add("cataclysm:has_structure/soul_black_smith_biomes", biome);
    });
});

ServerEvents.highPriorityData((event) => {
    // fix some towers not being able to spawn in modded biomes (usually things like modded deserts that don't have tags in vanilla)
    let totwModdedTowers = [
        {
            key: "desert",
            values: [
                "minecraft:desert",
                "wilderwild:oasis",
                "#forge:desert",
                "#forge:is_desert",
                "#c:desert",
            ],
        },
        {
            key: "end",
            values: ["#forge:is_outer_end"],
        },
        {
            key: "ice",
            values: [
                "#biomeswevegone:snowy",
                "#c:snowy",
                "#c:is_snowy",
                "#forge:snowy",
                "#forge:is_snowy",
                "#wilderwild:snowy_plains",
            ],
        },
        {
            key: "regular",
            values: [
                "#biomeswevegone:plains",
                "#c:plains",
                "#forge:is_plains",
                "#forge:plains",
                "#wilderwild:plains_grass",
            ],
        },
    ];

    totwModdedTowers.forEach((tower) => {
        event.addJson(
            `totw_modded:tags/worldgen/biome/has_structure/${tower.key}.json`,
            tower
        );
    });
});
