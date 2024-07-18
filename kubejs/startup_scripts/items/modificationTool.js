ItemEvents.modification((event) => {
    let tools = [
        {
            name: "minecells:flint",
            damage: 9,
        },
        // {
        //     name: "blue_skies:bluebright_spear",
        //     damage: 5.5,
        // },
        // {
        //     name: "blue_skies:starlit_spear",
        //     damage: 5.5,
        // },
        // {
        //     name: "blue_skies:frostbright_spear",
        //     damage: 5.5,
        // },
        // {
        //     name: "blue_skies:lunar_spear",
        //     damage: 5.5,
        // },
        // {
        //     name: "blue_skies:dusk_spear",
        //     damage: 5.5,
        // },
        // {
        //     name: "blue_skies:maple_spear",
        //     damage: 5.5,
        // },
        // {
        //     name: "blue_skies:comet_spear",
        //     damage: 5.5,
        // },
        // {
        //     name: "blue_skies:soulbound_spear",
        //     damage: 5.5,
        // },
        // Not buffing the charoite/diopside weapons for now since it would mean I need to buff netherite and tetra
        // {
        //     name: "blue_skies:diopside_sword",
        //     damage: 9,
        // },
        // {
        //     name: "blue_skies:diopside_axe",
        //     damage: 12,
        // },
        // {
        //     name: "blue_skies:charoite_sword",
        //     damage: 7,
        // },
        // {
        //     name: "blue_skies:charoite_axe",
        //     damage: 9,
        // },
    ];

    tools.forEach((tool) => {
        event.modify(tool.name, (item) => {
            let spd = tool.speed ? tool.speed : item.attackSpeed;

            item.attackDamage = tool.damage;
            // item.attackSpeed = spd;
        });
    });

    let copperTools = ["pickaxe", "shovel", "axe", "hoe"];

    copperTools.forEach((copperTool) => {
        event.modify(`iceandfire:copper_${copperTool}`, (item) => {
            item.digSpeed *= 1.5;
        });
    });
});
