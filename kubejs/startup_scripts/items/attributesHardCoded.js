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
        value: 27,
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
    },
    {
        itemName: "malum:soul_stained_steel_scythe",
        attributeName: "minecraft:generic.attack_damage",
        value: 10,
    },
    {
        itemName: "malum:soul_stained_steel_sword",
        attributeName: "minecraft:generic.attack_damage",
        value: 5.5,
    },
    {
        itemName: "malum:crude_scythe",
        attributeName: "minecraft:generic.attack_damage",
        value: 9,
    },
    {
        itemName: "malum:tyrving",
        attributeName: "minecraft:generic.attack_damage",
        value: 10,
    },
    {
        itemName: "cataclysm:astrape",
        attributeName: "minecraft:generic.attack_damage",
        value: 14.5, // originally 9.5
    },
    {
        itemName: "cataclysm:ceraunus",
        attributeName: "minecraft:generic.attack_damage",
        value: 29, // originally 15
    },
    {
        itemName: "traveloptics:stellothorn",
        attributeName: "minecraft:generic.attack_damage",
        value: 54, // originally 21
    },
    {
        itemName: "traveloptics:trident_of_the_eternal_maelstrom",
        attributeName: "minecraft:generic.attack_damage",
        value: 24, // originally 14
    },
    {
        itemName: "traveloptics:gauntlet_of_extinction",
        attributeName: "minecraft:generic.attack_damage",
        value: 25, // originally 15
    },
    {
        itemName: "traveloptics:abyssal_tidecaller",
        attributeName: "minecraft:generic.attack_damage",
        value: 31, // originally 21
    },
    {
        itemName: "traveloptics:the_obliterator",
        attributeName: "minecraft:generic.attack_damage",
        value: 21, // originally 14
    },
    {
        itemName: "traveloptics:cursed_wraithblade",
        attributeName: "minecraft:generic.attack_damage",
        value: 25, // originally 17
    },
    {
        itemName: "traveloptics:mechanized_wraithblade",
        attributeName: "minecraft:generic.attack_damage",
        value: 25, // originally 17
    },
    {
        itemName: "traveloptics:flames_of_eldritch",
        attributeName: "minecraft:generic.attack_damage",
        value: 34, // originally 14
    },
    {
        itemName: "traveloptics:scourge_of_the_sands",
        attributeName: "minecraft:generic.attack_damage",
        value: 19, // originally 13
    },
    {
        itemName: "traveloptics:thorns_of_oblivion",
        attributeName: "minecraft:generic.attack_damage",
        value: 19, // originally 13
    },
    {
        itemName: "traveloptics:voidstrike_reaper",
        attributeName: "minecraft:generic.attack_damage",
        value: 49, // originally 19
    },
    {
        itemName: "traveloptics:infernal_devastator",
        attributeName: "minecraft:generic.attack_damage",
        value: 24, // originally 16
    },
    {
        itemName: "traveloptics:charged_sands",
        attributeName: "minecraft:generic.attack_damage",
        value: 22.5, // originally 13
    },
    {
        itemName: "block_factorys_bosses:knight_sword",
        attributeName: "minecraft:generic.attack_damage",
        value: 27, // originally 13
    },
    {
        itemName: "opposing_force:spark_blade",
        attributeName: "minecraft:generic.attack_damage",
        value: 10, // originally 6
    },
    {
        itemName: "opposing_force:trembling_slammer",
        attributeName: "minecraft:generic.attack_damage",
        value: 19, // originally 7
    },
    {
        itemName: "block_factorys_bosses:dragon_skull",
        attributeName: "betterparagliders:idle_stamina_regen",
        value: 1.5,
        slot: "head",
    },
    {
        itemName: "block_factorys_bosses:dragon_bones_chestplate",
        attributeName: "betterparagliders:idle_stamina_regen",
        value: 1.5,
        slot: "chest",
    },
    {
        itemName: "block_factorys_bosses:dragon_bones_leggings",
        attributeName: "betterparagliders:idle_stamina_regen",
        value: 1.5,
        slot: "legs",
    },
    {
        itemName: "block_factorys_bosses:dragon_bones_boots",
        attributeName: "betterparagliders:idle_stamina_regen",
        value: 1.5,
        slot: "feet",
    },
    {
        itemName: "opposing_force:moon_shoes",
        attributeName: "betterparagliders:idle_stamina_regen",
        value: 3.0,
        slot: "feet",
    },
    {
        itemName: "opposing_force:moon_shoes",
        attributeName: "minecraft:generic.armor_toughness",
        value: 1.0,
        slot: "feet",
    },
    {
        itemName: "block_factorys_bosses:enhanced_shield",
        attributeName: "betterparagliders:block_stamina_reduction",
        value: 3.0,
        slot: "offhand",
    },
    {
        itemName: "block_factorys_bosses:knight_helmet",
        attributeName: "betterparagliders:idle_stamina_regen",
        value: 1.0,
        slot: "head",
    },
    {
        itemName: "block_factorys_bosses:knight_chestplate",
        attributeName: "betterparagliders:idle_stamina_regen",
        value: 1.0,
        slot: "chest",
    },
    {
        itemName: "block_factorys_bosses:knight_leggings",
        attributeName: "betterparagliders:idle_stamina_regen",
        value: 1.0,
        slot: "legs",
    },
    {
        itemName: "block_factorys_bosses:knight_boots",
        attributeName: "betterparagliders:idle_stamina_regen",
        value: 1.0,
        slot: "feet",
    },
    {
        itemName: "block_factorys_bosses:kraken_trident",
        attributeName: "minecraft:generic.attack_damage",
        value: 14, // originally 9
    }
];

let $AttributeModifier = Java.loadClass(
    "net.minecraft.world.entity.ai.attributes.AttributeModifier",
);
const $UUID = Java.loadClass("java.util.UUID");

let tweakMap = {};

tweaks.forEach((tweak) => {
    // Precompile the attribute modifier
    let slot = tweak.slot ? tweak.slot.toLowerCase() : "mainhand";

    let compiledModifier = new $AttributeModifier(
        $UUID.randomUUID().toString(),
        tweak.attributeName,
        tweak.value,
        "ADDITION",
    );

    if (!tweakMap[tweak.itemName]) {
        tweakMap[tweak.itemName] = [];
    }

    // Put the tweak in a map because maps are faster than arrays
    tweakMap[tweak.itemName].push({
        name: tweak.attributeName,
        modifier: compiledModifier,
        slot: slot,
    });
});

// Only one onEvent is used for performance. The old version did it for each tweak, which was making the world take ~15 seconds longer to load
ForgeEvents.onEvent("net.minecraftforge.event.ItemAttributeModifierEvent", (event) => {
    let itemTweaks = tweakMap[event.itemStack.id];
    if (!itemTweaks) return;

    let currentSlot = String(event.slotType).toLowerCase();

    if (event.slotType !== currentSlot) return;

    itemTweaks.forEach((tweak) => {
        if (currentSlot === tweak.slot) {
            event.removeAttribute(tweak.name);
            event.addModifier(tweak.name, tweak.modifier);
        }
    });
});
