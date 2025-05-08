JEIEvents.information((event) => {
    let additions = [
        {
            item: "alexsmobs:ambergris",
            desc: "Obtained by returning beached cachalot whales into the water without harming them.",
        },
        {
            item: "jumbofurnace:jumbo_furnace",
            desc: "Can be obtained as an item by shift-right clicking a Jumbo Furnace with shears.",
        },
        {
            item: "eidolon:soul_shard",
            desc: "Dropped by undead mobs when a Crystallization Ritual is activated nearby.",
        },
        {
            item: "eidolon:unholy_symbol",
            desc: "Obtained after completing enough chants. See quests for more information.",
        },
        {
            item: "forbidden_arcanus:soulless_sand",
            desc: "Soul Sand turns into this item when a Soul Extractor is used on it.",
        },
        {
            item: "forbidden_arcanus:growing_edelwood",
            desc: "Use a Corrupt Soul on a planted oak sapling.",
        },
        {
            item: "forbidden_arcanus:soul",
            desc: "Obtained when a Soul Extractor is used on Soul Sand.",
        },
        {
            item: "create:scoria",
            desc: "Created when flowing lava collides with a chocolate source block.",
        },
        {
            item: "create:limestone",
            desc: "Created when flowing lava collides with a honey source block.",
        },
        {
            item: "neapolitan:mint_sprout",
            desc: "Found in savannas and similar biomes.",
        },
        {
            item: "neapolitan:adzuki_beans",
            desc: "Found in hilly biomes.",
        },
        {
            item: "irons_spellbooks:permafrost_shard",
            desc: "Found in impaled icebreaker shipwrecks.",
        },
        {
            item: "immersiveengineering:seed",
            desc: "Found by breaking prairie grass (in the prairie biome).",
        },
        {
            item: "occultism:datura_seeds",
            desc: "Found by breaking beachgrass.",
        },
        {
            item: "enigmaticlegacy:enigmatic_amulet",
            desc: "Found by killing certain bosses. Red: Concierge, Light Blue: Conjurer, Purple: Wroughtnaut, Pink: Bellringer, Green: Berserker, Black: Ignis, Blue: Captain Cornelia",
        },
        {
            item: "art_of_forging:vobrite_crystal",
            desc: "Dropped by murmurs."
        },
        {
            item: "art_of_forging:shards_of_malice",
            desc: "Dropped by Ancient Knights - see supernatural magic quests for how to summon one."
        },
        {
            item: "art_of_forging:fragment_of_eden",
            desc: "Dropped in large quantities by the Corrupted Champion."
        },
        {
            item: "art_of_forging:ancient_axe",
            desc: "Dropped by Frostmaw."
        },
        {
            item: "art_of_forging:ancient_blade",
            desc: "Dropped by Ghost of Captain Cornelia."
        },
        {
            item: "art_of_forging:ancient_flail",
            desc: "Dropped by Night Lich."
        },
        {
            item: "art_of_forging:soul_ember",
            desc: "Obtained by killing a blaze on soul soil."
        },
        {
            item: "art_of_forging:nano_insectoid",
            desc: "Dropped from clawing forged storage containers in extractor ruins."
        },
        {
            item: "art_of_forging:encoded_canister",
            desc: "Dropped from clawing forged storage containers in extractor ruins."
        },
        {
            item: "art_of_forging:esoteric_codex",
            desc: "Dropped from clawing forged storage containers in extractor ruins."
        }
    ];

    additions.forEach((addition) => {
        event.addItem(addition.item, [addition.desc]);
    });
});
