ServerEvents.tags("item", (event) => {
    const add = [
        // Get [0] tag collection and add [1] to it
        ["farmersdelight:tools/knives", "#forge:tools/knives"],
    ];

    add.forEach((addition) => {
        event.add(addition[0], addition[1]);
    });
});
