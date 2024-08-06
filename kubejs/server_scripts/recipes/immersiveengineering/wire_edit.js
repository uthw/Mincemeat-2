ServerEvents.recipes((event) => {
    let wireMaterials = ["copper", "electrum", "aluminum", "steel", "lead"];

    wireMaterials.forEach((material) => {
        event.remove({
            output: `immersiveengineering:wire_${material}`,
            input: "immersiveengineering:wirecutter",
        });

        // Add a Create Crafts&additions rolling recipe for each of these wires.
        event.custom({
            type: "createaddition:rolling",
            input: {
                tag: `forge:plates/${material}`,
            },
            result: {
                item: `immersiveengineering:wire_${material}`,
                count: 2,
            },
        });
    });
});
