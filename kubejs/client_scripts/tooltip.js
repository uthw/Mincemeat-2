// ClientEvents.
ItemEvents.tooltip((event) => {
    const akashicTomeBooks = []; // Akashic Tome hasn't been ported

    const noLongerNeedsEnergy = [];

    // event.addAdvanced()

    event.add(
        "mekanism:flamethrower",
        Text.red("IMPORTANT: Crashes your game if you have shaders enabled"),
    );
    event.add(
        "mekanismtools:refined_glowstone_boots",
        Text.red("IMPORTANT: Crashes your game if you apply an armor trim"),
    );
    event.add(
        "mekanismtools:refined_glowstone_leggings",
        Text.red("IMPORTANT: Crashes your game if you apply an armor trim"),
    );
    event.add(
        "mekanismtools:refined_glowstone_chestplate",
        Text.red("IMPORTANT: Crashes your game if you apply an armor trim"),
    );
    event.add(
        "mekanismtools:refined_glowstone_helmet",
        Text.red("IMPORTANT: Crashes your game if you apply an armor trim"),
    );
    event.add(
        "dungeonnowloading:overcharged_redstone_block",
        Text.red("IMPORTANT: Crashes your game if ejected from a dispenser"),
    );
    event.add(
        "malum:ring_of_manaweaving",
        Text.red("Temporarily disabled as this item can crash your game"),
    );

    var snakeToTitle = function (s) {
        if (!s) return s;
        if (s.indexOf("_") === -1 && s.indexOf("-") === -1) return s;
        var parts = s.replace(/[-_]+/g, " ").split(/\s+/);
        for (var i = 0; i < parts.length; i++) {
            var w = parts[i];
            parts[i] = w.charAt(0).toUpperCase() + w.slice(1).toLowerCase();
        }
        return parts.join(" ");
    };

    var addSpellNameTooltip = function (item, text) {
        if (!item || !item.nbt) return;

        // Safely convert NBT to a printable string.
        const comp = Text.prettyPrintNbt(item.nbt);
        let nbtString = "";
        try {
            if (comp && typeof comp.getString === "function") nbtString = comp.getString();
            else nbtString = "" + comp;
        } catch (e) {
            nbtString = "" + comp;
        }

        // Prefer spell_container data id when present (echoes), then fall back to generic id (scrolls)
        let idMatch = nbtString.match(/irons_spellbooks:spell_container[\s\S]*?id:\s*"([^"]+)"/);
        if (!idMatch)
            idMatch = nbtString.match(/irons_spellbooks:spell_container[\s\S]*?id:\s*([^,\)\s]+)/);
        if (!idMatch) idMatch = nbtString.match(/id:\s*"([^"]+)"/);
        if (!idMatch) idMatch = nbtString.match(/id:\s*([^,\)\s]+)/);

        if (!idMatch) return;

        var name = idMatch[1];
        name = name.split("(")[0];
        if (name.indexOf(":") !== -1) name = name.split(":").pop();
        name = name.replace(/^"|"$/g, "");

        var pretty = snakeToTitle(name);
        if (pretty.indexOf(" ") === -1) {
            pretty = pretty.charAt(0).toUpperCase() + pretty.slice(1).toLowerCase();
        }
        text.add(Text.of("Spell: " + pretty).color("yellow"));
    };

    // Show spell names on items with innate spells
    event.addAdvancedToAll((item, advanced, text) => {
        if (item.nbt && item.nbt.contains("irons_spellbooks:spell_container")) {
            addSpellNameTooltip(item, text);
        }
    });
});
