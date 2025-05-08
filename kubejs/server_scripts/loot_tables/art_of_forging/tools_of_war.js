// I normally sort by the mod I'm adding the drop to but in this case it's cleaner to sort by the mod that adds the item

LootJS.modifiers((event) => {
    // Claw
    event
        .addEntityLootModifier("caverns_and_chasms:mime")
        .randomChance(0.08)
        .addWeightedLoot(
            [1, 1],
            [
                Item.of(
                    "tetra:scroll_rolled",
                    '{BlockEntityTag:{data:[{details:"warforge",glyphs:[I;8,10,5,11],intricate:0b,key:"warforge/claw",material:2,ribbon:"1d262f",schematics:["tetra:warforge/claw"]}]}}'
                ),
            ]
        );

    // Battleadze
    let umvuthanas = ["_crane", "_raptor", ""];
    umvuthanas.forEach((suffix) => {
        event
            .addEntityLootModifier(`moziesmobs:umvuthana${suffix}`)
            .randomChance(0.08)
            .addWeightedLoot(
                [1, 1],
                [
                    Item.of(
                        "tetra:scroll_rolled",
                        '{BlockEntityTag:{data:[{details:"warforge",glyphs:[I;6,7,11,7],intricate:0b,key:"warforge/adze",material:2,ribbon:"8559b3",schematics:["tetra:warforge/adze"]}]}}'
                    ),
                ]
            );
    });

    // Battleaxe
    event
        .addEntityLootModifier("minecraft:vindicator")
        .randomChance(0.05)
        .addWeightedLoot(
            [1, 1],
            [
                Item.of(
                    "tetra:scroll_rolled",
                    '{BlockEntityTag:{data:[{details:"warforge",glyphs:[I;5,10,8,9],intricate:0b,key:"warforge/axe",material:2,ribbon:"b35973",schematics:["tetra:warforge/axe"]}]}}'
                ),
            ]
        );

    // Warhammer
    event
        .addEntityLootModifier("iceandfire:troll")
        .randomChance(0.35)
        .addWeightedLoot(
            [1, 1],
            [
                Item.of(
                    "tetra:scroll_rolled",
                    '{BlockEntityTag:{data:[{details:"warforge",glyphs:[I;9,8,11,10],intricate:0b,key:"warforge/hammer",material:2,ribbon:"3d4299",schematics:["tetra:warforge/hammer"]}]}}'
                ),
            ]
    );
    
    // Warpick
    event
        .addEntityLootModifier("cataclysm:koboleton")
        .randomChance(0.1)
        .addWeightedLoot(
            [1, 1],
            [
                Item.of(
                    "tetra:scroll_rolled",
                    '{BlockEntityTag:{data:[{details:"warforge",glyphs:[I;6,11,8,7],intricate:0b,key:"warforge/pickaxe",material:2,ribbon:"508cb3",schematics:["tetra:warforge/pickaxe"]}]}}'
                ),
            ]
    );
    
    // Guisarme (hoe)
    event
        .addEntityLootModifier("bosses_of_mass_destruction:void_blossom")
        .randomChance(1)
        .addWeightedLoot(
            [1, 1],
            [
                Item.of(
                    "tetra:scroll_rolled",
                    '{BlockEntityTag:{data:[{details:"warforge",glyphs:[I;10,7,9,5],intricate:0b,key:"warforge/hoe",material:2,ribbon:"93b350",schematics:["tetra:warforge/hoe"]}]}}'
                ),
            ]
    );
    
    // Warsickle
    event
        .addEntityLootModifier("irons_spellbooks:necromancer")
        .randomChance(0.1)
        .addWeightedLoot(
            [1, 1],
            [
                Item.of(
                    "tetra:scroll_rolled",
                    '{BlockEntityTag:{data:[{details:"warforge",glyphs:[I;5,9,6,10],intricate:0b,key:"warforge/sickle",material:2,ribbon:"d99e4c",schematics:["tetra:warforge/sickle"]}]}}'
                ),
            ]
    );
    
    // Blunt ends
    event
        .addEntityLootModifier("mowziesmobs:bluff")
        .randomChance(0.15)
        .addWeightedLoot(
            [1, 1],
            [
                Item.of(
                    "tetra:scroll_rolled",
                    '{BlockEntityTag:{data:[{details:"warforge",glyphs:[I;11,5,8,9],intricate:0b,key:"warforge/butt",material:2,ribbon:"b33636",schematics:["tetra:warforge/butt"]}]}}'
                ),
            ]
        );
});
