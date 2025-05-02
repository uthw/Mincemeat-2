// make sure the durability matches the one in durability.js
// do not need to touch integrity because it's already modified in integrity.js

ServerEvents.highPriorityData(event => {
    let tweaks = [
        {
            path: "metal/create/andesite_alloy",
            key: "create_andesite_alloy",
            category: "metal",
            primary: 5.3,
            secondary: 3.7,
            tertiary: 0.8,
            durability: 396,
            magicCapacity: 96,
            toolLevel: "minecraft:iron",
            toolEfficiency: 5.5,
            tints: {
                glyph: "928f97",
                texture: "928f97",
            },
            textures: ["metal", "default"],
            material: {
                items: ["create:andesite_alloy"],
            },
            requiredTools: {
                hammer_dig: "minecraft:wood",
            },
            conditions: [
                {
                    type: "forge:mod_loaded",
                    modid: "create",
                },
            ],
        },
        {
            path: "metal/create/brass",
            category: "metal",
            primary: 5.5,
            secondary: 4,
            tertiary: 3.2,
            durability: 924,
            magicCapacity: 87,
            toolLevel: "minecraft:iron",
            toolEfficiency: 6.5,
            tints: {
                glyph: "ffc940",
                texture: "ffc940",
            },
            textures: ["metal", "default"],
            material: {
                items: ["create:brass_ingot"],
            },
            requiredTools: {
                hammer_dig: "minecraft:gold",
            },
            conditions: [
                {
                    type: "forge:mod_loaded",
                    modid: "create",
                },
            ],
        },
        {
            path: "metal/create/zinc",
            key: "create_zinc",
            category: "metal",
            primary: 5,
            secondary: 3.8,
            tertiary: 1,
            durability: 400,
            magicCapacity: 102,
            toolLevel: "minecraft:iron",
            toolEfficiency: 6,
            tints: {
                glyph: "b9e9c1",
                texture: "b9e9c1",
            },
            textures: ["metal", "default"],
            material: {
                items: ["create:zinc_ingot"],
            },
            requiredTools: {
                hammer_dig: "minecraft:gold",
            },
            conditions: [
                {
                    type: "forge:mod_loaded",
                    modid: "create",
                },
            ],
        },
    ];

    tweaks.forEach(tweak => {
        event.addJson(`tetra:materials/${tweak.path}`, tweak);
    })
})