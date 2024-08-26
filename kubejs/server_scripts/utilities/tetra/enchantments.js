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
            "naturesaura:natures_mend",
            "reliquary:severing",
            "apotheosis:capturing",
            "apothoesis:scavenger",
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
            "naturesaura:natures_mend",
            "reliquary:severing",
            "apotheosis:capturing",
            "apothoesis:scavenger",
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
            "naturesaura:natures_mend",
            "",
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
            "naturesaura:natures_mend",
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
];

ServerEvents.highPriorityData((event) => {
    tweaks.forEach((tweak) => {
        event.addJson(
            "tetra:tags/enchantment/additions/" + tweak.name + ".json",
            tweak
        );
    });
});
