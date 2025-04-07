ServerEvents.highPriorityData(event => {
    let tweak = {
        type: "apotheosis:attribute",
        attribute: "attributeslib:life_steal",
        operation: "ADDITION",
        values: {
            common: {
                min: 0.05,
                steps: 5,
                step: 0.01,
            },
            uncommon: {
                min: 0.06,
                steps: 5,
                step: 0.01,
            },
            rare: {
                min: 0.08,
                steps: 10,
                step: 0.01,
            },
            epic: {
                min: 0.1,
                steps: 15,
                step: 0.01,
            },
            mythic: {
                min: 0.11,
                steps: 15,
                step: 0.01,
            },
            ancient: {
                min: 0.12,
                steps: 15,
                step: 0.01,
            },
        },
        types: ["sword", "trident"],
    };

    event.addJson("apotheosis:affixes/sword/attribute/vampiric.json", tweak);
})