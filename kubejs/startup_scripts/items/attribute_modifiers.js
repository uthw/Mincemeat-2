// This script changes attribute modifiers for certain items.
// For the UUID and attributeName, you may need to install CraftTweaker for its /ct hand attributes command.

let maxHpUuid = "8fb6607d-770d-4b72-b5f6-0b72cc00d3af";

let modifiers = [
    // Cut in half the boost to soul hearts given by bone paladin armor
    {
        itemName: "eidolon:bonelord_chestplate",
        attribute: "eidolon:persistent_soul_hearts",
        attributeName: "eidolon:bonelord_ethereal_hearts",
        uuid: "9f3d476d-c118-4544-8365-64846904b48e",
        value: 10.0,
        op: "ADDITION",
    },
    {
        itemName: "eidolon:bonelord_greaves",
        attribute: "eidolon:persistent_soul_hearts",
        attributeName: "eidolon:bonelord_ethereal_hearts",
        uuid: "d8499b04-0e66-4726-ab29-64469d734e0d",
        value: 5.0,
        op: "ADDITION",
    },
    {
        itemName: "eidolon:bonelord_helm",
        attribute: "eidolon:persistent_soul_hearts",
        attributeName: "eidolon:bonelord_ethereal_hearts",
        uuid: "2ad3f246-fee1-4e67-b886-69fd380bb150",
        value: 5.0,
        op: "ADDITION",
    },
    {
        itemName: "caverns_and_chasms:silver_helmet",
        attribute: "minecraft:generic.max_health",
        attributeName: "armor modifier",
        uuid: "340243a7-a73b-420a-b1e9-dc9102e1826f",
        value: 2.0,
        op: "ADDITION",
    },
    {
        itemName: "caverns_and_chasms:silver_chestplate",
        attribute: "minecraft:generic.max_health",
        attributeName: "armor modifier",
        uuid: "a97d6347-ec3f-4f17-88b9-8f630a16752e",
        value: 2.0,
        op: "ADDITION",
    },
    {
        itemName: "caverns_and_chasms:silver_leggings",
        attribute: "minecraft:generic.max_health",
        attributeName: "armor modifier",
        uuid: "546a7db6-3eec-4305-ac88-3526c1567694",
        value: 2.0,
        op: "ADDITION",
    },
    {
        itemName: "caverns_and_chasms:silver_boots",
        attribute: "minecraft:generic.max_health",
        attributeName: "armor modifier",
        uuid: "7f4f0ba0-93b7-479a-8e84-9fe9453e63a1",
        value: 2.0,
        op: "ADDITION",
    },
    {
        itemName: "blue_skies:charoite_helmet",
        attribute: "cold_sweat:cold_resistance",
        attributeName: "armor modifier",
        uuid: "a2f3b0d4-5c8e-4f1b-9a7c-6d3e0f1b2c5d",
        value: 0.125,
        op: "ADDITION"
    },
    {
        itemName: "blue_skies:charoite_chestplate",
        attribute: "cold_sweat:cold_resistance",
        attributeName: "armor modifier",
        uuid: "a2f3b0d4-5c8e-4f1b-9a7c-6d3e0f1b2c5d",
        value: 0.125,
        op: "ADDITION"
    },
    {
        itemName: "blue_skies:charoite_leggings",
        attribute: "cold_sweat:cold_resistance",
        attributeName: "armor modifier",
        uuid: "a2f3b0d4-5c8e-4f1b-9a7c-6d3e0f1b2c5d",
        value: 0.125,
        op: "ADDITION"
    },
    {
        itemName: "blue_skies:charoite_boots",
        attribute: "cold_sweat:cold_resistance",
        attributeName: "armor modifier",
        uuid: "a2f3b0d4-5c8e-4f1b-9a7c-6d3e0f1b2c5d",
        value: 0.125,
        op: "ADDITION"
    },
    {
        itemName: "blue_skies:charoite_helmet",
        attribute: "attributeslib:cold_damage",
        attributeName: "armor modifier",
        uuid: "12f3b0d4-5c8e-4f1b-9a7c-6d3e0f1b2c5d",
        value: 0.5,
        op: "ADDITION"
    },
    {
        itemName: "blue_skies:charoite_chestplate",
        attribute: "attributeslib:cold_damage",
        attributeName: "armor modifier",
        uuid: "12f3b0d4-5c8e-4f1b-9a7c-6d3e0f1b2c5d",
        value: 0.5,
        op: "ADDITION"
    },
    {
        itemName: "blue_skies:charoite_leggings",
        attribute: "attributeslib:cold_damage",
        attributeName: "armor modifier",
        uuid: "12f3b0d4-5c8e-4f1b-9a7c-6d3e0f1b2c5d",
        value: 0.5,
        op: "ADDITION"
    },
    {
        itemName: "blue_skies:charoite_boots",
        attribute: "attributeslib:cold_damage",
        attributeName: "armor modifier",
        uuid: "12f3b0d4-5c8e-4f1b-9a7c-6d3e0f1b2c5d",
        value: 0.5,
        op: "ADDITION"
    },

    // Diopside is the same thing but for heat
    {
        itemName: "blue_skies:diopside_helmet",
        attribute: "cold_sweat:heat_resistance",
        attributeName: "armor modifier",
        uuid: "a2f3b0d4-5c8e-4f1b-9a7c-6d3e0f1b2c5d",
        value: 0.125,
        op: "ADDITION"
    },
    {
        itemName: "blue_skies:diopside_chestplate",
        attribute: "cold_sweat:heat_resistance",
        attributeName: "armor modifier",
        uuid: "a2f3b0d4-5c8e-4f1b-9a7c-6d3e0f1b2c5d",
        value: 0.125,
        op: "ADDITION"
    },
    {
        itemName: "blue_skies:diopside_leggings",
        attribute: "cold_sweat:heat_resistance",
        attributeName: "armor modifier",
        uuid: "a2f3b0d4-5c8e-4f1b-9a7c-6d3e0f1b2c5d",
        value: 0.125,
        op: "ADDITION"
    },
    {
        itemName: "blue_skies:diopside_boots",
        attribute: "cold_sweat:heat_resistance",
        attributeName: "armor modifier",
        uuid: "a2f3b0d4-5c8e-4f1b-9a7c-6d3e0f1b2c5d",
        value: 0.125,
        op: "ADDITION"
    },
    {
        itemName: "blue_skies:diopside_helmet",
        attribute: "attributeslib:fire_damage",
        attributeName: "armor modifier",
        uuid: "12f3b0d4-5c8e-4f1b-9a7c-6d3e0f1b2c5d",
        value: 0.5,
        op: "ADDITION"
    },
    {
        itemName: "blue_skies:diopside_chestplate",
        attribute: "attributeslib:fire_damage",
        attributeName: "armor modifier",
        uuid: "12f3b0d4-5c8e-4f1b-9a7c-6d3e0f1b2c5d",
        value: 0.5,
        op: "ADDITION"
    },
    {
        itemName: "blue_skies:diopside_leggings",
        attribute: "attributeslib:fire_damage",
        attributeName: "armor modifier",
        uuid: "12f3b0d4-5c8e-4f1b-9a7c-6d3e0f1b2c5d",
        value: 0.5,
        op: "ADDITION"
    },
    {
        itemName: "blue_skies:diopside_boots",
        attribute: "attributeslib:fire_damage",
        attributeName: "armor modifier",
        uuid: "12f3b0d4-5c8e-4f1b-9a7c-6d3e0f1b2c5d",
        value: 0.5,
        op: "ADDITION"
    },
    // {
    //     itemName: "cataclysm:coral_bardiche",
    //     attribute: "minecraft:generic.attack_damage",
    //     attributeName: "tool modifier",
    //     uuid: "cb3f55d3-645c-4f38-a497-9c13a33db5cf",
    //     value: 12.0,
    //     op: "ADDITION",
    // },
];

ItemEvents.modification((event) => {
    modifiers.forEach((mod) => {
        event.modify(mod.itemName, (item) => {
            item.addAttribute(
                mod.attribute,
                mod.uuid,
                mod.attributeName,
                mod.value,
                mod.op
            );
        });
    });
});
