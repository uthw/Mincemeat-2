// by Liopyu with help from ladylexxie, and donalddino on discord (with changes)

StartupEvents.registry("item", (e) => {
    e.create("grave_scroll")
        .displayName("Scroll of Memory")
        .use((level, player, hand) => true)
        .useAnimation("bow")
        .useDuration((itemstack) => 64)
        .finishUsing((itemstack, level, entity) => {
            if (entity.player) global.gravescroll(entity);
            return itemstack;
        })
        .tooltip("Go back to the past for a chance to correct your mistake");
});

global.gravescroll = (entity) => {
    let pData = entity.persistentData;
    let offHandItem = entity.getHeldItem("off_hand");
    let item = entity.getHeldItem("main_hand");
    // entity.server.runCommand(`whisper @a deathreset: ${pData.deathreset}`);
    console.log(`deathreset: ${pData.deathreset}`);
    console.log(`dimension: ${pData.deathDimension}`);
    if (pData.deathreset != 1) {
        return;
    }

    pData.deathreset = 0;

    const effects = [
        "irons_spellbooks:true_invisibility",
        "minecraft:fire_resistance",
        "minecraft:water_breathing",
        "minecraft:slow_falling",
    ];
    if (item.id == "kubejs:grave_scroll") {
        let targetDimension = "";

        switch (pData.deathDimension) {
            case "overworld":
                targetDimension = "minecraft:overworld";
                break;
            case "the_nether":
                targetDimension = "minecraft:the_nether";
                break;
            case "the_end":
                targetDimension = "minecraft:the_end";
                break;
            case "black_bridge":
                targetDimension = "minecells:black_bridge";
                break;
            case "dungeon":
                targetDimension = "bloodmagic:dungeon";
                break;
            case "everbright":
                targetDimension = "blue_skies:everbright";
                break;
            case "everdawn":
                targetDimension = "blue_skies:everdawn";
                break;
            case "insufferable_crypt":
                targetDimension = "minecells:insufferable_crypt";
                break;
            case "otherside":
                targetDimension = "deeperdarker:otherside";
                break;
            case "past":
                targetDimension = "graveyard:past";
                break;
            case "prison":
                targetDimension = "minecells:prison";
                break;
            case "promenade":
                targetDimension = "minecells:promenade";
                break;
            case "ramparts":
                targetDimension = "minecells:ramparts";
                break;
            case "the_aether":
                targetDimension = "aether:the_aether";
                break;
            case "undergarden":
                targetDimension = "undergarden:undergarden";
                break;
            case "void":
                targetDimension = "voidz:void";
                break;
            default:
                targetDimension = "overworld";
                break;
        }

        console.log(targetDimension);

        effects.forEach((effect) => {
            entity.server.runCommand(
                `execute as ${entity.username} run effect give @p ${effect} 20 0 true`
            );
        });

        entity.server.runCommand(
            `execute in ${targetDimension} run tp ${entity.username} ${pData.deathx} ${pData.deathy} ${pData.deathz}`
        );

        item.count--;
    } else if (offHandItem.id == "kubejs:grave_scroll") {
        let targetDimension = "";

        switch (pData.deathDimension) {
            case "overworld":
                targetDimension = "minecraft:overworld";
                break;
            case "the_nether":
                targetDimension = "minecraft:the_nether";
                break;
            case "the_end":
                targetDimension = "minecraft:the_end";
                break;
            case "black_bridge":
                targetDimension = "minecells:black_bridge";
                break;
            case "dungeon":
                targetDimension = "bloodmagic:dungeon";
                break;
            case "everbright":
                targetDimension = "blue_skies:everbright";
                break;
            case "everdawn":
                targetDimension = "blue_skies:everdawn";
                break;
            case "insufferable_crypt":
                targetDimension = "minecells:insufferable_crypt";
                break;
            case "otherside":
                targetDimension = "deeperdarker:otherside";
                break;
            case "past":
                targetDimension = "graveyard:past";
                break;
            case "prison":
                targetDimension = "minecells:prison";
                break;
            case "promenade":
                targetDimension = "minecells:promenade";
                break;
            case "ramparts":
                targetDimension = "minecells:ramparts";
                break;
            case "the_aether":
                targetDimension = "aether:the_aether";
                break;
            case "undergarden":
                targetDimension = "undergarden:undergarden";
                break;
            case "void":
                targetDimension = "voidz:void";
                break;
            default:
                targetDimension = "overworld";
                break;
        }

        console.log(targetDimension);

        effects.forEach((effect) => {
            entity.server.runCommand(
                `execute as ${entity.username} run effect give @p ${effect} 20 true`
            );
        });

        entity.server.runCommand(
            `execute as ${entity.username} run effect give @p minecraft:resistance 5 4 true`
        );

        entity.server.runCommand(
            `execute in ${targetDimension} run tp ${entity.username} ${pData.deathx} ${pData.deathy} ${pData.deathz}`
        );

        offHandItem.count--;
    }
};
