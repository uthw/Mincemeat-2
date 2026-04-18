ForgeEvents.onEvent("net.minecraftforge.event.entity.living.LivingHealEvent", (event) => {
    if (event.entity.type === "bosses_of_mass_destruction:void_blossom") {
        event.setAmount(event.amount * 0.25); // Just to make the fight easier

        // Normally, the void blossom should not be able to heal above 25, 50, or 75% health, but due to a bug in a different mod, it can heal fully.
        // We don't have a way of telling what phase the boss is in, so we just stop it from healing if its health roughly equals these percentages.

        const currentHealth = event.entity.health;
        let threshold;
        const max = event.entity.maxHealth;
        // Sometimes the boss heals a big chunk of health at once, so we add a small buffer to prevent it from going past the threshold and healing to the next one
        const buffer = max * 0.05;

        if (currentHealth > max * 0.75 + buffer) {
            threshold = max;
        } else if (currentHealth > max * 0.5 + buffer) {
            threshold = max * 0.75;
        } else if (currentHealth > max * 0.25 + buffer) {
            threshold = max * 0.5;
        } else {
            threshold = max * 0.25;
        }

        // Clamp the heal so it perfectly matches the threshold if it would go over, and cancel it if it's already at or above the threshold
        if (currentHealth < threshold && currentHealth + event.amount > threshold) {
            event.setAmount(threshold - currentHealth);
        } else if (currentHealth >= threshold) {
            event.setCanceled(true);
        }
    }
});
