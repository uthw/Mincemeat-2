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
        {
            output: "pneumaticcraft:fluid_mixer",
            inputs: [" A ", "BCB", "DBD"],
            keys: {
                A: "pneumaticcraft:pressure_tube",
                B: "pneumaticcraft:small_tank",
                C: "enderio:dark_bimetal_gear",
                D: "#forge:plates/electrum",
            },
        },
        {
            output: "pneumaticcraft:thermopneumatic_processing_plant",
            inputs: [" A ", "BEB", "CDC", "BBB"],
            keys: {
                A: "createaddition:connector",
                E: "littlelogistics:transmitter_component",
                B: "pneumaticcraft:reinforced_stone_slab",
                C: "pneumaticcraft:small_tank",
                D: "pneumaticcraft:pressure_tube",
            },
        },
        {
            output: "pneumaticcraft:minigun",
            inputs: ["A  ", "BC ", "E  "],
            keys: {
                A: "pneumaticcraft:air_canister",
                B: "minecraft:iron_block",
                C: "pneumaticcraft:cannon_barrel",
                E: "minecraft:lever",
            },
        },
        {
            output: "immersiveengineering:sample_drill",
            inputs: ["ABA", "ABA", "CDC", "DED", "CDC"],
            keys: {
                A: "immersiveengineering:steel_scaffolding_standard",
                B: "#forge:rods/steel",
                C: "#forge:ingots/copper",
                D: "#forge:ingots/lead",
                E: "immersiveengineering:wirecoil_copper",
            },
        },
        {
            output: "immersiveengineering:windmill",
            inputs: ["A  A  A", " A A A ", " AABAA ", " A A A ", "A  A  A"],
            keys: {
                A: "immersiveengineering:windmill_blade",
                B: "immersiveengineering:component_iron",
            },
        },
        {
            output: "immersiveengineering:capacitor_hv",
            inputs: ["ABA", "CDC", "AEA"],
            keys: {
                A: "#forge:ingots/steel",
                B: "immersiveengineering:component_steel",
                C: "#thermal:rockwool",
                D: "immersiveengineering:wirecoil_steel",
                E: "#forge:plates/steel",
            },
        },
        {
            output: "actuallyadditions:engineers_goggles_advanced",
            inputs: [" A ", "BCB", " A "],
            keys: {
                A: "actuallyadditions:empowered_redstone_crystal",
                B: "immersiveengineering:hemp_fabric",
                C: "actuallyadditions:engineers_goggles",
            },
        },
        {
            output: "actuallyadditions:lava_factory_controller",
            inputs: ["ABA", "CAC", "DED"],
            keys: {
                A: "actuallyadditions:advanced_coil",
                B: "actuallyadditions:iron_casing",
                C: "actuallyadditions:empowered_diamatine_crystal_block",
                D: "enderio:industrial_insulation_block",
                E: "forbidden_arcanus:edelwood_bucket",
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
