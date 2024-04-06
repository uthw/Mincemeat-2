// This script is from @chiefarug. You can find it as the example script "complete eidolon recipe support" on Lat's discord

const $RecipeSchema = Java.loadClass(
    "dev.latvian.mods.kubejs.recipe.schema.RecipeSchema"
);
const $ShapedRecipeSchema = Java.loadClass(
    "dev.latvian.mods.kubejs.recipe.schema.minecraft.ShapedRecipeSchema"
);
const $RecipeComponentBuilder = Java.loadClass(
    "dev.latvian.mods.kubejs.recipe.component.RecipeComponentBuilder"
);

StartupEvents.recipeSchemaRegistry((event) => {
    const Components = event.components;

    event.register(
        "eidolon:worktable",
        new $RecipeSchema(
            $ShapedRecipeSchema.RESULT,
            $ShapedRecipeSchema.PATTERN,
            Components.get("filteredString")({
                error: "reagents must have a length of four",
                filter: (s) => s.length == 4,
            }).key("reagents"),
            $ShapedRecipeSchema.KEY
        )
    );

    event.register(
        "eidolon:crucible",
        new $RecipeSchema(
            Components.get("outputItem")().key("result"),
            new $RecipeComponentBuilder(2)
                .add(Components.get("intNumber")().key("stirs").optional(0))
                .add(
                    Components.get("inputItemArray")().key("items").optional([])
                )
                .inputRole()
                .asArray()
                .key("steps")
        )
    );
});
