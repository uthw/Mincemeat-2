LootJS.modifiers((event) => {
    event
        .addLootTableModifier(/.*\/chests\/.*/)
        .removeLoot("enigmaticlegacy:etherium_ore")
        .removeLoot("enigmaticlegacy:eye_of_nebula")
        .removeLoot("artifacts:umbrella");
});
