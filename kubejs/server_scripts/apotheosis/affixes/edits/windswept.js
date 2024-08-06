ServerEvents.highPriorityData((event) => {
    let windsweptEdit = {
        type: "apotheosis:attribute",
        attribute: "feathers:feathers.feather_regen",
        operation: "MULTIPLY_TOTAL",
        values: {
            common: {
                min: 0.05,
                steps: 2,
                step: 0.05,
            },
            uncommon: {
                min: 0.1,
                steps: 3,
                step: 0.05,
            },
            rare: {
                min: 0.15,
                steps: 3,
                step: 0.05,
            },
            epic: {
                min: 0.2,
                steps: 4,
                step: 0.05,
            },
            mythic: {
                min: 0.25,
                steps: 4,
                step: 0.05,
            },
            ancient: {
                min: 0.12,
                steps: 5,
                step: 0.05,
            },
        },
        types: ["leggings", "boots"],
    };

    let windsweptEditRanged = windsweptEdit;

    windsweptEditRanged.types = ["bow", "crossbow", "trident"];

    event.addJson(
        "apotheosis:affixes/armor/attribute/windswept.json",
        windsweptEdit
    );
    event.addJson(
        "apotheosis:affixes/ranged/attribute/windswept.json",
        windsweptEditRanged
    );
});
