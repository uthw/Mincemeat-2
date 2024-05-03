ServerEvents.recipes((event) => {
    let hook = Item.of(
        "grapplemod:grapplinghook",
        "{Damage:0,custom:{doublehook:0b,motor:0b,phaserope:0b,attract:0b,rocket:0b,hookgravity:1.0d,repelforce:1.0d,attractradius:3.0d,pullbackwards:1b,smartmotor:0b,detachonkeyrelease:0b,angle:20.0d,crc32:2252267022L,rocket_vertical_angle:0.0d,rocket_force:1.0d,rocket_refuel_ratio:15.0d,motorwhencrouching:0b,motorwhennotcrouching:1b,motordampener:0b,rocket_active_time:0.5d,throwspeed:2.0d,motoracceleration:0.2d,enderstaff:0b,oneropepull:0b,sneakingverticalthrowangle:0.0d,smartdoublemotor:1b,repel:0b,sneakingangle:10.0d,motormaxspeed:4.0d,playermovementmult:1.0d,reelin:1b,sticky:0b,verticalthrowangle:0.0d,maxlen:30.0d}}"
    ); // gawd DAMN

    // event.remove({ output: hook });
    // event.shapeless(hook, ["minecraft:iron_pickaxe", "#supplementaries:ropes"]);

    event.remove({ output: "grapplemod:launcheritem" });
    event.shaped("grapplemod:launcheritem", ["EAE", "DBD", " C "], {
        A: "#forge:rods/wooden", // TODO Replace with Spartan pole
        B: "aether:golden_gummy_swet",
        C: "forbidden_arcanus:soul",
        D: "minecraft:ender_pearl",
        E: "minecells:blank_rune",
    });

    // event.remove({output: "grapplemod:motorupgradeitem"})

    event.remove({ output: "grapplemod:rocketupgradeitem" });

    event.remove({ output: "grapplemod:magnetupgradeitem" });
    event.shapeless("grapplemod:magnetupgradeitem", [
        "grapplemod:baseupgradeitem",
        "#forge:ingots/iron",
        "#forge:ingots/lead",
        "#forge:ingots/tin",
    ]);

    event.remove({ output: "grapplemod:repeller" });
    event.shaped("grapplemod:repeller", ["ABA", "BCB", "ABA"], {
        A: "#forge:ingots/iron",
        B: "#forge:ingots/nickel",
        C: "eidolon:enchanted_ash",
    });
});
