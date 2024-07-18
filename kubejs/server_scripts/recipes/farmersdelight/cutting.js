ServerEvents.recipes((event) => {
    let recipes = [
        {
            ingredients: { item: "minecraft:dragon_head" },
            result: [{ item: "forbidden_arcanus:dragon_scale", count: 3 }],
            tool: {
                // must enable probe to see how this works
                tag: "forge:tools/knives",
            },
        },
    ];

    let fishFillets = [
        {
            fish: "aquaculture:atlantic_cod",
            count: 6,
        },
        {
            fish: "aquaculture:blackfish",
            count: 2,
        },
        {
            fish: "aquaculture:pacific_halibut",
            count: 12,
        },
        {
            fish: "aquaculture:atlantic_halibut",
            count: 14,
        },
        {
            fish: "aquaculture:atlantic_herring",
            count: 1,
        },
        {
            fish: "aquaculture:pink_salmon",
            count: 2,
        },
        {
            fish: "aquaculture:boulti",
            count: 1,
        },
        {
            fish: "aquaculture:capitaine",
            count: 10,
        },
        {
            fish: "aquaculture:synodontis",
            count: 1,
        },
        {
            fish: "aquaculture:smallmouth_bass",
            count: 2,
        },
        {
            fish: "aquaculture:bluegill",
            count: 1,
        },
        {
            fish: "aquaculture:brown_trout",
            count: 2,
        },
        {
            fish: "aquaculture:carp",
            count: 2,
        },
        {
            fish: "aquaculture:catfish",
            count: 6,
        },
        {
            fish: "aquaculture:gar",
            count: 4,
        },
        {
            fish: "aquaculture:muskellunge",
            count: 3,
        },
        {
            fish: "aquaculture:perch",
            count: 1,
        },
        // a-crap-aima lol
        {
            fish: "aquaculture:arapaima",
            count: 10,
        },
        {
            fish: "aquaculture:piranha",
            count: 1,
        },
        {
            fish: "aquaculture:tambaqui",
            count: 3,
        },
        {
            fish: "aquaculture:red_grouper",
            count: 3,
        },
        {
            fish: "aquaculture:tuna",
            count: 10,
        },
        {
            fish: "aquaculture:pollock",
            count: 2,
        },
        {
            fish: "aquaculture:bayad",
            count: 4,
        },
    ];

    recipes.forEach((recipe) => {
        event.custom({
            type: "farmersdelight:cutting",
            ingredients: [recipe.ingredients],
            result: recipe.result,
            tool: recipe.tool,
        });
    });

    fishFillets.forEach((recipe) => {
        event.custom({
            type: "farmersdelight:cutting",
            ingredients: [{ item: recipe.fish }],
            result: [
                { item: "aquaculture:fish_fillet_raw", count: recipe.count },
            ],
            tool: {
                // must enable probe to see how this works
                tag: "forge:tools/knives",
            },
        });
    });
});
