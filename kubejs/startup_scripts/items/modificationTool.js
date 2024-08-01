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
        {
            name: "blue_skies:diopside_sword",
            damage: 9,
        },
        // {
        //     name: "blue_skies:diopside_axe",
        //     damage: 12,
        // },
        {
            name: "blue_skies:charoite_sword",
            damage: 7,
        },
        // {
        //     name: "blue_skies:charoite_axe",
        //     damage: 9,
        // },
        {
            name: "blue_skies:aquite_sword",
            damage: 6,
        },
        // {
        //     name: "blue_skies:aquite_axe",
        //     damage: 9,
        // },
        {
            name: "aether:gravitite_sword",
            damage: 7,
        },
        // {
        //     name: "aether:gravitite_axe",
        //     damage: 11,
        // },
        {
            name: "aether:zanite_sword",
            damage: 6,
        },
        // {
        //     name: "aether:zanite_axe",
        //     damage: 9,
        // },
        {
            name: "aether:valkyrie_lance",
            damage: 7,
        },
        {
            name: "aether_lost_content:phoenix_sword",
            damage: 11,
        },
        {
            name: "ancient_aether:valkyrum_sword",
            damage: 9,
        },
        {
            name: "ancient_aether:valkyrum_lance",
            damage: 8,
        },
        {
            name: "deep_aether:stratus_sword",
            damage: 10,
        },
        {
            name: "ancient_aether:ancient_sword",
            damage: 8,
        },
        {
            name: "aether:flaming_sword",
            damage: 8,
        },
        {
            name: "aether:lightning_sword",
            damage: 8,
        },
        {
            name: "aether:holy_sword",
            damage: 8,
        },
        {
            name: "aether:vampire_blade",
            damage: 8,
        },
        {
            name: "deeperdarker:warden_sword",
            damage: 9,
        },
        {
            name: "enigmaticlegacy:etherium_sword",
            damage: 15, // buff of +4
        },
        {
            name: "enigmaticlegacy:etherium_scythe",
            damage: 11, // buff of +3
        },
        {
            name: "minecells:hattoris_katana",
            damage: 9,
        },
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
