ServerEvents.recipes((event) => {
    const recipes = [
        // {
        //     output: "quarryplus:workbenchplus",
        //     inputs: ["ABBBA", "BCDCB", "EFAFE", "BCDCB", "GGGGG"],
        //     keys: {
        //         A: "minecraft:repeater",
        //         B: "#forge:storage_blocks/aluminum",
        //         C: "#forge:storage_blocks/regalium",
        //         D: "immersiveengineering:heavy_engineering",
        //         E: "thermal:flux_drill",
        //         F: "immersiveengineering:craftingtable",
        //         G: "create:polished_rose_quartz",
        //     },
        // },
        {
            output: "mekanism:basic_universal_cable",
            inputs: ["ABA"],
            keys: {
                A: "#forge:plates/iron",
                B: "thermal:cured_rubber",
            },
        },
        {
            output: "mekanism:basic_mechanical_pipe",
            inputs: ["ABA"],
            keys: {
                A: "#forge:plates/copper",
                B: "#enderio:clear_glass",
            },
        },
        {
            output: "mekanism:basic_pressurized_tube",
            inputs: ["ABA"],
            keys: {
                A: "#forge:plates/copper",
                B: "create:polished_rose_quartz",
            },
        },
        {
            output: "mekanism:basic_logistical_transporter",
            inputs: ["ABA"],
            keys: {
                A: "#forge:plates/steel",
                B: "#forge:gears/gold",
            },
        },
        {
            output: "mekanism:logistical_sorter",
            inputs: ["ABA", "BCB", "DDD"],
            keys: {
                A: "#forge:ingots/compressed_iron",
                B: "mekanism:alloy_infused",
                C: "mekanism:basic_control_circuit",
                D: "create:filter",
            },
        },
        {
            output: "integrateddynamics:mechanical_drying_basin",
            inputs: [" A ", "BCB", " A "],
            keys: {
                A: "#forge:wires/copper",
                B: "integrateddynamics:energy_battery",
                C: "integrateddynamics:drying_basin",
            },
        },
        {
            output: "integrateddynamics:mechanical_squeezer",
            inputs: [" A ", "BCB", " D "],
            keys: {
                A: "minecraft:diamond",
                B: "integrateddynamics:energy_battery",
                C: "integrateddynamics:squeezer",
                D: "#forge:wires/copper",
            },
        },
        {
            output: "mekanism:digital_miner",
            inputs: [" ABCBA", "  DED ", "FGHIHG"],
            keys: {
                A: "mekanism:alloy_atomic",
                B: "createaddition:gold_wire",
                C: "thermal:rf_potato",
                D: "mekanism:digital_sorter",
                E: "mekanism:robit",
                F: "mekanism:teleportation_core",
                G: "create_new_age:overcharged_diamond",
                H: "mekanism:teleportation_core",
                I: "mekanism:steel_casing",
            },
        },
        // {
        //     output: "powersuits:tinkertable",
        //     inputs: [" A ", "BCB", "CDC", "BEB"],
        //     keys: {
        //         A: "alexscaves:uranium",
        //         B: "refinedstorage:machine_casing",
        //         C: "architects_palette:nether_brass_ingot",
        //         D: "alexscaves:fissile_core",
        //         E: "littlelogistics:transmitter_component",
        //     },
        // },
        {
            output: "4x fluxnetworks:flux_core",
            inputs: [" A ", "ABA", " A "],
            keys: {
                A: "enderio:dark_steel_ingot",
                B: "fluxnetworks:flux_dust",
            },
        },
    ];

    recipes.forEach((recipe) => {
        event.recipes.create.mechanical_crafting(
            recipe.output,
            recipe.inputs,
            recipe.keys
        );
    });
});
