// By default, Skyverns spawn when the player has defeated the Ender Dragon, and they have a 2% chance to spawn every 30 seconds which compounds by another 2% for each failure.
// TODO The spawning could mimic the original mod by only working after the player defeats some Aether boss

const useDebugLogging = false;

function logIfDebug(message) {
    if (useDebugLogging) {
        console.log(message);
    }
}

PlayerEvents.tick((event) => {
    const { player, level } = event;

    if (level.isClientSide() || player.age % 600 !== 0) return;

    if (level.dimension !== "aether:the_aether") return;

    let pData = player.persistentData;
    let fails = pData.getInt("skyvern_fails") || 0;

    let spawnChance = 0.02 + fails * 0.02;

    if (Math.random() <= spawnChance) {
        // Position the skyvern
        let px = player.getX();
        let py = player.getY();
        let pz = player.getZ();

        let angle = Math.random() * 3.14159265 * 2; // We have to use 3.14... because Math.PI = NaN intuitively. Thanks KubeJS
        let horizontalDist = 60 + Math.random() * 20; // 60 to 80 blocks

        if (!horizontalDist || !angle) {
            pData.putInt("skyvern_fails", fails + 1);
            logIfDebug(
                "Skyvern cancelled: horizontal distance or angle not available:",
                horizontalDist,
                angle,
            );
            return;
        }

        if (!px || !py || !pz) {
            pData.putInt("skyvern_fails", fails + 1);
            logIfDebug("Skyvern cancelled: player position not available:", px, py, pz);
            return;
        }

        let spawnX = Math.floor(px + Math.cos(angle) * horizontalDist);
        let spawnZ = Math.floor(pz + Math.sin(angle) * horizontalDist);
        let spawnY = Math.floor(py + 40 + Math.random() * 80); // 40 to 120 blocks

        if (!spawnX || !spawnY || !spawnZ) {
            pData.putInt("skyvern_fails", fails + 1);
            logIfDebug(
                "Skyvern cancelled: calculated spawn position not available:",
                spawnX,
                spawnY,
                spawnZ,
            );
            return;
        }

        if (!level.isLoaded([spawnX, spawnY, spawnZ])) {
            pData.putInt("skyvern_fails", fails + 1);
            logIfDebug(
                `Skyvern cancelled: position not loaded (${spawnX.toFixed(2)}, ${spawnY.toFixed(2)}, ${spawnZ.toFixed(2)})`,
            );
            return;
        }

        // Create and spawn the skyvern
        let skyvern = level.createEntity("opposing_force:skyvern");
        if (skyvern) {
            Utils.server.runCommandSilent(
                `execute in ${level.dimension} run summon opposing_force:skyvern ${spawnX} ${spawnY} ${spawnZ}`,
            );

            pData.putInt("skyvern_fails", 0);
            logIfDebug(
                `Skyvern spawned at (${spawnX.toFixed(2)}, ${spawnY.toFixed(2)}, ${spawnZ.toFixed(2)}) with a spawn chance of ${(spawnChance * 100).toFixed(2)}% after ${fails} failures.`,
            );
        }
    } else {
        pData.putInt("skyvern_fails", fails + 1);
        logIfDebug("Skyvern spawn didn't happen this time");
    }
});
