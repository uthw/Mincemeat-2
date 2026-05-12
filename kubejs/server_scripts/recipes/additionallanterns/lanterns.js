ServerEvents.recipes((event) => {
    let recipesToReplace = [];

    event.forEachRecipe({ output: /additionallanterns:.*_lantern/ }, (recipe) => {
        const ingredients = recipe.originalRecipeIngredients;
        const outputId = recipe.originalRecipeResult.id;

        let hasTorch = false;
        let materialIngredient = null;

        ingredients.forEach((rawIngredient) => {
            let ing = Ingredient.of(rawIngredient);

            if (ing.isEmpty()) {
                return;
            }

            if (ing.test("minecraft:torch")) {
                hasTorch = true;
            } else {
                let safeString = ing.id ? String(ing.id) : String(ing);

                if (safeString.includes("additionallanterns")) {
                    return;
                } else {
                    materialIngredient = rawIngredient;
                }
            }
        });

        if (hasTorch && materialIngredient) {
            recipesToReplace.push({
                recipeId: String(recipe.getId()),
                outputItem: outputId,
                material: materialIngredient,
            });
        }
    });

    recipesToReplace.forEach((data) => {
        event.remove({ id: data.recipeId });

        event.shaped(Item.of(data.outputItem, 4), [" V ", "VIV", " V "], {
            V: "minecraft:lantern",
            I: data.material,
        });
    });
});
