ServerEvents.recipes((event) => {
    event.remove({ output: "rangedpumps:pump" });
    event.shaped("rangedpumps:pump", ["ABA", "ACA", "DED"], {
        A: "prettypipes:pipe",
        B: "forbidden_arcanus:edelwood_bucket",
        C: "immersiveengineering:fluid_pump",
        D: "#forge:obsidian",
        E: "mekanismtools:bronze_pickaxe",
    });
});
