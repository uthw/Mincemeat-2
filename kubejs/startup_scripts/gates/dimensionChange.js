// source: darklotus781 on discord

const dimChanges = {
    "minecraft:the_nether": "nether_access",
    "minecraft:the_end": "end_access",
    "blue_skies:everbright": "dimension_access",
    "blue_skies:everdawn": "dimension_access",
    "aether:the_aether": "nether_access",
    "minecells:prison": "minecells_access",
    "minecells:promenade": "minecells_access",
    "minecells:ramparts": "minecells_access",
    "minecells:black_bridge": "minecells_access",
    "minecells:insufferable_crypt": "minecells_access",
}

ForgeEvents.onEvent(
    "net.minecraftforge.event.entity.EntityTravelToDimensionEvent",
    (event) => {
        let entity = event.getEntity();
        if (!entity.isPlayer() || entity.isCreative()) return;

        let targetDimension = event.dimension.location();
        let neededStage = dimChanges[targetDimension];

        if (neededStage && !entity.stages.has(neededStage)) {
            entity.statusMessage = Text.of("The portal doesn't seem to work...");
            entity.server.schedule(
                2 * 1000,
                () =>
                    (entity.statusMessage = Text.of(
                        "The flow of the dimensions rejects you (check the quests).",
                    )),
            );
            event.setCanceled(true);
        }
    }
);
