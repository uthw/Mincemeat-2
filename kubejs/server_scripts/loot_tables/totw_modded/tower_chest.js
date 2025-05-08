LootJS.modifiers((event) => {
    let tables = ["totw_modded:tower_chest", "totw_modded:ocean_tower_chest"];

    tables.forEach((table) => {
        // recall_potion
        event
            .addLootTableModifier(table)
            .randomChance(0.15)
            .addWeightedLoot(
                [1, 1],
                [Item.of("enigmaticlegacy:recall_potion").withChance(100)]
            );

        // explorerscompass:explorers_compass
        event
            .addLootTableModifier(table)
            .randomChance(0.04)
            .addWeightedLoot(
                [1, 1],
                [Item.of("explorerscompass:explorers_compass").withChance(100)]
            );

        // naturescompass:natures_compass
        event
            .addLootTableModifier(table)
            .randomChance(0.04)
            .addWeightedLoot(
                [1, 1],
                [Item.of("naturescompass:natures_compass").withChance(100)]
            );

        // skyarena:ice_eye
        event
            .addLootTableModifier(table)
            .randomChance(0.03)
            .addWeightedLoot(
                [1, 1],
                [Item.of("skyarena:ice_eye").withChance(100)]
            );

        // waystones:warp_scroll
        event
            .addLootTableModifier(table)
            .randomChance(0.05)
            .addWeightedLoot(
                [1, 1],
                [Item.of("waystones:warp_scroll").withChance(100)]
            );

        // waystones:bound_scroll
        event
            .addLootTableModifier(table)
            .randomChance(0.05)
            .addWeightedLoot(
                [1, 1],
                [Item.of("waystones:bound_scroll").withChance(100)]
            );

        // galosphere:lumiere_shard
        event
            .addLootTableModifier(table)
            .randomChance(0.15)
            .addWeightedLoot(
                [1, 3],
                [Item.of("galosphere:lumiere_shard").withChance(100)]
            );

        // galosphere:allurite_shard
        event
            .addLootTableModifier(table)
            .randomChance(0.15)
            .addWeightedLoot(
                [1, 3],
                [Item.of("galosphere:allurite_shard").withChance(100)]
            );

        // forbidden_arcanus:xpetrified_orb
        event
            .addLootTableModifier(table)
            .randomChance(0.2)
            .addWeightedLoot(
                [1, 2],
                [Item.of("forbidden_arcanus:xpetrified_orb").withChance(100)]
            );
    });
});
