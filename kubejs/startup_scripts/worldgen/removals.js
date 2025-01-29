WorldgenEvents.remove((event) => {
    event.removeOres((props) => {
        // AllTheOres? Emendatus Enigmatica? Almost Unified? never met 'em

        // In terms of modded ore gen, Mekanism and Eidolon add most things. Currently Railcraft Sulfur is on but this might change.
        // Keep this in mind once IE, IaF, and Thermal are added
        // If you're not me, this file might give you insight as to mods that used to be in Mincemeat 2 but were removed for varying reasons

        props.blocks = [
            "railcraft:lead_ore",
            "railcraft:deepslate_lead_ore",
            "railcraft:silver_ore",
            "railcraft:deepslate_silver_ore",
            "railcraft:tin_ore",
            "railcraft:deepslate_tin_ore",
            "railcraft:zinc_ore",
            "railcraft:deepslate_zinc_ore",
            "railcraft:tin_ore",
            "railcraft:deepslate_tin_ore",
            "railcraft:nickel_ore",
            "railcraft:deepslate_nickel_ore",
            "railcraft:sulfur_ore",
            "railcraft:deepslate_sulfur_ore",

            "galosphere:silver_ore",
            "galosphere:deepslate_silver_ore",

            "embers:lead_ore",
            "embers:deepslate_lead_ore",
            "embers:silver_ore",
            "embers:deepslate_silver_ore",

            "iceandfire:silver_ore",
            "iceandfire:deepslate_silver_ore",

            "scalinghealth:heart_crystal_ore",
            "scalinghealth:deepslate_heart_crystal_ore",
            "scalinghealth:power_crystal_ore",
            "scalinghealth:deepslate_power_crystal_ore",

            "epicsamurai:silver_ore",
            "epicsamurai:deepslate_silver_ore",

            "thoriumreactors:manganese_ore",
            "thoriumreactors:deepslate_manganese_ore",
            "thoriumreactors:chromite_ore",
            "thoriumreactors:deepslate_chromite_ore",
            "thoriumreactors:molybdenum_ore",
            "thoriumreactors:deepslate_molybdenum_ore",
            "thoriumreactors:titanic_iron_ore",
            "thoriumreactors:deepslate_titanic_iron_ore",
            "thoriumreactors:pyrochlore_ore",
            "thoriumreactors:deepslate_pyrochlore_ore",
            "thoriumreactors:uranium_ore",
            "thoriumreactors:deepslate_uranium_ore",
            "thoriumreactors:graphite_ore",
            "thoriumreactors:deepslate_graphite_ore",
            "thoriumreactors:fluorite_ore",
            "thoriumreactors:deepslate_fluorite_ore",
            "thoriumreactors:thorium_block",

            "thermal:lead_ore",
            "thermal:deepslate_lead_ore",
            "thermal:silver_ore",
            "thermal:deepslate_silver_ore",
            // "eidolon:lead_ore",
            // "eidolon:deepslate_lead_ore",
            // "thermal:tin_ore",
            // "thermal:deepslate_tin_ore",

            "create_new_age:thorium_ore",
            "create_new_age:deepslate_thorium_ore",

            "rftoolsbase:dimensionalshard_overworld",
            "rftoolsbase:dimensionalshard_nether",
            "rftoolsbase:dimensionalshard_end",

            "natures_spirit:willow_log",
            "natures_spirit:willow_leaves",

            "occultism:silver_ore",
            "occultism:silver_ore_deepslate",

            "actuallyadditions:black_quartz_ore",
        ];
    });

    event.removeOres((props) => {
        props.biomes = /aether:skyroot_.*/;
        // ["aether:skyroot_forest", "aether:skyroot_grove", "aether:skyroot_meadow", "aether:skyroot_woodland"];
        props.blocks = ["minecraft:gravel"];
    });
});
