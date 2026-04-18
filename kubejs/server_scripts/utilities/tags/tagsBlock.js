ServerEvents.tags("block", (event) => {
    const add = [
        ["minecraft:needs_diamond_tool", "mekanism:osmium_ore"],
        ["minecraft:needs_diamond_tool", "mekanism:deepslate_osmium_ore"],
        // Block tags for rechiseled (lets it work with domum ornamentum and probably other mods)
        // ["domum_ornamentum:copper", /rechiseled:.*copper_block.*/],
        // ["domum_ornamentum:default", /rechiseled:.*/]
        ["forge:needs_netherite_tool", "#waystones:waystones"],
    ];

    const remove = [
        ["minecraft:needs_stone_tool", "mekanism:osmium_ore"],
        ["minecraft:needs_stone_tool", "mekanism:deepslate_osmium_ore"],
    ];

    add.forEach((addition) => {
        event.add(addition[0], addition[1]);
    });

    remove.forEach((removal) => {
        event.remove(removal[0], removal[1]);
    });
});
