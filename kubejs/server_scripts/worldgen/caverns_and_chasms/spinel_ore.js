ServerEvents.highPriorityData((event) => {
    // highprioritydata addjson always crashes the game for no reason
    let tweak = {
        feature: "caverns_and_chasms:ore_spinel",
        placement: [
            {
                type: "minecraft:count",
                count: 1,
            },
        ],
    };

    event.addJson(
        "caverns_and_chasms:worldgen/placed_feature/ore_spinel.json",
        tweak
    );

    tweak.feature = "caverns_and_chasms:ore_spinel_buried";

    event.addJson(
        "caverns_and_chasms:worldgen/placed_feature/ore_spinel_buried.json",
        tweak
    );
});
