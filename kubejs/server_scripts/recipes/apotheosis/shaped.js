ServerEvents.recipes((event) => {
    const recipes = [
        {
            output: "apotheosis:hellshelf",
            inputs: ["AAA", "BCD", "AAA"],
            keys: {
                A: "minecraft:nether_bricks",
                B: "nethersdelight:propelplant_cane",
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
                B: "blue_skies:charoite",
                C: "#c:bookshelves",
                D: "iceandfire:dragonbone",
            },
            id: "apotheosis:seashelf",
        },
        {
            output: "apotheosis:crystal_seashelf",
            inputs: [" A ", " B ", "ACA"],
            keys: {
                A: "#forge:death_worm_chitins",
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
                C: "forbidden_arcanus:soul",
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
                D: "#outer_end:crystal_shards",
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
                A: "irons_spellbooks:cinder_essence",
                B: "minecraft:netherite_scrap",
                C: "apotheosis:sightshelf",
            },
            id: "apotheosis:sightshelf_t2",
        },
        {
            output: "apotheosis:simple_reforging_table",
            inputs: [" A ", "BCB", "DDD"],
            keys: {
                A: "forbidden_arcanus:iron_blacksmith_gavel",
                B: "apotheosis:gem_dust",
                C: "minecraft:enchanting_table",
                D: "blue_skies:aquite_block",
            },
            id: "apotheosis:simple_reforging_table",
        },
        {
            output: "apotheosis:reforging_table",
            inputs: [" A ", "BCB", "DDD"],
            keys: {
                A: "blue_skies:charoite",
                B: "ars_nouveau:wilden_horn",
                C: "apotheosis:simple_reforging_table",
                D: "forbidden_arcanus:aurum_planks",
            },
            id: "apotheosis:reforging_table",
        },
        {
            output: "apotheosis:gem_cutting_table",
            inputs: [" A ", "BCB", " D "],
            keys: {
                A: "farmersdelight:diamond_knife",
                B: "thermal:apatite",
                C: "minecraft:smithing_table",
                D: "apotheosis:gem_dust",
            },
            id: "apotheosis:gem_cutting_table",
        },
        {
            output: "apotheosis:salvaging_table",
            inputs: ["AAA", "BCD", "EFE"],
            keys: {
                A: "minecraft:copper_ingot",
                B: "forbidden_arcanus:iron_blacksmith_gavel",
                C: "quark:crate",
                D: "mowziesmobs:naga_fang",
                E: "forbidden_arcanus:aurum_planks",
                F: "#irons_spellbooks:inscribed_rune",
            },
            id: "apotheosis:salvaging_table",
        },
        {
            output: "minecraft:cobweb",
            inputs: ["A A", " B ", "A A"],
            keys: {
                A: "minecraft:string",
                B: "minecraft:honeycomb",
            },
            id: "apotheosis:cobweb",
        },
        {
            output: "3x apotheosis:sigil_of_socketing",
            inputs: ["ABA", "CCC", "ADA"],
            keys: {
                A: "apotheosis:gem_dust",
                B: "meetyourfight:violet_bloom",
                C: "apotheosis:gem_fused_slate",
                D: "",
            },
            id: "apotheosis:sigil_of_socketing",
        },
        {
            output: "4x apotheosis:sigil_of_withdrawal",
            inputs: ["ABA", "CDC", "AEA"],
            keys: {
                A: "apotheosis:gem_fused_slate",
                B: "environmental:cartwheel",
                C: "blue_skies:moonstone",
                D: "forbidden_arcanus:dark_matter",
                E: "alexscaves:sea_glass_shards",
            },
            id: "apotheosis:sigil_of_withdrawal",
        },
        {
            output: "6x apotheosis:sigil_of_rebirth",
            inputs: ["AAA", "BBB", "AAA"],
            keys: {
                A: "apotheosis:gem_fused_slate",
                B: "forbidden_arcanus:arcane_crystal_dust",
            },
            id: "apotheosis:sigil_of_rebirth",
        },
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.inputs, recipe.keys).id(recipe.id);
    });
});
