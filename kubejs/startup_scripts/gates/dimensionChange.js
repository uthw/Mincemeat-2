// source: darklotus781 on discord

ForgeEvents.onEvent(
    "net.minecraftforge.event.entity.EntityTravelToDimensionEvent",
    (event) => {
        global.dimChangeEvent(event);
    }
);

global.dimChangeEvent = (event) => {
    function addDimension(enteringDimension, neededStage) {
        if (!event.getEntity().player) return;
        let player = event.getEntity();
        let targetDimension = event.dimension.location();
        let server = player.server;

        if (targetDimension == enteringDimension) {
            if (!player.stages.has(neededStage)) {
                player.statusMessage = Text.of(
                    "The portal doesn't seem to work..."
                );
                server.schedule(
                    2 * 1000,
                    () =>
                        (player.statusMessage = Text.of(
                            "The flow of the dimensions rejects you (check the quests)."
                        ))
                );
                event.setCanceled(true);
            }
        }
    }

    addDimension("minecraft:the_nether", "nether_access");
    addDimension("minecraft:the_end", "end_access");
    addDimension("blue_skies:everbright", "dimension_access");
    addDimension("blue_skies:everdawn", "dimension_access");
    addDimension("aether:the_aether", "nether_access");
    addDimension("minecells:prison", "minecells_access");
    addDimension("minecells:promenade", "minecells_access");
    addDimension("minecells:ramparts", "minecells_access");
    addDimension("minecells:black_bridge", "minecells_access");
    addDimension("minecells:insufferable_crypt", "minecells_access");
};
