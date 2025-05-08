LootJS.modifiers((event) => {
    event
        .addBlockLootModifier("minecraft:grass")
        .removeLoot("actuallyadditions:rice_seeds")
        .removeLoot("actuallyadditions:canola_seeds")
        .removeLoot("actuallyadditions:flax_seeds")
        .removeLoot("immersiveengineering:seed")
        .removeLoot("occultism:datura_seeds")
        // .removeLoot("hexerei:sage_seed")

    event
        .addBlockLootModifier("minecraft:tall_grass")
        .removeLoot("actuallyadditions:rice_seeds")
        .removeLoot("actuallyadditions:canola_seeds")
        .removeLoot("actuallyadditions:canola_seeds")
        .removeLoot("immersiveengineering:seed")
        .removeLoot("occultism:datura_seeds")
        // .removeLoot("hexerei:sage_seed")
});
