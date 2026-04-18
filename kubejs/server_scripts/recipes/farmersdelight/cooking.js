ServerEvents.recipes((event) => {
    event.custom({
        type: "farmersdelight:cooking",
        cookingtime: 40,
        experience: 1.0,
        ingredients: [
            {
                item: "minecraft:wheat"
            }
        ],
        result: {
            item: "farmersdelight:wheat_dough"
        }
    })

    event.custom({
        type: "farmersdelight:cooking",
        cookingtime: 100,
        experience: 3.0,
        ingredients: [
            {
                item: "minecraft:cocoa_beans"
            },
            {
                item: "minecraft:cocoa_beans"
            },
            {
                item: "minecraft:sugar"
            },
            {
                tag: "forge:milk" // for now I am keeping this in but it may be removed if that makes it hard to automate
            }
        ],
        result: {
            item: "neapolitan:chocolate_bar",
            amount: 4
        }
    })
})