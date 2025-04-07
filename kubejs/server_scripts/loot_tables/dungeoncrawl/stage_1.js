LootJS.modifiers((event) => {
    event
        .addLootTableModifier("dungeoncrawl:chests/stage_1")
        .randomChance(0.1)
        .addWeightedLoot(
            [1, 4],
            [Item.of("create:honeyed_apple").withChance(100)]
    );
    
    event
        .addLootTableModifier("dungeoncrawl:chests/stage_1")
        .randomChance(0.02)
        .addWeightedLoot(
            [1, 1],
            [Item.of("irons_spellbooks:silver_ring").withChance(100)]
    );

    // paraglider:spirit_orb
    event
        .addLootTableModifier("dungeoncrawl:chests/stage_1")
        .randomChance(0.1)
        .addWeightedLoot(
            [1, 4],
            [Item.of("paraglider:spirit_orb").withChance(100)]
    );

    // iceandfire:ectoplasm
    event
        .addLootTableModifier("dungeoncrawl:chests/stage_1")
        .randomChance(0.1)
        .addWeightedLoot(
            [1, 4],
            [Item.of("iceandfire:ectoplasm").withChance(100)]
    );

    // eidolon:tattered_cloth
    event
        .addLootTableModifier("dungeoncrawl:chests/stage_1")
        .randomChance(0.1)
        .addWeightedLoot(
            [1, 4],
            [Item.of("eidolon:tattered_cloth").withChance(100)]
    );

    // caverns_and_chasms:silver_ingot
    event
        .addLootTableModifier("dungeoncrawl:chests/stage_1")
        .randomChance(0.1)
        .addWeightedLoot(
            [1, 4],
            [Item.of("caverns_and_chasms:silver_ingot").withChance(100)]
    );

    // supplementaries:bomb
    event
        .addLootTableModifier("dungeoncrawl:chests/stage_1")
        .randomChance(0.1)
        .addWeightedLoot(
            [1, 6],
            [Item.of("supplementaries:bomb").withChance(100)]
    );

    // blue_bomb
    event
        .addLootTableModifier("dungeoncrawl:chests/stage_1")
        .randomChance(0.05)
        .addWeightedLoot(
            [1, 3],
            [Item.of("supplementaries:blue_bomb").withChance(100)]
    );

    // sophisticatedbackpacks:upgrade_base
    event
        .addLootTableModifier("dungeoncrawl:chests/stage_1")
        .randomChance(0.08)
        .addWeightedLoot(
            [1, 2],
            [Item.of("sophisticatedbackpacks:upgrade_base").withChance(100)]
    );

    // sophisticatedstorage:upgrade_base
    event
        .addLootTableModifier("dungeoncrawl:chests/stage_1")
        .randomChance(0.08)
        .addWeightedLoot(
            [1, 2],
            [Item.of("sophisticatedstorage:upgrade_base").withChance(100)]
    );

    // enigmaticlegacy:magnet_ring
    event
        .addLootTableModifier("dungeoncrawl:chests/stage_1")
        .randomChance(0.05)
        .addWeightedLoot(
            [1, 1],
            [Item.of("enigmaticlegacy:magnet_ring").withChance(100)]
    );

    // galosphere:allurite_shard
    event
        .addLootTableModifier("dungeoncrawl:chests/stage_1")
        .randomChance(0.1)
        .addWeightedLoot(
            [1, 8],
            [Item.of("galosphere:allurite_shard").withChance(100)]
    );

    // galosphere:lumiere_shard
    event
        .addLootTableModifier("dungeoncrawl:chests/stage_1")
        .randomChance(0.1)
        .addWeightedLoot(
            [1, 8],
            [Item.of("galosphere:lumiere_shard").withChance(100)]
    );

    // galosphere:silver_bomb
    event
        .addLootTableModifier("dungeoncrawl:chests/stage_1")
        .randomChance(0.05)
        .addWeightedLoot(
            [1, 3],
            [Item.of("galosphere:silver_bomb").withChance(100)]
    );

    // farmersdelight:tomato
    event
        .addLootTableModifier("dungeoncrawl:chests/stage_1")
        .randomChance(0.1)
        .addWeightedLoot(
            [1, 4],
            [Item.of("farmersdelight:tomato").withChance(100)]
    );

    // farmersdelight:rice
    event
        .addLootTableModifier("dungeoncrawl:chests/stage_1")
        .randomChance(0.1)
        .addWeightedLoot(
            [1, 4],
            [Item.of("farmersdelight:rice").withChance(100)]
    );

    // farmersdelight:cooked_rice
    event
        .addLootTableModifier("dungeoncrawl:chests/stage_1")
        .randomChance(0.1)
        .addWeightedLoot(
            [1, 4],
            [Item.of("farmersdelight:cooked_rice").withChance(100)]
    );
});
