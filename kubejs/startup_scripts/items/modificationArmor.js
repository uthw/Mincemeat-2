ItemEvents.modification((event) => {
    let armors = [
        {
            name: "blue_skies:diopside_helmet",
            protection: 2,
            toughness: 5.5,
            knockback: 0,
        },
        {
            name: "blue_skies:diopside_chestplate",
            protection: 7,
            toughness: 5.5,
            knockback: 0,
        },
        {
            name: "blue_skies:diopside_leggings",
            protection: 5,
            toughness: 5.5,
            knockback: 0,
        },
        {
            name: "blue_skies:diopside_boots",
            protection: 2,
            toughness: 5.5,
            knockback: 0,
        },
        {
            name: "blue_skies:charoite_helmet",
            protection: 4,
            toughness: 2,
            knockback: 0,
        },
        {
            name: "blue_skies:charoite_chestplate",
            protection: 9,
            toughness: 2,
            knockback: 0,
        },
        {
            name: "blue_skies:charoite_leggings",
            protection: 7,
            toughness: 2,
            knockback: 0,
        },
        {
            name: "blue_skies:aquite_boots",
            protection: 4,
            toughness: 2,
            knockback: 0,
        },
        {
            name: "blue_skies:aquite_helmet",
            protection: 3,
            toughness: 1,
            knockback: 0,
        },
        {
            name: "blue_skies:aquite_chestplate",
            protection: 8,
            toughness: 1,
            knockback: 0,
        },
        {
            name: "blue_skies:aquite_leggings",
            protection: 6,
            toughness: 1,
            knockback: 0,
        },
        {
            name: "blue_skies:aquite_boots",
            protection: 3,
            toughness: 1,
            knockback: 0,
        },
        {
            name: "aether:gravitite_helmet",
            protection: 3,
            toughness: 3,
            knockback: 0.1,
        },
        {
            name: "aether:gravitite_chestplate",
            protection: 8,
            toughness: 3,
            knockback: 0.1,
        },
        {
            name: "aether:gravitite_leggings",
            protection: 6,
            toughness: 3,
            knockback: 0.1,
        },
        {
            name: "aether:gravitite_boots",
            protection: 3,
            toughness: 3,
            knockback: 0.1,
        },
        {
            name: "aether:zanite_helmet",
            protection: 3,
            toughness: 1,
            knockback: 0,
        },
        {
            name: "aether:zanite_chestplate",
            protection: 8,
            toughness: 1,
            knockback: 0,
        },
        {
            name: "aether:zanite_leggings",
            protection: 6,
            toughness: 1,
            knockback: 0,
        },
        {
            name: "aether:zanite_boots",
            protection: 3,
            toughness: 1,
            knockback: 0,
        },
        {
            name: "aether:valkyrie_helmet",
            protection: 4,
            toughness: 2,
            knockback: 0,
        },
        {
            name: "aether:valkyrie_chestplate",
            protection: 9,
            toughness: 2,
            knockback: 0,
        },
        {
            name: "aether:valkyrie_leggings",
            protection: 7,
            toughness: 2,
            knockback: 0,
        },
        {
            name: "aether:valkyrie_boots",
            protection: 4,
            toughness: 2,
            knockback: 0,
        },
        {
            name: "aether:phoenix_helmet",
            protection: 4,
            toughness: 2,
            knockback: 0,
        },
        {
            name: "aether:phoenix_chestplate",
            protection: 9,
            toughness: 2,
            knockback: 0,
        },
        {
            name: "aether:phoenix_leggings",
            protection: 7,
            toughness: 2,
            knockback: 0,
        },
        {
            name: "aether:phoenix_boots",
            protection: 4,
            toughness: 2,
            knockback: 0,
        },
        {
            name: "ancient_aether:valkyrum_helmet",
            protection: 4,
            toughness: 3,
            knockback: 0.1,
        },
        {
            name: "ancient_aether:valkyrum_chestplate",
            protection: 10,
            toughness: 3,
            knockback: 0.1,
        },
        {
            name: "ancient_aether:valkyrum_leggings",
            protection: 7,
            toughness: 3,
            knockback: 0.1,
        },
        {
            name: "ancient_aether:valkyrum_boots",
            protection: 4,
            toughness: 3,
            knockback: 0.1,
        },
        {
            name: "deep_aether:stratus_helmet",
            protection: 4,
            toughness: 4,
            knockback: 0.2,
        },
        {
            name: "deep_aether:stratus_chestplate",
            protection: 10,
            toughness: 4,
            knockback: 0.2,
        },
        {
            name: "deep_aether:stratus_leggings",
            protection: 8,
            toughness: 4,
            knockback: 0.2,
        },
        {
            name: "deep_aether:stratus_boots",
            protection: 4,
            toughness: 4,
            knockback: 0.2,
        },
        {
            name: "deep_aether:stormforged_helmet",
            protection: 3,
            toughness: 1.5,
            knockback: 0.15
        },
        {
            name: "deep_aether:stormforged_chestplate",
            protection: 9,
            toughness: 1.5,
            knockback: 0.15
        },
        {
            name: "deep_aether:stormforged_leggings",
            protection: 7,
            toughness: 1.5,
            knockback: 0.15
        },
        {
            name: "deep_aether:stormforged_boots",
            protection: 3,
            toughness: 1.5,
            knockback: 0.15
        },
    ];

    armors.forEach((armor) => {
        event.modify(armor.name, (item) => {
            item.armorProtection = armor.protection;
            item.armorToughness = armor.toughness;
            item.armorKnockbackResistance = armor.knockback;
        });
    });
});
