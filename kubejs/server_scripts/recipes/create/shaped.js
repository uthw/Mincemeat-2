ServerEvents.recipes((event) => {
    const recipes = [
        [
            "create:andesite_alloy",
            ["AB ", "BA ", "   "],
            {
                A: "minecraft:andesite",
                B: "architects_palette:algal_blend",
            },
        ],
        [
            "create:millstone",
            [" A ", "BCB", "DBD"],
            {
                A: "#forge:ingots/tin",
                B: "create:andesite_alloy",
                C: "create:cogwheel",
                D: "minecraft:smooth_sandstone",
            },
        ],
        [
            "create:deployer",
            ["ABA", "CDC", " E "],
            {
                A: "create:electron_tube",
                B: "railcraft:receiver_circuit",
                C: "create:cogwheel",
                D: "create:andesite_casing",
                E: "create:brass_hand",
            },
        ],
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe[0], recipe[1], recipe[2]);
    });
});
