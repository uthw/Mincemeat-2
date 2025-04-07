let poolNames = ["dungeoncrawl:secret_room", "dungeoncrawl:treasure"];
LootJS.modifiers((event) => {
    poolNames.forEach((poolName) => {
        event
            .addLootTableModifier(poolName)
            .randomChance(0.25)
            .addWeightedLoot(
                [1, 16],
                [Item.of("forbidden_arcanus:arcane_crystal").withChance(100)]
            );

        // ars_nouveau:source_gem
        event
            .addLootTableModifier(poolName)
            .randomChance(0.125)
            .addWeightedLoot(
                [1, 8],
                [Item.of("ars_nouveau:source_gem").withChance(100)]
            );

        // irons_spellbooks:arcane_essence
        event
            .addLootTableModifier(poolName)
            .randomChance(0.125)
            .addWeightedLoot(
                [1, 8],
                [Item.of("irons_spellbooks:arcane_essence").withChance(100)]
            );

        event
            .addLootTableModifier(poolName)
            .randomChance(0.25)
            .addWeightedLoot(
                [1, 3],
                [
                    Item.of("irons_spellbooks:common_ink").withChance(40),
                    Item.of("irons_spellbooks:uncommon_ink").withChance(30),
                    Item.of("irons_spellbooks:rare_ink").withChance(20),
                ]
            );

        // meetyourfight:fossil_bait
        event
            .addLootTableModifier(poolName)
            .randomChance(0.025)
            .addWeightedLoot(
                [1, 1],
                [Item.of("meetyourfight:fossil_bait").withChance(100)]
            );

        // meetyourfight:haunted_bell
        event
            .addLootTableModifier(poolName)
            .randomChance(0.01)
            .addWeightedLoot(
                [1, 1],
                [Item.of("meetyourfight:haunted_bell").withChance(100)]
            );

        // thermal:cinnabar
        event
            .addLootTableModifier(poolName)
            .randomChance(0.125)
            .addWeightedLoot(
                [1, 8],
                [Item.of("thermal:cinnabar").withChance(100)]
            );

        // apotheosis:gem_dust
        event
            .addLootTableModifier(poolName)
            .randomChance(0.125)
            .addWeightedLoot(
                [1, 4],
                [Item.of("apotheosis:gem_dust").withChance(100)]
            );

        // caverns_and_chasms:bejeweled_apple
        event
            .addLootTableModifier(poolName)
            .randomChance(0.05)
            .addWeightedLoot(
                [1, 1],
                [Item.of("caverns_and_chasms:bejeweled_apple").withChance(100)]
            );

        // supplementaries:bomb
        event
            .addLootTableModifier(poolName)
            .randomChance(0.1)
            .addWeightedLoot(
                [1, 4],
                [Item.of("supplementaries:bomb").withChance(100)]
            );

        // blue_bomb
        event
            .addLootTableModifier(poolName)
            .randomChance(0.05)
            .addWeightedLoot(
                [1, 2],
                [Item.of("supplementaries:blue_bomb").withChance(100)]
            );
    });
});
