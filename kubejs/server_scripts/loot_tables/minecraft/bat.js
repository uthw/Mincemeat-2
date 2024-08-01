// Remove Forbidden Arcanus and Reliquary bat wings, since we don't want 3 of what is basically the same item but used in different recipes
// replace input is used so the Miner's Delight bat wing is used for all of these recipes

let faTweak = {
    type: "no_loot_type",
    conditions: [
        {
            condition: "forge:loot_table_id",
            loot_table_id: "minecraft:entities/bat",
        },
    ],
    loot_addition: "forbidden_arcanus:entities/additions/bat_additions",
};

let reliquaryTweak = {
    type: "no_loot_type",
    conditions: [
        {
            condition: "reliquary:entity_loot_enabled",
        },
        {
            condition: "forge:loot_table_id",
            loot_table_id: "minecraft:entities/bat",
        },
    ],
    loot_table: "reliquary:inject/entities/bat",
    loot_table_to_inject_into: "minecraft:entities/bat",
};

ServerEvents.highPriorityData((event) => {
    event.addJson(
        "forbidden_arcanus:loot_modifiers/bat_additions.json",
        faTweak
    );

    event.addJson("reliquary:loot_modifiers/entities/bat.json", reliquaryTweak);
});
