StartupEvents.registry("item", (event) => {
    // for the future: this creates an item with the texture in assets/kubejs/texture/item/cell.png
    // for the purpose of this modpack, cells are only to be used as ingredients
    event.create("cell");

    event.create("leviathan_pearl");
});
