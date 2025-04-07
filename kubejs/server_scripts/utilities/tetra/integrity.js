// ServerEvents.highPriorityData((event) => {
//     let tweaks = [
//         // Example
//         {
//             // Integrity cost/gain are on the far left in the material info in the holosphere
//             // You can choose not to include cost and/or gain if you don't want to change them for this material. However, you must include the path
//             // To get the path, you'll need to extract or open the mod archive that adds the material (Tetra, Tetranomicon, Dimasctetracompat, ...) and navigate to the data/{MODID}/materials folder
//             path: "metal/gold", // Path to the material relative to the data/{MODID}/materials folder in the mod jar
//             cost: 2, // Integrity cost for the material
//             gain: 3, // Integrity gain for the material
//         },
//     ];

//     // Don't edit anything below this line unless I tell you to
//     tweaks.forEach((tweak) => {
//         let jsonData = {};

//         if (tweak.cost !== undefined) {
//             jsonData.integrityCost = tweak.cost;
//         }

//         if (tweak.gain !== undefined) {
//             jsonData.integrityGain = tweak.gain;
//         }

//         event.addJson(`tetra:materials/${tweak.path}`, jsonData);
//     });
// });