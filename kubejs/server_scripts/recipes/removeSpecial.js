ServerEvents.recipes((event) => {
    console.log("Removespecial.js");
    let toRemove = [
        // { output: "create:andesite_alloy", not: { type:""} },
        {
            output: "createaddition:modular_accumulator",
            input: "#createaddition:gold_wire",
        },
        {
            output: "mekanism:ingot_osmium",
            type: "minecraft:smelting",
        },
        {
            output: "mekanism:ingot_osmium",
            type: "minecraft:blasting",
        },
        {
            output: "mekanism:ingot_osmium",
            type: "jumbofurnace:jumbo_smelting",
        },
        {
            input: "#forge:tools/knives",
            type: "minecraft:crafting",
        },
        {
            input: "mekanism:dust_fluorite",
            type: "mekanism:combiner",
        },
        {
            output: "thermal:signalum_ingot",
            input: "minecraft:redstone",
        },
        {
            output: "thermal:lumium_ingot",
            input: "#forge:ingots/silver",
        },
        {
            output: "#forge:gears",
            input: "minecraft:iron_nugget",
        },
        {
            type: "minecraft:crafting_shapeless",
            input: "immersiveengineering:hammer",
        },
    ];

    toRemove.forEach((item) => {
        // console.log(`removing ${item.output} with ${item.type}`);
        event.remove(item);
    });
});
