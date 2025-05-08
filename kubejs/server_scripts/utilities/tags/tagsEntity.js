ServerEvents.tags("entity_type", (event) => {
    // Cachalot whale has more prey
    event.add("alexsmobs:cachalot_whale_targets", "cataclysm:deepling");
    event.add("alexsmobs:cachalot_whale_targets", "cataclysm:deepling_brute");
    event.add("alexsmobs:cachalot_whale_targets", "cataclysm:deepling_angler");
    event.add("alexsmobs:cachalot_whale_targets", "cataclysm:deepling_priest");
    event.add("alexsmobs:cachalot_whale_targets", "cataclysm:deepling_warlock");
    event.add("alexsmobs:cachalot_whale_targets", "biomeswevegone:man_o_war");

    event.add("champions:is_ender", "endermanoverhaul:badlands_enderman");
    event.add("champions:is_ender", "endermanoverhaul:cave_enderman");
    event.add("champions:is_ender", "endermanoverhaul:coral_enderman");
    event.add("champions:is_ender", "endermanoverhaul:crimson_forest_enderman");
    event.add("champions:is_ender", "endermanoverhaul:desert_enderman");
    event.add("champions:is_ender", "endermanoverhaul:end_enderman");
    event.add("champions:is_ender", "endermanoverhaul:end_islands_enderman");
    event.add("champions:is_ender", "endermanoverhaul:dark_oak_enderman");
    event.add("champions:is_ender", "endermanoverhaul:flower_fields_enderman");
    event.add("champions:is_ender", "endermanoverhaul:ice_spikes_enderman");
    event.add(
        "champions:is_ender",
        "endermanoverhaul:mushroom_fields_enderman"
    );
    event.add("champions:is_ender", "endermanoverhaul:nether_wastes_enderman");
    event.add("champions:is_ender", "endermanoverhaul:savanna_enderman");
    event.add("champions:is_ender", "endermanoverhaul:snowy_enderman");
    event.add(
        "champions:is_ender",
        "endermanoverhaul:soulsand_valley_enderman"
    );
    event.add("champions:is_ender", "endermanoverhaul:swamp_enderman");
    event.add("champions:is_ender", "endermanoverhaul:warped_forest_enderman");
    event.add(
        "champions:is_ender",
        "endermanoverhaul:windswept_hills_enderman"
    );
    event.add("champions:is_ender", "cataclysm:ender_golem");
    event.add("champions:is_ender", "cataclysm:endermaptera");
    event.add("champions:is_ender", "cataclysm:ender_guardian");

    let bossesAndMinions = [
        "blue_skies:artificial_golem",
        "iceandfire:fire_dragon",
        "iceandfire:fire_dragon",
        "iceandfire:ice_dragon",
        "iceandfire:lightning_dragon",
        "iceandfire:hydra",
        "alexsmobs:void_worm",
        "undergarden:forgotten_guardian",
        "cataclysm:ignis",
        "cataclysm:ender_golem",
        "cataclysm:ender_guardian",
        "cataclysm:netherite_monstrosity",

        "blue_skies:summoner",
        "blue_skies:alchemist",
        "blue_skies:starlit_crusher",
        "blue_skies:arachnarch",
        "botania:pink_wither",
        "botania:doppleganger",
        "meetyourfight:bellringer",
        "meetyourfight:dame_fortuna",
        "meetyourfight:swampjaw",
        "meetyourfight:bellringer",
        "meetyourfight:rosalyne",
        "meetyourfight:rose_spirit",
        "mowziesmobs:ferrous_wroughtnaut",
        "mowziesmobs:umvuthi",
        "mowziesmobs:frostmaw",
        "ars_nouveau:wilden_boss",
        "aquamirae:maze_mother",
        "aquamirae:captain_cornelia",
        "mowziesmobs:ferrous_wroughtnaut",
        "mowziesmobs:frostmaw",
        "mowziesmobs:umvuthi",

        "lost_aether_content:aerwhale_king",
        "aether:valkyrie_queen",
        "aether:sun_spirit",
        "aether:slider",
        "deep_aether:eye_of_the_storm",

        "minecells:concierge",
        "minecells:conjunctivius",
        "minecells:sewers_tentacle",

        "mowziesmobs:umvuthana_crane",
        "mowziesmobs:umvuthana_raptor",

        "bosses_of_mass_destruction:lich",
        "bosses_of_mass_destruction:obsidilith",
        "bosses_of_mass_destruction:void_blossom",
        "bosses_of_mass_destruction:gauntlet",

        "alexscaves:forsaken",
        "alexscaves:tremorzilla",
        "alexscaves:tremorsaurus",
        "alexscaves:hullbreaker",

        "graveyard:lich",
        "graveyard:ghoul",

        "cataclysm:the_prowler",
        "cataclysm:the_harbinger",
        "cataclysm:ancient_remnant",
        "cataclysm:the_leviathan",
        "cataclysm:kobolediator",
        "cataclysm:wadjet",
        "cataclysm:maledictus",
        "cataclysm:aptrgangr",

        "irons_spellbooks:dead_king",
        "irons_spellbooks:dead_king_corpse",
        "irons_spellbooks:citadel_keeper",

        "conjurer_illager:conjurer",

        "galosphere:berserker",
        "galosphere:preserved",
    ];

    bossesAndMinions.forEach((boss) => {
        event.add("heal_on_player_death", boss);
    });

    event.add("respawninganimals:persistent_animals", "quark:toretoise");
    
});