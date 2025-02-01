const fifteenPercent =
    "pickaxe|rapier|cutlass|scimitar|machete|anubis_wrath|saber|sabre|scythe|tide_dweller";
const twentyFivePercent =
    "claymore|great_sword|greatsword|the_incinerator|sharp_bone_jaw|glaive|pike|spear|lance|tefnuts_call_halberd";
const thirtyFivePercent = "mace|axe|paxel|eater_of_the_souls|trident";
const fiftyPercent =
    "great_hammer|greathammer|war_hammer|warhammer|gebs_might|shus_exile|infernal_forge";
const seventyFivePercent = "blacksmith_gavel|montus_strike|troll_weapon";
const critTen = "katana|saber|dagger|rapier|magicbane|divider";

let blacklist = [
    "bosses_of_mass_destruction:earthdive_spear",
    "galosphere:preserved_flesh",
    "actuallyadditions:coffee_cup"
]

ItemEvents.modification((event) => {
    Item.list.forEach((item) => {
        // console.log(item.getDisplayName());
        if (item.maxDamage != 0) {
            // Double the durability of every item
            event.modify(item, (tool) => {
                if (blacklist.includes(tool.id.toString())) {
                    return;
                }

                try {
                    let armorAttribute = Item.of(item)
                        .getItem()
                        .getAttributes("generic.armor");
                    
                    if (armorAttribute[0]) {
                        tool.maxDamage *= 4;
                        console.log(`${tool.id} is armor`);
                    } else {
                        tool.maxDamage *= 2;
                        console.log(`${tool.id} is not armor`);
                    }

                    // let isArmor = Item.of(item).getItem().getAttributes("generic.armor")[0]["amount"] != 0;

                    // if (isArmor) {
                    //     tool.maxDamage *= 4;
                    //     console.log(`${tool.id} is armor`);
                    // } else {
                    //     tool.maxDamage *= 2;
                    // }
                } catch (error) { 
                    console.log("Error when applying durability to " + tool.id.toString());
                }
                
            });

            // // Hotfix lol
            // if (!item.getId() == "bosses_of_mass_destruction:earthdive_spear") {
            //     // Add armor penetration to heavy weapons and crit to stabbing weapons

            //     let toolId = item.getId();

            //     let matchFifteen = toolId.match(fifteenPercent);
            //     let matchTwentyFive = toolId.match(twentyFivePercent);
            //     let matchThirtyFive = toolId.match(thirtyFivePercent);
            //     let matchFifty = toolId.match(fiftyPercent);
            //     let matchSeventyFive = toolId.match(seventyFivePercent);
            //     let matchCrit = toolId.match(critTen);

            //     if (matchCrit) {
            //         event.modify(item, (tool) => {
            //             tool.addAttribute(
            //                 "obscure_api:critical_hit",
            //                 "ab3f55d3-645c-4f38-a497-9c13a33db5cf",
            //                 "crit",
            //                 0.1,
            //                 "multiply_base"
            //             );
            //         });
            //     }
            //     if (matchSeventyFive) {
            //         event.modify(item, (tool) => {
            //             tool.addAttribute(
            //                 "obscure_api:penetration",
            //                 "42f502a6-5bd5-4c7b-9043-3cf5d484b049",
            //                 "armor_pen",
            //                 0.75,
            //                 "multiply_base"
            //             );
            //         });
            //     } else if (matchFifty) {
            //         event.modify(item, (tool) => {
            //             tool.addAttribute(
            //                 "obscure_api:penetration",
            //                 "42f502a6-5bd5-4c7b-9043-3cf5d484b049",
            //                 "armor_pen",
            //                 0.5,
            //                 "multiply_base"
            //             );
            //         });
            //     } else if (matchThirtyFive) {
            //         event.modify(item, (tool) => {
            //             tool.addAttribute(
            //                 "obscure_api:penetration",
            //                 "42f502a6-5bd5-4c7b-9043-3cf5d484b049",
            //                 "armor_pen",
            //                 0.35,
            //                 "multiply_base"
            //             );
            //         });
            //     } else if (matchTwentyFive) {
            //         event.modify(item, (tool) => {
            //             tool.addAttribute(
            //                 "obscure_api:penetration",
            //                 "42f502a6-5bd5-4c7b-9043-3cf5d484b049",
            //                 "armor_pen",
            //                 0.25,
            //                 "multiply_base"
            //             );
            //         });
            //     } else if (matchFifteen) {
            //         event.modify(item, (tool) => {
            //             tool.addAttribute(
            //                 "obscure_api:penetration",
            //                 "42f502a6-5bd5-4c7b-9043-3cf5d484b049",
            //                 "armor_pen",
            //                 0.15,
            //                 "multiply_base"
            //             );
            //         });
            //     }
            // }
        }
    });
});
