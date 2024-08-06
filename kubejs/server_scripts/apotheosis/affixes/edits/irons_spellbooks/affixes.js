// buffs, sometimes disables apotheosis affixes added by iron's spells and spellbooks

ServerEvents.highPriorityData((event) => {
    let tweaks = [
        {
            name: "armor/attribute/cooldown",
            type: "apotheosis:attribute",
            attribute: "irons_spellbooks:cooldown_reduction",
            operation: "MULTIPLY_BASE",
            values: {
                common: {
                    min: 0.2,
                    steps: 1,
                    step: 0.0,
                },
                uncommon: {
                    min: 0.25,
                    steps: 1,
                    step: 0.0,
                },
                rare: {
                    min: 0.3,
                    steps: 1,
                    step: 0.0,
                },
                epic: {
                    min: 0.35,
                    steps: 1,
                    step: 0.0,
                },
                mythic: {
                    min: 0.4,
                    steps: 1,
                    step: 0.0,
                },
                ancient: {
                    min: 0.3,
                    steps: 1,
                    step: 0.0,
                },
            },
            types: [
                "helmet",
                "chestplate",
                "leggings",
                "boots",
                "shield",
                "sword",
                "trident",
            ],
        },
        {
            name: "armor/attribute/mana",
            type: "apotheosis:attribute",
            attribute: "irons_spellbooks:max_mana",
            operation: "ADDITION",
            values: {
                common: {
                    min: 45, // 25
                    steps: 1,
                    step: 5,
                },
                uncommon: {
                    min: 60, // 35
                    steps: 1,
                    step: 5,
                },
                rare: {
                    min: 75,
                    steps: 1,
                    step: 5,
                },
                epic: {
                    min: 90,
                    steps: 1,
                    step: 5,
                },
                mythic: {
                    min: 105,
                    steps: 1,
                    step: 5,
                },
                ancient: {
                    min: 75,
                    steps: 1,
                    step: 5,
                },
            },
            types: ["helmet", "chestplate", "leggings", "boots", "shield"],
        },
        {
            // increments of 0.02 mean basically nothing lol
            name: "armor/attribute/spell_power",
            type: "apotheosis:attribute",
            attribute: "irons_spellbooks:spell_power",
            operation: "MULTIPLY_BASE",
            values: {
                common: {
                    min: 0.1,
                    steps: 1,
                    step: 0.0,
                },
                uncommon: {
                    min: 0.15,
                    steps: 1,
                    step: 0.0,
                },
                rare: {
                    min: 0.2,
                    steps: 1,
                    step: 0.0,
                },
                epic: {
                    min: 0.25,
                    steps: 1,
                    step: 0.0,
                },
                mythic: {
                    min: 0.3,
                    steps: 1,
                    step: 0.0,
                },
                ancient: {
                    min: 0.12,
                    steps: 1,
                    step: 0.0,
                },
            },
            types: ["helmet", "chestplate", "leggings", "boots"],
        },
        {
            name: "armor/attribute/spell_resist",
            type: "minecraft:invalid_type", // disable
            attribute: "irons_spellbooks:spell_resist",
            operation: "MULTIPLY_BASE",
            values: {
                common: {
                    min: 0.02,
                    steps: 1,
                    step: 0.0,
                },
                uncommon: {
                    min: 0.04,
                    steps: 1,
                    step: 0.0,
                },
                rare: {
                    min: 0.06,
                    steps: 1,
                    step: 0.0,
                },
                epic: {
                    min: 0.08,
                    steps: 1,
                    step: 0.0,
                },
                mythic: {
                    min: 0.1,
                    steps: 1,
                    step: 0.0,
                },
                ancient: {
                    min: 0.12,
                    steps: 1,
                    step: 0.0,
                },
            },
            types: ["nothing"],
        },
        // i don't like the weapon attributes
        {
            name: "sword/attribute/mana_regen.json",
            type: "minecraft:invalid_type",
            attribute: "irons_spellbooks:mana_regen",
            operation: "MULTIPLY_BASE",
            values: {
                // increase of 0.05
                common: {
                    min: 0.15,
                    steps: 1,
                    step: 0.0,
                },
                uncommon: {
                    min: 0.2,
                    steps: 1,
                    step: 0.0,
                },
                rare: {
                    min: 0.25,
                    steps: 1,
                    step: 0.0,
                },
                epic: {
                    min: 0.3,
                    steps: 1,
                    step: 0.0,
                },
                mythic: {
                    min: 0.35,
                    steps: 1,
                    step: 0.0,
                },
                ancient: {
                    min: 0.35,
                    steps: 1,
                    step: 0.0,
                },
            },
            types: ["sword", "trident"],
        },
        {
            name: "sword/attribute/spell_power.json",
            type: "minecraft:invalid_type",
            attribute: "irons_spellbooks:spell_power",
            operation: "MULTIPLY_BASE",
            values: {
                common: {
                    min: 0.1,
                    steps: 1,
                    step: 0.0,
                },
                uncommon: {
                    min: 0.12,
                    steps: 1,
                    step: 0.0,
                },
                rare: {
                    min: 0.14,
                    steps: 1,
                    step: 0.0,
                },
                epic: {
                    min: 0.16,
                    steps: 1,
                    step: 0.0,
                },
                mythic: {
                    min: 0.18,
                    steps: 1,
                    step: 0.0,
                },
                ancient: {
                    min: 0.2,
                    steps: 1,
                    step: 0.0,
                },
            },
            types: ["sword", "trident"],
        },
        // spellbook
        {
            name: "spellbook/attribute/blood_spell_power",
            type: "apotheosis:attribute",
            attribute: "irons_spellbooks:blood_spell_power",
            operation: "MULTIPLY_BASE",
            values: {
                common: {
                    min: 0.1,
                    steps: 1,
                    step: 0.0,
                },
                uncommon: {
                    min: 0.2,
                    steps: 1,
                    step: 0.0,
                },
                rare: {
                    min: 0.3,
                    steps: 1,
                    step: 0.0,
                },
                epic: {
                    min: 0.4,
                    steps: 1,
                    step: 0.0,
                },
                mythic: {
                    min: 0.5,
                    steps: 1,
                    step: 0.0,
                },
                ancient: {
                    min: 0.3,
                    steps: 1,
                    step: 0.0,
                },
            },
            types: ["curios:spellbook"],
        },
        {
            name: "spellbook/attribute/cast_time_reduction",
            type: "apotheosis:attribute",
            attribute: "irons_spellbooks:cast_time_reduction",
            operation: "MULTIPLY_BASE",
            values: {
                common: {
                    min: 0.1,
                    steps: 1,
                    step: 0.0,
                },
                uncommon: {
                    min: 0.2,
                    steps: 1,
                    step: 0.0,
                },
                rare: {
                    min: 0.3,
                    steps: 1,
                    step: 0.0,
                },
                epic: {
                    min: 0.4,
                    steps: 1,
                    step: 0.0,
                },
                mythic: {
                    min: 0.5,
                    steps: 1,
                    step: 0.0,
                },
                ancient: {
                    min: 0.3,
                    steps: 1,
                    step: 0.0,
                },
            },
            types: ["curios:spellbook"],
        },
        {
            name: "spellbook/attribute/ender_spell_power",
            type: "apotheosis:attribute",
            attribute: "irons_spellbooks:ender_spell_power",
            operation: "MULTIPLY_BASE",
            values: {
                common: {
                    min: 0.1,
                    steps: 1,
                    step: 0.0,
                },
                uncommon: {
                    min: 0.2,
                    steps: 1,
                    step: 0.0,
                },
                rare: {
                    min: 0.3,
                    steps: 1,
                    step: 0.0,
                },
                epic: {
                    min: 0.4,
                    steps: 1,
                    step: 0.0,
                },
                mythic: {
                    min: 0.5,
                    steps: 1,
                    step: 0.0,
                },
                ancient: {
                    min: 0.3,
                    steps: 1,
                    step: 0.0,
                },
            },
            types: ["curios:spellbook"],
        },
        {
            name: "spellbook/attribute/evocation_spell_power",
            type: "apotheosis:attribute",
            attribute: "irons_spellbooks:evocation_spell_power",
            operation: "MULTIPLY_BASE",
            values: {
                common: {
                    min: 0.1,
                    steps: 1,
                    step: 0.0,
                },
                uncommon: {
                    min: 0.2,
                    steps: 1,
                    step: 0.0,
                },
                rare: {
                    min: 0.3,
                    steps: 1,
                    step: 0.0,
                },
                epic: {
                    min: 0.4,
                    steps: 1,
                    step: 0.0,
                },
                mythic: {
                    min: 0.5,
                    steps: 1,
                    step: 0.0,
                },
                ancient: {
                    min: 0.3,
                    steps: 1,
                    step: 0.0,
                },
            },
            types: ["curios:spellbook"],
        },
        {
            name: "spellbook/attribute/fire_spell_power",
            type: "apotheosis:attribute",
            attribute: "irons_spellbooks:fire_spell_power",
            operation: "MULTIPLY_BASE",
            values: {
                common: {
                    min: 0.1,
                    steps: 1,
                    step: 0.0,
                },
                uncommon: {
                    min: 0.2,
                    steps: 1,
                    step: 0.0,
                },
                rare: {
                    min: 0.3,
                    steps: 1,
                    step: 0.0,
                },
                epic: {
                    min: 0.4,
                    steps: 1,
                    step: 0.0,
                },
                mythic: {
                    min: 0.5,
                    steps: 1,
                    step: 0.0,
                },
                ancient: {
                    min: 0.3,
                    steps: 1,
                    step: 0.0,
                },
            },
            types: ["curios:spellbook"],
        },
        {
            name: "spellbook/attribute/holy_spell_power",
            type: "apotheosis:attribute",
            attribute: "irons_spellbooks:holy_spell_power",
            operation: "MULTIPLY_BASE",
            values: {
                common: {
                    min: 0.1,
                    steps: 1,
                    step: 0.0,
                },
                uncommon: {
                    min: 0.2,
                    steps: 1,
                    step: 0.0,
                },
                rare: {
                    min: 0.3,
                    steps: 1,
                    step: 0.0,
                },
                epic: {
                    min: 0.4,
                    steps: 1,
                    step: 0.0,
                },
                mythic: {
                    min: 0.5,
                    steps: 1,
                    step: 0.0,
                },
                ancient: {
                    min: 0.3,
                    steps: 1,
                    step: 0.0,
                },
            },
            types: ["curios:spellbook"],
        },
        {
            name: "spellbook/attribute/ice_spell_power",
            type: "apotheosis:attribute",
            attribute: "irons_spellbooks:ice_spell_power",
            operation: "MULTIPLY_BASE",
            values: {
                common: {
                    min: 0.1,
                    steps: 1,
                    step: 0.0,
                },
                uncommon: {
                    min: 0.2,
                    steps: 1,
                    step: 0.0,
                },
                rare: {
                    min: 0.3,
                    steps: 1,
                    step: 0.0,
                },
                epic: {
                    min: 0.4,
                    steps: 1,
                    step: 0.0,
                },
                mythic: {
                    min: 0.5,
                    steps: 1,
                    step: 0.0,
                },
                ancient: {
                    min: 0.3,
                    steps: 1,
                    step: 0.0,
                },
            },
            types: ["curios:spellbook"],
        },
        {
            name: "spellbook/attribute/lightning_spell_power",
            type: "apotheosis:attribute",
            attribute: "irons_spellbooks:lightning_spell_power",
            operation: "MULTIPLY_BASE",
            values: {
                common: {
                    min: 0.1,
                    steps: 1,
                    step: 0.0,
                },
                uncommon: {
                    min: 0.2,
                    steps: 1,
                    step: 0.0,
                },
                rare: {
                    min: 0.3,
                    steps: 1,
                    step: 0.0,
                },
                epic: {
                    min: 0.4,
                    steps: 1,
                    step: 0.0,
                },
                mythic: {
                    min: 0.5,
                    steps: 1,
                    step: 0.0,
                },
                ancient: {
                    min: 0.3,
                    steps: 1,
                    step: 0.0,
                },
            },
            types: ["curios:spellbook"],
        },
        {
            name: "spellbook/attribute/mana",
            type: "apotheosis:attribute",
            attribute: "irons_spellbooks:max_mana",
            operation: "ADDITION",
            values: {
                common: {
                    min: 50,
                    steps: 1,
                    step: 5,
                },
                uncommon: {
                    min: 60,
                    steps: 1,
                    step: 5,
                },
                rare: {
                    min: 70,
                    steps: 1,
                    step: 5,
                },
                epic: {
                    min: 80,
                    steps: 1,
                    step: 5,
                },
                mythic: {
                    min: 100,
                    steps: 1,
                    step: 5,
                },
                ancient: {
                    min: 75,
                    steps: 1,
                    step: 5,
                },
            },
            types: ["curios:spellbook"],
        },
        {
            name: "spellbook/attribute/nature_spell_power",
            type: "apotheosis:attribute",
            attribute: "irons_spellbooks:nature_spell_power",
            operation: "MULTIPLY_BASE",
            values: {
                common: {
                    min: 0.1,
                    steps: 1,
                    step: 0.0,
                },
                uncommon: {
                    min: 0.2,
                    steps: 1,
                    step: 0.0,
                },
                rare: {
                    min: 0.3,
                    steps: 1,
                    step: 0.0,
                },
                epic: {
                    min: 0.4,
                    steps: 1,
                    step: 0.0,
                },
                mythic: {
                    min: 0.5,
                    steps: 1,
                    step: 0.0,
                },
                ancient: {
                    min: 0.3,
                    steps: 1,
                    step: 0.0,
                },
            },
            types: ["curios:spellbook"],
        },
    ];

    tweaks.forEach((tweak) => {
        event.addJson(`irons_spellbooks:affixes/${tweak.name}.json`, tweak);
    });
});
