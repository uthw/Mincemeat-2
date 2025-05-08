ServerEvents.highPriorityData((event) => {
    let tweaks = [
        {
            path: "rod/bamboo",
            cost: 1,
            gain: 1,
        },
        {
            path: "gem/diopside",
            cost: 5,
            gain: 3,
        },
        {
            path: "gem/blue_skies_diopside", // duplicate
            cost: 5,
            gain: 3,
        },
        {
            path: "metal/create_andesite_alloy",
            cost: -1,
            gain: 3,
        },
        {
            path: "metal/create/andesite_alloy", // duplicate
            cost: -1,
            gain: 3,
        },
        {
            path: "socket/socket_alexscaves_amber_curiosity",
            cost: 2,
            gain: 1,
        },
        {
            path: "socket/socket_aether_golden_amber",
            cost: 2,
            gain: 1,
        },
        {
            path: "metal/falsite",
            cost: 1,
            gain: 3,
        },
        {
            path: "bone/bone",
            cost: 1,
            gain: 3,
        },
        {
            path: "bone/frozen_bone",
            cost: 1,
            gain: 2,
        },
        {
            path: "bone/alexscaves_heavy_bone",
            cost: 2,
            gain: 4,
        },
        {
            path: "bone/dragon_bone",
            cost: 2,
            gain: 4,
        },
        {
            path: "metal/enigmatic_legacy/etherium",
            cost: 4,
            gain: 4,
        },
        {
            path: "metal/create/zinc",
            cost: 2,
            gain: 3,
        },
        {
            path: "metal/aquaculture/neptunium_ingot",
            cost: 3,
            gain: 4,
        },
        {
            path: "metal/tin",
            cost: 1,
            gain: 3,
        },
        {
            path: "metal/iron",
            cost: 2,
            gain: 4,
        },
        {
            path: "gem/diamond",
            cost: 3,
            gain: 2,
        },
        {
            path: "metal/elementium",
            cost: -1,
            gain: 6,
        },
        {
            path: "rod/stick",
            cost: 1,
            gain: 2,
        },
        {
            path: "gem/emerald",
            cost: 3,
            gain: 2,
        },
        {
            path: "metal/aether_phoenix",
            cost: 3,
            gain: 5,
        },
        {
            path: "metal/vobrivium_ingot",
            cost: 2,
            gain: 4,
        },
        {
            path: "gem/blue_skies_pyrope",
            cost: 1,
        },
        {
            path: "gem/pyrope", // duplicate
            cost: 1,
        },
        {
            path: "metal/aquite",
            gain: 5,
        },
        {
            path: "rod/enigmatic_legacy/ender_rod",
            gain: 3,
        },
        {
            path: "rod/end_rod",
            gain: 3,
        },
        {
            path: "rod/forged_beam",
            gain: 5,
        },
        {
            path: "rod/blaze_rod",
            gain: 3,
        },
        // {
        //     path: "metal/sky",
        //     gain: 6,
        // },
        {
            path: "bone/wither_bone",
            gain: 4,
        },
        {
            path: "rod/frosted_helve",
            gain: 4,
        },
        // handles
        {
            path: "metal/undergarden_forgotten_metal",
            gain: 4,
        },
        {
            path: "metal/osmium",
            gain: 6,
        },
        {
            path: "metal/manasteel",
            gain: 4,
        },
        {
            path: "metal/nickel",
            gain: 3,
        },
        {
            path: "metal/netherite",
            gain: 5,
        },
        {
            path: "metal/cataclysm/witherite_ingot",
            gain: 6,
        },
        {
            path: "metal/forged_steel_ingot",
            gain: 6,
        },
        {
            path: "metal/copper",
            gain: 3,
        },
        {
            path: "metal/create_brass",
            gain: 4,
        },
        {
            path: "metal/create/brass", // duplicate
            gain: 4,
        },

        // Any compact wood JSONs
        {
            path: "wood/spruce",
            gain: 2,
        },
        {
            path: "wood/oak",
            gain: 2,
        },
        {
            path: "wood/jungle",
            gain: 2,
        },
        {
            path: "wood/dark_oak",
            gain: 2,
        },
        {
            path: "wood/cherry", // for some reason Tetra made this one have different stats
            gain: 2,
        },
        {
            path: "wood/birch",
            gain: 2,
        },
        {
            path: "wood/acacia",
            gain: 2,
        },
        // wood
        {
            path: "wood/warped",
            gain: 2,
        },
        {
            path: "wood/crimson",
            gain: 3,
        },
        {
            path: "wood/aether_redux_cloudcap",
            gain: 3,
        },
        {
            path: "wood/aether_redux_glacia",
            gain: 3,
        },
        {
            path: "wood/starlit",
            gain: 2,
        },
        {
            path: "wood/blue_skies_starlit_wood", // duplicate
            gain: 2,
        },
        {
            path: "wood/dusk",
            gain: 2,
        },
        {
            path: "wood/blue_skies_dusk", // duplicate
            gain: 2,
        },
        {
            path: "wood/ecologics_flowering_azalea",
            gain: 2,
        },
        // {
        //     path: "wood/ancient_wood",
        //     gain: 3,
        // },
        {
            path: "wood/bluebright",
            gain: 2,
        },
        {
            path: "wood/blue_skies_bluebright", // duplicate
            gain: 2,
        },
        {
            path: "wood/comet",
            gain: 2,
        },
        {
            path: "wood/blue_skies_comet", // duplicate
            gain: 2,
        },
        {
            path: "wood/ecologics_azalea",
            gain: 2,
        },
        {
            path: "wood/livingwood",
            gain: 3,
        },
        {
            path: "wood/frostbright",
            gain: 3,
        },
        {
            path: "wood/blue_skies_frostbright", // duplicate
            gain: 3,
        },
        {
            path: "wood/ecologics_coconut",
            gain: 2,
        },
        {
            path: "wood/lunar_wood",
            gain: 2,
        },
        {
            path: "wood/blue_skies_lunar_wood", // duplicate
            gain: 2,
        },
        {
            path: "wood/deep_aether_cruderoot",
            gain: 3,
        },
        {
            path: "wood/outer_end_azure_wood",
            gain: 4,
        },
        {
            path: "wood/undergarden_grongle",
            gain: 2,
        },
        {
            path: "wood/aether_skyroot",
            gain: 2,
        },
        {
            path: "wood/deep_aether_sunroot",
            gain: 2,
        },
        {
            path: "wood/maple",
            gain: 2,
        },
        {
            path: "wood/blue_skies_maple", // duplicate
            gain: 2,
        },
        {
            path: "wood/undergarden_wigglewood",
            gain: 2,
        },
        {
            path: "wood/treated_wood",
            gain: 3,
        },
        {
            path: "wood/alexscaves_thornwood",
            gain: 4,
        },
        {
            path: "wood/ecologics_walnut",
            gain: 3,
        },
        {
            path: "wood/deep_aether_roseroot",
            gain: 3,
        },
        {
            path: "wood/aether_redux_blightwillow",
            gain: 4,
        },
        {
            path: "wood/undergarden_smogstem",
            gain: 3,
        },
        {
            path: "wood/deep_aether_conberry",
            gain: 3,
        },
        {
            path: "wood/deep_aether_yagroot",
            gain: 4,
        },
        {
            path: "wood/dreamwood", // seems like you need Terrasteel to get this
            gain: 5,
        },
        // hidden woods (wtf Quark) making these +3 because they are obtainable but hidden in the Holosphere
        {
            path: "wood/quark/blossom",
            gain: 3,
        },
        {
            path: "wood/quark/azalea",
            gain: 3,
        },
    ];

    // Don't edit anything below this line unless I tell you to
    tweaks.forEach((tweak) => {
        let jsonData = {};

        if (tweak.cost !== undefined) {
            jsonData.integrityCost = tweak.cost;
        }

        if (tweak.gain !== undefined) {
            jsonData.integrityGain = tweak.gain;
        }

        event.addJson(`tetra:materials/${tweak.path}`, jsonData);
    });
});
