ServerEvents.recipes((event) => {
    // event.shaped("2x tetra:magmatic_cell", ["AAA", "ABA", "AAA"], {
    //     A: "create:andesite_alloy",
    //     B: "thermal:blitz_powder",
    // });

    event.shaped("2x tetra:combustion_chamber", ["ABA", "ACA", "ABA"], {
        A: "create:andesite_alloy",
        B: "minecraft:heavy_weighted_pressure_plate",
        C: "thermal:blitz_powder",
    });

    event.shaped("tetra:planar_stabilizer", [" A ", "ABA", " A "], {
        A: "thermal:invar_plate",
        B: "enigmaticlegacy:earth_heart",
    });

    event.shaped("tetra:vent_plate", ["AA ", "   ", "   "], {
        A: "thermal:invar_plate",
    });

    event.shaped("tetra:forged_workbench", ["ABA", " C ", "AAA"], {
        A: "minecraft:polished_deepslate",
        B: "#forge:ingots/invar",
        C: "minecraft:smithing_table",
    });

    event.shaped("tetra:hammer_base", [" A ", "ABA", " C "], {
        A: "minecraft:polished_deepslate",
        B: "create:mechanical_press",
        C: "create:iron_sheet",
    });

    event.replaceInput(
        { output: "tetra:modular_toolbelt" },
        "minecraft:string",
        "#forge:rope"
    );

    event.shaped("tetra:thermal_cell", ["  A", " B ", "C  "], {
        A: "minecraft:gunpowder",
        B: "create:shaft",
        C: "#forge:ingots/silver",
    });
});
