ServerEvents.highPriorityData(event => {
    let tweak = {
        type: "apotheosis:attribute",
        attribute: "attributeslib:overheal",
        operation: "ADDITION",
        values: {
            common: {
                min: 0.02,
                steps: 5,
                step: 0.01,
            },
            uncommon: {
                min: 0.03,
                steps: 5,
                step: 0.01,
            },
            rare: {
                min: 0.06,
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
                min: 0.25,
                steps: 15,
                step: 0.01,
            },
        },
        types: ["heavy_weapon"],
    };


})