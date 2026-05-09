const fifteenPercent =
    "pickaxe|rapier|cutlass|scimitar|machete|anubis_wrath|saber|sabre|scythe|tide_dweller";
const twentyFivePercent =
    "claymore|great_sword|greatsword|the_incinerator|sharp_bone_jaw|glaive|pike|spear|lance|tefnuts_call_halberd";
const thirtyFivePercent = "mace|axe|paxel|eater_of_the_souls|trident";
const fiftyPercent =
    "great_hammer|greathammer|war_hammer|warhammer|gebs_might|shus_exile|infernal_forge";
const seventyFivePercent = "blacksmith_gavel|montus_strike|troll_weapon";
const critTen = "katana|saber|dagger|rapier|magicbane|divider";

const $ArmorItem = Java.loadClass("net.minecraft.world.item.ArmorItem");
const $ShieldItem = Java.loadClass("net.minecraft.world.item.ShieldItem");

const toolFactor = 2;
const shieldFactor = 5;
const armorFactor = 10;

// Items that this script will not touch
const blacklist = new Set([
    "bosses_of_mass_destruction:earthdive_spear", // Crashes
    "galosphere:preserved_flesh", // Food item
    "actuallyadditions:coffee_cup", // Food item
]);

const customDurabilities = {
    "cataclysm:coral_spear": 600,
    "cataclysm:coral_bardiche": 900,
    "aether:golden_parachute": 1500,
};

ItemEvents.modification((event) => {
    event.modify(/.*:/, (item) => {
        // Skip items that don't have durability
        if (item.maxDamage <= 0) return;

        const id = item.id;

        // Check blacklist
        if (blacklist.has(id)) return;

        // Check for a custom durability override
        if (customDurabilities[id] !== undefined) {
            item.maxDamage = customDurabilities[id];
            return;
        }

        // Check if the item is armor and apply the appropriate multiplier
        if (item.getItem() instanceof $ArmorItem) {
            item.maxDamage *= armorFactor;
        } else if (item.getItem() instanceof $ShieldItem) {
            item.maxDamage *= shieldFactor;
        } else {
            item.maxDamage *= toolFactor;
        }
    });
});
