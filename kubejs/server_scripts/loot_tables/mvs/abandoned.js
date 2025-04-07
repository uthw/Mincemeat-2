// Base loot: cobweb, string, rotten flesh, oak planks, emerald, gold nugget, iron nugget
LootJS.modifiers((event) => {
    // eidolon:enchanted_ash
    event
        .addLootTableModifier("mvs:abandoned")
        .randomChance(0.2)
        .addWeightedLoot(
            [1, 2],
            [Item.of("eidolon:enchanted_ash").withChance(100)]
    );

    // eidolon:tattered_cloth
    event
        .addLootTableModifier("mvs:abandoned")
        .randomChance(0.25)
        .addWeightedLoot(
            [1, 2],
            [Item.of("eidolon:tatterd_cloth").withChance(100)]
    );

    // supplementaries:rope
    event
        .addLootTableModifier("mvs:abandoned")
        .randomChance(0.4)
        .addWeightedLoot(
            [1, 6],
            [Item.of("supplementaries:rope").withChance(100)]
    );

    // graveyard:corruption
    event
        .addLootTableModifier("mvs:abandoned")
        .randomChance(0.05)
        .addWeightedLoot(
            [1, 3],
            [Item.of("graveyard:corruption").withChance(100)]
    );

    // supplementaries:ash
    event
        .addLootTableModifier("mvs:abandoned")
        .randomChance(0.2)
        .addWeightedLoot(
            [1, 4],
            [Item.of("supplementaries:ash").withChance(100)]
    );
})