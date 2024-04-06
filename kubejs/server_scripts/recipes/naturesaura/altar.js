// {
//   "type": "naturesaura:altar",
//   "input": {
//     "item": "minecraft:gold_ingot"
//   },
//   "output": {
//     "item": "naturesaura:tainted_gold"
//   },
//   "aura": 3000,
//   "time": 300
// }

ServerEvents.recipes((event) => {
    const recipes = [
        {
            // valid catalsysts: (excuse my terrible spelling - do not copypaste them! spell them right!)
            // naturesaura:conversion_catalsyst , naturesaura:crushing_catalsytt , naturesaura:nature_altar
            input: { item: "supplementaries:pedestal" },
            output: { item: "botania:apothecary_default" },
            catalyst: { item: "naturesaura:conversion_catalyst" },
            auraType: "naturesaura:overworld",
            aura: 10000,
            time: 80,
        },
    ];

    recipes.forEach((recipe) => {
        event.custom({
            type: "naturesaura:altar",
            input: recipe.input,
            output: recipe.output,
            catalyst: recipe.catalyst,
            aura_type: recipe.auraType,
            aura: recipe.aura,
            time: recipe.time,
        });
    });
});
