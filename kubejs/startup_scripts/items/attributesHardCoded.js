// This is for modifiying the attack damage of items with hard coded attributes. 
// Currently only supports tools and weapons.
// Attributes modified with this don't have the green attributeslib tooltips with f3+h, but this isn't a big deal
// Parts used from kubejs discord server, 

let tweaks = [
    // Cataclysm items
    {
        itemName: "cataclysm:coral_spear",
        attributeName: "minecraft:generic.attack_damage",
        value: 8, // For attack damage, the actual value will be 1 + the one set here
    },
    {
        itemName: "cataclysm:coral_bardiche",
        attributeName: "minecraft:generic.attack_damage",
        value: 11,
    },
    // Cataclysm boss weapons
    {
        itemName: "cataclysm:the_incinerator",
        attributeName: "minecraft:generic.attack_damage",
        value: 23,
    },
    {
        itemName: "cataclysm:the_annihilator",
        attributeName: "minecraft:generic.attack_damage",
        value: 11, // originally 6.5
    },
    {
        itemName: "cataclysm:the_immolator",
        attributeName: "minecraft:generic.attack_damage",
        value: 11, // originally 6.5
    },
    {
        itemName: "cataclysm:gauntlet_of_guard",
        attributeName: "minecraft:generic.attack_damage",
        value: 19, // originally 10 
    },
    {
        itemName: "cataclysm:gauntlet_of_bulwark",
        attributeName: "minecraft:generic.attack_damage",
        value: 19, // originally 10
    },
    {
        itemName: "cataclysm:gauntlet_of_maelstrom",
        attributeName: "minecraft:generic.attack_damage",
        value: 19, // originally 10
    },
    {
        itemName: "cataclysm:soul_render",
        attributeName: "minecraft:generic.attack_damage",
        value: 22, // originally 14
    },
    {
        itemName: "cataclysm:meat_shredder",
        attributeName: "minecraft:generic.attack_damage",
        value: 11.5, // originally 7.5
    },
    {
        itemName: "cataclysm:infernal_forge",
        attributeName: "minecraft:generic.attack_damage",
        value: 22, // originally 15
    },
    {
        itemName: "cataclysm:void_forge",
        attributeName: "minecraft:generic.attack_damage",
        value: 22, // originally 15
    },
    {
        itemName: "cataclysm:tidal_claws",
        attributeName: "minecraft:generic.attack_damage",
        value: 9, // originally 7
    },
    {
        itemName: "blue_skies:bluebright_spear",
        attributeName: "minecraft:generic.attack_damage",
        value: 10, // originally 3
    },
    {
        itemName: "blue_skies:starlit_spear",
        attributeName: "minecraft:generic.attack_damage",
        value: 10, // originally 3
    },
    {
        itemName: "blue_skies:frostbright_spear",
        attributeName: "minecraft:generic.attack_damage",
        value: 10.5, // originally 3
    },
    {
        itemName: "blue_skies:lunar_spear",
        attributeName: "minecraft:generic.attack_damage",
        value: 10, // originally 3
    },
    {
        itemName: "blue_skies:dusk_spear",
        attributeName: "minecraft:generic.attack_damage",
        value: 9, // originally 3
    },
    {
        itemName: "blue_skies:comet_spear",
        attributeName: "minecraft:generic.attack_damage",
        value: 10.5, // originally 3
    },
    {
        itemName: "blue_skies:soulbound_spear",
        attributeName: "minecraft:generic.attack_damage",
        value: 12, // originally 3
    },
    {
        itemName: "blue_skies:maple_spear",
        attributeName: "minecraft:generic.attack_damage",
        value: 10.5, // originally 3
    },
    {
        itemName: "savage_and_ravage:cleaver_of_beheading",
        attributeName: "minecraft:generic.attack_damage",
        value: 13, // old: 11
    }
];

let $AttributeModifier = Java.loadClass(
    "net.minecraft.world.entity.ai.attributes.AttributeModifier"
);

tweaks.forEach((tweak) => {
    let attackDamageModifier = new $AttributeModifier(
        "133a6368-4778-4aa9-9025-fb3cba698200", // Idk if the uuid matters since we're removing the old one
        tweak.attributeName,
        tweak.value,
        "ADDITION" // Will need to add this to the tweaks entries if we want to change the operation
    );

    ForgeEvents.onEvent(
        "net.minecraftforge.event.ItemAttributeModifierEvent",
        (event) => {
            if (
                event.itemStack.id == tweak.itemName &&
                event.slotType == "mainhand" // might need to add this to the tweaks entries for future expansion too
            ) {
                event.removeAttribute(tweak.attributeName);
                event.addModifier(tweak.attributeName, attackDamageModifier);
            }
        }
    );
});