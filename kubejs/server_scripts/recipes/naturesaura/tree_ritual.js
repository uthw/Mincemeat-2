ServerEvents.recipes((event) => {
    const recipes = [
        {
            inputs: [
                {
                    tag: "botania:petals",
                },
                {
                    tag: "botania:mystical_flowers",
                },
                {
                    tag: "botania:runes",
                },
                {
                    tag: "botania:runes",
                },
                {
                    tag: "forge:gems/arcane_crystal",
                },
                {
                    item: "naturesaura:gold_leaf",
                },
            ],
            sapling: { item: "minecraft:oak_sapling" },
            output: { item: "naturesaura:ancient_sapling", count: 2 },
            time: 120,
        },
        {
            inputs: [
                { item: "reliquary:fertile_essence" },
                { item: "reliquary:fertile_essence" },
                { item: "enigmaticlegacy:infinimeal" },
                { item: "ars_nouveau:magebloom" },
                { item: "alexscaves:cycad" },
                { item: "alexscaves:cycad" },
            ],
            sapling: { item: "minecraft:lily_pad" },
            output: { item: "reliquary:fertile_lily_pad", count: 1 },
            time: 60,
        },
        {
            inputs: [
                { item: "forbidden_arcanus:arcane_crystal" },
                { item: "forbidden_arcanus:arcane_crystal" },
                { item: "forbidden_arcanus:arcane_crystal" },
                { item: "forbidden_arcanus:arcane_crystal" },
                { item: "forbidden_arcanus:arcane_crystal" },
                { item: "forbidden_arcanus:arcane_crystal" },
                { item: "forbidden_arcanus:arcane_crystal" },
                { item: "forbidden_arcanus:arcane_crystal" },
            ],
            sapling: { tag: "minecraft:saplings" },
            output: { item: "integrateddynamics:menril_sapling" },
            time: 20,
        },
    ];

    recipes.forEach((recipe) => {
        event.custom({
            type: "naturesaura:tree_ritual",
            ingredients: recipe.inputs,
            sapling: recipe.sapling,
            output: recipe.output,
            time: recipe.time,
        });
    });
});
