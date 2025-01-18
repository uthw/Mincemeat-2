ServerEvents.recipes((event) => {
    event.remove({ output: "meetyourfight:haunted_bell" });
    event.shaped("meetyourfight:haunted_bell", [" A ", " B ", " C "], {
        A: "iceandfire:ectoplasm",
        B: "#forge:rope",
        C: "minecraft:gold_ingot",
    });

    event.remove({ output: "meetyourfight:caged_heart" });
    event.shaped("meetyourfight:caged_heart", ["BAB", "BCB", " D "], {
        A: "#forge:ingots/silver",
        B: "#forge:bones",
        C: "eidolon:zombie_heart",
        D: "meetyourfight:mossy_tooth",
    });

    event.remove({ output: "meetyourfight:bone_raker" });
    event.shaped("meetyourfight:bone_raker", ["BBB", "ACA", "ADA"], {
        A: "#forge:ingots/silver",
        B: "#forge:bones",
        C: "alexsmobs:falconry_glove",
        D: "meetyourfight:mossy_tooth",
    });

    event.remove({ output: "meetyourfight:depth_star" });
    event.shaped("meetyourfight:depth_star", [" A ", "ACA", " B "], {
        A: "#forge:ingots/silver",
        B: "#forge:bones",
        C: "meetyourfight:mossy_tooth",
    });

    event.remove({ output: "meetyourfight:spectres_grasp" });
    event.shaped("meetyourfight:spectres_grasp", [" A ", "BDB", "BCB"], {
        A: "meetyourfight:phantoplasm",
        B: "#forge:ingots/gold",
        C: "irons_spellbooks:ender_rune",
        D: "alexsmobs:falconry_glove",
    });

    event.remove({ output: "meetyourfight:passages_toll" });
    // event.shaped('meetyourfight:passages_toll', [
    //     'FA ',
    //     'ECE',
    //     'BDB'
    // ], {
    //     A: 'meetyourfight:phantoplasm',
    //     B: '#forge:ingots/gold',
    //     C: 'scalinghealth:enchanted_heart',
    //     D: '#buzzier_bees:candles',
    //     E: 'eidolon:death_essence',
    //     F: 'minecraft:bedrock'
    // })

    event.remove({ output: "meetyourfight:spectres_eye" });
    event.shaped("meetyourfight:spectres_eye", ["AAA", "BCB", "ADA"], {
        A: "#forge:ingots/gold",
        B: "#forge:nuggets/gold",
        C: "meetyourfight:phantoplasm",
        D: "alexscaves:telecore",
    });

    event.remove({ output: "meetyourfight:slicers_dice" });
    event.shaped("meetyourfight:slicers_dice", [" A ", "BCB", " A "], {
        A: "#forge:ingots/cloggrum",
        B: "#forge:scales/sea_serpent",
        C: "meetyourfight:fortunes_favor",
    });

    // event.shapeless("meetyourfight:ace_of_iron", [
    //     "meetyourfight:fortunes_favor",
    //     "spartanshields:iron_basic_shield",
    // ]);
});
