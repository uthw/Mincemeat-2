EntityEvents.death("minecraft:player", (event) => {
    let { x, y, z } = event.player;
    console.log("healthRefill");

    // event.server.entities.forEach((entity) => {
    //     if (
    //         Math.abs(entity.x - event.player.x) <= 125 &&
    //         Math.abs(entity.z - event.player.z) <= 125
    //     ) {
    //         if (
    //             entity.type != "minecraft:player" &&
    //             entity.type != "frostiful:freezing_wind"
    //         ) {
    //             console.log(`Distance check success for ${entity.type}`);
    //             entity.server.runCommand(
    //                 ""
    //             );
    //         }
    //     }
    // });

    // command that sets hp to 9999 for nonplayer entities within 50 blocks of the player who dies
    event.server.runCommandSilent(
        `execute positioned ${x} ${y} ${z} as @e[type=!minecraft:player,distance=..50] run data modify entity @s Health set value 9999.0d`
    );
});
