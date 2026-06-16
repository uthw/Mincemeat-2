const stagesToTiers = {
    "killed_30_bosses": 5,
    "killed_20_bosses": 4,
    "minecells_access": 3,
    "dimension_access": 2,
}

function getMaxUnlockedTier(player) {
    if (!player) return 1; // If there is no player nearby, default to tier 1

    let stages = player.stages.all;

    let maxTier = 1;
    stages.forEach((stage) => { 
        let tierValue = stagesToTiers[stage];
        if (tierValue && tierValue > maxTier) {
            maxTier = tierValue;
        }
    });

    return maxTier;
}

EntityEvents.spawned((event) => {
    let entity = event.entity;
    let level = event.level;
    if (!entity.nbt || !entity.isLiving() || !entity.nbt) {
        return;
    }

    let forgeCaps = entity.nbt.getCompound("ForgeCaps");
    if (!forgeCaps || !forgeCaps.contains("champions:champion")) {
        return;
    }

    let championData = forgeCaps.getCompound("champions:champion");
    let tier = championData.getInt("tier");

    let nearestPlayer = level.getNearestPlayer(entity.x, entity.y, entity.z, 128, false);

    let maxTier = getMaxUnlockedTier(nearestPlayer);

    if (tier > maxTier) {
        event.cancel(); // Remove the mob (it is hard to strip it of its champion properties)
    }
})