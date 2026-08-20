LootJS.modifiers(event => {
    event
            .addEntityLootModifier("opposing_force:trembler")
            .addWeightedLoot([0, 2], [Item.of("thermal:nickel_ingot")]);
})