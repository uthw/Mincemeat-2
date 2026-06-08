
// This is to get the effect ID of a string
const $ForgeRegistries = Java.loadClass('net.minecraftforge.registries.ForgeRegistries');

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
    event.modify(/.*:/, (item) => {
        if (item.foodProperties) {
            let id = item.id;
            let fp = item.foodProperties;

            // Get existing properties. This script only changes nutrition and saturation so we'll restore the others
            let baseNutrition = fp.getNutrition();
            let baseSaturation = fp.getSaturationModifier();
            let isMeat = fp.isMeat();
            let alwaysEdible = fp.canAlwaysEat();
            let isFastFood = fp.isFastFood();
            let effects = fp.getEffects(); 

            item.foodProperties = (food) => {
                // Apply manual overrides or do so automatically
                if (foodOverride[id] !== undefined) {
                    food.hunger(foodOverride[id]);
                } else {
                    food.hunger(Math.floor(baseNutrition * hungerRatio));
                }
                food.saturation(baseSaturation * saturationRatio);

                // Restore everything else
                if (isMeat) food.meat();
                if (alwaysEdible) food.alwaysEdible();
                if (isFastFood) food.fastToEat();

                if (effects && !effects.isEmpty()) {
                    effects.forEach((pair) => {
                        let effectInstance = pair.getFirst();
                        let probability = pair.getSecond();

                        // Get an instance of MobEffect
                        let mobEffect = effectInstance.getEffect();
                        
                        // Get other properties of the effect instance that the food wants
                        let effectId = $ForgeRegistries.MOB_EFFECTS.getKey(mobEffect).toString();
                        let duration = effectInstance.getDuration();
                        let amplifier = effectInstance.getAmplifier();

                        // Give the food the effect as it had before
                        food.effect(effectId, duration, amplifier, probability);
                    });
                }
            };
        }
    });
});
