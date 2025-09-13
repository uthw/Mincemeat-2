// Gives ender dragon more max hp. Can also be copied for other mobs that can't have their HP changed through In Control or mod configs.

const $AttributeModifier = Java.loadClass(
    "net.minecraft.world.entity.ai.attributes.AttributeModifier"
);

EntityEvents.spawned("minecraft:ender_dragon", (event) => {
    /**
     * @type {Internal.LivingEntity}
     */
    const entity = event.entity;
    const healthChange = 800;

    entity.getAttribute("minecraft:generic.max_health").removeModifiers(); // Don't think this does anything
    // Note this is adding arg1 to the mob's existing health, so dragon really has 300+800=1100 HP
    entity.getAttribute("minecraft:generic.max_health").addPermanentModifier(new $AttributeModifier("dragon_health", healthChange, "addition"));

    // I don't love using runCommand but this is the only way I could get it to work
    event.server.schedule(4, () => {
        event.server.runCommandSilent(
            "execute as @e[type=ender_dragon] run data modify entity @s Health set value 9999.0"
        );
    });
});
