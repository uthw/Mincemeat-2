// There are no vanilla blocks that require a netherite pickaxe to mine so Forge added a block tag for it. 
// However, most modded tools don't know what to do with this tag and are able to mine blocks with forge:needs_netherite_tool, even if they shouldn't be able to.
// In this script we replace all modded tool tiers with KubeJS's MutableToolTiers, which don't have this issue.

ItemEvents.modification((event) => {
    let count = 0;
    event.modify(/.*/, (item) => {
        if (item.id.startsWith("minecraft:")) return;

        try {
            if (item.tier && item.tier.level !== undefined) {
                let originalLevel = item.tier.level;

                if (originalLevel >= 4) return;

                let originalUses = item.tier.uses;
                let originalSpeed = item.tier.speed;
                let originalDamage = item.tier.attackDamageBonus;
                let originalEnchant = item.tier.enchantmentValue;

                item.tier = (tier) => {
                    tier.level = originalLevel;
                    tier.uses = originalUses;
                    tier.speed = originalSpeed;
                    tier.attackDamageBonus = originalDamage;
                    tier.enchantmentValue = originalEnchant;
                };

                count++;
            }
        } catch (error) {
            // Do nothing
        }
    });

    console.log(`Modified tiers for ${count} modded items`);
});
