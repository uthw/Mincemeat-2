ServerEvents.recipes((event) => {
    // Tree Oil: 100k
    // Creosote: 20k
    // Refined Fuel: 1.5m
    // Biodiesel: 680k

    let fuels = [
        // input, RF
        ["mekanismgenerators:bioethanol", 360000],
        ["immersiveengineering:plantoil", 100000],
        ["immersiveengineering:ethanol", 320000],
        ["pneumaticcraft:ethanol", 320000],
        ["createaddition:seed_oil", 120000],
        ["pneumaticcraft:vegetable_oil", 120000],
        ["thermal:creosote", 20000],
    ];

    fuels.forEach((fuel) => {
        event.recipes.thermal.compression_fuel(fuel[0]).energy(fuel[1]);
    });
});
