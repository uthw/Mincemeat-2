ServerEvents.recipes((event) => {
    // Required fields:
    // category: "gear" (assumed)
    // priority: number, use 90 i guess (assumed)
    // input: { "minecraft:stick": 1, ... }
    /// output: id: "minecells:item", "Count": 1 }

    // Optional fields:
    // advancement: "advancement_id"

    // cannot use tags in the input right now

    let recipes = [
        {
            input: {
                "minecells:cell_infused_steel": 6,
                "blue_skies:lunar_stick": 1,
                "forbidden_arcanus:rune": 2,
                "aquaculture:neptunium_ingot": 2,
            },
            output: "minecells:broadsword",
        },
        {
            input: {
                "minecells:cell_infused_steel": 4,
                "endermanoverhaul:summoner_pearl": 1,
                "irons_spellbooks:arcane_ingot": 2,
                "minecraft:stick": 1,
            },
            output: "minecells:balanced_blade",
        },
        {
            input: {
                "minecells:cell_infused_steel": 4,
                "undergarden:froststeel_ingot": 2,
                "minecells:metal_shards": 3,
                "spartanweaponry:pole": 1,
            },
            output: "minecells:nutcracker",
        },
        {
            input: {
                "minecells:arcane_goo": 4,
                "farmersdelight:rope": 6,
                "irons_spellbooks:lightning_bottle": 1,
                "minecells:monster_cell": 6,
            },
            output: "minecells:electric_whip",
        },
        {
            input: {
                "minecraft:packed_ice": 8,
                "aquamirae:esca": 2,
                "yungscavebiomes:rare_ice": 1,
                "minecells:monster_cell": 6,
            },
            output: "minecells:frost_blast",
        },
        {
            input: {
                "minecells:cell_infused_steel": 4,
                "irons_spellbooks:arcane_ingot": 4,
                "minecraft:obsidian": 2,
            },
            output: "minecells:cudgel",
        },
        {
            advancement: "minecells:unlock/fall_from_the_ramparts",
            input: {
                "minecraft:stick": 3,
                "minecraft:string": 3,
                "irons_spellbooks:cast_time_ring": 1,
                "minecells:cell_infused_steel": 3,
            },
            output: "minecells:nerves_of_steel",
        },
        {
            advancement: "minecells:unlock/kill_10_buzzcutters",
            input: {
                "minecraft:stick": 1,
                "minecells:cell_infused_steel": 6,
                "celestisynth:celestial_core_heated": 1,
                "minecells:buzzcutter_fang": 2,
                "minecells:infected_flesh": 4,
            },
            output: "minecells:spite_sword",
        },
        {
            advancement: "minecells:unlock/kill_10_inquisitors",
            input: {
                "minecells:arcane_goo": 8,
                "minecells:metal_shards": 4,
                "irons_spellbooks:lightning_bottle": 1,
                "minecells:monster_cell": 12,
            },
            output: "minecells:lightning_bolt",
        },
        {
            advancement: "minecells:unlock/kill_10_shieldbearers",
            input: {
                "minecells:cell_infused_steel": 8,
                "minecells:arcane_goo": 2,
                "thermal:cinnabar": 4,
            },
            output: "minecells:rampart",
        },
        {
            advancement: "minecells:unlock/kill_15_undead_archers",
            input: {
                "minecraft:stick": 3,
                "minecraft:string": 3,
                "minecraft:gold_ingot": 2,
                "iceandfire:stymphalian_bird_feather": 4,
                "minecells:cell_infused_steel": 4,
            },
            output: "minecells:infantry_bow",
        },
        {
            advancement: "minecells:unlock/kill_20_grenadiers",
            input: {
                "aether:skyroot_stick": 1,
                "minecells:cell_infused_steel": 6,
                "caverns_and_chasms:silver_ingot": 4,
                "atmospheric:grimweb": 1,
            },
            output: "minecells:hattoris_katana",
        },
        {
            advancement: "minecells:unlock/kill_30_shieldbearers",
            input: {
                "minecells:cell_infused_steel": 8,
                "undergarden:froststeel_ingot": 4,
                "minecraft:packed_ice": 6,
                "yungscavebiomes:rare_ice": 1,
            },
            output: "minecells:ice_shield",
        },
        {
            advancement: "minecells:unlock/kill_30_shieldbearers",
            input: {
                "minecells:cell_infused_steel": 8,
                "minecells:metal_shards": 4,
                "irons_spellbooks:blood_vial": 4,
            },
            output: "minecells:bloodthirsty_shield",
        },
        {
            advancement: "minecells:unlock/kill_50_undead_archers",
            input: {
                "minecraft:stick": 3,
                "minecraft:string": 3,
                "forbidden_arcanus:arcane_crystal": 6,
                "minecells:infected_flesh": 16,
                "minecells:monster_cell": 12,
            },
            output: "minecells:bow_and_endless_quiver",
        },
        {
            advancement: "minecells:unlock/kill_a_leaping_zombie",
            input: {
                "minecraft:stick": 1,
                "irons_spellbooks:blood_vial": 5,
                "minecells:cell_infused_steel": 6,
            },
            output: "minecells:blood_sword",
        },
        {
            advancement: "minecells:unlock/run_in_the_promenade",
            input: {
                "minecraft:stick": 3,
                "minecraft:string": 3,
                "alexscaves:peppermint_powder": 4,
                "blue_skies:diopside_gem": 2,
                "minecells:monster_cell": 6,
            },
            output: "minecells:quick_bow"
        },
    ];

    recipes.forEach((recipe) => {
        const outputName = recipe.output.split(":")[1];
        event
            .custom({
                type: "minecells:cell_forge_recipe",
                category: "gear",
                priority: 90,
                advancement: recipe.advancement,
                input: recipe.input,
                output: { id: recipe.output, Count: 1 }, // Ah-ah-ah!
            })
            .id(`minecells:cell_crafter/gear/${outputName}`);
    });
});
