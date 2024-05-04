// the code of this is causing some error

ServerEvents.highPriorityData((event) => {
    let towerTweakMain = {
        "forge:conditions": [
            {
                type: "apotheosis:module",
                module: "adventure",
            },
        ],
        structures: [
            {
                structure: "apotheosis:tower_main",
                weight: 1,
            },
        ],
        placement: {
            type: "minecraft:random_spread",
            spacing: 60,
            separation: 30,
            salt: 12121818,
        },
    };

    let towerTweakLeaf = {
        "forge:conditions": [
            {
                type: "apotheosis:module",
                module: "adventure",
            },
        ],
        structures: [
            {
                structure: "apotheosis:tower_leaf",
                weight: 1,
            },
        ],
        placement: {
            type: "minecraft:random_spread",
            spacing: 60,
            separation: 30,
            salt: 11114412,
        },
    };

    let towerTweakSand = {
        "forge:conditions": [
            {
                type: "apotheosis:module",
                module: "adventure",
            },
        ],
        structures: [
            {
                structure: "apotheosis:tower_sand",
                weight: 1,
            },
        ],
        placement: {
            type: "minecraft:random_spread",
            spacing: 60,
            separation: 30,
            salt: 15192020,
        },
    };

    let towerTweakSpruce = {
        "forge:conditions": [
            {
                type: "apotheosis:module",
                module: "adventure",
            },
        ],
        structures: [
            {
                structure: "apotheosis:tower_spruce",
                weight: 1,
            },
        ],
        placement: {
            type: "minecraft:random_spread",
            spacing: 60,
            separation: 30,
            salt: 89021723,
        },
    };

    event.addJson(
        "apotheosis:worldgen/structure_set/tower_main.json",
        towerTweakMain
    );

    event.addJson(
        "apotheosis:worldgen/structure_set/tower_leaf.json",
        towerTweakLeaf
    );

    event.addJson(
        "apotheosis:worldgen/structure_set/tower_sand.json",
        towerTweakSand
    );

    event.addJson(
        "apotheosis:worldgen/structure_set/tower_spruce.json",
        towerTweakSpruce
    );

    // let towerTypes = ["_main", "_spruce", "_sand", "_leaf"];

    // let towerSalts = [12121818, 89021723, 15192020, 11114412];

    // for (let i = 0; i < towerTypes.length; i++) {
    //     towerTweak.placement.salt = towerSalts[i];
    //     towerTweak.structures.structure = `apotheosis:tower${towerTypes[i]}`;

    //     // Hopefully this works :p
    //     event.addJson(
    //         `apotheosis:worldgen/structure_set/tower${towerTypes[i]}.json`,
    //         towerTweak
    //     );
    // }
});
