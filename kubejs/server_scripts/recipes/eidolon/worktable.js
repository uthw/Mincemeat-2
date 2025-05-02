ServerEvents.recipes((event) => {
    // event.custom()
    let recipes = [
        // hope it works?
        {
            result: "minecells:broadsword",
            pattern: ["BCB", "BCB", " D "],
            reagents: "AAAA",
            key: {
                A: "kubejs:cell",
                B: "forbidden_arcanus:dark_rune",
                C: "aquaculture:neptunium_ingot",
                D: "blue_skies:lunar_stick",
            },
        },
        {
            result: "minecells:balanced_blade",
            pattern: [" BC", "BC ", "D  "],
            reagents: "AAAA",
            key: {
                A: "kubejs:cell",
                B: "endermanoverhaul:summoner_pearl",
                C: "irons_spellbooks:arcane_ingot",
                D: "#forge:rods/wooden",
            },
        },
        {
            result: "minecells:crowbar",
            pattern: [" BC", " B ", " D "],
            reagents: "AAAA",
            key: {
                A: "kubejs:cell",
                B: "minecraft:copper_ingot",
                C: "minecraft:iron_ingot",
                D: "thermal:rubber",
            },
        },
        {
            result: "minecells:nutcracker",
            pattern: [" BC", " CB", "D  "],
            reagents: "AAAA",
            key: {
                A: "kubejs:cell",
                B: "undergarden:froststeel_ingot",
                C: "#forge:ingots/brass",
                D: "spartanweaponry:pole",
            },
        },
        {
            result: "minecells:assassins_dagger",
            pattern: ["  B", " B ", "C  "],
            reagents: "AAAA",
            key: {
                A: "kubejs:cell",
                B: "minecraft:iron_ingot",
                C: "#forge:rods/wooden",
            },
        },
        {
            result: "minecells:hattoris_katana",
            pattern: ["  B", " BB", "CD "],
            reagents: "AAAA",
            key: {
                A: "kubejs:cell",
                B: "#forge:ingots/silver",
                C: "aether:skyroot_stick",
                D: "forbidden_arcanus:deorum_ingot",
            },
        },
        {
            result: "minecells:spite_sword",
            pattern: [" B ", " D ", " C "],
            reagents: "AAAA",
            key: {
                A: "kubejs:cell",
                B: "thermal:cinnabar",
                C: "#forge:rods/wooden",
                D: "celestisynth:celestial_core_heated",
            },
        },
        {
            result: "minecells:frost_blast",
            pattern: [" B ", "BCB", " B "],
            reagents: "AAAA",
            key: {
                A: "kubejs:cell",
                B: "ars_nouveau:source_gem",
                C: "aquamirae:esca",
            },
        },
        {
            result: "ars_nouveau:novice_spell_book",
            pattern: [" A ", "BCB", " D "],
            reagents: "EFGH",
            key: {
                A: "eidolon:wicked_weave",
                B: "irons_spellbooks:arcane_essence",
                C: "minecraft:book",
                D: "forbidden_arcanus:arcane_crystal",
                E: "minecraft:iron_shovel",
                F: "minecraft:iron_pickaxe",
                G: "minecraft:iron_axe",
                H: "minecraft:iron_sword",
            },
        },
        {
            result: "enigmaticlegacy:void_pearl",
            pattern: [" B ", "CCC", " C "],
            reagents: " AAA",
            key: {
                A: "#forge:ingots/deorum",
                B: "alexscaves:pure_darkness",
                C: "forbidden_arcanus:dark_rune",
            },
        },
        // {
        //     pattern: [" bc", "bc ", "d  "],
        //     reagents: "aaaa",
        //     key: {
        //         a: { item: "kubejs:cell" },
        //         b: { item: "endermanoverhaul:summoner_pearl" },
        //         c: { item: "irons_spellbooks:arcane_ingot" },
        //         d: { tag: "forge:rods/wooden" },
        //     },
        // },
        {
            result: "ars_nouveau:apprentice_spell_book",
            pattern: [" A ", "BCB", " D "],
            reagents: "EFEF",
            key: {
                A: "eidolon:lesser_soul_gem",
                B: "aether:zanite_gemstone",
                C: "ars_nouveau:novice_spell_book",
                D: "#minecraft:candles",
                E: "minecraft:diamond",
                F: "irons_spellbooks:frozen_bone",
            },
        },
    ];

    recipes.forEach((recipe) => {
        event.recipes.eidolon.worktable(
            recipe.result,
            recipe.pattern,
            recipe.reagents,
            recipe.key
        );
    });
});
