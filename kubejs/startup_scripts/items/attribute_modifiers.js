// This script changes attribute modifiers for certain items.
// For the UUID and attributeName, you may need to install CraftTweaker for its /ct hand attributes command.

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
