// Buff damage for two-handed weapons
// Spartan Weaponry probably won't work due to their damage values being hardcoded

// const fifteenPercent =
//     "pickaxe|rapier|cutlass|scimitar|machete|anubis_wrath|saber|sabre|scythe|tide_dweller";
// const twentyFivePercent =
//     "claymore|great_sword|greatsword|the_incinerator|sharp_bone_jaw|glaive|pike|spear|lance|tefnuts_call|halberd";
// const thirtyFivePercent = "mace|axe|paxel|eater_of_the_souls|trident";
// const fiftyPercent =
//     "great_hammer|greathammer|war_hammer|warhammer|gebs_might|shus_exile|infernal_forge";
// const seventyFivePercent = "blacksmith_gavel|montus_strike|troll_weapon";
// const critTen = "katana|saber|dagger|rapier|magicbane|divider";

// The number the damage is multiplied by
let coeff = 1.25;

let twoHandedWeaponsString =
    "claymore|great_sword|greatsword|infinitum|great_hammer|greathammer|war_hammer|warhammer|maul|infernal_forge|blacksmith_gavel|double_axe|doubleaxe|war_axe|waraxe|great_axe|greataxe|scythe|halberd|glaive|anchor|shredder|katana|bardiche|fractal|meat_shredder|the_incinerator|void_forge|zwei|troll_weapon";

let twoHandedWeaponsList = twoHandedWeaponsString.split("|");

function isTwoHanded(input) {
    input = input.toString();

    for (let i = 0; i < twoHandedWeaponsList.length; i++) {
        if (input.indexOf(twoHandedWeaponsList[i]) !== -1) {
            return true;
        }
    }

    return false;
}

// Not planning on adding Armor Penetration which I did in Mince1 instead of the damage increase, but it may happen if I get sufficiently bored.
ItemEvents.modification((event) => {
    Item.list.forEach((item) => {
        event.modify(item, (twoHandedWeapon) => {
            // Using != just for readability
            if (
                twoHandedWeapon.attackDamage > 0 &&
                isTwoHanded(twoHandedWeapon)
            ) {
                //1.5x increase rounded to the nearest 0.1
                // console.log(
                //     `old attack damage of ${twoHandedWeapon.id}: ${twoHandedWeapon.attackDamage}`
                // );
                let result = twoHandedWeapon.attackDamage * coeff;

                result = Math.round(result * 10) / 10;

                // console.log()
                twoHandedWeapon.setAttackDamage(result);

                // console.log(
                //     `new attack damage of ${twoHandedWeapon.id}: ${result}`
                // );
            }
        });
    });
});
