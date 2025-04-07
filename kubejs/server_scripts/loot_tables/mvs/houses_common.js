
LootJS.modifiers(event => {
    let houses = ["common", "uncommon", "rare"];

    houses.forEach(house => {
        // forbidden_arcanus:cloth
        event
            .addLootTableModifier(`mvs:houses_${house}`)
            .randomChance(0.2)
            .addWeightedLoot(
                [1, 2],
                [Item.of("forbidden_arcanus:cloth").withChance(100)]
            );

        // beautify:hanging_pot
        event
            .addLootTableModifier(`mvs:houses_${house}`)
            .randomChance(0.15)
            .addWeightedLoot(
                [1, 2],
                [Item.of("beautify:hanging_pot").withChance(100)]
            );

        // beautify:bookstack
        event
            .addLootTableModifier(`mvs:houses_${house}`)
            .randomChance(0.15)
            .addWeightedLoot(
                [1, 2],
                [Item.of("beautify:bookstack").withChance(100)]
            );

        // supplementaries:jar
        event
            .addLootTableModifier(`mvs:houses_${house}`)
            .randomChance(0.2)
            .addWeightedLoot(
                [1, 1],
                [Item.of("supplementaries:jar").withChance(100)]
            );

        // supplementaries:rope
        event
            .addLootTableModifier(`mvs:houses_${house}`)
            .randomChance(0.2)
            .addWeightedLoot(
                [1, 3],
                [Item.of("supplementaries:rope").withChance(100)]
            );

        // farmersdelight:wheat_dough
        event
            .addLootTableModifier(`mvs:houses_${house}`)
            .randomChance(0.2)
            .addWeightedLoot(
                [1, 9],
                [Item.of("farmersdelight:wheat_dough").withChance(100)]
            );

        // farmersdelight:safety_net
        event
            .addLootTableModifier(`mvs:houses_${house}`)
            .randomChance(0.2)
            .addWeightedLoot(
                [1, 3],
                [Item.of("farmersdelight:safety_net").withChance(100)]
            );

        // hexerei:tallow_impurity
        event
            .addLootTableModifier(`mvs:houses_${house}`)
            .randomChance(0.05)
            .addWeightedLoot(
                [1, 3],
                [Item.of("hexerei:tallow_impurity").withChance(100)]
            );

        // miners_delight:copper_cup
        event
            .addLootTableModifier(`mvs:houses_${house}`)
            .randomChance(0.15)
            .addWeightedLoot(
                [1, 1],
                [Item.of("miners_delight:copper_cup").withChance(100)]
            );

        // mowziesmobs:sand_rake
        event
            .addLootTableModifier(`mvs:houses_${house}`)
            .randomChance(0.04)
            .addWeightedLoot(
                [1, 1],
                [Item.of("mowziesmobs:sand_rake").withChance(100)]
            );

        // supplementaries:sack
        event
            .addLootTableModifier(`mvs:houses_${house}`)
            .randomChance(0.17)
            .addWeightedLoot(
                [1, 1],
                [Item.of("supplementaries:sack").withChance(100)]
            );

        // caverns_and_chasms:tuning_fork
        event
            .addLootTableModifier(`mvs:houses_${house}`)
            .randomChance(0.1)
            .addWeightedLoot(
                [1, 1],
                [Item.of("caverns_and_chasms:tuning_fork").withChance(100)]
            );
    });
})