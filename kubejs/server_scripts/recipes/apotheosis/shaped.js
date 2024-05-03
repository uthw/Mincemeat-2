ServerEvents.recipes((event) => {
    const recipes = [
        {
            output: "apotheosis:hellshelf",
            inputs: ["AAA", "BCD", "AAA"],
            keys: {
                A: "minecraft:nether_bricks",
                B: "betternether:nether_reed_stem",
                C: "#c:bookshelves",
                D: "iceandfire:witherbone",
            },
            id: "apotheosis:hellshelf",
        },
        {
            output: "apotheosis:blazing_hellshelf",
            inputs: [" A ", "ABA", "CCC"],
            keys: {
                A: "ars_nouevau:source_gem",
                B: "apotheosis:infused_hellshelf",
                C: "minecraft:blaze_powder",
            },
            id: "apotheosis:blazing_hellshelf",
        },
        {
            output: "apotheosis:seashelf",
            inputs: ["AAA", "BCD", "AAA"],
            keys: {
                A: "minecraft:prismarine_bricks",
                B: "irons_spellbooks:arcane_essence",
                C: "#c:bookshelves",
                D: "thermal:apatite",
            },
            id: "apotheosis:seashelf",
        },
        {
            output: "apotheosis:crystal_seashelf",
            inputs: [" A ", " B ", "ACA"],
            keys: {
                A: "forbidden_arcanus:arcane_crystal_dust",
                B: "apotheosis:infused_seashelf",
                C: "alexsmobs:fish_bones",
            },
            id: "apotheosis:crystal_seashelf",
        },
        {
            output: "apotheosis:echoing_deepshelf",
            inputs: [" A ", " B ", " C "],
            keys: {
                A: "minecraft:echo_shard",
                B: "apotheosis:deepshelf",
                C: "eidolon:tattered_cloth",
            },
            id: "apotheosis:echoing_deepshelf",
        },
        // ...
        {
            output: "apotheosis:soul_touched_deepshelf",
            inputs: [" A ", " B ", "C C"],
            keys: {
                A: "deeperdarker:soul_dust",
                B: "apotheosis:deepshelf",
                C: "forbidden_arcanus:corrupti_dust",
            },
            id: "apotheosis:soul_touched_deepshelf",
        },
        {
            output: "apotheosis:endshelf",
            inputs: ["AAA", "BCD", "AAA"],
            keys: {
                A: "minecraft:end_stone_bricks",
                B: "aether:zanite_gemstone",
                C: "#c:bookshelves",
                D: "betterend:crystal_shards",
            },
            id: "apotheosis:endshelf",
        },
        {
            output: "apotheosis:pearl_endshelf",
            inputs: [" A ", "BCB", " A "],
            keys: {
                A: "blue_skies:moonstone_shard",
                B: "forbidden_arcanus:dark_matter",
                C: "apotheosis:endshelf",
            },
            id: "apotheosis:pearl_endshelf",
        },
        {
            output: "apotheosis:draconic_endshelf",
            inputs: [" A ", "BCB", " D "],
            keys: {
                A: "forbidden_arcanus:dragon_scale",
                B: "alexsmobs:mimicream",
                C: "apotheosis:endshelf",
                D: "alexscaves:pewen_sap",
            },
            id: "apotheosis:draconic_endshelf",
        },
        {
            output: "apotheosis:filtering_shelf",
            inputs: [" A ", "CBC", " A "],
            keys: {
                A: "forbidden_arcanus:dark_matter",
                B: "apotheosis:infused_seashelf",
                C: "alexscaves:bioluminesscence",
            },
            id: "apotheosis:filtering_shelf",
        },
        {
            output: "apotheosis:sightshelf",
            inputs: ["ABA", "BCD", "ABA"],
            keys: {
                A: "forbidden_arcanus:deorum_ingot",
                B: "irons_spellbooks:arcane_salvage",
                C: "apotheosis:hellshelf",
                D: "irons_spellbooks:blank_rune",
            },
            id: "apotheosis:sightshelf",
        },
        {
            output: "apotheosis:sightshelf_t2",
            inputs: [" A ", "BCB", " A "],
            keys: {
                A: "bloodmagic:blankslate",
                B: "minecraft:netherite_scrap",
                C: "apotheosis:sightshelf",
            },
            id: "apotheosis:sightshelf_t2",
        },
        {
            output: "apotheosis:simple_reforging_table",
            inputs: [" A ", "BCB", "DDD"],
            keys: {
                A: "betterend:iron_hammer",
                B: "apotheosis:gem_dust",
                C: "minecraft:enchanting_table",
                D: "minecraft:smooth_stone",
            },
            id: "apotheosis:simple_reforging_table",
        },
        {
            output: "apotheosis:reforging_table",
            inputs: [" A ", "BCB", "DDD"],
            keys: {
                A: "minecraft:netherite_ingot",
                B: "apotheosis:epic_material",
                C: "apotheosis:simple_reforging_table",
                D: "eidolon:polished_planks",
            },
            id: "apotheosis:reforging_table",
        },
        {
            output: "apotheosis:gem_cutting_table",
            inputs: [" A ", "BCB", " D "],
            keys: {
                A: "farmersdelight:diamond_knife",
                B: "thermal:apatite",
                C: "#handcrafted:tables",
                D: "apotheosis:gem_dust",
            },
            id: "apotheosis:gem_cutting_table",
        },
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.inputs, recipe.keys).id(recipe.id);
    });
});
