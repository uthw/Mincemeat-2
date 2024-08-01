ServerEvents.tags("item", (event) => {
    const add = [
        // Get [0] tag collection and add [1] to it
        // ["farmersdelight:tools/knives", "#forge:tools/knives"],
        ["forge:death_worm_chitins", "iceandfire:deathworm_chitin_yellow"],
        ["forge:death_worm_chitins", "iceandfire:deathworm_chitin_white"],
        ["forge:death_worm_chitins", "iceandfire:deathworm_chitin_red"],
        ["forge:bowls", "ecologics:coconut_husk"],
        // ["curios:head", "l2artifacts:head"],
        // ["curios:necklace", "l2artifacts:necklace"],
        // ["curios:body", "l2artifacts:body"],
        // ["curios:bracelet", "l2artifacts:bracelet"],
        // ["curios:belt", "l2artifacts:belt"],
    ];

    add.forEach((addition) => {
        event.add(addition[0], addition[1]);
    });

    // const removeAll = [
    //     // Remove all items from the tag
    //     "curios:artifact_head",
    //     "curios:artifact_necklace",
    //     "curios:artifact_body",
    //     "curios:artifact_bracelet",
    //     "curios:artifact_belt",
    // ];

    // removeAll.forEach((removal) => {
    //     event.removeAll(removal);
    // });
});
