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
        uuid: maxHpUuid,
        value: 2.0,
        op: "ADDITION",
    },
    {
        itemName: "caverns_and_chasms:silver_chestplate",
        attribute: "minecraft:generic.max_health",
        attributeName: "armor modifier",
        uuid: maxHpUuid,
        value: 2.0,
        op: "ADDITION",
    },
    {
        itemName: "caverns_and_chasms:silver_leggings",
        attribute: "minecraft:generic.max_health",
        attributeName: "armor modifier",
        uuid: maxHpUuid,
        value: 2.0,
        op: "ADDITION",
    },
    {
        itemName: "caverns_and_chasms:silver_boots",
        attribute: "minecraft:generic.max_health",
        attributeName: "armor modifier",
        uuid: maxHpUuid,
        value: 2.0,
        op: "ADDITION",
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
