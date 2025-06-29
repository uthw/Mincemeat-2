ServerEvents.recipes((event) => {
    const recipes = [
        [
            "irons_spellbooks:scroll_forge",
            ["ABA", " C ", "CDC"],
            {
                A: "forbidden_arcanus:arcane_crystal_block",
                B: "minecraft:polished_deepslate",
                C: "minecraft:crying_obsidian",
                D: "meetyourfight:phantoplasm",
            },
        ],
        [
            "irons_spellbooks:inscription_table",
            ["A B", "CDC", "E E"],
            {
                A: "minecraft:feather",
                B: "minecraft:book",
                C: "#minecraft:wooden_slabs",
                D: "forbidden_arcanus:arcane_crystal_dust",
                E: "#forge:fences/wooden",
            },
        ],
        [
            "2x irons_spellbooks:magic_cloth",
            ["ABA", "ACA", "ABA"],
            {
                A: "irons_spellbooks:arcane_essence",
                B: "forbidden_arcanus:arcane_crystal_dust",
                C: "eidolon:tattered_cloth",
            },
        ],
        [
            "irons_spellbooks:diamond_spell_book",
            ["ABB", "CDE", "ABB"],
            {
                A: "minecraft:diamond",
                B: "irons_spellbooks:magic_cloth",
                C: "apotheosis:common_material",
                D: "irons_spellbooks:blank_rune",
                E: "forbidden_arcanus:arcane_crystal_dust",
            },
        ],
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe[0], recipe[1], recipe[2]);
    });
});
