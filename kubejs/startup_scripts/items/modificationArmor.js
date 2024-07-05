ItemEvents.modification((event) => {
    let armors = [
        // {
        //     name: "blue_skies:diopside_helmet",
        //     protection: 2,
        //     toughness: 5.5,
        //     knockback: 0,
        // },
        // {
        //     name: "blue_skies:diopside_chestplate",
        //     protection: 7,
        //     toughness: 5.5,
        //     knockback: 0,
        // },
        // {
        //     name: "blue_skies:diopside_leggings",
        //     protection: 5,
        //     toughness: 5.5,
        //     knockback: 0,
        // },
        // {
        //     name: "blue_skies:diopside_boots",
        //     protection: 2,
        //     toughness: 5.5,
        //     knockback: 0,
        // },
        // {
        //     name: "blue_skies:charoite_helmet",
        //     protection: 4,
        //     toughness: 2,
        //     knockback: 0,
        // },
        // {
        //     name: "blue_skies:charoite_chestplate",
        //     protection: 9,
        //     toughness: 2,
        //     knockback: 0,
        // },
        // {
        //     name: "blue_skies:charoite_leggings",
        //     protection: 7,
        //     toughness: 2,
        //     knockback: 0,
        // },
        // {
        //     name: "blue_skies:charoite_boots",
        //     protection: 4,
        //     toughness: 2,
        //     knockback: 0,
        // },
    ];

    armors.forEach((armor) => {
        event.modify(armor.name, (item) => {
            item.armorProtection = armor.protection;
            item.armorToughness = armor.toughness;
            item.armorKnockbackResistance = armor.knockback;
        });
    });
});
