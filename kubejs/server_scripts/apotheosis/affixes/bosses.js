// TODO: Graveyard Mod bosses

ServerEvents.highPriorityData((event) => {
    let bosses = [
        {
            name: "wilden_stalker",
            entity: "ars_nouveau:wilden_stalker",
            weight: 3,
            size: {
                width: 1,
                height: 2,
            },
            min_rarity: "uncommon",
            max_rarity: "uncommon",
            stats: {
                uncommon: {
                    enchant_chance: 0.25,
                    enchantment_levels: [12, 8, 20, 4],
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
                                steps: 4,
                                step: 10,
                            },
                        },
                        {
                            attribute: "minecraft:generic.movement_speed",
                            operation: "MULTIPLY_BASE",
                            value: {
                                min: 0.15,
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
                    ],
                },
                rare: {
                    enchant_chance: 0.4,
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
                                min: 20,
                                steps: 4,
                                step: 10,
                            },
                        },
                        {
                            attribute: "minecraft:generic.movement_speed",
                            operation: "MULTIPLY_BASE",
                            value: {
                                min: 0.15,
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
                    ],
                },
            },
        },
        {
            name: "wilden_hunter",
            entity: "ars_nouveau:wilden_hunter",
            weight: 3,
            size: {
                width: 1,
                height: 2,
            },
            min_rarity: "uncommon",
            max_rarity: "uncommon",
            stats: {
                uncommon: {
                    enchant_chance: 0.25,
                    enchantment_levels: [12, 8, 20, 4],
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
                                steps: 4,
                                step: 10,
                            },
                        },
                        {
                            attribute: "minecraft:generic.movement_speed",
                            operation: "MULTIPLY_BASE",
                            value: {
                                min: 0.15,
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
                    ],
                },
                rare: {
                    enchant_chance: 0.4,
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
                                min: 20,
                                steps: 4,
                                step: 10,
                            },
                        },
                        {
                            attribute: "minecraft:generic.movement_speed",
                            operation: "MULTIPLY_BASE",
                            value: {
                                min: 0.15,
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
                    ],
                },
            },
        },
        {
            name: "wilden_stalker",
            entity: "ars_nouveau:wilden_guardian",
            weight: 3,
            size: {
                width: 1,
                height: 2,
            },
            min_rarity: "uncommon",
            max_rarity: "uncommon",
            stats: {
                uncommon: {
                    enchant_chance: 0.25,
                    enchantment_levels: [12, 8, 20, 4],
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
                                steps: 4,
                                step: 10,
                            },
                        },
                        {
                            attribute: "minecraft:generic.movement_speed",
                            operation: "MULTIPLY_BASE",
                            value: {
                                min: 0.15,
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
                    ],
                },
                rare: {
                    enchant_chance: 0.4,
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
                                min: 20,
                                steps: 4,
                                step: 10,
                            },
                        },
                        {
                            attribute: "minecraft:generic.movement_speed",
                            operation: "MULTIPLY_BASE",
                            value: {
                                min: 0.15,
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
                    ],
                },
            },
        },
        {
            name: "basalz",
            entity: "thermal:basalz",
            weight: 3,
            size: {
                width: 1,
                height: 2,
            },
            min_rarity: "uncommon",
            max_rarity: "uncommon",
            stats: {
                uncommon: {
                    enchant_chance: 0.25,
                    enchantment_levels: [12, 8, 20, 4],
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
                                steps: 4,
                                step: 10,
                            },
                        },
                        {
                            attribute: "minecraft:generic.movement_speed",
                            operation: "MULTIPLY_BASE",
                            value: {
                                min: 0.15,
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
                    ],
                },
                rare: {
                    enchant_chance: 0.4,
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
                                min: 20,
                                steps: 4,
                                step: 10,
                            },
                        },
                        {
                            attribute: "minecraft:generic.movement_speed",
                            operation: "MULTIPLY_BASE",
                            value: {
                                min: 0.15,
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
                    ],
                },
            },
        },
        {
            name: "blitz",
            entity: "thermal:blitz",
            weight: 3,
            size: {
                width: 1,
                height: 2,
            },
            min_rarity: "uncommon",
            max_rarity: "uncommon",
            stats: {
                uncommon: {
                    enchant_chance: 0.25,
                    enchantment_levels: [12, 8, 20, 4],
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
                                steps: 4,
                                step: 10,
                            },
                        },
                        {
                            attribute: "minecraft:generic.movement_speed",
                            operation: "MULTIPLY_BASE",
                            value: {
                                min: 0.15,
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
                    ],
                },
                rare: {
                    enchant_chance: 0.4,
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
                                min: 20,
                                steps: 4,
                                step: 10,
                            },
                        },
                        {
                            attribute: "minecraft:generic.movement_speed",
                            operation: "MULTIPLY_BASE",
                            value: {
                                min: 0.15,
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
                    ],
                },
            },
        },
        {
            name: "blizz",
            entity: "thermal:blizz",
            weight: 3,
            size: {
                width: 1,
                height: 2,
            },
            min_rarity: "uncommon",
            max_rarity: "uncommon",
            stats: {
                uncommon: {
                    enchant_chance: 0.25,
                    enchantment_levels: [12, 8, 20, 4],
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
                                steps: 4,
                                step: 10,
                            },
                        },
                        {
                            attribute: "minecraft:generic.movement_speed",
                            operation: "MULTIPLY_BASE",
                            value: {
                                min: 0.15,
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
                    ],
                },
                rare: {
                    enchant_chance: 0.4,
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
                                min: 20,
                                steps: 4,
                                step: 10,
                            },
                        },
                        {
                            attribute: "minecraft:generic.movement_speed",
                            operation: "MULTIPLY_BASE",
                            value: {
                                min: 0.15,
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
                    ],
                },
            },
        },
        {
            name: "mimic",
            entity: "artifacts:mimic",
            weight: 3,
            size: {
                width: 1,
                height: 1,
            },
            min_rarity: "uncommon",
            max_rarity: "epic",
            stats: {
                uncommon: {
                    enchant_chance: 0.25,
                    enchantment_levels: [12, 8, 20, 4],
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
                                steps: 4,
                                step: 10,
                            },
                        },
                        {
                            attribute: "minecraft:generic.movement_speed",
                            operation: "MULTIPLY_BASE",
                            value: {
                                min: 0.15,
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
                    ],
                },
                rare: {
                    enchant_chance: 0.4,
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
                                min: 20,
                                steps: 4,
                                step: 10,
                            },
                        },
                        {
                            attribute: "minecraft:generic.movement_speed",
                            operation: "MULTIPLY_BASE",
                            value: {
                                min: 0.15,
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
                    ],
                },
                epic: {
                    enchant_chance: 0.65,
                    enchantment_levels: [21, 16, 30, 25],
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
                                min: 60,
                                steps: 40,
                                step: 2,
                            },
                        },
                        {
                            attribute: "minecraft:generic.movement_speed",
                            operation: "MULTIPLY_BASE",
                            value: {
                                min: 0.15,
                                steps: 15,
                                step: 0.01,
                            },
                        },
                        {
                            attribute: "minecraft:generic.attack_damage",
                            operation: "MULTIPLY_BASE",
                            value: {
                                min: 0.25,
                                steps: 30,
                                step: 0.01,
                            },
                        },
                        {
                            attribute: "minecraft:generic.knockback_resistance",
                            operation: "ADDITION",
                            value: 0.45,
                        },
                        {
                            attribute: "minecraft:generic.armor",
                            operation: "ADDITION",
                            value: 5,
                        },
                        {
                            attribute: "minecraft:generic.armor_toughness",
                            operation: "ADDITION",
                            value: 3,
                        },
                    ],
                },
            },
        },
        {
            name: "murmur",
            entity: "alexsmobs:murmur",
            weight: 3,
            size: {
                width: 1,
                height: 2,
            },
            min_rarity: "uncommon",
            max_rarity: "epic",
            stats: {
                uncommon: {
                    enchant_chance: 0.25,
                    enchantment_levels: [12, 8, 20, 4],
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
                                steps: 4,
                                step: 10,
                            },
                        },
                        {
                            attribute: "minecraft:generic.movement_speed",
                            operation: "MULTIPLY_BASE",
                            value: {
                                min: 0.15,
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
                    ],
                },
                rare: {
                    enchant_chance: 0.4,
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
                                min: 20,
                                steps: 4,
                                step: 10,
                            },
                        },
                        {
                            attribute: "minecraft:generic.movement_speed",
                            operation: "MULTIPLY_BASE",
                            value: {
                                min: 0.15,
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
                    ],
                },
                epic: {
                    enchant_chance: 0.65,
                    enchantment_levels: [21, 16, 30, 25],
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
                                min: 60,
                                steps: 40,
                                step: 2,
                            },
                        },
                        {
                            attribute: "minecraft:generic.movement_speed",
                            operation: "MULTIPLY_BASE",
                            value: {
                                min: 0.15,
                                steps: 15,
                                step: 0.01,
                            },
                        },
                        {
                            attribute: "minecraft:generic.attack_damage",
                            operation: "MULTIPLY_BASE",
                            value: {
                                min: 0.25,
                                steps: 30,
                                step: 0.01,
                            },
                        },
                        {
                            attribute: "minecraft:generic.knockback_resistance",
                            operation: "ADDITION",
                            value: 0.45,
                        },
                        {
                            attribute: "minecraft:generic.armor",
                            operation: "ADDITION",
                            value: 5,
                        },
                        {
                            attribute: "minecraft:generic.armor_toughness",
                            operation: "ADDITION",
                            value: 3,
                        },
                    ],
                },
            },
        },
        {
            dimensions: ["minecraft:the_nether"],
            valid_gear_sets: ["#the_nether"],
            name: "dropbear",
            entity: "alexsmobs:dropbear",
            weight: 3,
            size: {
                width: 1,
                height: 2,
            },
            min_rarity: "rare",
            max_rarity: "epic",
            stats: {
                uncommon: {
                    enchant_chance: 0.25,
                    enchantment_levels: [12, 8, 20, 4],
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
                                steps: 4,
                                step: 10,
                            },
                        },
                        {
                            attribute: "minecraft:generic.movement_speed",
                            operation: "MULTIPLY_BASE",
                            value: {
                                min: 0.15,
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
                    ],
                },
                rare: {
                    enchant_chance: 0.4,
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
                                min: 20,
                                steps: 4,
                                step: 10,
                            },
                        },
                        {
                            attribute: "minecraft:generic.movement_speed",
                            operation: "MULTIPLY_BASE",
                            value: {
                                min: 0.15,
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
                    ],
                },
                epic: {
                    enchant_chance: 0.65,
                    enchantment_levels: [21, 16, 30, 25],
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
                                min: 60,
                                steps: 40,
                                step: 2,
                            },
                        },
                        {
                            attribute: "minecraft:generic.movement_speed",
                            operation: "MULTIPLY_BASE",
                            value: {
                                min: 0.15,
                                steps: 15,
                                step: 0.01,
                            },
                        },
                        {
                            attribute: "minecraft:generic.attack_damage",
                            operation: "MULTIPLY_BASE",
                            value: {
                                min: 0.25,
                                steps: 30,
                                step: 0.01,
                            },
                        },
                        {
                            attribute: "minecraft:generic.knockback_resistance",
                            operation: "ADDITION",
                            value: 0.45,
                        },
                        {
                            attribute: "minecraft:generic.armor",
                            operation: "ADDITION",
                            value: 5,
                        },
                        {
                            attribute: "minecraft:generic.armor_toughness",
                            operation: "ADDITION",
                            value: 3,
                        },
                    ],
                },
            },
        },
        {
            name: "wraith",
            entity: "eidolon:wraith",
            weight: 6,
            size: {
                width: 1,
                height: 2,
            },
            min_rarity: "uncommon",
            max_rarity: "uncommon",
            stats: {
                uncommon: {
                    enchant_chance: 0.25,
                    enchantment_levels: [12, 8, 20, 4],
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
                                steps: 4,
                                step: 10,
                            },
                        },
                        {
                            attribute: "minecraft:generic.movement_speed",
                            operation: "MULTIPLY_BASE",
                            value: {
                                min: 0.15,
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
                    ],
                },
                rare: {
                    enchant_chance: 0.4,
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
                                min: 20,
                                steps: 4,
                                step: 10,
                            },
                        },
                        {
                            attribute: "minecraft:generic.movement_speed",
                            operation: "MULTIPLY_BASE",
                            value: {
                                min: 0.15,
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
                    ],
                },
            },
        },
        {
            name: "zombie_brute",
            entity: "eidolon:zombie_brute",
            weight: 6,
            size: {
                width: 1,
                height: 2,
            },
            min_rarity: "uncommon",
            max_rarity: "uncommon",
            stats: {
                uncommon: {
                    enchant_chance: 0.25,
                    enchantment_levels: [12, 8, 20, 4],
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
                                steps: 4,
                                step: 10,
                            },
                        },
                        {
                            attribute: "minecraft:generic.movement_speed",
                            operation: "MULTIPLY_BASE",
                            value: {
                                min: 0.15,
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
                    ],
                },
                rare: {
                    enchant_chance: 0.4,
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
                                min: 20,
                                steps: 4,
                                step: 10,
                            },
                        },
                        {
                            attribute: "minecraft:generic.movement_speed",
                            operation: "MULTIPLY_BASE",
                            value: {
                                min: 0.15,
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
                    ],
                },
            },
        },
    ];

    bosses.forEach((boss) => {
        let data = {
            entity: boss.entity,
            weight: boss.weight ? boss.weight : 3,
            quality: boss.quality ? boss.quality : 5,
            size: boss.size ? boss.size : { width: 2, height: 3 },
            valid_gear_sets: boss.valid_gear_sets
                ? boss.valid_gear_sets
                : ["#overworld"],
            dimensions: boss.dimensions ? boss.dimensions : ["overworld"],
            min_rarity: boss.min_rarity ? boss.min_rarity : "common",
            max_rarity: boss.max_rarity ? boss.max_rarity : "uncommon",
            stats: boss.stats,
        };

        event.addJson(`apotheosis:bosses/${boss.name}.json`, data);
    });
});
