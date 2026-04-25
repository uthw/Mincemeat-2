WorldgenEvents.remove((event) => {
    event.removeOres((props) => {
        // AllTheOres? Emendatus Enigmatica? Almost Unified? never met 'em
        // 2026 update: actually did meet Almost Unified and it's very good thank you

        // In terms of modded ore gen, Mekanism and Eidolon add most things. Currently Railcraft Sulfur is on but this might change.
        // Keep this in mind once IE, IaF, and Thermal are added
        // If you're not me, this file might give you insight as to mods that used to be in Mincemeat 2 but were removed for varying reasons

        props.blocks = [
            "iceandfire:silver_ore",
            "iceandfire:deepslate_silver_ore",

            "scalinghealth:heart_crystal_ore",
            "scalinghealth:deepslate_heart_crystal_ore",
            "scalinghealth:power_crystal_ore",
            "scalinghealth:deepslate_power_crystal_ore",

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
            "thermal:tin_ore",
            "thermal:deepslate_tin_ore",
            "thermal:apatite_ore",
            "thermal:deepslate_apatite_ore",
            "thermal:niter_ore",
            "thermal:deepslate_niter_ore",

            "create_new_age:thorium_ore",
            "create_new_age:deepslate_thorium_ore",

            "occultism:silver_ore",
            "occultism:silver_ore_deepslate",

            "actuallyadditions:black_quartz_ore",

            "celestisynth:lunar_ore",
            "celestisynth:zephyr_deposit",
            "celestisynth:wintereis",

            "galosphere:palladium_ore",
            "galosphere:deepslate_palladium_ore",

            "malum:brilliant_stone",
            "malum:brilliant_deepslate",
        ];
    });
});
