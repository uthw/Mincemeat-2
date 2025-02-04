ServerEvents.recipes((event) => {
    event
        .shaped("sophisticatedbackpacks:backpack", ["ABA", "ACA", "BBB"], {
            A: "#forge:string",
            B: "farmersdelight:canvas",
            C: "#forge:chests",
        })
        .id("sophisticatedbackpacks:backpack");
});
