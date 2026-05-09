// Decreases all saturation restoration from food, but increases all nutrition to compensate

const hungerRatio = 1.35;
const saturationRatio = 0.42;
const foodOverride = {
    "minecraft:cooked_beef": 6,
    "minecraft:cooked_porkchop": 6,
    "minecraft:bread": 4,
    "minecraft:baked_potato": 4,
    "minecraft:cooked_mutton": 5,
    "minecraft:apple": 3,
    "farmersdelight:kelp_roll": 12,
    "farmersdelight:kelp_roll_slice": 6,
};

ItemEvents.modification((event) => {
    // Single global listener
    event.modify(/.*:/, (item) => {
        // Only trigger if the item is edible
        if (item.foodProperties) {
            let id = item.id;

            // Store the base values before modification
            let baseNutrition = item.foodProperties.nutrition;
            let baseSaturation = item.foodProperties.saturationModifier;

            item.foodProperties = (food) => {
                // Lookup override values, if they exist, otherwise calculate based on ratios
                if (foodOverride[id] !== undefined) {
                    food.hunger(foodOverride[id]);
                } else {
                    food.hunger(Math.floor(baseNutrition * hungerRatio));
                }

                food.saturation(baseSaturation * saturationRatio);
            };
        }
    });
});
