// makes ores more common in everbright/dawn

ServerEvents.highPriorityData((event) => {
    let tweaks = [
        {
            name: "aquite",
            count: 20,
        },
        {
            name: "charoite",
            count: 4,
        },
        {
            name: "diopside",
            count: 4,
        },
        {
            name: "pyrope",
            count: 24,
        },
        {
            name: "everbright_falsite",
            count: 25,
        },
        {
            name: "everbright_ventium",
            count: 25,
        },
        {
            name: "everdawn_horizonite",
            count: 16,
        },
        // {
        //     name: "moonstone",
        //     count: 20,
        // },
    ];

    tweaks.forEach((tweak) => {
        event.addJson(
            `blue_skies:woldgen/placed_feature/ore_${tweak.name}.json`,
            {
                placement: [
                    {
                        type: "minecraft:count",
                        count: tweak.count,
                    },
                ],
            }
        );
    });
});
