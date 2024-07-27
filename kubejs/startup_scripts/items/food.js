// Decreases all saturation restoration from food, but increases all nutrition to compensate
//

// // this is my stupid script
// ItemEvents.modification((event) => {
//     Item.list.forEach((item) => {
//         event.modify(item, (food) => {
//             if (food.foodProperties) {
//                 // saturation (does work)
//                 food.foodProperties.saturationModifier /= 1.5;
//                 // // food (does not work)
//                 // if (food.foodProperties.nutrition) {
//                 //     food.foodProperties.nutrition = Math.floor(
//                 //         food.foodProperties.nutrition * 1.33
//                 //     );
//                 //     food.setFoodProperties();
//                 // }
//             }
//         });
//     });
// });

// this is another example script from nol_an on discord, this is very helpful, thank you!
let hungerRatio = 1.35;
let saturationRatio = 0.42;
let foodOverride = {
    "minecraft:cooked_beef": 6,
    "minecraft:cooked_porkchop": 6,
    "minecraft:bread": 4,
    "minecraft:baked_potato": 4,
    "minecraft:cooked_mutton": 5,
    "minecraft:apple": 3,
    "farmersdelight:kelp_roll": 12,
    "farmersdelight:kelp_roll_slice": 6,
};

let foodOverrideKeys = Object.keys(foodOverride);

ItemEvents.modification((event) => {
    let edibleStacks = Ingredient.custom((i) => i.edible).getStacks();

    edibleStacks.forEach((stack) => {
        let foodProperties = stack.item.foodProperties;
        if (foodProperties) {
            event.modify(stack.item.id, (foodItem) => {
                foodItem.foodProperties = (food) => {
                    if (foodOverrideKeys.includes(stack.item.id)) {
                        food.hunger(foodOverride[stack.item.id]);
                    } else {
                        food.hunger(
                            parseInt(foodProperties.nutrition * hungerRatio)
                        );
                    }
                    food.saturation(
                        foodProperties.saturationModifier * saturationRatio
                    );
                };
            });
        }
    });
});
