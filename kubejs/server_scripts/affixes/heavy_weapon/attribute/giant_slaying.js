ServerEvents.highPriorityData((event) => {
    let attribute = {
        type: "apotheosis:attribute",
        attribute: "attributeslib:current_hp_damage",
        operation: "ADDITION",
        values: {
            common: {
                min: 0.05,
                steps: 5,
                step: 0.01,
            },
            uncommon: {
                min: 0.05,
                steps: 5,
                step: 0.01,
            },
            rare: {
                min: 0.05,
                steps: 5,
                step: 0.01,
            },
            epic: {
                min: 0.1,
                steps: 5,
                step: 0.01,
            },
            mythic: {
                min: 0.1,
                steps: 5,
                step: 0.01,
            },
            ancient: {
                min: 0.1,
                steps: 10,
                step: 0.01,
            },
        },
        types: [],
    };

    event.addJson(
        "apotheosis:affixes/heavy_weapon/attribute/giant_slaying.json",
        attribute
    );
});
