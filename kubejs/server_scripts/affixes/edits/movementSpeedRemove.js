ServerEvents.highPriorityData((event) => {
    let dataLightning = {
        variant: "lightning",
        weight: 6,
        quality: 0,
        dimensions: [],
        bonuses: [
            {
                type: "apotheosis:attribute",
                gem_class: {
                    key: "ranged_weapon",
                    types: ["bow", "crossbow"],
                },
                attribute: "attributeslib:arrow_velocity",
                operation: "MULTIPLY_BASE",
                values: {
                    common: 0.05,
                    uncommon: 0.15,
                    rare: 0.25,
                    epic: 0.35,
                    mythic: 0.425,
                    ancient: 0.55,
                },
            },
            {
                type: "apotheosis:attribute",
                gem_class: {
                    key: "breaker",
                    types: ["shovel", "pickaxe"],
                },
                attribute: "attributeslib:mining_speed",
                operation: "ADDITION",
                values: {
                    common: 0.05,
                    uncommon: 0.15,
                    rare: 0.25,
                    epic: 0.35,
                    mythic: 0.425,
                    ancient: 0.5,
                },
            },
            {
                type: "apotheosis:attribute",
                gem_class: {
                    key: "lower_armor",
                    types: ["boots", "leggings"],
                },
                attribute: "feathers:featheres.feather_regen",
                operation: "MULTIPLY_TOTAL",
                values: {
                    common: 0.1,
                    uncommon: 0.225,
                    rare: 0.375,
                    epic: 0.4,
                    mythic: 0.55,
                    ancient: 0.7,
                },
            },
        ],
    };

    let dataSplendor = {
        variant: "splendor",
        weight: 10,
        quality: 0,
        dimensions: [],
        bonuses: [
            {
                type: "apotheosis:attribute",
                gem_class: {
                    key: "core_armor",
                    types: ["chestplate", "leggings"],
                },
                attribute: "minecraft:generic.luck",
                operation: "ADDITION",
                values: {
                    common: 0.5,
                    uncommon: 1.5,
                    rare: 2.75,
                    epic: 4,
                    mythic: 5,
                    ancient: 6,
                },
            },
            {
                type: "apotheosis:attribute",
                gem_class: {
                    key: "weapon_or_tool",
                    types: [
                        "sword",
                        "trident",
                        "bow",
                        "crossbow",
                        "heavy_weapon",
                        "shovel",
                        "pickaxe",
                    ],
                },
                attribute: "attributeslib:experience_gained",
                operation: "MULTIPLY_TOTAL",
                values: {
                    common: 0.075,
                    uncommon: 0.15,
                    rare: 0.225,
                    epic: 0.3,
                    mythic: 0.35,
                    ancient: 0.4,
                },
            },
            {
                type: "apotheosis:attribute",
                gem_class: {
                    key: "boots",
                    types: ["boots"],
                },
                attribute: "feathers:feathers.feather_regen",
                operation: "MULTIPLY_TOTAL",
                values: {
                    common: 0.1,
                    uncommon: 0.25,
                    rare: 0.35,
                    epic: 0.45,
                    mythic: 0.55,
                    ancient: 0.7,
                },
            },
        ],
    };

    let dataSamurai = {
        variant: "samurai",
        weight: 10,
        quality: 0,
        dimensions: [],
        unique: true,
        bonuses: [
            {
                type: "apotheosis:attribute",
                gem_class: {
                    key: "light_ranged",
                    types: ["sword", "trident", "bow", "crossbow"],
                },
                attribute: "attributeslib:crit_chance",
                operation: "ADDITION",
                values: {
                    common: 0.05,
                    uncommon: 0.15,
                    rare: 0.25,
                    epic: 0.35,
                    mythic: 0.4,
                    ancient: 0.45,
                },
            },
            {
                type: "apotheosis:attribute",
                gem_class: {
                    key: "heavy_weapon",
                    types: ["heavy_weapon"],
                },
                attribute: "attributeslib:crit_chance",
                operation: "ADDITION",
                values: {
                    common: 0.1,
                    uncommon: 0.25,
                    rare: 0.35,
                    epic: 0.4,
                    mythic: 0.475,
                    ancient: 0.65,
                },
            },
            {
                type: "apotheosis:attribute",
                gem_class: {
                    key: "lower_armor",
                    types: ["leggings", "boots"],
                },
                attribute: "feathers:feathers.feather_regen",
                operation: "MULTIPLY_TOTAL",
                values: {
                    common: 0.05,
                    uncommon: 0.15,
                    rare: 0.25,
                    epic: 0.35,
                    mythic: 0.45,
                    ancient: 0.65,
                },
            },
            {
                type: "apotheosis:attribute",
                gem_class: {
                    key: "helmet",
                    types: ["helmet"],
                },
                attribute: "attributeslib:arrow_velocity",
                operation: "MULTIPLY_TOTAL",
                values: {
                    common: 0.075,
                    uncommon: 0.15,
                    rare: 0.25,
                    epic: 0.375,
                    mythic: 0.425,
                    ancient: 0.5,
                },
            },
            {
                type: "apotheosis:attribute",
                gem_class: {
                    key: "shield",
                    types: ["shield"],
                },
                attribute: "attributeslib:dodge_chance",
                operation: "ADDITION",
                values: {
                    common: 0.01,
                    uncommon: 0.02,
                    rare: 0.04,
                    epic: 0.06,
                    mythic: 0.08,
                    ancient: 0.1,
                },
            },
        ],
    };

    // this is not good code
    event.addJson("apotheosis:gems/core/lightning.json", dataLightning);
    event.addJson("apotheosis:gems/core/splendor.json", dataSplendor);
    event.addJson("apotheosis:gems/core/samurai.json", dataSamurai);
});
