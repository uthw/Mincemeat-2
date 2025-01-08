// test

ServerEvents.tags("enchantment", (event) => {
    let adds = [
        ["minecraft:sword_or_axe", "tetra:modular_single"],
        ["minecraft:sword_or_axe", "tetra:modular_sword"],
        ["minecraft:sword_or_axe", "tetra:modular_polearm"],
        ["minecraft:digger", "tetra:modular_double"],
    ];

    adds.forEach((add) => {
        event.add(add[0], add[1]);
    });
});
