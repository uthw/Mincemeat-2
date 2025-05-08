ServerEvents.recipes((event) => {
    const recipes = [
        [
            "4x forbidden_arcanus:mundabitur_dust",
            [
                "forbidden_arcanus:arcane_crystal_dust",
                "occultism:burnt_otherstone",
                "minecraft:blaze_powder",
                "alexscaves:moth_dust",
                "aether_redux:blighted_spores",
                "eidolon:ender_calx",
            ],
        ],
        [
            "4x enigmaticlegacy:astral_dust",
            [
                "minecraft:blaze_powder",
                "#outer_end:crystal_shards",
                "forbidden_arcanus:arcane_crystal_dust",
                // "#forge:dusts/ender_pearl",
            ],
        ],
        [
            "cataclysm:abyssal_sacrifice",
            [
                "minecraft:nautilus_shell",
                "caverns_and_chasms:necromium_nugget",
                "eidolon:zombie_heart",
                "paraglider:spirit_orb",
                "cataclysm:coral_chunk",
            ],
        ],
        [
            "4x reliquary:aphrodite_potion",
            [
                "reliquary:fertile_essence",
                "farmersdelight:rice",
                "naturesaura:gold_powder",
            ],
        ],
        [
            "reliquary:infernal_tear",
            [
                "reliquary:void_tear",
                "cataclysm:koboleton_bone",
                "botania:endoflame",
            ],
        ],
        [
            "reliquary:void_tear",
            ["minecraft:ghast_tear", "alexscaves:moth_dust"],
        ],
        [
            "reliquary:destruction_catalyst",
            [
                "reliquary:catalyzing_gland",
                "irons_spellbooks:fire_rune",
                "ars_nouveau:source_gem",
            ],
        ],
        [
            "4x reliquary:holy_hand_grenade",
            [
                "reliquary:glowing_water",
                "2x forbidden_arcanus:xpetrified_orb",
                "minecraft:gold_ingot",
            ],
        ],
        [
            "reliquary:infernal_claw",
            ["alexsmobs:dropbear_claw", "minecraft:blaze_powder"],
        ],
        ["ftbquests:book", ["minecraft:book", "minecraft:paper"]],
        [
            "kubejs:grave_scroll",
            ["enigmaticlegacy:thicc_scroll", "iceandfire:ectoplasm"],
        ],
        [
            "4x spartanweaponry:handle",
            ["4x #forge:rods/wooden", "forbidden_arcanus:cloth"],
        ],
        [
            "4x spartanweaponry:handle",
            ["4x #forge:rods/wooden", "eidolon:tattered_cloth"],
        ],
        [
            "4x spartanweaponry:pole",
            ["8x #forge:rods/wooden", "forbidden_arcanus:cloth"],
        ],
        [
            "4x spartanweaponry:pole",
            ["8x #forge:rods/wooden", "eidolon:tattered_cloth"],
        ],
        [
            "irons_spellbooks:arcane_essence",
            [
                "forbidden_arcanus:arcane_crystal_dust",
                "supplementaries:ash",
                "mekanism:salt",
            ],
        ],
        [
            "4x nomowanderer:trader_cloth_piece",
            ["forbidden_arcanus:cloth", "#forge:dyes/red", "#forge:dyes/blue"],
        ],
        [
            "4x computercraft:cable",
            ["4x prettypipes:pipe", "createaddition:copper_wire"],
        ],
        [
            "4x forbidden_arcanus:arcane_bone_meal",
            [
                "forbidden_arcanus:arcane_crystal_dust",
                "nethersdelight:propelplant_cane",
                "4x minecraft:bone_meal",
            ],
        ],
        [
            "3x reliquary:glowing_bread",
            [
                "3x minecraft:bread",
                "reliquary:glowing_water",
                "2x theurgy:purified_gold",
            ],
        ],
        [
            "3x reliquary:glowing_bread",
            [
                "3x minecraft:bread",
                "reliquary:glowing_water",
                "aquamirae:ship_graveyard_echo",
            ],
        ],
        [
            "actuallyadditions:engineers_goggles",
            ["create:goggles", "actuallyadditions:restonia_crystal"],
        ],
        [
            "actuallyadditions:filter",
            ["create:filter", "actuallyadditions:restonia_crystal"],
        ],
        [
            "actuallyadditions:wooden_aiot",
            [
                "minecraft:wooden_axe",
                "minecraft:wooden_pickaxe",
                "minecraft:wooden_sword",
                "minecraft:wooden_shovel",
                "minecraft:wooden_hoe",
                "minecraft:diamond",
            ],
        ],
        [
            "actuallyadditions:stone_aiot",
            [
                "minecraft:stone_axe",
                "minecraft:stone_pickaxe",
                "minecraft:stone_sword",
                "minecraft:stone_shovel",
                "minecraft:stone_hoe",
                "botania:spark",
            ],
        ],
        [
            "actuallyadditions:iron_aiot",
            [
                "minecraft:iron_axe",
                "minecraft:iron_pickaxe",
                "minecraft:iron_sword",
                "minecraft:iron_shovel",
                "minecraft:iron_hoe",
                "blue_skies:charoite",
                "blue_skies:diopside_gem",
            ],
        ],
        [
            "actuallyadditions:diamond_aiot",
            [
                "minecraft:diamond_axe",
                "minecraft:diamond_pickaxe",
                "minecraft:diamond_sword",
                "minecraft:diamond_shovel",
                "minecraft:diamond_hoe",
                "bosses_of_mass_destruction:blazing_eye",
            ],
        ],
        [
            "actuallyadditions:netherite_aiot",
            [
                "minecraft:netherite_axe",
                "minecraft:netherite_pickaxe",
                "minecraft:netherite_sword",
                "minecraft:netherite_shovel",
                "minecraft:netherite_hoe",
                "cataclysm:ignitium_ingot",
                "forbidden_arcanus:mundabitur_dust",
            ],
        ],
        ["actuallyadditions:black_quartz", ["minecraft:quartz", "#forge:coal"]],
        [
            "spartanweaponry:explosive_charge",
            ["minecraft:gunpowder", "thermal:phytogro", "#minecraft:coals"],
        ],
        ["minecraft:crafting_table", ["#forge:workbench"]],
        [
            "4x netherexp:necromium_plating",
            ["caverns_and_chasms:necromium_ingot", "netherexp:stridite"],
        ],
        [
            "enigmaticlegacy:ascension_amulet",
            [
                Item.of(
                    "enigmaticlegacy:enigmatic_amulet",
                    "{AssignedColor:0.1f}"
                ),
                Item.of(
                    "enigmaticlegacy:enigmatic_amulet",
                    "{AssignedColor:0.2f}"
                ),
                Item.of(
                    "enigmaticlegacy:enigmatic_amulet",
                    "{AssignedColor:0.3f}"
                ),
                Item.of(
                    "enigmaticlegacy:enigmatic_amulet",
                    "{AssignedColor:0.4f}"
                ),
                Item.of(
                    "enigmaticlegacy:enigmatic_amulet",
                    "{AssignedColor:0.5f}"
                ),
                Item.of(
                    "enigmaticlegacy:enigmatic_amulet",
                    "{AssignedColor:0.6f}"
                ),
                Item.of(
                    "enigmaticlegacy:enigmatic_amulet",
                    "{AssignedColor:0.7f}"
                ),
            ],
        ],
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe[0], recipe[1]);
    });
});
