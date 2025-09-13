const fifteenPercent =
    "pickaxe|rapier|cutlass|scimitar|machete|anubis_wrath|saber|sabre|scythe|tide_dweller";
const twentyFivePercent =
    "claymore|great_sword|greatsword|the_incinerator|sharp_bone_jaw|glaive|pike|spear|lance|tefnuts_call_halberd";
const thirtyFivePercent = "mace|axe|paxel|eater_of_the_souls|trident";
const fiftyPercent =
    "great_hammer|greathammer|war_hammer|warhammer|gebs_might|shus_exile|infernal_forge";
const seventyFivePercent = "blacksmith_gavel|montus_strike|troll_weapon";
const critTen = "katana|saber|dagger|rapier|magicbane|divider";

const toolFactor = 2;
const armorFactor = 10;

// Items that this script will not touch
let blacklist = [
    "bosses_of_mass_destruction:earthdive_spear", // Crashes
    "galosphere:preserved_flesh", // Food item
    "actuallyadditions:coffee_cup", // Food item
];

let customDurabilities = [
    {
        id: "cataclysm:coral_spear",
        durability: 600,
    },
    {
        id: "cataclysm:coral_bardiche",
        durability: 900,
    },
    {
        id: "aether:golden_parachute",
        durability: 1500,
    },
];

ItemEvents.modification((event) => {
    Item.list.forEach((item) => {
        if (item.maxDamage != 0) {
            // Double the durability of every item
            event.modify(item, (tool) => {
                // Avoid modifying blacklisted items
                if (blacklist.includes(tool.id.toString())) {
                    return;
                }

                if (
                    customDurabilities.some((d) => d.id === tool.id.toString())
                ) {
                    let customDurability = customDurabilities.find(
                        (d) => d.id === tool.id.toString()
                    );
                    try {
                        tool.maxDamage = customDurability.durability;
                    } catch (error) {
                        console.error(
                            `Error setting custom durability for ${tool.id}:`,
                            error
                        );
                    }

                    return;
                }

                try {
                    let armorAttribute = Item.of(item)
                        .getItem()
                        .getAttributes("generic.armor");

                    if (armorAttribute[0]) {
                        tool.maxDamage *= armorFactor;
                        // console.log(`${tool.id} is armor`);
                    } else {
                        tool.maxDamage *= toolFactor;
                        // console.log(`${tool.id} is not armor`);
                    }
                } catch (error) {
                    // console.log("Error when applying durability to " + tool.id.toString());
                }
            });
        }
    });
});
