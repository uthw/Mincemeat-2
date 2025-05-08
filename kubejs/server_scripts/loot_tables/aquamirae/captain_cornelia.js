EntityEvents.drops("aquamirae:captain_cornelia", (event) => {
    event.addDrop("art_of_forging:ancient_blade", 1);
});

LootJS.modifiers(event => {
    event.addEntityLootModifier("aquamirae:captain_cornelia")
        .randomChance(1)
        .addWeightedLoot([1, 1], [
            Item.of("enigmaticlegacy:enigmatic_amulet", "{AssignedColor:0.7f}") // 25% swim speed
        ]);
})