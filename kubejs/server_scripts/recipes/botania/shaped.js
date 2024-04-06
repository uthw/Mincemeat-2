ServerEvents.recipes((event) => {
    const recipes = [
        [
            "botania:apothecary_default",
            ["ABA", " C ", "AAA"],
            {
                A: "minecraft:cobblestone",
                B: "#botania:petals",
                C: "eidolon:lesser_soul_gem",
            },
        ],
        [
            "botania:reach_ring",
            ["AB ", "BCB", "  B"],
            {
                A: "botania:rune_pride",
                B: "#forge:ingots/elementium",
                C: "aether:iron_ring",
            },
        ],
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe[0], recipe[1], recipe[2]);
    });
});
