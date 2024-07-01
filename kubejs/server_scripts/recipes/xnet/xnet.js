ServerEvents.recipes((event) => {
    let colors = ["red", "green", "blue", "yellow", "routing"];
    // colors.forEach((item) => {
    //     event.remove({ output: `xnet:advanced_connector_${item}` });
    //     event.replaceOutput(
    //         `xnet:connector_${item}`,
    //         `xnet:advanced_connector_${item}`
    //     );

    //     event.replaceInput(
    //         `xnet:connector_${item}`,
    //         `xnet:advanced_connector_${item}`
    //     );
    // });

    event.shaped("xnet:controller", ["ABA", "CDC", "EFE"], {
        A: "#thermal:rockwool",
        B: "minecraft:comparator",
        C: "#forge:dusts/redstone",
        D: "thermal:machine_frame",
        E: "#forge:ingots/electrum",
        F: "create:precision_mechanism",
    });
});
