ServerEvents.highPriorityData((event) => {
    let tweak = {
        entity: "irons_spellbooks:necromancer",
        weight: 90,
        quality: 2,
        size: {
            width: 1,
            height: 2,
        },
        valid_gear_sets: ["#irons_spellbooks"],
        dimensions: ["minecraft:overworld"],
        min_rarity: "uncommon",
        max_rarity: "rare",
        stats: {
            uncommon: {
                enchant_chance: 0.25,
                enchantment_levels: [12, 8, 20, 14],
                effects: [
                    {
                        effect: "minecraft:fire_resistance",
                        chance: 1.0,
                    },
                ],
                attribute_modifiers: [
                    {
                        attribute: "minecraft:generic.max_health",
                        operation: "ADDITION",
                        value: {
                            min: 20,
                            steps: 20,
                            step: 1,
                        },
                    },
                    {
                        attribute: "minecraft:generic.movement_speed",
                        operation: "MULTIPLY_BASE",
                        value: {
                            min: 0.05,
                            steps: 5,
                            step: 0.01,
                        },
                    },
                    {
                        attribute: "minecraft:generic.attack_damage",
                        operation: "MULTIPLY_BASE",
                        value: {
                            min: 0.2,
                            steps: 20,
                            step: 0.01,
                        },
                    },
                    {
                        attribute: "minecraft:generic.knockback_resistance",
                        operation: "ADDITION",
                        value: 0.3,
                    },
                    {
                        attribute: "irons_spellbooks:spell_power",
                        operation: "MULTIPLY_BASE",
                        value: {
                            min: 0.05,
                            steps: 5,
                            step: 0.01,
                        },
                    },
                    {
                        attribute: "irons_spellbooks:spell_resist",
                        operation: "MULTIPLY_BASE",
                        value: {
                            min: 0.05,
                            steps: 5,
                            step: 0.01,
                        },
                    },
                    {
                        attribute: "irons_spellbooks:summon_damage",
                        operation: "MULTIPLY_BASE",
                        value: {
                            min: 0.05,
                            steps: 5,
                            step: 0.01,
                        },
                    },
                ],
            },
            rare: {
                // the same as epic
                enchant_chance: 0.35,
                enchantment_levels: [15, 10, 23, 17],
                effects: [
                    {
                        effect: "minecraft:fire_resistance",
                        chance: 1.0,
                    },
                ],
                attribute_modifiers: [
                    {
                        attribute: "minecraft:generic.max_health",
                        operation: "ADDITION",
                        value: {
                            min: 80,
                            steps: 30,
                            step: 1,
                        },
                    },
                    {
                        attribute: "minecraft:generic.movement_speed",
                        operation: "MULTIPLY_BASE",
                        value: {
                            min: 0.15,
                            steps: 8,
                            step: 0.01,
                        },
                    },
                    {
                        attribute: "minecraft:generic.attack_damage",
                        operation: "MULTIPLY_BASE",
                        value: {
                            min: 0.25,
                            steps: 25,
                            step: 0.01,
                        },
                    },
                    {
                        attribute: "minecraft:generic.knockback_resistance",
                        operation: "ADDITION",
                        value: 0.4,
                    },
                    {
                        attribute: "irons_spellbooks:spell_power",
                        operation: "MULTIPLY_BASE",
                        value: {
                            min: 0.4,
                            steps: 5,
                            step: 0.01,
                        },
                    },
                    {
                        attribute: "irons_spellbooks:spell_resist",
                        operation: "MULTIPLY_BASE",
                        value: {
                            min: 0.25,
                            steps: 5,
                            step: 0.01,
                        },
                    },
                    {
                        attribute: "irons_spellbooks:summon_damage",
                        operation: "MULTIPLY_BASE",
                        value: {
                            min: 0.4,
                            steps: 5,
                            step: 0.01,
                        },
                    },
                ],
            },
            epic: {
                enchant_chance: 0.35,
                enchantment_levels: [15, 10, 23, 17],
                effects: [
                    {
                        effect: "minecraft:fire_resistance",
                        chance: 1.0,
                    },
                ],
                attribute_modifiers: [
                    {
                        attribute: "minecraft:generic.max_health",
                        operation: "ADDITION",
                        value: {
                            min: 80,
                            steps: 30,
                            step: 1,
                        },
                    },
                    {
                        attribute: "minecraft:generic.movement_speed",
                        operation: "MULTIPLY_BASE",
                        value: {
                            min: 0.15,
                            steps: 8,
                            step: 0.01,
                        },
                    },
                    {
                        attribute: "minecraft:generic.attack_damage",
                        operation: "MULTIPLY_BASE",
                        value: {
                            min: 0.25,
                            steps: 25,
                            step: 0.01,
                        },
                    },
                    {
                        attribute: "minecraft:generic.knockback_resistance",
                        operation: "ADDITION",
                        value: 0.4,
                    },
                    {
                        attribute: "irons_spellbooks:spell_power",
                        operation: "MULTIPLY_BASE",
                        value: {
                            min: 0.4,
                            steps: 5,
                            step: 0.01,
                        },
                    },
                    {
                        attribute: "irons_spellbooks:spell_resist",
                        operation: "MULTIPLY_BASE",
                        value: {
                            min: 0.25,
                            steps: 5,
                            step: 0.01,
                        },
                    },
                    {
                        attribute: "irons_spellbooks:summon_damage",
                        operation: "MULTIPLY_BASE",
                        value: {
                            min: 0.4,
                            steps: 5,
                            step: 0.01,
                        },
                    },
                ],
            },
            mythic: {
                enchant_chance: 0.35,
                enchantment_levels: [15, 10, 23, 17],
                effects: [
                    {
                        effect: "minecraft:fire_resistance",
                        chance: 1.0,
                    },
                ],
                attribute_modifiers: [
                    {
                        attribute: "minecraft:generic.max_health",
                        operation: "ADDITION",
                        value: {
                            min: 120,
                            steps: 30,
                            step: 1,
                        },
                    },
                    {
                        attribute: "minecraft:generic.movement_speed",
                        operation: "MULTIPLY_BASE",
                        value: {
                            min: 0.15,
                            steps: 8,
                            step: 0.01,
                        },
                    },
                    {
                        attribute: "minecraft:generic.attack_damage",
                        operation: "MULTIPLY_BASE",
                        value: {
                            min: 0.25,
                            steps: 25,
                            step: 0.01,
                        },
                    },
                    {
                        attribute: "minecraft:generic.knockback_resistance",
                        operation: "ADDITION",
                        value: 0.4,
                    },
                    {
                        attribute: "irons_spellbooks:spell_power",
                        operation: "MULTIPLY_BASE",
                        value: {
                            min: 0.6,
                            steps: 5,
                            step: 0.01,
                        },
                    },
                    {
                        attribute: "irons_spellbooks:spell_resist",
                        operation: "MULTIPLY_BASE",
                        value: {
                            min: 0.4,
                            steps: 5,
                            step: 0.01,
                        },
                    },
                    {
                        attribute: "irons_spellbooks:summon_damage",
                        operation: "MULTIPLY_BASE",
                        value: {
                            min: 0.6,
                            steps: 5,
                            step: 0.01,
                        },
                    },
                ],
            },
        },
    };

    event.addJson("irons_spellbooks:bosses/necromancer.json", tweak);
});
