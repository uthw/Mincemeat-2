ServerEvents.recipes((event) => {
    const recipes = [
        [
            "3x eidolon:pewter_ingot",
            [
                "#forge:ingots/tin",
                "minecraft:copper_ingot",
                "minecraft:iron_ingot",
            ],
            4000,
        ],
        [
            "3x eidolon:pewter_blend",
            ["#forge:dusts/tin", "#forge:dusts/copper", "#forge:dusts/iron"],
            4000,
        ],
        [
            "4x thermal:signalum_ingot",
            [
                "#forge:ingots/zinc",
                "3x #forge:ingots/rose_gold",
                "4x minecraft:redstone",
            ],
            12000,
        ],
        [
            "4x thermal:signalum_ingot",
            [
                "#forge:ingots/zinc",
                "3x #forge:dusts/rose_gold",
                "4x minecraft:redstone",
            ],
            12000,
        ],
        [
            "4x thermal:lumium_ingot",
            [
                "#forge:ingots/zinc",
                "3x #forge:dusts/arcane_crystal",
                "2x minecraft:glowstone_dust",
            ],
            12000,
        ],
    ];

    recipes.forEach((recipe) => {
        let re = event.recipes.thermal.smelter(recipe[0], recipe[1]);
        if (recipe[2] > 0) {
            re.energy(recipe[2]);
        } else {
            re.energy(0);
        }

        // event.recipes.thermal.smelter()
    });
});
