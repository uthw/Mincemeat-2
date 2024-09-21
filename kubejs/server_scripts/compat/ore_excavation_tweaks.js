ServerEvents.highPriorityData((event) => {
    let tweaks = [
        {
            key: "water",
            type: "createoreexcavation:vein",
            amountMax: 2.0,
            amountMin: 1.0,
            biomeWhitelist: "minecraft:is_overworld",
            icon: {
                item: "minecraft:water_bucket",
            },
            name: '{"translate":"block.minecraft.water"}',
            neverFinite: true,
            placement: {
                salt: 1195889335,
                separation: 256,
                spacing: 512,
            },
            priority: 0,
        },
        {
            key: "copper",
            type: "createoreexcavation:vein",
            amountMax: 30.0,
            amountMin: 10.0,
            biomeWhitelist: "minecraft:is_overworld",
            icon: {
                item: "minecraft:raw_copper",
            },
            name: '{"translate":"item.minecraft.raw_copper"}',
            placement: {
                salt: 277506605,
                separation: 32,
                spacing: 128,
            },
            priority: 0,
        },
    ];

    tweaks.forEach((tweak) => {
        event.addJson(
            `createoreexcavation:recipes/ore_vein_type/${tweak.key}.json`,
            tweak
        );
    });
});
