// example usage of crucible:
//
// event.recipes.eidolon.crucible("apple", [
//     { stirs: 1 },
//     { items: ["golden_carrot"] },
//     { stirs: 2 },
//     { stirs: 1, items: ["gold_nugget"] },
// ]);

ServerEvents.recipes((event) => {
    let recipes = [
        {
            output: "eidolon:shadow_gem",
            steps: [
                {
                    items: ["minecraft:coal"],
                },
                {
                    items: ["iceandfire:ectoplasm", "eidolon:death_essence"],
                    stirs: 1,
                },
                {
                    items: ["2x eidolon:soul_shard", "eidolon:death_essence"],
                    stirs: 1,
                },
                { items: "minecraft:diamond" },
            ],
        },
    ];

    recipes.forEach((recipe) => {
        event.recipes.eidolon.crucible(recipe.output, recipe.steps);
    });
});
