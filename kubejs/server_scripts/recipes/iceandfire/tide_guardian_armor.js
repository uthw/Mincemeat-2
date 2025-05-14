let colors = ["blue", "bronze", "deepblue", "green", "purple", "red", "teal"];
let armorTypes = ["helmet", "chestplate", "leggings", "boots"];
let patterns = [
    ["BAB", "A A", "   "],
    ["B B", "ACA", "AAA"],
    ["BAB", "A A", "A A"],
    ["   ", "A A", "B B"],
];
let altItem1 = "aquamirae:abyssal_amethyst";
let altItem2 = "alexscaves:pearl";

ServerEvents.recipes((event) => {
    colors.forEach((color) => {
        armorTypes.forEach((armorType, index) => {
            event.remove({ output: `iceandfire:tide_${color}_${armorType}` });
            event.shaped(
                `iceandfire:tide_${color}_${armorType}`,
                patterns[index],
                patterns[index][1].includes("C")
                    ? {
                          A: `iceandfire:sea_serpent_scales_${color}`,
                          B: altItem1,
                          C: altItem2,
                      }
                    : {
                          A: `iceandfire:sea_serpent_scales_${color}`,
                          B: altItem1,
                      }
            );
        });
    });
});