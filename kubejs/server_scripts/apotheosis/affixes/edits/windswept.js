ServerEvents.highPriorityData((event) => {
    let windsweptEdit = {
        type: "apotheosis:attribute",
        // attribute: "feathers:feathers.feather_regen",
        attribute: "betterparagliders:idle_stamina_regen",
        operation: "ADDITION",
        values: {
            common: {
                min: 1,
                steps: 2,
                step: 0.0,
            },
            uncommon: {
                min: 1,
                steps: 3,
                step: 0.0,
            },
            rare: {
                min: 2,
                steps: 3,
                step: 0.0,
            },
            epic: {
                min: 2,
                steps: 4,
                step: 0.0,
            },
            mythic: {
                min: 3,
                steps: 4,
                step: 0.0,
            },
            ancient: {
                min: 3,
                steps: 5,
                step: 0.0,
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
