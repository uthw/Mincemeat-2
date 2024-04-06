ServerEvents.recipes((event) => {
    const recipes = [
        [
            "farmersdelight:cooking_pot",
            ["ABA", "CDC", "CCC"],
            {
                A: "minecraft:leather",
                B: "forbidden_arcanus:cloth",
                C: "#forge:ingots/tin",
                D: "minecraft:bucket",
            },
        ],

        [
            "farmersdelight:skillet",
            [" AA", " AA", "BC "],
            {
                A: "#forge:ingots/iron",
                B: "minecraft:stick",
                C: "forbidden_arcanus:cloth",
            },
        ],
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe[0], recipe[1], recipe[2]);
    });
});
