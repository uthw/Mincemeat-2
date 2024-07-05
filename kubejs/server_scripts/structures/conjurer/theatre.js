// makes the conjurer's theatre spawn in any overworld forest biome, this is so progression is realistic in reterraforged worlds

let tweak = {
    type: "structure_gel:extended_jigsaw",
    biomes: "#minecraft:is_forest",
    capability: {
        type: "conjurer_illager:theater",
    },
    max_distance_from_center: 80,
    project_start_to_heightmap: "WORLD_SURFACE_WG",
    size: 7,
    spawn_overrides: {
        ambient: {
            bounding_box: "piece",
            spawns: [],
        },
        axolotls: {
            bounding_box: "piece",
            spawns: [],
        },
        creature: {
            bounding_box: "piece",
            spawns: [],
        },
        misc: {
            bounding_box: "piece",
            spawns: [],
        },
        monster: {
            bounding_box: "piece",
            spawns: [],
        },
        underground_water_creature: {
            bounding_box: "piece",
            spawns: [],
        },
        water_ambient: {
            bounding_box: "piece",
            spawns: [],
        },
        water_creature: {
            bounding_box: "piece",
            spawns: [],
        },
    },
    start_height: {
        absolute: 0,
    },
    start_pool: "conjurer_illager:theatre/root",
    step: "surface_structures",
    terrain_adaptation: "beard_thin",
    use_expansion_hack: false,
};

ServerEvents.highPriorityData((event) => {
    event.addJson("conjurer_illager:worldgen/structure/theatre.json", tweak);
});
