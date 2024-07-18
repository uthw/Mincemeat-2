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
            minDist: 96,
            avgDist: 384,
            salt: 451233029,
            id: "mince_arcane_crystal",
            ticks: 180,
        },
    ];

    oregen.forEach((ore) => {
        // placing down veins
        event.recipes.createoreexcavation
            .vein(ore.desc, ore.item)
            .placement(ore.avgDist, ore.minDist, ore.salt)
            .biomeWhitelist("forge:is_overworld")
            .id(`kubejs:${ore.id}`);

        // recipes for extraction
        event.recipes.createoreexcavation
            .drilling(ore.item, ore.id, ore.ticks)
            .id(`kubejs:drilling_${ore.id}`);
    });
});
