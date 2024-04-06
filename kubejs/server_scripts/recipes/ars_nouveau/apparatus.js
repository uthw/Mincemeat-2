ServerEvents.recipes((event) => {
    const recipes = [
        {
            output: "ars_nouveau:ring_of_lesser_discount",
            reagent: "ars_nouveau:ring_of_potential",
            inputs: [
                "3x minecraft:diamond",
                "2x ars_nouveau:sourceberry_bush",
                "3x blue_skies:pink_brewberry",
            ],
            // Source Cost not provided --> treated as 0
            // keep NBT not provided --> treated as true
        },
        {
            output: "naturesaura:wood_stand",
            reagent: "minecraft:stripped_oak_log",
            inputs: ["naturesaura:gold_leaf", "#forge:gems/source"],
        },
        {
            output: "naturesaura:gold_fiber",
            reagent: "minecraft:grass",
            inputs: ["4x #botania:petals/yellow"],
        },
        {
            output: "naturesaura:offering_table",
            reagent: "supplementaries:pedestal",
            inputs: [
                "3x naturesaura:infused_iron",
                "ars_nouveau:source_gem",
                "forbidden_arcanus:arcane_crystal",
                "naturesaura:gold_powder",
            ],
        },
        {
            output: "bloodmagic:blankrune",
            reagent: "bloodmagic:blankslate",
            inputs: [
                "eidolon:pewter_ingot",
                "4x minecraft:deepslate",
                "thermal:apatite",
            ],
        },
        {
            output: "bloodmagic:alchemytable",
            reagent: "bloodmagic:blankslate",
            inputs: [
                "eidolon:polished_wood_pillar",
                "3x minecraft:deepslate",
                "eidolon:arcane_gold_ingot",
                "ars_nouveau:potion_flask",
            ],
        },
        // Enigmatic Legacy recipes
        //
        // {
        //     output: "enigmaticlegacy:recall_potion",
        //     reagent: Item.of(
        //         "naturesaura:aura_bottle",
        //         '{stored_type:"naturesaura:overworld"}'
        //     ),
        //     inputs: ["forbidden_arcanus:rune", "alexsmobs:cockroach_wing"],
        // },
        // {
        //     output: "enigmaticlegacy:mining_charm",
        //     reagent: "ars_nouveau:dull_trinket",
        //     inputs: [
        //         "#forge:gems/sapphire",
        //         "eidolon:gold_inlay",
        //         "#forge:ingots/arcane_gold",
        //         "#forge:ingots/arcane_gold",
        //         "aquamirae:pirate_pouch",
        //     ],
        // },
        // {
        //     output: "enigmaticlegacy:mega_sponge",
        //     reagent: "alexsmobs:soul_heart",
        //     inputs: [
        //         "minecraft:heart_of_the_sea",
        //         "minecraft:sponge",
        //         "minecraft:sponge",
        //         "upgrade_aquatic:guardian_spine",
        //     ],
        // },
        {
            output: "scalinghealth:enchanted_heart",
            reagent: "forbidden_arcanus:rune",
            inputs: [
                "paraglider:spirit_orb",
                "paraglider:spirit_orb",
                "forbidden_arcanus:arcane_crystal_dust",
                "forbidden_arcanus:arcane_crystal_dust",
            ],
        },
        {
            output: "scalinghealth:cursed_heart",
            reagent: "forbidden_arcanus:dark_rune",
            inputs: [
                "paraglider:spirit_orb",
                "paraglider:spirit_orb",
                "iceandfire:ectoplasm",
                "iceandfire:ectoplasm",
            ],
        },
        {
            output: "reliquary:angelheart_vial",
            reagent: Item.of(
                "minecraft:potion",
                '{Potion:"ars_nouveau:shielding_potion"}'
            ),
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
            inputs: [
                "wilderwild:small_sponge",
                "minecells:blank_rune",
                "reliquary:squid_beak",
            ],
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
            reagent: "eidolon:silver_sword",
            inputs: [
                "ars_nouevau:source_gem_block",
                "ars_nouveau:source_gem_block",
                "blue_skies:diopside_block",
                "irons_spellbooks:common_ink",
                "eidolon:oanna_bloom",
            ],
        },
        {
            output: "ars_nouveau:enchanters_sword",
            reagent: "iceandfire:silver_sword",
            inputs: [
                "ars_nouevau:source_gem_block",
                "ars_nouveau:source_gem_block",
                "blue_skies:diopside_block",
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
            keepNBT
        );
    });
});
