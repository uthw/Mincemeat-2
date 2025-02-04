// Nerf the growth speed of Botany Pots since I'm tired of complaints that they're too OP
// The factor the original growth speed is multiplied by: 0.25 = 25% of the original speed or 4 times as slow
let growthFactor = 0.4;

ServerEvents.recipes((event) => {
    event.forEachRecipe({ type: "botanypots:soil" }, (recipe) => {
        let recipeJson = JSON.parse(recipe.json);

        let input = recipeJson.input;
        let display = recipeJson.display;
        let categories = recipeJson.categories;
        let growthModifier = recipeJson.growthModifier * growthFactor;

        // console.log(`Processing recipe: ${JSON.stringify(recipeJson)}`);

        event
            .custom({
                type: "botanypots:soil",
                input: input,
                display: display,
                categories: categories,
                growthModifier: growthModifier,
            })
            .id(recipe.getId());
    });
});
