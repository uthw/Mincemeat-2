// {
//   "type": "botania:elven_trade",
//   "ingredients": [
//     {
//       "item": "minecraft:diamond_block"
//     }
//   ],
//   "output": [
//     {
//       "item": "minecraft:diamond_block"
//     }
//   ]
// }

ServerEvents.recipes((event) => {
    let recipes = [
        {
            output: { item: "actuallyadditions:coffee_beans" },
            input: { item: "minecraft:cocoa_beans" },
        },
    ];

    recipes.forEach((recipe) => {
        event.custom({
            type: "botania:elven_trade",
            ingredients: [recipe.input],
            output: [recipe.output],
        });
    });
});
