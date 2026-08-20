ServerEvents.recipes((event) => {
    event.custom({
        type: "create_enchantment_industry:disenchanting",
        ingredients: [
            {
                item: "actuallyadditions:solidified_experience",
            },
        ],
        results: [
            {
                fluid: "create_enchantment_industry:experience",
                amount: 8,
            },
        ],
    });
})