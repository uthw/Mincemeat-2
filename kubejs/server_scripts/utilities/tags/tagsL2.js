// ServerEvents.highPriorityData((event) => {
//     let artifactBelt = {
//         values: [
//             "l2artifacts:gambler_belt_1",
//             "l2artifacts:gambler_belt_2",
//             "l2artifacts:gambler_belt_3",
//             "l2artifacts:gambler_belt_4",
//             "l2artifacts:gambler_belt_5",
//             "l2artifacts:berserker_belt_1",
//             "l2artifacts:berserker_belt_2",
//             "l2artifacts:berserker_belt_3",
//             "l2artifacts:berserker_belt_4",
//             "l2artifacts:berserker_belt_5",
//             "l2artifacts:archer_belt_1",
//             "l2artifacts:archer_belt_2",
//             "l2artifacts:archer_belt_3",
//             "l2artifacts:archer_belt_4",
//             "l2artifacts:archer_belt_5",
//             "l2artifacts:saint_belt_1",
//             "l2artifacts:saint_belt_2",
//             "l2artifacts:saint_belt_3",
//             "l2artifacts:saint_belt_4",
//             "l2artifacts:saint_belt_5",
//             "l2artifacts:perfection_belt_1",
//             "l2artifacts:perfection_belt_2",
//             "l2artifacts:perfection_belt_3",
//             "l2artifacts:perfection_belt_4",
//             "l2artifacts:perfection_belt_5",
//             "l2artifacts:froze_belt_1",
//             "l2artifacts:froze_belt_2",
//             "l2artifacts:froze_belt_3",
//             "l2artifacts:froze_belt_4",
//             "l2artifacts:froze_belt_5",
//             "l2artifacts:executor_belt_1",
//             "l2artifacts:executor_belt_2",
//             "l2artifacts:executor_belt_3",
//             "l2artifacts:executor_belt_4",
//             "l2artifacts:executor_belt_5",
//             "l2artifacts:physical_belt_1",
//             "l2artifacts:physical_belt_2",
//             "l2artifacts:physical_belt_3",
//             "l2artifacts:physical_belt_4",
//             "l2artifacts:physical_belt_5",
//             "l2artifacts:wrath_belt_1",
//             "l2artifacts:wrath_belt_2",
//             "l2artifacts:wrath_belt_3",
//             "l2artifacts:wrath_belt_4",
//             "l2artifacts:wrath_belt_5",
//             "l2artifacts:vampire_belt_1",
//             "l2artifacts:vampire_belt_2",
//             "l2artifacts:vampire_belt_3",
//             "l2artifacts:vampire_belt_4",
//             "l2artifacts:vampire_belt_5",
//             "l2artifacts:gluttony_belt_1",
//             "l2artifacts:gluttony_belt_2",
//             "l2artifacts:gluttony_belt_3",
//             "l2artifacts:gluttony_belt_4",
//             "l2artifacts:gluttony_belt_5",
//             "l2artifacts:fury_of_fallen_belt_1",
//             "l2artifacts:fury_of_fallen_belt_2",
//             "l2artifacts:fury_of_fallen_belt_3",
//             "l2artifacts:fury_of_fallen_belt_4",
//             "l2artifacts:fury_of_fallen_belt_5",
//             "l2artifacts:ancient_scroll_belt_1",
//             "l2artifacts:ancient_scroll_belt_2",
//             "l2artifacts:ancient_scroll_belt_3",
//             "l2artifacts:ancient_scroll_belt_4",
//             "l2artifacts:ancient_scroll_belt_5",
//             "l2artifacts:luck_clover_belt_4",
//             "l2artifacts:abyss_medal_belt_1",
//             "l2artifacts:abyss_medal_belt_2",
//             "l2artifacts:abyss_medal_belt_3",
//             "l2artifacts:abyss_medal_belt_4",
//             "l2artifacts:abyss_medal_belt_5",
//             "l2artifacts:long_shooter_belt_1",
//             "l2artifacts:long_shooter_belt_2",
//             "l2artifacts:long_shooter_belt_3",
//             "l2artifacts:long_shooter_belt_4",
//             "l2artifacts:long_shooter_belt_5",
//             "l2artifacts:cell_belt_1",
//             "l2artifacts:cell_belt_2",
//             "l2artifacts:cell_belt_3",
//             "l2artifacts:cell_belt_4",
//             "l2artifacts:cell_belt_5",
//             "l2artifacts:flesh_belt_1",
//             "l2artifacts:flesh_belt_2",
//             "l2artifacts:flesh_belt_3",
//             "l2artifacts:flesh_belt_4",
//             "l2artifacts:flesh_belt_5",
//             "l2artifacts:fungus_belt_1",
//             "l2artifacts:fungus_belt_2",
//             "l2artifacts:fungus_belt_3",
//             "l2artifacts:fungus_belt_4",
//             "l2artifacts:fungus_belt_5",
//             "l2artifacts:gilded_belt_1",
//             "l2artifacts:gilded_belt_2",
//             "l2artifacts:gilded_belt_3",
//             "l2artifacts:gilded_belt_4",
//             "l2artifacts:gilded_belt_5",
//             "l2artifacts:poisonous_belt_1",
//             "l2artifacts:poisonous_belt_2",
//             "l2artifacts:poisonous_belt_3",
//             "l2artifacts:poisonous_belt_4",
//             "l2artifacts:poisonous_belt_5",
//             "l2artifacts:slimy_belt_1",
//             "l2artifacts:slimy_belt_2",
//             "l2artifacts:slimy_belt_3",
//             "l2artifacts:slimy_belt_4",
//             "l2artifacts:slimy_belt_5",
//             "l2artifacts:thermal_belt_1",
//             "l2artifacts:thermal_belt_2",
//             "l2artifacts:thermal_belt_3",
//             "l2artifacts:thermal_belt_4",
//             "l2artifacts:thermal_belt_5",
//             "l2artifacts:mage_belt_1",
//             "l2artifacts:mage_belt_2",
//             "l2artifacts:mage_belt_3",
//             "l2artifacts:mage_belt_4",
//             "l2artifacts:mage_belt_5",
//             "l2artifacts:pirate_belt_1",
//             "l2artifacts:pirate_belt_2",
//             "l2artifacts:pirate_belt_3",
//             "l2artifacts:pirate_belt_4",
//             "l2artifacts:pirate_belt_5",
//         ],
//     };

//     let artifactBody = {
//         values: [
//             "l2artifacts:gambler_body_1",
//             "l2artifacts:gambler_body_2",
//             "l2artifacts:gambler_body_3",
//             "l2artifacts:gambler_body_4",
//             "l2artifacts:gambler_body_5",
//             "l2artifacts:berserker_body_1",
//             "l2artifacts:berserker_body_2",
//             "l2artifacts:berserker_body_3",
//             "l2artifacts:berserker_body_4",
//             "l2artifacts:berserker_body_5",
//             "l2artifacts:archer_body_1",
//             "l2artifacts:archer_body_2",
//             "l2artifacts:archer_body_3",
//             "l2artifacts:archer_body_4",
//             "l2artifacts:archer_body_5",
//             "l2artifacts:saint_body_1",
//             "l2artifacts:saint_body_2",
//             "l2artifacts:saint_body_3",
//             "l2artifacts:saint_body_4",
//             "l2artifacts:saint_body_5",
//             "l2artifacts:perfection_body_1",
//             "l2artifacts:perfection_body_2",
//             "l2artifacts:perfection_body_3",
//             "l2artifacts:perfection_body_4",
//             "l2artifacts:perfection_body_5",
//             "l2artifacts:froze_body_1",
//             "l2artifacts:froze_body_2",
//             "l2artifacts:froze_body_3",
//             "l2artifacts:froze_body_4",
//             "l2artifacts:froze_body_5",
//             "l2artifacts:executor_body_1",
//             "l2artifacts:executor_body_2",
//             "l2artifacts:executor_body_3",
//             "l2artifacts:executor_body_4",
//             "l2artifacts:executor_body_5",
//             "l2artifacts:physical_body_1",
//             "l2artifacts:physical_body_2",
//             "l2artifacts:physical_body_3",
//             "l2artifacts:physical_body_4",
//             "l2artifacts:physical_body_5",
//             "l2artifacts:wrath_body_1",
//             "l2artifacts:wrath_body_2",
//             "l2artifacts:wrath_body_3",
//             "l2artifacts:wrath_body_4",
//             "l2artifacts:wrath_body_5",
//             "l2artifacts:vampire_body_1",
//             "l2artifacts:vampire_body_2",
//             "l2artifacts:vampire_body_3",
//             "l2artifacts:vampire_body_4",
//             "l2artifacts:vampire_body_5",
//             "l2artifacts:gluttony_body_1",
//             "l2artifacts:gluttony_body_2",
//             "l2artifacts:gluttony_body_3",
//             "l2artifacts:gluttony_body_4",
//             "l2artifacts:gluttony_body_5",
//             "l2artifacts:fury_of_fallen_body_1",
//             "l2artifacts:fury_of_fallen_body_2",
//             "l2artifacts:fury_of_fallen_body_3",
//             "l2artifacts:fury_of_fallen_body_4",
//             "l2artifacts:fury_of_fallen_body_5",
//             "l2artifacts:ancient_scroll_body_1",
//             "l2artifacts:ancient_scroll_body_2",
//             "l2artifacts:ancient_scroll_body_3",
//             "l2artifacts:ancient_scroll_body_4",
//             "l2artifacts:ancient_scroll_body_5",
//             "l2artifacts:luck_clover_body_4",
//             "l2artifacts:abyss_medal_body_1",
//             "l2artifacts:abyss_medal_body_2",
//             "l2artifacts:abyss_medal_body_3",
//             "l2artifacts:abyss_medal_body_4",
//             "l2artifacts:abyss_medal_body_5",
//             "l2artifacts:cell_body_1",
//             "l2artifacts:cell_body_2",
//             "l2artifacts:cell_body_3",
//             "l2artifacts:cell_body_4",
//             "l2artifacts:cell_body_5",
//             "l2artifacts:flesh_body_1",
//             "l2artifacts:flesh_body_2",
//             "l2artifacts:flesh_body_3",
//             "l2artifacts:flesh_body_4",
//             "l2artifacts:flesh_body_5",
//             "l2artifacts:fungus_body_1",
//             "l2artifacts:fungus_body_2",
//             "l2artifacts:fungus_body_3",
//             "l2artifacts:fungus_body_4",
//             "l2artifacts:fungus_body_5",
//             "l2artifacts:gilded_body_1",
//             "l2artifacts:gilded_body_2",
//             "l2artifacts:gilded_body_3",
//             "l2artifacts:gilded_body_4",
//             "l2artifacts:gilded_body_5",
//             "l2artifacts:poisonous_body_1",
//             "l2artifacts:poisonous_body_2",
//             "l2artifacts:poisonous_body_3",
//             "l2artifacts:poisonous_body_4",
//             "l2artifacts:poisonous_body_5",
//             "l2artifacts:slimy_body_1",
//             "l2artifacts:slimy_body_2",
//             "l2artifacts:slimy_body_3",
//             "l2artifacts:slimy_body_4",
//             "l2artifacts:slimy_body_5",
//             "l2artifacts:thermal_body_1",
//             "l2artifacts:thermal_body_2",
//             "l2artifacts:thermal_body_3",
//             "l2artifacts:thermal_body_4",
//             "l2artifacts:thermal_body_5",
//             "l2artifacts:mage_body_1",
//             "l2artifacts:mage_body_2",
//             "l2artifacts:mage_body_3",
//             "l2artifacts:mage_body_4",
//             "l2artifacts:mage_body_5",
//             "l2artifacts:pirate_body_1",
//             "l2artifacts:pirate_body_2",
//             "l2artifacts:pirate_body_3",
//             "l2artifacts:pirate_body_4",
//             "l2artifacts:pirate_body_5",
//         ],
//     };

//     let artifactBracelet = {
//         values: [
//             "l2artifacts:gambler_bracelet_1",
//             "l2artifacts:gambler_bracelet_2",
//             "l2artifacts:gambler_bracelet_3",
//             "l2artifacts:gambler_bracelet_4",
//             "l2artifacts:gambler_bracelet_5",
//             "l2artifacts:berserker_bracelet_1",
//             "l2artifacts:berserker_bracelet_2",
//             "l2artifacts:berserker_bracelet_3",
//             "l2artifacts:berserker_bracelet_4",
//             "l2artifacts:berserker_bracelet_5",
//             "l2artifacts:archer_bracelet_1",
//             "l2artifacts:archer_bracelet_2",
//             "l2artifacts:archer_bracelet_3",
//             "l2artifacts:archer_bracelet_4",
//             "l2artifacts:archer_bracelet_5",
//             "l2artifacts:saint_bracelet_1",
//             "l2artifacts:saint_bracelet_2",
//             "l2artifacts:saint_bracelet_3",
//             "l2artifacts:saint_bracelet_4",
//             "l2artifacts:saint_bracelet_5",
//             "l2artifacts:perfection_bracelet_1",
//             "l2artifacts:perfection_bracelet_2",
//             "l2artifacts:perfection_bracelet_3",
//             "l2artifacts:perfection_bracelet_4",
//             "l2artifacts:perfection_bracelet_5",
//             "l2artifacts:froze_bracelet_1",
//             "l2artifacts:froze_bracelet_2",
//             "l2artifacts:froze_bracelet_3",
//             "l2artifacts:froze_bracelet_4",
//             "l2artifacts:froze_bracelet_5",
//             "l2artifacts:executor_bracelet_1",
//             "l2artifacts:executor_bracelet_2",
//             "l2artifacts:executor_bracelet_3",
//             "l2artifacts:executor_bracelet_4",
//             "l2artifacts:executor_bracelet_5",
//             "l2artifacts:physical_bracelet_1",
//             "l2artifacts:physical_bracelet_2",
//             "l2artifacts:physical_bracelet_3",
//             "l2artifacts:physical_bracelet_4",
//             "l2artifacts:physical_bracelet_5",
//             "l2artifacts:wrath_bracelet_1",
//             "l2artifacts:wrath_bracelet_2",
//             "l2artifacts:wrath_bracelet_3",
//             "l2artifacts:wrath_bracelet_4",
//             "l2artifacts:wrath_bracelet_5",
//             "l2artifacts:vampire_bracelet_1",
//             "l2artifacts:vampire_bracelet_2",
//             "l2artifacts:vampire_bracelet_3",
//             "l2artifacts:vampire_bracelet_4",
//             "l2artifacts:vampire_bracelet_5",
//             "l2artifacts:gluttony_bracelet_1",
//             "l2artifacts:gluttony_bracelet_2",
//             "l2artifacts:gluttony_bracelet_3",
//             "l2artifacts:gluttony_bracelet_4",
//             "l2artifacts:gluttony_bracelet_5",
//             "l2artifacts:fury_of_fallen_bracelet_1",
//             "l2artifacts:fury_of_fallen_bracelet_2",
//             "l2artifacts:fury_of_fallen_bracelet_3",
//             "l2artifacts:fury_of_fallen_bracelet_4",
//             "l2artifacts:fury_of_fallen_bracelet_5",
//             "l2artifacts:ancient_scroll_bracelet_1",
//             "l2artifacts:ancient_scroll_bracelet_2",
//             "l2artifacts:ancient_scroll_bracelet_3",
//             "l2artifacts:ancient_scroll_bracelet_4",
//             "l2artifacts:ancient_scroll_bracelet_5",
//             "l2artifacts:luck_clover_bracelet_4",
//             "l2artifacts:abyss_medal_bracelet_1",
//             "l2artifacts:abyss_medal_bracelet_2",
//             "l2artifacts:abyss_medal_bracelet_3",
//             "l2artifacts:abyss_medal_bracelet_4",
//             "l2artifacts:abyss_medal_bracelet_5",
//             "l2artifacts:long_shooter_bracelet_1",
//             "l2artifacts:long_shooter_bracelet_2",
//             "l2artifacts:long_shooter_bracelet_3",
//             "l2artifacts:long_shooter_bracelet_4",
//             "l2artifacts:long_shooter_bracelet_5",
//             "l2artifacts:cell_bracelet_1",
//             "l2artifacts:cell_bracelet_2",
//             "l2artifacts:cell_bracelet_3",
//             "l2artifacts:cell_bracelet_4",
//             "l2artifacts:cell_bracelet_5",
//             "l2artifacts:flesh_bracelet_1",
//             "l2artifacts:flesh_bracelet_2",
//             "l2artifacts:flesh_bracelet_3",
//             "l2artifacts:flesh_bracelet_4",
//             "l2artifacts:flesh_bracelet_5",
//             "l2artifacts:fungus_bracelet_1",
//             "l2artifacts:fungus_bracelet_2",
//             "l2artifacts:fungus_bracelet_3",
//             "l2artifacts:fungus_bracelet_4",
//             "l2artifacts:fungus_bracelet_5",
//             "l2artifacts:gilded_bracelet_1",
//             "l2artifacts:gilded_bracelet_2",
//             "l2artifacts:gilded_bracelet_3",
//             "l2artifacts:gilded_bracelet_4",
//             "l2artifacts:gilded_bracelet_5",
//             "l2artifacts:poisonous_bracelet_1",
//             "l2artifacts:poisonous_bracelet_2",
//             "l2artifacts:poisonous_bracelet_3",
//             "l2artifacts:poisonous_bracelet_4",
//             "l2artifacts:poisonous_bracelet_5",
//             "l2artifacts:thermal_bracelet_1",
//             "l2artifacts:thermal_bracelet_2",
//             "l2artifacts:thermal_bracelet_3",
//             "l2artifacts:thermal_bracelet_4",
//             "l2artifacts:thermal_bracelet_5",
//             "l2artifacts:mage_bracelet_1",
//             "l2artifacts:mage_bracelet_2",
//             "l2artifacts:mage_bracelet_3",
//             "l2artifacts:mage_bracelet_4",
//             "l2artifacts:mage_bracelet_5",
//             "l2artifacts:pirate_bracelet_1",
//             "l2artifacts:pirate_bracelet_2",
//             "l2artifacts:pirate_bracelet_3",
//             "l2artifacts:pirate_bracelet_4",
//             "l2artifacts:pirate_bracelet_5",
//         ],
//     };

//     let artifactHead = {
//         values: [
//             "l2artifacts:gambler_head_1",
//             "l2artifacts:gambler_head_2",
//             "l2artifacts:gambler_head_3",
//             "l2artifacts:gambler_head_4",
//             "l2artifacts:gambler_head_5",
//             "l2artifacts:berserker_head_1",
//             "l2artifacts:berserker_head_2",
//             "l2artifacts:berserker_head_3",
//             "l2artifacts:berserker_head_4",
//             "l2artifacts:berserker_head_5",
//             "l2artifacts:archer_head_1",
//             "l2artifacts:archer_head_2",
//             "l2artifacts:archer_head_3",
//             "l2artifacts:archer_head_4",
//             "l2artifacts:archer_head_5",
//             "l2artifacts:saint_head_1",
//             "l2artifacts:saint_head_2",
//             "l2artifacts:saint_head_3",
//             "l2artifacts:saint_head_4",
//             "l2artifacts:saint_head_5",
//             "l2artifacts:perfection_head_1",
//             "l2artifacts:perfection_head_2",
//             "l2artifacts:perfection_head_3",
//             "l2artifacts:perfection_head_4",
//             "l2artifacts:perfection_head_5",
//             "l2artifacts:damocles_head_1",
//             "l2artifacts:damocles_head_2",
//             "l2artifacts:damocles_head_3",
//             "l2artifacts:damocles_head_4",
//             "l2artifacts:damocles_head_5",
//             "l2artifacts:protection_head_1",
//             "l2artifacts:protection_head_2",
//             "l2artifacts:protection_head_3",
//             "l2artifacts:protection_head_4",
//             "l2artifacts:protection_head_5",
//             "l2artifacts:froze_head_1",
//             "l2artifacts:froze_head_2",
//             "l2artifacts:froze_head_3",
//             "l2artifacts:froze_head_4",
//             "l2artifacts:froze_head_5",
//             "l2artifacts:executor_head_1",
//             "l2artifacts:executor_head_2",
//             "l2artifacts:executor_head_3",
//             "l2artifacts:executor_head_4",
//             "l2artifacts:executor_head_5",
//             "l2artifacts:physical_head_1",
//             "l2artifacts:physical_head_2",
//             "l2artifacts:physical_head_3",
//             "l2artifacts:physical_head_4",
//             "l2artifacts:physical_head_5",
//             "l2artifacts:wrath_head_1",
//             "l2artifacts:wrath_head_2",
//             "l2artifacts:wrath_head_3",
//             "l2artifacts:wrath_head_4",
//             "l2artifacts:wrath_head_5",
//             "l2artifacts:photosynthesis_head_1",
//             "l2artifacts:photosynthesis_head_2",
//             "l2artifacts:photosynthesis_head_3",
//             "l2artifacts:photosynthesis_head_4",
//             "l2artifacts:photosynthesis_head_5",
//             "l2artifacts:vampire_head_1",
//             "l2artifacts:vampire_head_2",
//             "l2artifacts:vampire_head_3",
//             "l2artifacts:vampire_head_4",
//             "l2artifacts:vampire_head_5",
//             "l2artifacts:sun_block_head_1",
//             "l2artifacts:sun_block_head_2",
//             "l2artifacts:sun_block_head_3",
//             "l2artifacts:sun_block_head_4",
//             "l2artifacts:sun_block_head_5",
//             "l2artifacts:gluttony_head_1",
//             "l2artifacts:gluttony_head_2",
//             "l2artifacts:gluttony_head_3",
//             "l2artifacts:gluttony_head_4",
//             "l2artifacts:gluttony_head_5",
//             "l2artifacts:fury_of_fallen_head_1",
//             "l2artifacts:fury_of_fallen_head_2",
//             "l2artifacts:fury_of_fallen_head_3",
//             "l2artifacts:fury_of_fallen_head_4",
//             "l2artifacts:fury_of_fallen_head_5",
//             "l2artifacts:ancient_scroll_head_1",
//             "l2artifacts:ancient_scroll_head_2",
//             "l2artifacts:ancient_scroll_head_3",
//             "l2artifacts:ancient_scroll_head_4",
//             "l2artifacts:ancient_scroll_head_5",
//             "l2artifacts:abyss_medal_head_1",
//             "l2artifacts:abyss_medal_head_2",
//             "l2artifacts:abyss_medal_head_3",
//             "l2artifacts:abyss_medal_head_4",
//             "l2artifacts:abyss_medal_head_5",
//             "l2artifacts:long_shooter_head_1",
//             "l2artifacts:long_shooter_head_2",
//             "l2artifacts:long_shooter_head_3",
//             "l2artifacts:long_shooter_head_4",
//             "l2artifacts:long_shooter_head_5",
//             "l2artifacts:cell_head_1",
//             "l2artifacts:cell_head_2",
//             "l2artifacts:cell_head_3",
//             "l2artifacts:cell_head_4",
//             "l2artifacts:cell_head_5",
//             "l2artifacts:flesh_head_1",
//             "l2artifacts:flesh_head_2",
//             "l2artifacts:flesh_head_3",
//             "l2artifacts:flesh_head_4",
//             "l2artifacts:flesh_head_5",
//             "l2artifacts:fungus_head_1",
//             "l2artifacts:fungus_head_2",
//             "l2artifacts:fungus_head_3",
//             "l2artifacts:fungus_head_4",
//             "l2artifacts:fungus_head_5",
//             "l2artifacts:gilded_head_1",
//             "l2artifacts:gilded_head_2",
//             "l2artifacts:gilded_head_3",
//             "l2artifacts:gilded_head_4",
//             "l2artifacts:gilded_head_5",
//             "l2artifacts:poisonous_head_1",
//             "l2artifacts:poisonous_head_2",
//             "l2artifacts:poisonous_head_3",
//             "l2artifacts:poisonous_head_4",
//             "l2artifacts:poisonous_head_5",
//             "l2artifacts:slimy_head_1",
//             "l2artifacts:slimy_head_2",
//             "l2artifacts:slimy_head_3",
//             "l2artifacts:slimy_head_4",
//             "l2artifacts:slimy_head_5",
//             "l2artifacts:thermal_head_1",
//             "l2artifacts:thermal_head_2",
//             "l2artifacts:thermal_head_3",
//             "l2artifacts:thermal_head_4",
//             "l2artifacts:thermal_head_5",
//             "l2artifacts:mage_head_1",
//             "l2artifacts:mage_head_2",
//             "l2artifacts:mage_head_3",
//             "l2artifacts:mage_head_4",
//             "l2artifacts:mage_head_5",
//             "l2artifacts:pirate_head_1",
//             "l2artifacts:pirate_head_2",
//             "l2artifacts:pirate_head_3",
//             "l2artifacts:pirate_head_4",
//             "l2artifacts:pirate_head_5",
//         ],
//     };

//     let artifactNecklace = {
//         values: [
//             "l2artifacts:gambler_necklace_1",
//             "l2artifacts:gambler_necklace_2",
//             "l2artifacts:gambler_necklace_3",
//             "l2artifacts:gambler_necklace_4",
//             "l2artifacts:gambler_necklace_5",
//             "l2artifacts:berserker_necklace_1",
//             "l2artifacts:berserker_necklace_2",
//             "l2artifacts:berserker_necklace_3",
//             "l2artifacts:berserker_necklace_4",
//             "l2artifacts:berserker_necklace_5",
//             "l2artifacts:archer_necklace_1",
//             "l2artifacts:archer_necklace_2",
//             "l2artifacts:archer_necklace_3",
//             "l2artifacts:archer_necklace_4",
//             "l2artifacts:archer_necklace_5",
//             "l2artifacts:saint_necklace_1",
//             "l2artifacts:saint_necklace_2",
//             "l2artifacts:saint_necklace_3",
//             "l2artifacts:saint_necklace_4",
//             "l2artifacts:saint_necklace_5",
//             "l2artifacts:perfection_necklace_1",
//             "l2artifacts:perfection_necklace_2",
//             "l2artifacts:perfection_necklace_3",
//             "l2artifacts:perfection_necklace_4",
//             "l2artifacts:perfection_necklace_5",
//             "l2artifacts:froze_necklace_1",
//             "l2artifacts:froze_necklace_2",
//             "l2artifacts:froze_necklace_3",
//             "l2artifacts:froze_necklace_4",
//             "l2artifacts:froze_necklace_5",
//             "l2artifacts:executor_necklace_1",
//             "l2artifacts:executor_necklace_2",
//             "l2artifacts:executor_necklace_3",
//             "l2artifacts:executor_necklace_4",
//             "l2artifacts:executor_necklace_5",
//             "l2artifacts:physical_necklace_1",
//             "l2artifacts:physical_necklace_2",
//             "l2artifacts:physical_necklace_3",
//             "l2artifacts:physical_necklace_4",
//             "l2artifacts:physical_necklace_5",
//             "l2artifacts:wrath_necklace_1",
//             "l2artifacts:wrath_necklace_2",
//             "l2artifacts:wrath_necklace_3",
//             "l2artifacts:wrath_necklace_4",
//             "l2artifacts:wrath_necklace_5",
//             "l2artifacts:vampire_necklace_1",
//             "l2artifacts:vampire_necklace_2",
//             "l2artifacts:vampire_necklace_3",
//             "l2artifacts:vampire_necklace_4",
//             "l2artifacts:vampire_necklace_5",
//             "l2artifacts:gluttony_necklace_1",
//             "l2artifacts:gluttony_necklace_2",
//             "l2artifacts:gluttony_necklace_3",
//             "l2artifacts:gluttony_necklace_4",
//             "l2artifacts:gluttony_necklace_5",
//             "l2artifacts:fury_of_fallen_necklace_1",
//             "l2artifacts:fury_of_fallen_necklace_2",
//             "l2artifacts:fury_of_fallen_necklace_3",
//             "l2artifacts:fury_of_fallen_necklace_4",
//             "l2artifacts:fury_of_fallen_necklace_5",
//             "l2artifacts:ancient_scroll_necklace_1",
//             "l2artifacts:ancient_scroll_necklace_2",
//             "l2artifacts:ancient_scroll_necklace_3",
//             "l2artifacts:ancient_scroll_necklace_4",
//             "l2artifacts:ancient_scroll_necklace_5",
//             "l2artifacts:luck_clover_necklace_4",
//             "l2artifacts:abyss_medal_necklace_1",
//             "l2artifacts:abyss_medal_necklace_2",
//             "l2artifacts:abyss_medal_necklace_3",
//             "l2artifacts:abyss_medal_necklace_4",
//             "l2artifacts:abyss_medal_necklace_5",
//             "l2artifacts:long_shooter_necklace_1",
//             "l2artifacts:long_shooter_necklace_2",
//             "l2artifacts:long_shooter_necklace_3",
//             "l2artifacts:long_shooter_necklace_4",
//             "l2artifacts:long_shooter_necklace_5",
//             "l2artifacts:cell_necklace_1",
//             "l2artifacts:cell_necklace_2",
//             "l2artifacts:cell_necklace_3",
//             "l2artifacts:cell_necklace_4",
//             "l2artifacts:cell_necklace_5",
//             "l2artifacts:flesh_necklace_1",
//             "l2artifacts:flesh_necklace_2",
//             "l2artifacts:flesh_necklace_3",
//             "l2artifacts:flesh_necklace_4",
//             "l2artifacts:flesh_necklace_5",
//             "l2artifacts:fungus_necklace_1",
//             "l2artifacts:fungus_necklace_2",
//             "l2artifacts:fungus_necklace_3",
//             "l2artifacts:fungus_necklace_4",
//             "l2artifacts:fungus_necklace_5",
//             "l2artifacts:gilded_necklace_1",
//             "l2artifacts:gilded_necklace_2",
//             "l2artifacts:gilded_necklace_3",
//             "l2artifacts:gilded_necklace_4",
//             "l2artifacts:gilded_necklace_5",
//             "l2artifacts:poisonous_necklace_1",
//             "l2artifacts:poisonous_necklace_2",
//             "l2artifacts:poisonous_necklace_3",
//             "l2artifacts:poisonous_necklace_4",
//             "l2artifacts:poisonous_necklace_5",
//             "l2artifacts:thermal_necklace_1",
//             "l2artifacts:thermal_necklace_2",
//             "l2artifacts:thermal_necklace_3",
//             "l2artifacts:thermal_necklace_4",
//             "l2artifacts:thermal_necklace_5",
//             "l2artifacts:mage_necklace_1",
//             "l2artifacts:mage_necklace_2",
//             "l2artifacts:mage_necklace_3",
//             "l2artifacts:mage_necklace_4",
//             "l2artifacts:mage_necklace_5",
//             "l2artifacts:pirate_necklace_1",
//             "l2artifacts:pirate_necklace_2",
//             "l2artifacts:pirate_necklace_3",
//             "l2artifacts:pirate_necklace_4",
//             "l2artifacts:pirate_necklace_5",
//         ],
//     };

//     let tweaks = [
//         {
//             name: "belt",
//             data: artifactBelt,
//         },
//         {
//             name: "body",
//             data: artifactBody,
//         },
//         {
//             name: "bracelet",
//             data: artifactBracelet,
//         },
//         {
//             name: "head",
//             data: artifactHead,
//         },
//         {
//             name: "necklace",
//             data: artifactNecklace,
//         },
//     ];

//     tweaks.forEach((tweak) => {
//         event.addJson(`curios:tags/items/${tweak.name}.json`, tweak.data);
//     });
// });