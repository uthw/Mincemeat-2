ServerEvents.highPriorityData(event => {
    event.addJson("cataclysm:loot_tables/archaeology/cursed_pyramid.json", {
        type: "minecraft:archaeology",
        pools: [
            {
                bonus_rolls: 0.0,
                entries: [
                    {
                        type: "minecraft:item",
                        name: "minecraft:archer_pottery_sherd",
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:miner_pottery_sherd",
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:prize_pottery_sherd",
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:skull_pottery_sherd",
                    },
                    {
                        type: "minecraft:item",
                        name: "minecraft:diamond",
                    },
                    {
                        type: "minecraft:item",
                        name: "cataclysm:necklace_of_the_desert",
                    },
                    {
                        type: "minecraft:item",
                        item: "iceandfire:dragonbone",
                    },
                    {
                        type: "item",
                        item: "caverns_and_chasms:spinel",
                    },
                    {
                        type: "item",
                        item: "supplementaries:bomb",
                    },
                    {
                        type: "item",
                        item: "neapolitan:reflection_pottery_sherd",
                    },
                    {
                        type: "item",
                        item: "neapolitan:scream_pottery_sherd",
                    },
                    {
                        type: "item",
                        item: "neapolitan:snack_pottery_sherd",
                    },
                    ,
                    {
                        type: "item",
                        item: "neapolitan:spider_pottery_sherd",
                    },
                    {
                        type: "item",
                        item: "upgrade_aquatic:predator_pottery_sherd",
                    },
                    {
                        type: "item",
                        item: "atmospheric:scythe_pottery_sherd",
                    },
                    {
                        type: "item",
                        item: "atmospheric:succulent_pottery_sherd",
                    },
                    ,
                    {
                        type: "item",
                        item: "atmospheric:sun_pottery_sherd",
                    },
                ],
                rolls: 1.0,
            },
        ],
        random_sequence: "cataclysm:archaeology/cursed_pyramid",
    });
})