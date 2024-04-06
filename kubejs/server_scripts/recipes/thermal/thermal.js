ServerEvents.recipes((event) => {
    const materials = [
        "bronze",
        "electrum",
        "invar",
        "constantan",
        "signalum",
        "lumium",
        "enderium",
    ];

    materials.forEach((material) => {
        event.remove({
            input: "minecraft:fire_charge",
            output: `#forge:ingots/${material}`,
        });

        event.remove({
            type: "minecraft:crafting_shapeless",
            output: `#forge:dusts/${material}`,
        });
    });
});
