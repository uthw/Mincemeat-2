ServerEvents.recipes((event) => {
    let recipes = [
        {
            input: {
                tag: "l2artifacts:rank_1",
            },
            output: {
                item: "traveloptics:celestial_fragment",
                min_count: 1,
                max_count: 2,
            },
        },
        {
            input: {
                tag: "l2artifacts:rank_2",
            },
            output: {
                item: "traveloptics:celestial_fragment",
                min_count: 2,
                max_count: 4,
            }
        },
        {
            input: {
                tag: "l2artifacts:rank_3",
            },
            output: {
                item: "traveloptics:celestial_fragment",
                min_count: 3,
                max_count: 6,
            }
        },
        {
            input: {
                tag: "l2artifacts:rank_4",
            },
            output: {
                item: "traveloptics:celestial_fragment",
                min_count: 4,
                max_count: 7,
            }
        },
        {
            input: {
                tag: "l2artifacts:rank_5",
            },
            output: {
                item: "traveloptics:celestial_fragment",
                min_count: 5,
                max_count: 9,
            }
        }
    ];

    recipes.forEach((recipe) => {
        event.custom({
            type: "apotheosis:salvaging",
            input: recipe.input,
            outputs: [
                {
                    min_count: recipe.output.min_count,
                    max_count: recipe.output.max_count,
                    stack: {
                        item: recipe.output.item,
                    },
                },
            ],
        });
    });
});
