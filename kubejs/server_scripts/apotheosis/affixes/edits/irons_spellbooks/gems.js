// increases the buffs from iron's spellbooks gems, but makes them rarer since not everyone will be using the modification
// variant key is the same as the file name

ServerEvents.highPriorityData((event) => {
    let tweaks = [
        {
            variant: "blood",
            weight: 2, // 5
            quality: 0,
            dimensions: [],
            bonuses: [
                {
                    type: "apotheosis:attribute",
                    gem_class: {
                        key: "anything",
                        types: [
                            "helmet",
                            "chestplate",
                            "leggings",
                            "boots",
                            "curios:spellbook",
                        ],
                    },
                    attribute: "irons_spellbooks:blood_spell_power",
                    operation: "MULTIPLY_TOTAL",
                    values: {
                        common: {
                            min: 0.1,
                            steps: 1,
                            step: 0,
                        },
                        uncommon: {
                            min: 0.2,
                            steps: 1,
                            step: 0,
                        },
                        rare: {
                            min: 0.3,
                            steps: 1,
                            step: 0,
                        },
                        epic: {
                            min: 0.4,
                            steps: 1,
                            step: 0,
                        },
                        mythic: {
                            min: 0.5,
                            steps: 1,
                            step: 0,
                        },
                        ancient: {
                            min: 0.15,
                            steps: 1,
                            step: 0,
                        },
                    },
                },
            ],
        },
        {
            variant: "cast_time",
            weight: 2,
            quality: 0,
            dimensions: [],
            bonuses: [
                {
                    type: "apotheosis:attribute",
                    gem_class: {
                        key: "anything",
                        types: [
                            "helmet",
                            "chestplate",
                            "leggings",
                            "boots",
                            "curios:spellbook",
                        ],
                    },
                    attribute: "irons_spellbooks:cast_time_reduction",
                    operation: "MULTIPLY_TOTAL",
                    values: {
                        common: {
                            min: 0.1,
                            steps: 1,
                            step: 0,
                        },
                        uncommon: {
                            min: 0.2,
                            steps: 1,
                            step: 0,
                        },
                        rare: {
                            min: 0.3,
                            steps: 1,
                            step: 0,
                        },
                        epic: {
                            min: 0.4,
                            steps: 1,
                            step: 0,
                        },
                        mythic: {
                            min: 0.5,
                            steps: 1,
                            step: 0,
                        },
                        ancient: {
                            min: 0.15,
                            steps: 1,
                            step: 0,
                        },
                    },
                },
            ],
        },
        {
            variant: "cooldown",
            weight: 2,
            quality: 0,
            dimensions: [],
            bonuses: [
                {
                    type: "apotheosis:attribute",
                    gem_class: {
                        key: "anything",
                        types: [
                            "helmet",
                            "chestplate",
                            "leggings",
                            "boots",
                            "curios:spellbook",
                        ],
                    },
                    attribute: "irons_spellbooks:cooldown_reduction",
                    operation: "MULTIPLY_TOTAL",
                    values: {
                        common: {
                            min: 0.1,
                            steps: 1,
                            step: 0,
                        },
                        uncommon: {
                            min: 0.2,
                            steps: 1,
                            step: 0,
                        },
                        rare: {
                            min: 0.3,
                            steps: 1,
                            step: 0,
                        },
                        epic: {
                            min: 0.4,
                            steps: 1,
                            step: 0,
                        },
                        mythic: {
                            min: 0.5,
                            steps: 1,
                            step: 0,
                        },
                        ancient: {
                            min: 0.15,
                            steps: 1,
                            step: 0,
                        },
                    },
                },
            ],
        },
        {
            variant: "ender",
            weight: 2,
            quality: 0,
            dimensions: [],
            bonuses: [
                {
                    type: "apotheosis:attribute",
                    gem_class: {
                        key: "anything",
                        types: [
                            "helmet",
                            "chestplate",
                            "leggings",
                            "boots",
                            "curios:spellbook",
                        ],
                    },
                    attribute: "irons_spellbooks:ender_spell_power",
                    operation: "MULTIPLY_TOTAL",
                    values: {
                        common: {
                            min: 0.1,
                            steps: 1,
                            step: 0,
                        },
                        uncommon: {
                            min: 0.2,
                            steps: 1,
                            step: 0,
                        },
                        rare: {
                            min: 0.3,
                            steps: 1,
                            step: 0,
                        },
                        epic: {
                            min: 0.4,
                            steps: 1,
                            step: 0,
                        },
                        mythic: {
                            min: 0.5,
                            steps: 1,
                            step: 0,
                        },
                        ancient: {
                            min: 0.15,
                            steps: 1,
                            step: 0,
                        },
                    },
                },
            ],
        },
        {
            variant: "evocation",
            weight: 2,
            quality: 0,
            dimensions: [],
            bonuses: [
                {
                    type: "apotheosis:attribute",
                    gem_class: {
                        key: "anything",
                        types: [
                            "helmet",
                            "chestplate",
                            "leggings",
                            "boots",
                            "curios:spellbook",
                        ],
                    },
                    attribute: "irons_spellbooks:evocation_spell_power",
                    operation: "MULTIPLY_TOTAL",
                    values: {
                        common: {
                            min: 0.1,
                            steps: 1,
                            step: 0,
                        },
                        uncommon: {
                            min: 0.2,
                            steps: 1,
                            step: 0,
                        },
                        rare: {
                            min: 0.3,
                            steps: 1,
                            step: 0,
                        },
                        epic: {
                            min: 0.4,
                            steps: 1,
                            step: 0,
                        },
                        mythic: {
                            min: 0.5,
                            steps: 1,
                            step: 0,
                        },
                        ancient: {
                            min: 0.15,
                            steps: 1,
                            step: 0,
                        },
                    },
                },
            ],
        },
        {
            variant: "fire",
            weight: 2,
            quality: 0,
            dimensions: [],
            bonuses: [
                {
                    type: "apotheosis:attribute",
                    gem_class: {
                        key: "anything",
                        types: [
                            "helmet",
                            "chestplate",
                            "leggings",
                            "boots",
                            "curios:spellbook",
                        ],
                    },
                    attribute: "irons_spellbooks:fire_spell_power",
                    operation: "MULTIPLY_TOTAL",
                    values: {
                        common: {
                            min: 0.1,
                            steps: 1,
                            step: 0,
                        },
                        uncommon: {
                            min: 0.2,
                            steps: 1,
                            step: 0,
                        },
                        rare: {
                            min: 0.3,
                            steps: 1,
                            step: 0,
                        },
                        epic: {
                            min: 0.4,
                            steps: 1,
                            step: 0,
                        },
                        mythic: {
                            min: 0.5,
                            steps: 1,
                            step: 0,
                        },
                        ancient: {
                            min: 0.15,
                            steps: 1,
                            step: 0,
                        },
                    },
                },
            ],
        },
        {
            variant: "holy",
            weight: 2,
            quality: 0,
            dimensions: [],
            bonuses: [
                {
                    type: "apotheosis:attribute",
                    gem_class: {
                        key: "anything",
                        types: [
                            "helmet",
                            "chestplate",
                            "leggings",
                            "boots",
                            "curios:spellbook",
                        ],
                    },
                    attribute: "irons_spellbooks:holy_spell_power",
                    operation: "MULTIPLY_TOTAL",
                    values: {
                        common: {
                            min: 0.1,
                            steps: 1,
                            step: 0,
                        },
                        uncommon: {
                            min: 0.2,
                            steps: 1,
                            step: 0,
                        },
                        rare: {
                            min: 0.3,
                            steps: 1,
                            step: 0,
                        },
                        epic: {
                            min: 0.4,
                            steps: 1,
                            step: 0,
                        },
                        mythic: {
                            min: 0.5,
                            steps: 1,
                            step: 0,
                        },
                        ancient: {
                            min: 0.15,
                            steps: 1,
                            step: 0,
                        },
                    },
                },
            ],
        },
        {
            variant: "ice",
            weight: 2,
            quality: 0,
            dimensions: [],
            bonuses: [
                {
                    type: "apotheosis:attribute",
                    gem_class: {
                        key: "anything",
                        types: [
                            "helmet",
                            "chestplate",
                            "leggings",
                            "boots",
                            "curios:spellbook",
                        ],
                    },
                    attribute: "irons_spellbooks:ice_spell_power",
                    operation: "MULTIPLY_TOTAL",
                    values: {
                        common: {
                            min: 0.1,
                            steps: 1,
                            step: 0,
                        },
                        uncommon: {
                            min: 0.2,
                            steps: 1,
                            step: 0,
                        },
                        rare: {
                            min: 0.3,
                            steps: 1,
                            step: 0,
                        },
                        epic: {
                            min: 0.4,
                            steps: 1,
                            step: 0,
                        },
                        mythic: {
                            min: 0.5,
                            steps: 1,
                            step: 0,
                        },
                        ancient: {
                            min: 0.15,
                            steps: 1,
                            step: 0,
                        },
                    },
                },
            ],
        },
        {
            variant: "intelligent",
            weight: 3,
            quality: 0,
            dimensions: [],
            bonuses: [
                {
                    type: "apotheosis:attribute",
                    gem_class: {
                        key: "anything",
                        types: [
                            "helmet",
                            "chestplate",
                            "leggings",
                            "boots",
                            "curios:spellbook",
                        ],
                    },
                    attribute: "irons_spellbooks:max_mana",
                    operation: "ADDITION",
                    values: {
                        common: {
                            min: 20,
                            steps: 10,
                            step: 1,
                        },
                        uncommon: {
                            min: 30,
                            steps: 10,
                            step: 1,
                        },
                        rare: {
                            min: 40,
                            steps: 10,
                            step: 1,
                        },
                        epic: {
                            min: 50,
                            steps: 10,
                            step: 1,
                        },
                        mythic: {
                            min: 60,
                            steps: 10,
                            step: 1,
                        },
                        ancient: {
                            min: 50,
                            steps: 10,
                            step: 1,
                        },
                    },
                },
            ],
        },
        {
            variant: "lightning",
            weight: 2,
            quality: 0,
            dimensions: [],
            bonuses: [
                {
                    type: "apotheosis:attribute",
                    gem_class: {
                        key: "anything",
                        types: [
                            "helmet",
                            "chestplate",
                            "leggings",
                            "boots",
                            "curios:spellbook",
                        ],
                    },
                    attribute: "irons_spellbooks:lightning_spell_power",
                    operation: "MULTIPLY_TOTAL",
                    values: {
                        common: {
                            min: 0.1,
                            steps: 1,
                            step: 0,
                        },
                        uncommon: {
                            min: 0.2,
                            steps: 1,
                            step: 0,
                        },
                        rare: {
                            min: 0.3,
                            steps: 1,
                            step: 0,
                        },
                        epic: {
                            min: 0.4,
                            steps: 1,
                            step: 0,
                        },
                        mythic: {
                            min: 0.5,
                            steps: 1,
                            step: 0,
                        },
                        ancient: {
                            min: 0.15,
                            steps: 1,
                            step: 0,
                        },
                    },
                },
            ],
        },
        {
            variant: "nature",
            weight: 2,
            quality: 0,
            dimensions: [],
            bonuses: [
                {
                    type: "apotheosis:attribute",
                    gem_class: {
                        key: "anything",
                        types: [
                            "helmet",
                            "chestplate",
                            "leggings",
                            "boots",
                            "curios:spellbook",
                        ],
                    },
                    attribute: "irons_spellbooks:nature_spell_power",
                    operation: "MULTIPLY_TOTAL",
                    values: {
                        common: {
                            min: 0.1,
                            steps: 1,
                            step: 0,
                        },
                        uncommon: {
                            min: 0.2,
                            steps: 1,
                            step: 0,
                        },
                        rare: {
                            min: 0.3,
                            steps: 1,
                            step: 0,
                        },
                        epic: {
                            min: 0.4,
                            steps: 1,
                            step: 0,
                        },
                        mythic: {
                            min: 0.5,
                            steps: 1,
                            step: 0,
                        },
                        ancient: {
                            min: 0.15,
                            steps: 1,
                            step: 0,
                        },
                    },
                },
            ],
        },
        {
            variant: "spell_resist",
            weight: 2, // 0?
            quality: 0,
            dimensions: [],
            bonuses: [
                {
                    type: "minecraft:invalid_type",
                    // nothing below this is required just here for archival
                    gem_class: {
                        key: "armor",
                        types: ["helmet", "chestplate", "leggings", "boots"],
                    },
                    attribute: "irons_spellbooks:spell_resist",
                    operation: "MULTIPLY_TOTAL",
                    values: {
                        common: {
                            min: 0.01,
                            steps: 1,
                            step: 0,
                        },
                        uncommon: {
                            min: 0.03,
                            steps: 1,
                            step: 0,
                        },
                        rare: {
                            min: 0.05,
                            steps: 1,
                            step: 0,
                        },
                        epic: {
                            min: 0.07,
                            steps: 1,
                            step: 0,
                        },
                        mythic: {
                            min: 0.1,
                            steps: 1,
                            step: 0,
                        },
                        ancient: {
                            min: 0.15,
                            steps: 1,
                            step: 0,
                        },
                    },
                },
            ],
        },
        {
            variant: "summoning",
            weight: 2,
            quality: 0,
            dimensions: [],
            bonuses: [
                {
                    type: "apotheosis:attribute",
                    gem_class: {
                        key: "anything",
                        types: [
                            "helmet",
                            "chestplate",
                            "leggings",
                            "boots",
                            "curios:spellbook",
                        ],
                    },
                    attribute: "irons_spellbooks:summon_damage",
                    operation: "MULTIPLY_TOTAL",
                    values: {
                        common: {
                            min: 0.1,
                            steps: 1,
                            step: 0,
                        },
                        uncommon: {
                            min: 0.2,
                            steps: 1,
                            step: 0,
                        },
                        rare: {
                            min: 0.3,
                            steps: 1,
                            step: 0,
                        },
                        epic: {
                            min: 0.4,
                            steps: 1,
                            step: 0,
                        },
                        mythic: {
                            min: 0.5,
                            steps: 1,
                            step: 0,
                        },
                        ancient: {
                            min: 0.15,
                            steps: 1,
                            step: 0,
                        },
                    },
                },
            ],
        },
    ];

    tweaks.forEach((tweak) => {
        event.addJson(`irons_spellbooks:gems/${tweak.variant}.json`, tweak);
    });
});
