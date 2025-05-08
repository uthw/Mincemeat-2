// refer to https://github.com/mickelus/tetra/blob/1.18/src/main/resources/data/tetra/tags/enchantment/additions

let tweaks = [
    {
        name: "edged_weapon",
        values: [
            // regular
            "enigmaticlegacy:slayer",
            "allurement:launch",
            "ensorcellation:leech",
            "ensorcellation:soulbound",
            "majruszsenchantments:telekinesis",
            "majruszsenchantments:death_wish",
            "apotheosis:knowledge",
            "ensorcellation:frost_aspect",
            "reliquary:severing",
            "apotheosis:capturing",
            "apothoesis:scavenger",
            "apotheosis:bane_of_illagers",
            "celestisynth:pulsation",
            "ensorcellation:vorpal",
            // curses
            "majruszsenchantments:breaking_curse",
            "majruszsenchantments:incompatibility_curse",
            "majruszsenchantments:fatigue_curse",
            "enigmaticlegacy:nemesis",
            "majruszsenchantments:slippery_curse",
            "allurement:ascension_curse",
            "allurement:mercy_curse",
            "allurement:fleeting_curse",
            // treasure
            "allurement:reforming",
            "ars_nouveau:reactive",
            "apotheosis:life_mending",
            "enderio:shimmer",
        ],
    },
    {
        name: "blunt_weapon",
        values: [
            // regular
            "enigmaticlegacy:slayer",
            "allurement:launch",
            "ensorcellation:leech",
            "ensorcellation:soulbound",
            "majruszsenchantments:telekinesis",
            "majruszsenchantments:death_wish",
            "apotheosis:knowledge",
            "ensorcellation:frost_aspect",
            "reliquary:severing",
            "apotheosis:capturing",
            "apothoesis:scavenger",
            "apotheosis:bane_of_illagers",
            "celestisynth:pulsation",
            "ensorcellation:vorpal",
            // curses
            "majruszsenchantments:breaking_curse",
            "majruszsenchantments:incompatibility_curse",
            "majruszsenchantments:fatigue_curse",
            "enigmaticlegacy:nemesis",
            "majruszsenchantments:slippery_curse",
            "allurement:ascension_curse",
            "allurement:mercy_curse",
            "allurement:fleeting_curse",
            // treasure
            "allurement:reforming",
            "ars_nouveau:reactive",
            "apotheosis:life_mending",
            "enderio:shimmer",
        ],
    },
    {
        name: "block_breaker",
        values: [
            "majruszsenchantments:smelter",
            "ensorcellation:soulbound",
            "majruszsenchantments:telekinesis",
            "majruszsenchantments:breaking_curse",
            "majruszsenchantments:incompatibility_curse",
            "majruszsenchantments:fatigue_curse",
            "majruszsenchantments:slippery_curse",
            "allurement:ascension_curse",
            "allurement:mercy_curse",
            "allurement:fleeting_curse",
            "ensorcellation:excavating",
            "apotheosis:miners_fervor",
        ],
    },
    {
        name: "breakable",
        values: [
            "allurement:reforming",
            "ensorcellation:soulbound",
            "majruszsenchantments:telekinesis",
            "majruszsenchantments:breaking_curse",
            "majruszsenchantments:incompatibility_curse",
            "majruszsenchantments:fatigue_curse",
            "majruszsenchantments:slippery_curse",
            "allurement:ascension_curse",
            "allurement:mercy_curse",
            "allurement:fleeting_curse",
            "enderio:shimmer",
            "apotheosis:life_mending",
            "ars_nouveau:reactive",
        ],
    },
    {
        name: "bow",
        values: [
            "majruszsenchantments:telekinesis",
            "ensorcellation:quick_draw",
            "ensorcellation:trueshot",
            "enderio:withering",
            "majruszsenchantments:hunter",
            "apotheosis:endless_quiver",
            "ensorcellation:volley",
            "ensorcellation:hunter",
        ],
    },
    {
        name: "crossbow",
        values: [
            "majruszsenchantments:telekinesis",
            "enigmaticlegacy:ceaseless",
            "majruszsenchantments:hunter",
            "allurement:reeling",
            "allurement:spread_of_ailments",
            "enigmaticlegacy:sharpshooter",
            "apotheosis:crescendo",
        ],
    },
    {
        name: "throwable",
        values: [
            "minecraft:piercing",
            "apotheosis:spearfishing",
            "enigmaticlegacy:wrath",
            // "spartanweaponry:razors_edge",
            // "spartanweaponry:propel",
            // "spartanweaponry:expanse",
            // "spartanweaponry:hydrodynamic",
            // "spartanweaponry:incendiary",
            // "spartanweaponry:lucky_throw",
            // "spartanweaponry:supercharge",
        ],
    },
    {
        name: "pointy_weapon",
        values: [
            "enigmaticlegacy:slayer",
            "allurement:launch",
            "ensorcellation:leech",
            "ensorcellation:soulbound",
            "majruszsenchantments:telekinesis",
            "majruszsenchantments:death_wish",
            "apotheosis:knowledge",
            "ensorcellation:frost_aspect",
            "reliquary:severing",
            "apotheosis:capturing",
            "apotheosis:bane_of_illagers",
            "celestisynth:pulsation",
            "ensorcellation:vorpal",
    
            // curses
            "majruszsenchantments:breaking_curse",
            "majruszsenchantments:incompatibility_curse",
            "majruszsenchantments:fatigue_curse",
            "enigmaticlegacy:nemesis",
            "majruszsenchantments:slippery_curse",
            "allurement:ascension_curse",
            "allurement:fleeting_curse",

            "minecraft:sharpness",
            "minecraft:fire_aspect",
            "minecraft:knockback",
            "minecraft:looting",
        ],
    },
];

ServerEvents.highPriorityData((event) => {
    tweaks.forEach((tweak) => {
        event.addJson(
            "tetra:tags/enchantment/additions/" + tweak.name + ".json",
            tweak
        );
    });
});
