let bossesToRemoveCritsFrom = ["galosphere:berserker"];

bossesToRemoveCritsFrom.forEach(boss => {
    EntityEvents.spawned(boss, event => {
        event.entity.server.runCommand(
            "execute as @e[type=galosphere:berserker] run attribute @s attributeslib:crit_chance modifier add f8b1c2d3-4e5f-6789-abcd-ef0123456789 nerf -0.05 add"
        );
    })
})