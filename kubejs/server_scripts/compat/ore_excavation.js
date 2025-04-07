// randomly generate salt from https://misode.github.io/worldgen/structure-set/

ServerEvents.recipes((event) => {
    // vein generation
    let oregen = [
        {
            desc: "Raw Osmium",
            // item can be an array that has Item.of and then .withChance if desired
            item: "mekanism:raw_osmium",
            minDist: 64,
            avgDist: 192,
            salt: 486447500,
            id: "mince_osmium",
            ticks: 120, // 32 rpm
        },
        // {
        //     desc: "Raw Tin",
        //     item: "mekanism:raw_tin",
        //     minDist: 48,
        //     avgDist: 128,
        //     salt: 337710759,
        //     id: "mince_mekanism_tin",
        //     ticks: 80,
        // },
        {
            desc: "Raw Lead",
            item: "thermal:raw_lead",
            minDist: 48,
            avgDist: 128,
            salt: 1782377640,
            id: "mince_thermal_lead",
            ticks: 80,
        },
        {
            desc: "Raw Tin",
            item: "thermal:raw_tin",
            minDist: 48,
            avgDist: 128,
            salt: 950174705,
            id: "mince_thermal_tin",
            ticks: 60,
        },
        {
            desc: "Raw Silver",
            item: "thermal:raw_silver",
            minDist: 64,
            avgDist: 192,
            salt: 454570653,
            id: "mince_thermal_silver",
            ticks: 100,
        },
        {
            desc: "Raw Nickel",
            item: "thermal:raw_nickel",
            minDist: 48,
            avgDist: 192,
            salt: 1769199913,
            id: "mince_thermal_nickel",
            ticks: 80,
        },
        {
            desc: "Apatite",
            item: "thermal:apatite",
            minDist: 64,
            avgDist: 256,
            salt: 668493705,
            id: "mince_apatite",
            ticks: 120,
        },
        {
            desc: "Cinnabar",
            item: "thermal:cinnabar",
            minDist: 64,
            avgDist: 256,
            salt: 1496263260,
            id: "mince_cinnabar",
            ticks: 120,
        },
        {
            desc: "Niter",
            item: "thermal:niter",
            minDist: 96,
            avgDist: 384,
            salt: 849301280,
            id: "mince_niter",
            ticks: 140,
        },
        {
            desc: "Sulfur",
            item: "thermal:sulfur",
            minDist: 96,
            avgDist: 384,
            salt: 1702471854,
            id: "mince_sulfur",
            ticks: 140,
        },
        {
            desc: "Arcane Crystal",
            item: "forbidden_arcanus:arcane_crystal",
            minDist: 64,
            avgDist: 256,
            salt: 451233029,
            id: "mince_arcane_crystal",
            ticks: 180,
        },
        // blue skies
        {
            desc: "Raw Aquite",
            item: "blue_skies:raw_aquite",
            minDist: 16,
            avgDist: 32,
            salt: 1162240149,
            id: "mince_aquite_everbright",
            ticks: 80,
            biomeWhitelist: "blue_skies:everbright",
        },
        {
            desc: "Raw Aquite",
            item: "blue_skies:raw_aquite",
            minDist: 16,
            avgDist: 32,
            salt: 1162240149,
            id: "mince_aquite_everdawn",
            ticks: 80,
            biomeWhitelist: "blue_skies:everdawn",
        },
        {
            desc: "Raw Charoite",
            item: "blue_skies:raw_charoite",
            minDist: 32,
            avgDist: 64,
            salt: 1604028714,
            id: "mince_charoite_everbright",
            ticks: 100,
            biomeWhitelist: "blue_skies:everbright",
        },
        {
            desc: "Raw Charoite",
            item: "blue_skies:raw_charoite",
            minDist: 32,
            avgDist: 64,
            salt: 1604028714,
            id: "mince_charoite_everdawn",
            ticks: 100,
            biomeWhitelist: "blue_skies:everdawn",
        },
        {
            desc: "Raw Falsite",
            item: "blue_skies:raw_falsite",
            minDist: 8,
            avgDist: 64,
            salt: 1930323080,
            id: "mince_falsite_everbright",
            ticks: 60,
            biomeWhitelist: "blue_skies:everbright",
        },
        {
            desc: "Raw Ventium",
            item: "blue_skies:raw_ventium",
            minDist: 8,
            avgDist: 64,
            salt: 1930323082,
            id: "mince_ventium_everbright",
            ticks: 60,
            biomeWhitelist: "blue_skies:everbright",
        },
        {
            desc: "Raw Horizonite",
            item: "blue_skies:raw_horizonite",
            minDist: 8,
            avgDist: 32,
            salt: 1426465173,
            id: "mince_horizonite_everdawn",
            ticks: 80,
            biomeWhitelist: "blue_skies:everdawn",
        },
        {
            desc: "Moonstone Shard",
            item: "blue_skies:moonstone_shard",
            minDist: 12,
            avgDist: 32,
            salt: 469267163,
            id: "mince_moonstone_everdawn",
            ticks: 60,
            biomeWhitelist: "blue_skies:everdawn",
        },
        {
            desc: "Moonstone Shard",
            item: "blue_skies:moonstone_shard",
            minDist: 12,
            avgDist: 32,
            salt: 469267163,
            id: "mince_moonstone_everbright",
            ticks: 60,
            biomeWhitelist: "blue_skies:everbright",
        },
        {
            desc: "Pyrope Gemstone",
            item: "blue_skies:pyrope_gem",
            minDist: 8,
            avgDist: 32,
            salt: 377423652,
            id: "mince_pyrope_everdawn",
            ticks: 100,
            biomeWhitelist: "blue_skies:everdawn",
        },
        {
            desc: "Pyrope Gemstone",
            item: "blue_skies:pyrope_gem",
            minDist: 8,
            avgDist: 32,
            salt: 377423652,
            id: "mince_pyrope_everbright",
            ticks: 100,
            biomeWhitelist: "blue_skies:everbright",
        },
        {
            desc: "Diopside Gemstone",
            item: "blue_skies:diopside_gem",
            minDist: 16,
            avgDist: 48,
            // give me a different salt from all the others
            salt: 302377016,
            id: "mince_diopside_everbright",
            ticks: 100,
            biomeWhitelist: "blue_skies:everbright",
        },
        {
            desc: "Diopside Gemstone",
            item: "blue_skies:diopside_gem",
            minDist: 16,
            avgDist: 48,
            salt: 203341848,
            id: "mince_diopside_everdawn",
            ticks: 100,
            biomeWhitelist: "blue_skies:everdawn",
        },
        // aether
        {
            desc: "Zanite Gemstone",
            item: "aether:zanite_gemstone",
            minDist: 16,
            avgDist: 32,
            salt: 168386836,
            id: "mince_zanite",
            ticks: 120,
            biomeWhitelist: "aether:is_aether",
        },
        {
            desc: "Raw Veridium",
            item: "aether_redux:raw_veridium",
            minDist: 16,
            avgDist: 32,
            salt: 1261633868,
            id: "mince_veridium",
            ticks: 140,
            biomeWhitelist: "aether:is_aether",
        },
        {
            desc: "Skyjade",
            item: "deep_aether:skyjade",
            minDist: 16,
            avgDist: 32,
            salt: 1752924399,
            id: "mince_skyjade",
            ticks: 80,
            biomeWhitelist: "aether:is_aether",
        },
        {
            desc: "Ambrosium Shard",
            item: "aether:ambrosium_shard",
            minDist: 8,
            avgDist: 32,
            salt: 1393667594,
            id: "mince_ambrosium",
            ticks: 100,
            biomeWhitelist: "aether:is_aether",
        },
        // {
        //     desc: "Cincinnasite",
        //     item: "betternether:cincinnasite",
        //     minDist: 16,
        //     avgDist: 64,
        //     salt: 1445890650,
        //     id: "mince_cincinnasite",
        //     ticks: 140,
        //     biomeWhitelist: "minecraft:is_nether",
        // },
        // {
        //     desc: "Nether Ruby",
        //     item: "betternether:nether_ruby",
        //     minDist: 16,
        //     avgDist: 64,
        //     salt: 1445890650,
        //     id: "mince_nether_ruby",
        //     ticks: 160,
        //     biomeWhitelist: "minecraft:is_nether",
        // },
    ];

    oregen.forEach((ore) => {
        // placing down veins
        let whitelist = ore.biomeWhitelist
            ? ore.biomeWhitelist
            : "forge:is_overworld";

        event.recipes.createoreexcavation
            .vein(ore.desc, ore.item)
            .placement(ore.avgDist, ore.minDist, ore.salt)
            .biomeWhitelist(whitelist)
            .id(`kubejs:${ore.id}`);

        // recipes for extraction
        event.recipes.createoreexcavation
            .drilling(ore.item, ore.id, ore.ticks)
            .id(`kubejs:drilling_${ore.id}`);
    });

    // only adding oil for now so im doing this the lazy way
    event.recipes.createoreexcavation
        .vein("Crude Oil", "pneumaticcraft:oil_bucket")
        .placement(256, 32, 64640185)
        .alwaysInfinite()
        .id("kubejs:mince_crude_oil")
        .biomeWhitelist("minecraft:is_overworld");
    event.recipes.createoreexcavation
        .extracting("minecraft:water 2000", "kubejs:mince_crude_oil", 10)
        .fluid("pneumaticcraft:oil 10")
        .id("kubejs:mince_crude_oil_extraction");
});
