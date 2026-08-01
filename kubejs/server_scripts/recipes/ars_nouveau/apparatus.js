ServerEvents.recipes((event) => {
    const recipes = [
        {
            output: "ars_nouveau:ring_of_lesser_discount",
            reagent: "ars_nouveau:ring_of_potential",
            inputs: [
                "minecraft:diamond",
                "minecraft:diamond",
                "minecraft:diamond",
                "ars_nouveau:sourceberry_bush",
                "ars_nouveau:sourceberry_bush",
                "blue_skies:pink_brewberry",
                "blue_skies:pink_brewberry",
                "blue_skies:pink_brewberry",
            ],
            // Source Cost not provided --> treated as 0
            // keep NBT not provided --> treated as true
        },
        // Enigmatic Legacy recipes

        {
            output: "enigmaticlegacy:recall_potion",
            reagent: "minecraft:water_bottle",
            inputs: ["forbidden_arcanus:rune", "alexsmobs:cockroach_wing"],
        },
        {
            output: "enigmaticlegacy:mining_charm",
            reagent: "ars_nouveau:dull_trinket",
            inputs: [
                "#forge:gems/sapphire",
                "eidolon:gold_inlay",
                "#forge:ingots/arcane_gold",
                "#forge:ingots/arcane_gold",
                "aquamirae:pirate_pouch",
            ],
        },
        {
            output: "enigmaticlegacy:mega_sponge",
            reagent: "alexsmobs:soul_heart",
            inputs: [
                "minecraft:heart_of_the_sea",
                "minecraft:sponge",
                "minecraft:sponge",
                "upgrade_aquatic:guardian_spine",
            ],
        },
        {
            output: "scalinghealth:enchanted_heart",
            reagent: "forbidden_arcanus:rune",
            inputs: [
                "dungeonnowloading:spawner_fragment",
                "dungeonnowloading:spawner_fragment",
                "forbidden_arcanus:arcane_crystal_dust",
                "forbidden_arcanus:arcane_crystal_dust",
            ],
        },
        {
            output: "scalinghealth:cursed_heart",
            reagent: "forbidden_arcanus:dark_rune",
            inputs: [
                "dungeonnowloading:spawner_fragment",
                "dungeonnowloading:spawner_fragment",
                "iceandfire:ectoplasm",
                "iceandfire:ectoplasm",
            ],
        },
        {
            output: "reliquary:angelheart_vial",
            reagent: Item.of("minecraft:potion", '{Potion:"ars_nouveau:shielding_potion"}'),
            inputs: [
                "forbidden_arcanus:golden_feather",
                "forbidden_arcanus:golden_feather",
                "minecraft:totem_of_undying",
                "eidolon:death_essence",
                "eidolon:death_essence",
            ],
        },
        {
            output: "reliquary:angelic_feather",
            reagent: "enigmaticlegacy:lore_inscriber",
            inputs: [
                "endermanoverhaul:soul_pearl",
                "eidolon:merammer_resin",
                "alexscaves:pewen_sap",
                "forbidden_arcanus:deorum_block",
            ],
        },
        {
            output: "reliquary:emperor_chalice",
            reagent: "enigmaticlegacy:unholy_grail",
            inputs: ["alexscaves:pure_darkness"],
        },
        {
            output: "enigmaticlegacy:mega_sponge",
            reagent: "enigmaticlegacy:unholy_grail",
            inputs: ["alexscaves:ping_pong_sponge", "minecells:blank_rune", "reliquary:squid_beak"],
        },
        {
            output: "reliquary:magicbane",
            reagent: "graveyard:bone_dagger",
            inputs: [
                "irons_spellbooks:arcane_essence",
                "forbidden_arcanus:arcane_crystal",
                "eidolon:ender_calx",
                "ars_nouveau:source_gem",
            ],
        },
        {
            output: "ars_nouveau:enchanters_sword",
            reagent: "caverns_and_chasms:silver_sword",
            inputs: [
                "ars_nouevau:source_gem_block",
                "ars_nouveau:source_gem_block",
                "theurgy:sal_ammoniac_crystal",
                "irons_spellbooks:common_ink",
                "eidolon:oanna_bloom",
            ],
        },
        {
            output: "ars_nouveau:enchanters_sword",
            reagent: "caverns_and_chasms:silver_sword",
            inputs: [
                "ars_nouevau:source_gem_block",
                "ars_nouveau:source_gem_block",
                "theurgy:sal_ammoniac_crystal",
                "irons_spellbooks:common_ink",
                "eidolon:oanna_bloom",
            ],
        },
        {
            output: "ars_nouveau:spell_bow",
            reagent: "minecraft:bow",
            inputs: [
                "ars_nouveau:manipulation_essence",
                "irons_spellbooks:common_ink",
                "ars_nouevau:source_gem_block",
                "ars_nouveau:source_gem_block",
                "aether:ambrosium_shard",
            ],
        },
        {
            output: "ars_nouveau:enchanters_shield",
            reagent: "minecraft:shield",
            inputs: [
                "ars_nouevau:source_gem_block",
                "ars_nouveau:source_gem_block",
                "forbidden_arcanus:arcane_crystal_block",
                "forbidden_arcanus:arcane_crystal_block",
            ],
        },
        {
            output: "ars_nouveau:archmage_spell_book",
            reagent: "ars_nouveau:apprentice_spell_book",
            inputs: [
                "ars_nouveau:wilden_tribute",
                "cataclysm:ancient_metal_ingot",
                "alexscaves:shadow_silk",
            ],
        },
        {
            output: "forbidden_arcanus:deorum_ingot",
            reagent: "minecraft:gold_ingot",
            inputs: [
                "create:asurine",
                "thermal:cinnabar",
                "caverns_and_chasms:necromium_ingot",
                "rubinated_nether:ruby",
            ],
        },
        {
            output: "eidolon:tattered_cloth",
            reagent: "forbidden_arcanus:cloth",
            inputs: ["minecraft:rotten_flesh", "minecraft:rotten_flesh"],
        },
        // These used to be betterend infusion recipes but since xavier is bitching about wanting ReTerraForged I'm moving them to the apparatus for now
        {
            output: "aquamirae:terrible_sword",
            reagent: "minecraft:iron_sword",
            inputs: [
                "aquamirae:ship_graveyard_echo",
                "aquaculture:neptunium_ingot",
                "aquaculture:neptunium_ingot",
                "aquaculture:neptunium_ingot",
                "aquamirae:anglers_fang",
                "aquamirae:anglers_fang",
            ],
        },
        {
            output: "forbidden_arcanus:spectral_eye_amulet",
            reagent: "eidolon:basic_amulet",
            inputs: [
                "alexsmobs:void_worm_eye",
                "eidolon:pewter_blend",
                "eidolon:pewter_blend",
                "alexsmobs:guster_eye",
                "iceandfire:ectoplasm",
                "iceandfire:ectoplasm",
                "iceandfire:ectoplasm",
                "iceandfire:ectoplasm",
            ],
        },
        {
            output: "forbidden_arcanus:eternal_stella",
            reagent: "forbidden_arcanus:stellarite_piece",
            inputs: [
                "alexscaves:tough_hide",
                "forbidden_arcanus:xpetrified_orb",
                "forbidden_arcanus:xpetrified_orb",
                "forbidden_arcanus:xpetrified_orb",
                "botania:elementium_ingot",
                "botania:elementium_ingot",
                "botania:elementium_ingot",
                "botania:elementium_ingot",
            ],
        },
        {
            output: "forbidden_arcanus:tyr_helmet",
            reagent: "forbidden_arcanus:draco_arcanus_helmet",
            inputs: [
                "forbidden_arcanus:golden_dragon_scale",
                "forbidden_arcanus:silver_dragon_scale",
                "forbidden_arcanus:silver_dragon_scale",
                "forbidden_arcanus:silver_dragon_scale",
                "iceandfire:scales/dragon",
                "iceandfire:scales/dragon",
                "iceandfire:scales/dragon",
                "iceandfire:scales/dragon",
            ],
        },
        {
            output: "forbidden_arcanus:tyr_chestplate",
            reagent: "forbidden_arcanus:draco_arcanus_chestplate",
            inputs: [
                "forbidden_arcanus:golden_dragon_scale",
                "forbidden_arcanus:aquatic_dragon_scale",
                "forbidden_arcanus:aquatic_dragon_scale",
                "forbidden_arcanus:aquatic_dragon_scale",
                "iceandfire:scales/dragon",
                "iceandfire:scales/dragon",
                "iceandfire:scales/dragon",
                "iceandfire:scales/dragon",
            ],
        },
        {
            output: "forbidden_arcanus:tyr_leggings",
            reagent: "forbidden_arcanus:draco_arcanus_leggings",
            inputs: [
                "forbidden_arcanus:golden_dragon_scale",
                "forbidden_arcanus:silver_dragon_scale",
                "forbidden_arcanus:silver_dragon_scale",
                "forbidden_arcanus:silver_dragon_scale",
                "iceandfire:scales/dragon",
                "iceandfire:scales/dragon",
                "iceandfire:scales/dragon",
                "iceandfire:scales/dragon",
            ],
        },
        {
            output: "forbidden_arcanus:tyr_boots",
            reagent: "forbidden_arcanus:draco_arcanus_boots",
            inputs: [
                "forbidden_arcanus:golden_dragon_scale",
                "forbidden_arcanus:aquatic_dragon_scale",
                "forbidden_arcanus:aquatic_dragon_scale",
                "forbidden_arcanus:aquatic_dragon_scale",
                "iceandfire:scales/dragon",
                "iceandfire:scales/dragon",
                "iceandfire:scales/dragon",
                "iceandfire:scales/dragon",
            ],
        },
        {
            output: "actuallyadditions:coffee_beans",
            reagent: "rusticdelight:coffee_beans",
            inputs: ["minecraft:cocoa_beans", "minecraft:blaze_powder", "thermal:basalz_powder"],
        },
        {
            output: "integrateddynamics:menril_sapling",
            reagent: "#minecraft:saplings",
            inputs: [
                "forbidden_arcanus:arcane_crystal",
                "forbidden_arcanus:arcane_crystal",
                "forbidden_arcanus:arcane_crystal",
                "forbidden_arcanus:arcane_crystal",
                "forbidden_arcanus:arcane_crystal",
                "forbidden_arcanus:arcane_crystal",
                "forbidden_arcanus:arcane_crystal",
                "forbidden_arcanus:arcane_crystal",
            ],
        },
        {
            output: "reliquary:fertile_lily_pad",
            reagent: "minecraft:lily_pad",
            inputs: [
                "reliquary:fertile_essence",
                "reliquary:fertile_essence",
                "enigmaticlegacy:infinimeal",
                "ars_nouveau:magebloom",
                "alexscaves:cycad",
                "alexscaves:cycad",
            ],
        },
        {
            output: "apotheosis:uncommon_material",
            reagent: "rubinated_nether:ruby",
            inputs: [
                "apotheosis:common_material",
                "apotheosis:common_material",
                "apotheosis:common_material",
            ],
        },
        {
            output: "apotheosis:rare_material",
            reagent: "enigmaticlegacy:etherium_nugget",
            inputs: [
                "apotheosis:uncommon_material",
                "apotheosis:uncommon_material",
                "apotheosis:uncommon_material",
            ],
        },
    ];

    recipes.forEach((recipe) => {
        // These exist so I can be lazy
        const sourceCost = recipe.sourceCost ? recipe.SourceCost : 0;
        const keepNBT = recipe.keepNBT ? recipe.keepNBT : true;

        event.recipes.ars_nouveau.enchanting_apparatus(
            recipe.inputs,
            recipe.reagent,
            recipe.output,
            sourceCost,
            keepNBT,
        );
    });
});
