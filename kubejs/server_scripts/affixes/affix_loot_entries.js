// TODO finish this when there are more RPG mods

ServerEvents.highPriorityData((event) => {
    let equipment = [
        {
            type: "BOW",
            entries: [
                {
                    dimensions: ["aether:the_aether"],
                    item: "aether:phoenix_bow",
                    max_rarity: "epic",
                    min_rarity: "uncommon",
                    quality: 3,
                    weight: 25,
                },
            ],

            // TODO add Infernal Expansion, Botania, any other mods with bows
        },
        {
            type: "ARMOR",
            entries: [
                {
                    dimensions: ["minecraft:overworld"],
                    item: "aether:phoenix_bow",
                    max_rarity: "epic",
                    min_rarity: "uncommon",
                    quality: 3,
                    weight: 25,
                },
            ],
        },
    ];
});
