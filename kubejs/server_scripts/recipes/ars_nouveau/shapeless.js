ServerEvents.recipes((event) => {
    const recipes = [
        [
            "ars_nouveau:ritual_flight",
            [
                "ars_nouveau:purple_archwood_log",
                "3x ars_nouveau:wilden_wing",
                "2x undergarden:glitterkelp",
                "forbidden_arcanus:arcane_crystal",
            ],
        ],
        [
            "4x ars_nouveau:magebloom_fiber",
            ["ars_nouveau:magebloom", "forbidden_arcanus:arcane_crystal"],
        ],
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe[0], recipe[1]);
    });
});
