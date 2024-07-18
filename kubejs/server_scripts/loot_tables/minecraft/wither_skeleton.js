// EntityEvents.drops("minecraft:wither_skeleton", (event) => {
//     event.addDrop("iceandfire:witherbone", 0.5);
// });

// Doesn't work for some reason
// LootJS.modifiers(event => {
//     event.disableGlobalModifier("architects_palette:wither_skeleton_bones")
    
// })

// Replaces the wither skeleton bone drop from architects_palette with ice and fire wither bone
ServerEvents.highPriorityData(event => {
    let tweak = {
        "type": "architects_palette:wither_skeleton_bones",
        "conditions": [],
        "bone": "iceandfire:witherbone",
        "replaces": "minecraft:bone"
      }

    event.addJson("architects_palette:loot_modifiers/wither_skeleton_bones.json", tweak)
})