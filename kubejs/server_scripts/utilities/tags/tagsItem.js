ServerEvents.tags("item", (event) => {
    const removeAll = [
        // Remove all items from the tag
        // "curios:artifact_head",
        // "curios:artifact_necklace",
        // "curios:artifact_body",
        // "curios:artifact_bracelet",
        // "curios:artifact_belt",
        // "iceandfire:tempt_hippocampus",
    ];

    removeAll.forEach((removal) => {
        event.removeAll(removal);
    });

    const add = [
        // Get [0] tag collection and add [1] to it
        // ["farmersdelight:tools/knives", "#forge:tools/knives"],
        ["forge:death_worm_chitins", "iceandfire:deathworm_chitin_yellow"],
        ["forge:death_worm_chitins", "iceandfire:deathworm_chitin_white"],
        ["forge:death_worm_chitins", "iceandfire:deathworm_chitin_red"],
        ["forge:bowls", "ecologics:coconut_husk"],
        ["forge:bowls", "minecraft:bowl"],
        ["create:stone_types/limestone", "quark:limestone"],
        ["create:stone_types/limestone", "alexscaves:limestone"],
        // ["forge:bowls"]
        // ["iceandfire:tempt_hippocampus", "deep_aether:raw_aerglow_fish"],
        // ["iceandfire:tempt_hippocampus", "deep_aether:cooked_aerglow_fish"],
        // ["iceandfire:tempt_hippocampus", "alexscaves:tripodfish"],
        // ["iceandfire:tempt_hippocampus", "alexscaves:cooked_tripodfish"],
        ["curios:head", "l2artifacts:head"],
        ["curios:necklace", "l2artifacts:necklace"],
        ["curios:body", "l2artifacts:body"],
        ["curios:bracelet", "l2artifacts:bracelet"],
        ["curios:belt", "l2artifacts:belt"],
        ["forge:workbench", "biomeswevegone:maple_crafting_table"],
        ["forge:workbench", "biomeswevegone:baobab_crafting_table"],
        ["forge:workbench", "biomeswevegone:blue_enchanted_crafting_table"],
        ["forge:workbench", "biomeswevegone:cika_crafting_table"],
        ["forge:workbench", "biomeswevegone:cypress_crafting_table"],
        ["forge:workbench", "biomeswevegone:ebony_crafting_table"],
        ["forge:workbench", "biomeswevegone:fir_crafting_table"],
        ["forge:workbench", "biomeswevegone:florus_crafting_table"],
        ["forge:workbench", "biomeswevegone:green_enchanted_crafting_table"],
        ["forge:workbench", "biomeswevegone:holly_crafting_table"],
        ["forge:workbench", "biomeswevegone:ironwood_crafting_table"],
        ["forge:workbench", "biomeswevegone:jacaranda_crafting_table"],
        ["forge:workbench", "biomeswevegone:mahogany_crafting_table"],
        ["forge:workbench", "biomeswevegone:palm_crafting_table"],
        ["forge:workbench", "biomeswevegone:pine_crafting_table"],
        ["forge:workbench", "biomeswevegone:rainbow_eucalyptus_crafting_table"],
        ["forge:workbench", "biomeswevegone:redwood_crafting_table"],
        ["forge:workbench", "biomeswevegone:sakura_crafting_table"],
        ["forge:workbench", "biomeswevegone:skyris_crafting_table"],
        ["forge:workbench", "biomeswevegone:white_mangrove_crafting_table"],
        ["forge:workbench", "biomeswevegone:willow_crafting_table"],
        ["forge:workbench", "biomeswevegone:witch_hazel_crafting_table"],
        ["forge:workbench", "biomeswevegone:zelkova_crafting_table"],
        ["forge:workbench", "biomeswevegone:aspen_crafting_table"],
        ["create:modded_stripped_logs", "biomeswevegone:stripped_aspen_log"],
        ["create:modded_stripped_logs", "biomeswevegone:stripped_maple_log"],
        ["create:modded_stripped_logs", "biomeswevegone:stripped_baobab_log"],
        [
            "create:modded_stripped_logs",
            "biomeswevegone:stripped_blue_enchanted_log",
        ],
        ["create:modded_stripped_logs", "biomeswevegone:stripped_cika_log"],
        ["create:modded_stripped_logs", "biomeswevegone:stripped_cypress_log"],
        ["create:modded_stripped_logs", "biomeswevegone:stripped_ebony_log"],
        ["create:modded_stripped_logs", "biomeswevegone:stripped_fir_log"],
        ["create:modded_stripped_logs", "biomeswevegone:stripped_florus_log"],
        [
            "create:modded_stripped_logs",
            "biomeswevegone:stripped_green_enchanted_log",
        ],
        ["create:modded_stripped_logs", "biomeswevegone:stripped_holly_log"],
        ["create:modded_stripped_logs", "biomeswevegone:stripped_ironwood_log"],
        [
            "create:modded_stripped_logs",
            "biomeswevegone:stripped_jacaranda_log",
        ],
        ["create:modded_stripped_logs", "biomeswevegone:stripped_mahogany_log"],
        ["create:modded_stripped_logs", "biomeswevegone:stripped_palm_log"],
        ["create:modded_stripped_logs", "biomeswevegone:stripped_pine_log"],
        [
            "create:modded_stripped_logs",
            "biomeswevegone:stripped_rainbow_eucalyptus_log",
        ],
        ["create:modded_stripped_logs", "biomeswevegone:stripped_redwood_log"],
        ["create:modded_stripped_logs", "biomeswevegone:stripped_sakura_log"],
        ["create:modded_stripped_logs", "biomeswevegone:stripped_skyris_log"],
        [
            "create:modded_stripped_logs",
            "biomeswevegone:stripped_white_mangrove_log",
        ],
        ["create:modded_stripped_logs", "biomeswevegone:stripped_willow_log"],
        [
            "create:modded_stripped_logs",
            "biomeswevegone:stripped_witch_hazel_log",
        ],
        ["create:modded_stripped_logs", "biomeswevegone:stripped_zelkova_log"],
        ["create:modded_stripped_logs", "biomeswevegone:stripped_aspen_log"],
        ["create:modded_stripped_logs", "caverns_and_chasms:stripped_azalea_log"]
    ];

    add.forEach((addition) => {
        event.add(addition[0], addition[1]);
    });
});
