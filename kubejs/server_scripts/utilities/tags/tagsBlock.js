ServerEvents.tags("block", (event) => {
    const add = [
        ["minecraft:needs_diamond_tool", "mekanism:osmium_ore"],
        ["minecraft:needs_diamond_tool", "mekanism:deepslate_osmium_ore"],
        // Block tags for rechiseled (lets it work with domum ornamentum and probably other mods)
        // ["domum_ornamentum:copper", /rechiseled:.*copper_block.*/],
        // ["domum_ornamentum:default", /rechiseled:.*/]
    ];

    const remove = [
        ["minecraft:needs_stone_tool", "mekanism:osmium_ore"],
        ["minecraft:needs_stone_tool", "mekanism:deepslate_osmium_ore"],
        ["minecraft:mineable/hammer", "#waystones:waystones"],
        ["minecraft:mineable/pickaxe", "#waystones:waystones"],
        ["artifacts:mineable/digging_claws", "#waystones:waystones"],
        ["forge:mineable/paxel", "#waystones:waystones"],
        ["c:mineable/hammer", "#waystones:waystones"],
    ];

    add.forEach((addition) => {
        event.add(addition[0], addition[1]);
    });

    remove.forEach((removal) => {
        event.remove(removal[0], removal[1]);
    });
});
