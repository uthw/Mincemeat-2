// better combat support for pickaxes from blue blue_skies
// many enemies from this mod take more damage from pickaxes, so players may end up using them for that purpose

let materials = [
    "bluebright",
    "starlit",
    "frostbright",
    "lunar",
    "dusk",
    "maple",
    "comet",
    "turquoise_stone",
    "lunar_stone",
    "pyrope",
    "aquite",
    "diopside",
    "charoite",
    "horizonite",
];

ServerEvents.highPriorityData((event) => {
    materials.forEach((material) => {
        event.addJson(`blue_skies:weapon_attributes/${material}_pickaxe.json`, {
            parent: "bettercombat:mace",
        });
    });
});
