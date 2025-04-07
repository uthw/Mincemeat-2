
LootJS.modifiers(event => {
    // quark:bottled_cloud
    event
        .addLootTableModifier("mvs:floating_islands")
        .randomChance(0.6)
        .addWeightedLoot(
            [1, 1],
            [Item.of("quark:bottled_cloud").withChance(100)]
    );
    
    // irons_spellbooks:lightning_bottle
    event
        .addLootTableModifier("mvs:floating_islands")
        .randomChance(0.1)
        .addWeightedLoot(
            [1, 1],
            [Item.of("irons_spellbooks:lightning_bottle").withChance(100)]
    );

    // environmental:cartwheel
    event
        .addLootTableModifier("mvs:floating_islands")
        .randomChance(0.35)
        .addWeightedLoot(
            [1, 3],
            [Item.of("environmental:cartwheel").withChance(100)]
    );

    // forbidden_arcanus:arcane_crystal
    event
        .addLootTableModifier("mvs:floating_islands")
        .randomChance(0.5)
        .addWeightedLoot(
            [1, 8],
            [Item.of("forbidden_arcanus:arcane_crystal").withChance(100)]
    );

    // forbidden_arcanus:orb_of_temporary_flight
    event
        .addLootTableModifier("mvs:floating_islands")
        .randomChance(0.1)
        .addWeightedLoot(
            [1, 1],
            [Item.of("forbidden_arcanus:orb_of_temporary_flight").withChance(100)]
    );

    // artifacts:umbrella
    event
        .addLootTableModifier("mvs:floating_islands")
        .randomChance(0.05)
        .addWeightedLoot(
            [1, 1],
            [Item.of("artifacts:umbrella").withChance(100)]
    );

    // artifacts:bunny_hoppers
    event
        .addLootTableModifier("mvs:floating_islands")
        .randomChance(0.05)
        .addWeightedLoot(
            [1, 1],
            [Item.of("artifacts:bunny_hoppers").withChance(100)]
    );

    event
        .addLootTableModifier("mvs:cartographer_tower")
        .randomChance(0.1)
        .addWeightedLoot(
            [1, 1],
            [
                LootEntry.of("irons_spellbooks:scroll").customFunction({
                    function: "irons_spellbooks:randomize_spell",
                    quality: {
                        min: 0.3,
                        max: 0.7,
                    },
                }),
            ]
        );


})