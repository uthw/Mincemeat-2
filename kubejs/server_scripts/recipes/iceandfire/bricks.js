ServerEvents.recipes((event) => {
    let brickShape = ["AB", "BA"];
    let inputShape = ["AAA", "ABA", "AAA"];
    let coreShape = [" A ", "ABA", " A "];
    let order = ["fire", "ice", "lightning"];

    event.remove({ input: "minecraft:stone_bricks", mod: "iceandfire" });

    order.forEach((material) => {
        let bricks = `iceandfire:dragonforge_${material}_brick`;

        event.shaped(`8x ${bricks}`, brickShape, {
            A: `#forge:storage_blocks/scales/dragon/${material}`,
            B: "minecraft:stone_bricks",
        });

        event.remove({ input: bricks });
        event.shaped(`iceandfire:dragonforge_${material}_input`, inputShape, {
            A: "minecraft:iron_ingot",
            B: bricks,
        });
        event.shaped(
            `iceandfire:dragonforge_${material}_core_disabled`,
            coreShape,
            {
                A: bricks,
                B: `iceandfire:${material}_dragon_heart`,
            }
        );
    });
});
