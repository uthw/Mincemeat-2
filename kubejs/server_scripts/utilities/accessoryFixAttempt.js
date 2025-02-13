// fix a bug that causes certificate of taming to be dropped when interacting with a tamed dragon
// this may cause overhead

let distanceThreshold = 15;

PlayerEvents.inventoryChanged(
    "majruszsaccessories:certificate_of_taming",
    (event) => {
        let { x, y, z } = event.player;

        event.server.getEntities().forEach((entity) => {
            if (
                entity.type != "iceandfire:ice_dragon" &&
                entity.type != "iceandfire:fire_dragon" &&
                entity.type != "iceandfire:lightning_dragon"
            ) {
                return;
            }

            let dragonx = entity.x;
            let dragony = entity.y;
            let dragonz = entity.z;

            // kill the item if the distance vector has magnitude less than distanceThreshold
            let distance = Math.sqrt(
                Math.pow(dragonx - x, 2) +
                    Math.pow(dragony - y, 2) +
                    Math.pow(dragonz - z, 2)
            );

            if (distance < distanceThreshold) {
                event.server.runCommand(
                    `execute as ${event.entity.username} run clear @s majruszsaccessories:certificate_of_taming 1`
                );

                return;
            }
        });
    }
);
