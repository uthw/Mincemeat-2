JEIEvents.information((event) => {
    const addSafe = (regex, info) => {
        try {
            event.addItem(regex, info);
        } catch (err) {}
    };

    addSafe(/aether:(stripped_)?golden_oak_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Aerlavender Fields, Gilded Grasslands, Gilded Groves, Skyroot Forest, Skyroot Grove, Skyroot Meadow, Skyroot Woodland",
    ]);
    addSafe(/aether:(stripped_)?skyroot_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Aerglow Forest, Aerlavender Fields, Blue Aerglow Forest, Cloudcaps, Frosted Forests, Gilded Grasslands, Gilded Groves, Glacial Tundra, Golden Grove, Golden Heights, Luminescent Forest, Mystic Aerglow Forest, Skyfields, Skyroot Forest, Skyroot Grove, Skyroot Meadow, Skyroot Shrublands, Skyroot Woodland, The Blight, Yagroot Swamp",
    ]);
    addSafe(/aether_redux:(stripped_)?blighted_skyroot_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "The Blight",
    ]);
    addSafe(/aether_redux:(stripped_)?blightwillow_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "The Blight",
    ]);
    addSafe(/aether_redux:(stripped_)?cloudcap_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Cloudcaps",
    ]);
    addSafe(/aether_redux:(stripped_)?crystal_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Skyfields",
    ]);
    addSafe(/aether_redux:(stripped_)?fieldsproot_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Skyfields",
    ]);
    addSafe(/aether_redux:(stripped_)?gilded_oak_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Gilded Grasslands, Gilded Groves",
    ]);
    addSafe(/aether_redux:(stripped_)?glacia_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Aerglow Forest, Aerlavender Fields, Blue Aerglow Forest, Cloudcaps, Frosted Forests, Gilded Grasslands, Gilded Groves, Glacial Tundra, Golden Grove, Golden Heights, Luminescent Forest, Mystic Aerglow Forest, Skyfields, Skyroot Forest, Skyroot Grove, Skyroot Meadow, Skyroot Shrublands, Skyroot Woodland, The Blight, Yagroot Swamp",
    ]);
    addSafe(/aether_redux:(stripped_)?jellyshroom_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Cloudcaps",
    ]);
    addSafe(/aether_redux:(stripped_)?purple_glacia_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Frosted Forests, Glacial Tundra",
    ]);
    addSafe(/aether_redux:(stripped_)?sporing_blightwillow_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "The Blight",
    ]);
    addSafe(/ars_elemental:(stripped_)?yellow_archwood_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Flashing Forest, Flashing Tree Biome",
    ]);
    addSafe(/ars_nouveau:(stripped_)?blue_archwood_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Any Overworld Biome, Archwood Forest, Cascading Forest",
    ]);
    addSafe(/ars_nouveau:(stripped_)?green_archwood_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Any Overworld Biome, Archwood Forest, Flourishing Forest",
    ]);
    addSafe(/ars_nouveau:(stripped_)?purple_archwood_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Any Overworld Biome, Archwood Forest",
    ]);
    addSafe(/ars_nouveau:(stripped_)?red_archwood_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Any Overworld Biome, Archwood Forest, Blazing Forest",
    ]);
    addSafe(/atmospheric:(stripped_)?aspen_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Aspen Parkland",
    ]);
    addSafe(/atmospheric:(stripped_)?crustose_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Aspen Parkland",
    ]);
    addSafe(/atmospheric:(stripped_)?grimwood_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Grimwoods",
    ]);
    addSafe(/atmospheric:(stripped_)?kousa_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Kousa Jungle",
    ]);
    addSafe(/atmospheric:(stripped_)?laurel_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Aspen Parkland, Laurel Forest, Scrubland, Snowy Scrubland",
    ]);
    addSafe(/atmospheric:(stripped_)?morado_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Aspen Parkland, Rainforest, Rainforest Basin, Scrubland, Snowy Scrubland, Sparse Rainforest, Sparse Rainforest Basin",
    ]);
    addSafe(/atmospheric:(stripped_)?rosewood_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Rainforest, Rainforest Basin, Sparse Rainforest, Sparse Rainforest Basin, Spiny Thicket",
    ]);
    addSafe(/atmospheric:(stripped_)?watchful_aspen_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Aspen Parkland",
    ]);
    addSafe(/atmospheric:(stripped_)?yucca_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Desert, Dunes, Flourishing Dunes, Rocky Dunes, Scrubland, Snowy Scrubland, Spiny Thicket, Windswept Savanna, Wooded Badlands",
    ]);
    addSafe(/autumnity:(stripped_)?maple_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Any Feature/Maple Tree Biome, Any Feature/Spotted Maple Tree/Orange Biome, Any Feature/Spotted Maple Tree/Red Biome, Any Feature/Spotted Maple Tree/Yellow Biome, Maple Forest, Pumpkin Fields",
    ]);
    addSafe(/biomeswevegone:(stripped_)?aspen_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Aspen Boreal, Black Forest, Canadian Shield, Maple Taiga, Weeping Witch Forest",
    ]);
    addSafe(/biomeswevegone:(stripped_)?baobab_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Baobab Savanna",
    ]);
    addSafe(/biomeswevegone:(stripped_)?blue_enchanted_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Enchanted Tangle",
    ]);
    addSafe(/biomeswevegone:(stripped_)?brown_mushroom_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Ebony Woods, Enchanted Tangle, Forgotten Forest, Jacaranda Jungle, Tropical Rainforest, Weeping Witch Forest",
    ]);
    addSafe(/biomeswevegone:(stripped_)?cika_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Cika Woods",
    ]);
    addSafe(/biomeswevegone:(stripped_)?cypress_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Cypress Swamplands, Cypress Wetlands",
    ]);
    addSafe(/biomeswevegone:(stripped_)?ebony_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Ebony Woods, Forgotten Forest, Fragment Jungle",
    ]);
    addSafe(/biomeswevegone:(stripped_)?fir_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Black Forest, Canadian Shield, Coniferous Forest, Frosted Coniferous Forest",
    ]);
    addSafe(/biomeswevegone:(stripped_)?florus_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Allium Shrubland, Forgotten Forest",
    ]);
    addSafe(/biomeswevegone:(stripped_)?green_enchanted_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Enchanted Tangle",
    ]);
    addSafe(/biomeswevegone:(stripped_)?holly_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Dacite Ridges, Eroded Borealis",
    ]);
    addSafe(
        /biomeswevegone:(stripped_)?imbued_blue_enchanted_(log|stem|wood|planks|sapling|hyphae)/,
        ["Found in biomes:", "Enchanted Tangle"],
    );
    addSafe(
        /biomeswevegone:(stripped_)?imbued_green_enchanted_(log|stem|wood|planks|sapling|hyphae)/,
        ["Found in biomes:", "Enchanted Tangle"],
    );
    addSafe(/biomeswevegone:(stripped_)?ironwood_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Ironwood Gour, Red Rock Peaks, Red Rock Valley",
    ]);
    addSafe(/biomeswevegone:(stripped_)?jacaranda_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Amaranth Grassland, Jacaranda Jungle",
    ]);
    addSafe(/biomeswevegone:(stripped_)?mahogany_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Crag Gardens, Fragment Jungle, Tropical Rainforest",
    ]);
    addSafe(/biomeswevegone:(stripped_)?maple_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Forgotten Forest, Maple Taiga",
    ]);
    addSafe(/biomeswevegone:(stripped_)?palm_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Beach",
    ]);
    addSafe(/biomeswevegone:(stripped_)?palo_verde_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Atacama Outback, Red Rock Valley, Rugged Badlands, Sierra Badlands",
    ]);
    addSafe(/biomeswevegone:(stripped_)?pine_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Araucaria Savanna, Black Forest, Canadian Shield, Red Rock Peaks, Red Rock Valley",
    ]);
    addSafe(/biomeswevegone:(stripped_)?rainbow_eucalyptus_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Crag Gardens, Fragment Jungle",
    ]);
    addSafe(/biomeswevegone:(stripped_)?redwood_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Redwood Thicket",
    ]);
    addSafe(/biomeswevegone:(stripped_)?sakura_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Sakura Grove",
    ]);
    addSafe(/biomeswevegone:(stripped_)?skyris_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Skyris Vale",
    ]);
    addSafe(/biomeswevegone:(stripped_)?white_mangrove_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "White Mangrove Marshes",
    ]);
    addSafe(/biomeswevegone:(stripped_)?white_mushroom_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Ebony Woods, Enchanted Tangle, Forgotten Forest, Jacaranda Jungle, Tropical Rainforest, Weeping Witch Forest",
    ]);
    addSafe(/biomeswevegone:(stripped_)?willow_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Bayou",
    ]);
    addSafe(/biomeswevegone:(stripped_)?witch_hazel_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Weeping Witch Forest",
    ]);
    addSafe(/biomeswevegone:(stripped_)?zelkova_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Zelkova Forest",
    ]);
    addSafe(/blue_skies:(stripped_)?bluebright_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Brisk Meadow, Calming Skies, Frostbitten Forest, Polar Highland",
    ]);
    addSafe(/blue_skies:(stripped_)?comet_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Brightlands, Brisk Meadow, Brumble Forest, Calming Skies, Deep Peeking Ocean, Frostbitten Forest, Frostbitten Forest Clearing, Midday Shore, Peeking Ocean, Polar Highland, Slushlands, Snow Covered Pines",
    ]);
    addSafe(/blue_skies:(stripped_)?crescent_fruit_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Crescent Orchard, Unorthodox Valley",
    ]);
    addSafe(/blue_skies:(stripped_)?dusk_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Moonlit Reservoir, Shaded Woodlands, Unorthodox Valley",
    ]);
    addSafe(/blue_skies:(stripped_)?frostbright_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Frostbitten Forest, Frostbitten Forest Clearing",
    ]);
    addSafe(/blue_skies:(stripped_)?lunar_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Crystal Roughs, Searing Grassland, Unorthodox Valley",
    ]);
    addSafe(/blue_skies:(stripped_)?maple_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Searing Grassland, Sunset Maple Forest",
    ]);
    addSafe(/blue_skies:(stripped_)?starlit_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Brightlands, Brisk Meadow, Brumble Forest, Calming Skies, Deep Peeking Ocean, Frostbitten Forest, Frostbitten Forest Clearing, Midday Shore, Peeking Ocean, Polar Highland, Slushlands, Snow Covered Pines",
    ]);
    addSafe(/deep_aether:(stripped_)?blue_roseroot_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Aerglow Forest, Blue Aerglow Forest",
    ]);
    addSafe(/deep_aether:(stripped_)?conberry_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Golden Grove, Golden Heights",
    ]);
    addSafe(/deep_aether:(stripped_)?cruderoot_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Yagroot Swamp",
    ]);
    addSafe(/deep_aether:(stripped_)?roseroot_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Aerglow Forest, Blue Aerglow Forest, Mystic Aerglow Forest",
    ]);
    addSafe(/deep_aether:(stripped_)?rotten_roseroot_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Aerglow Forest, Blue Aerglow Forest, Mystic Aerglow Forest",
    ]);
    addSafe(/deep_aether:(stripped_)?sunroot_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Golden Grove, Golden Heights",
    ]);
    addSafe(/deep_aether:(stripped_)?yagroot_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Yagroot Swamp",
    ]);
    addSafe(/ecologics:(stripped_)?azalea_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Lush Caves",
    ]);
    addSafe(/ecologics:(stripped_)?coconut_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Beach",
    ]);
    addSafe(/ecologics:(stripped_)?flowering_azalea_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Lush Caves",
    ]);
    addSafe(/ecologics:(stripped_)?walnut_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Plains",
    ]);
    addSafe(/eidolon:(stripped_)?illwood_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Any Spooky Biome",
    ]);
    addSafe(/environmental:(stripped_)?pine_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Old Growth Pine Barrens, Pine Barrens, Pine Slopes, Snowy Old Growth Pine Barrens, Snowy Pine Barrens",
    ]);
    addSafe(/environmental:(stripped_)?plum_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Blossom Valleys, Blossom Woods",
    ]);
    addSafe(/environmental:(stripped_)?wisteria_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Flower Forest",
    ]);
    addSafe(/forbidden_arcanus:(stripped_)?aurum_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Flower Forest",
    ]);
    addSafe(/integrateddynamics:(stripped_)?menril_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Any Overworld Biome, Meneglin",
    ]);
    addSafe(/minecells:(stripped_)?putrid_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Promenade, Ramparts",
    ]);
    addSafe(/minecraft:(stripped_)?acacia_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Any Savanna Biome, Badlands, Bamboo Jungle, Beach, Flower Forest, Flowering Savanna, Forest, Jungle, Mangrove Swamp, Old Growth Pine Taiga, Plains, River, Savanna, Savanna Plateau, Sunflower Plains, Windswept Savanna",
    ]);
    addSafe(/minecraft:(stripped_)?bamboo_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Bamboo Jungle, Desert, Forest, Jungle, Mangrove Swamp, Plains, River, Savanna, Savanna Plateau",
    ]);
    addSafe(/minecraft:(stripped_)?big_dripleaf_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Mushroom Fields",
    ]);
    addSafe(/minecraft:(stripped_)?birch_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Bamboo Jungle, Birch Forest, Blossom Valleys, Blossom Woods, Forest, Howling Peaks, Jungle, Kousa Jungle, Mangrove Swamp, Old Growth Birch Forest, Overgrowth Woodlands, Snowy Taiga, Sparse Jungle, Taiga, Temperate Grove, Wooded Badlands",
    ]);
    addSafe(/minecraft:(stripped_)?cherry_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Cherry Grove",
    ]);
    addSafe(/minecraft:(stripped_)?dark_oak_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Bamboo Jungle, Coconino Meadow, Dark Forest, Forest, Forgotten Forest, Grimwoods, Jungle, Mangrove Swamp, Plains, Pumpkin Valley, River, Savanna, Savanna Plateau, Taiga",
    ]);
    addSafe(/minecraft:(stripped_)?jungle_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Bamboo Jungle, Crag Gardens, Dark Forest, Desert, Jungle, Lukewarm Ocean, Mangrove Swamp, Savanna, Savanna Plateau",
    ]);
    addSafe(/minecraft:(stripped_)?mangrove_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Bamboo Jungle, Cherry Grove, Forest, Jungle, Lukewarm Ocean, Mangrove Swamp, Plains, River, Savanna, Savanna Plateau",
    ]);
    addSafe(/minecraft:(stripped_)?mushroom_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Aerglow Forest, Dark Forest, Glowstone Canyon, Marsh, Mushroom Fields, Mystic Aerglow Forest",
    ]);
    addSafe(/minecraft:(stripped_)?spruce_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Aspen Boreal, Badlands, Canadian Shield, Cherry Grove, Coniferous Forest, Crimson Tundra, Dacite Ridges, Eroded Borealis, Flower Forest, Forest, Frosted Coniferous Forest, Frosted Taiga, Grove, Howling Peaks, Ice Spikes, Lukewarm Ocean, Maple Taiga, Meadow, Old Growth Pine Taiga, Old Growth Spruce Taiga, Plains, Redwood Thicket, Rose Fields, Skyris Vale, Snowy Plains, Snowy Taiga, Sunflower Plains, Taiga, Tundra, Weeping Witch Forest, Windswept Savanna",
    ]);
    addSafe(/minecraft:(stripped_)?warped_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Mushroom Fields",
    ]);
    addSafe(/occultism:(stripped_)?otherworld_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Stronghold Biased To",
    ]);
    addSafe(/opposing_force:(stripped_)?apple_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Any Feature/Apple Trees Biome",
    ]);
    addSafe(/thermal:(stripped_)?rubberwood_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Bamboo Jungle, Flower Forest, Or, Sparse Jungle",
    ]);
    addSafe(/undergarden:(stripped_)?blood_mushroom_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Blood Mushroom Bog",
    ]);
    addSafe(/undergarden:(stripped_)?grongle_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Gronglegrowth",
    ]);
    addSafe(/undergarden:(stripped_)?indigo_mushroom_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Indigo Mushroom Bog, Smogstem Forest",
    ]);
    addSafe(/undergarden:(stripped_)?ink_mushroom_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Ink Mushroom Bog",
    ]);
    addSafe(/undergarden:(stripped_)?smogstem_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Dense Forest, Frosty Smogstem Forest, Indigo Mushroom Bog, Smogstem Forest",
    ]);
    addSafe(/undergarden:(stripped_)?veil_mushroom_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Veil Mushroom Bog",
    ]);
    addSafe(/undergarden:(stripped_)?wigglewood_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Dense Forest, Wigglewood Forest",
    ]);
    addSafe(/upgrade_aquatic:(stripped_)?river_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Any Feature/River Tree Biome",
    ]);
    addSafe(/windswept:(stripped_)?chestnut_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Any Feature/Rare Chestnut Trees Biome, Chestnut Forest, Lavender Hills, Snowy Chestnut Forest",
    ]);
    addSafe(/windswept:(stripped_)?holly_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Any Feature/Rare Holly Trees Biome, Any Feature/Rare Snowy Holly Trees Biome, Grove, Pine Barrens, Snowy Pine Barrens, Tundra",
    ]);
    addSafe(/windswept:(stripped_)?pine_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Blossom Valleys, Blossom Woods, Old Growth Pine Taiga, Pine Barrens, Snowy Pine Barrens",
    ]);
    addSafe(/windswept:(stripped_)?weathered_pine_(log|stem|wood|planks|sapling|hyphae)/, [
        "Found in biomes:",
        "Pine Barrens, Snowy Pine Barrens",
    ]);
});
