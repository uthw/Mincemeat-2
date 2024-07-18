ServerEvents.tags("item", (event) => {
    const add = [
        // Get [0] tag collection and add [1] to it
        // ["farmersdelight:tools/knives", "#forge:tools/knives"],
        ["forge:death_worm_chitins", "iceandfire:deathworm_chitin_yellow"],
        ["forge:death_worm_chitins", "iceandfire:deathworm_chitin_white"],
        ["forge:death_worm_chitins", "iceandfire:deathworm_chitin_red"],
        ["forge:bowls", "ecologics:coconut_husk"],
    ];

    add.forEach((addition) => {
        event.add(addition[0], addition[1]);
    });
});
