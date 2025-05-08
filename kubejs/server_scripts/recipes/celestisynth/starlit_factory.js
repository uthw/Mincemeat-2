ServerEvents.recipes((event) => {
    let recipes = [
        // {
        //     core_material: { item: "celestisynth:lunar_scrap" }, // top triangle
        //     extra_core_material: {
        //         item: "celestisynth:supernal_netherite_ingot", // Bottom of triangle
        //     },
        //     forging_time: 500, // ticks
        //     result: "celestisynth:crescentia", // output
        //     supporting_core_material: { item: "celestisynth:lunar_scrap" }, // top triangle
        //     supporting_material_bottom: { item: "minecraft:iron_ingot" }, // right bottom
        //     supporting_material_middle: { item: "minecraft:iron_ingot" }, // right middle
        //     supporting_material_top: { item: "minecraft:trident" }, // right top
        // },
        {
            top_left_triangle: { item: "iceandfire:ectoplasm" },
            top_right_triangle: {
                item: "iceandfire:ectoplasm",
            },
            bottom_triangle: {
                item: "bosses_of_mass_destruction:ancient_anima",
            },
            right_bottom: { item: "cataclysm:black_steel_ingot" },
            right_middle: { item: "cataclysm:black_steel_ingot" },
            right_top: { item: "minecraft:trident" },
            forging_time: 500,
            result: "celestisynth:crescentia",
        },
        {
            top_left_triangle: { item: "minecraft:blaze_powder" },
            top_right_triangle: {
                item: "minecraft:blaze_powder",
            },
            bottom_triangle: { item: "quark:bottled_cloud" },
            right_bottom: { item: "celestisynth:celestial_core_heated" },
            right_middle: { item: "undergarden:cloggrum_ingot" },
            right_top: { item: "undergarden:cloggrum_ingot" },
            forging_time: 500,
            result: "celestisynth:solaris",
        },
        {
            top_left_triangle: { item: "irons_spellbooks:lightning_bottle" },
            top_right_triangle: {
                item: "irons_spellbooks:lightning_bottle",
            },
            bottom_triangle: { item: "celestisynth:supernal_netherite_ingot" },
            right_bottom: { item: "aether_redux:gravitite_ingot" },
            right_middle: { item: "aether_redux:gravitite_ingot" },
            right_top: { item: "thermal:blitz_rod" },
            forging_time: 500,
            result: "celestisynth:breezebreaker",
        },
        {
            top_left_triangle: { item: "celestisynth:eyebomination" },
            top_right_triangle: {
                item: "celestisynth:eyebomination",
            },
            bottom_triangle: { item: "celestisynth:supernal_netherite_ingot" },
            right_bottom: { item: "minecells:nutcracker" },
            right_middle: { item: "meetyourfight:phantoplasm" },
            right_top: { item: "caverns_and_chasms:necromium_ingot" },
            forging_time: 500,
            result: "celestisynth:poltergeist",
        },
        {
            top_left_triangle: { item: "atmospheric:yucca_flower" },
            top_right_triangle: {
                item: "upgrade_aquatic:flowering_rush",
            },
            bottom_triangle: { item: "aquamirae:abyssal_amethyst" },
            right_bottom: { item: "iceandfire:stymphalian_bird_dagger" },
            right_middle: { item: "iceandfire:sea_serpent_fang" },
            right_top: { item: "alexsmobs:fish_bones" },
            forging_time: 500,
            result: "celestisynth:aquaflora",
        },
        {
            top_left_triangle: { item: "iceandfire:sapphire_gem" },
            top_right_triangle: {
                item: "minecraft:bow",
            },
            bottom_triangle: { item: "forbidden_arcanus:stellarite_piece" },
            right_bottom: { item: "aquamirae:ship_graveyard_echo" },
            right_middle: { item: "cataclysm:crystallized_coral_fragments" },
            right_top: { item: "forbidden_arcanus:purifying_soap" },
            forging_time: 500,
            result: "celestisynth:rainfall_serenity",
        },
        {
            top_left_triangle: { item: "spartanweaponry:diamond_scythe" },
            top_right_triangle: {
                item: "alexscaves:pearl",
            },
            bottom_triangle: { item: "irons_spellbooks:permafrost_shard" },
            right_bottom: { item: "irons_spellbooks:frosted_helve" },
            right_middle: { item: "celestisynth:supernal_netherite_ingot" },
            right_top: { item: "yungscavebiomes:rare_ice" },
            forging_time: 500,
            result: "celestisynth:frostbound",
        },
    ];

    recipes.forEach((recipe) => {
        event.custom({
            type: "celestisynth:starlit_factory",
            core_material: recipe.top_left_triangle,
            extra_core_material: recipe.top_right_triangle,
            forging_time: recipe.forging_time,
            result: recipe.result,
            supporting_core_material: recipe.bottom_triangle,
            supporting_material_bottom: recipe.right_bottom,
            supporting_material_middle: recipe.right_middle,
            supporting_material_top: recipe.right_top,
        });
    });
});
