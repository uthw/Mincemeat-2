ServerEvents.highPriorityData(event => {
    let tweak = {
        variant: "tyrannical",
        weight: 10,
        quality: 0,
        unique: true,
        dimensions: [],
        bonuses: [
            {
                type: "apotheosis:attribute",
                gem_class: {
                    key: "heavy_weapon",
                    types: ["heavy_weapon"],
                },
                attribute: "attributeslib:current_hp_damage",
                operation: "ADDITION",
                values: {
                    common: 0.01,
                    uncommon: 0.02,
                    rare: 0.03,
                    epic: 0.05,
                    mythic: 0.05,
                    ancient: 0.05,
                },
            },
            {
                type: "apotheosis:attribute",
                gem_class: {
                    key: "light_weapon",
                    types: ["sword", "trident"],
                },
                attribute: "minecraft:generic.attack_knockback",
                operation: "ADDITION",
                values: {
                    common: 0.5,
                    uncommon: 1,
                    rare: 1.5,
                    epic: 2,
                    mythic: 3,
                    ancient: 3.5,
                },
            },
            {
                type: "apotheosis:attribute",
                gem_class: {
                    key: "core_armor",
                    types: ["chestplate", "leggings"],
                },
                attribute: "minecraft:generic.armor_toughness",
                operation: "ADDITION",
                values: {
                    common: 0.5,
                    uncommon: 1,
                    rare: 1.5,
                    epic: 2.5,
                    mythic: 4,
                    ancient: 6,
                },
            },
            {
                type: "apotheosis:attribute",
                gem_class: {
                    key: "shield",
                    types: ["shield"],
                },
                attribute: "minecraft:generic.armor_toughness",
                operation: "MULTIPLY_TOTAL",
                values: {
                    common: 0.05,
                    uncommon: 0.1,
                    rare: 0.15,
                    epic: 0.225,
                    mythic: 0.3,
                    ancient: 0.425,
                },
            },
            {
                type: "apotheosis:mob_effect",
                gem_class: {
                    key: "ranged_weapon",
                    types: ["bow", "crossbow"],
                },
                mob_effect: "attributeslib:bleeding",
                stack_on_reapply: true,
                target: "arrow_target",
                values: {
                    mythic: {
                        duration: 160,
                        amplifier: 0,
                        cooldown: 40,
                    },
                    ancient: {
                        duration: 160,
                        amplifier: 1,
                        cooldown: 40,
                    },
                },
            },
        ],
    };

    event.addJson("apotheosis:gems/core/tyrannical.json", tweak);
})