ItemEvents.modification((event) => {
    let tools = [
        {
            name: "blue_skies:diopside_sword",
            damage: 9,
        },
        {
            name: "blue_skies:charoite_sword",
            damage: 7,
        },
        {
            name: "blue_skies:aquite_sword",
            damage: 6,
        },
        {
            name: "aether:gravitite_sword",
            damage: 10,
        },
        {
            name: "aether:zanite_sword",
            damage: 9,
        },
        {
            name: "aether:valkyrie_lance",
            damage: 10,
        },
        {
            name: "aether_lost_content:phoenix_sword",
            damage: 14,
        },
        {
            name: "ancient_aether:valkyrum_sword",
            damage: 12,
        },
        {
            name: "ancient_aether:valkyrum_lance",
            damage: 11,
        },
        {
            name: "deep_aether:stratus_sword",
            damage: 13,
        },
        {
            name: "aether:flaming_sword",
            damage: 11,
        },
        {
            name: "aether:lightning_sword",
            damage: 11,
        },
        {
            name: "aether:holy_sword",
            damage: 11,
        },
        {
            name: "aether:vampire_blade",
            damage: 11,
        },
        {
            name: "deep_aether:skyjade_sword",
            damage: 8,
        },
        {
            name: "aether:skyroot_sword",
            damage: 7,
        },
        {
            name: "aether:holystone_sword",
            damage: 8,
        },
        {
            name: "aether:candy_cane_sword",
            damage: 7,
        },
        {
            name: "aether:pig_slayer",
            damage: 9,
        },
        {
            name: "aether:hammer_of_kingbdogz",
            damage: 11,
        },
        {
            name: "aether_redux:veridium_sword",
            damage: 8,
        },
        // spear of the blight?
        {
            name: "aether_redux:infused_veridium_sword",
            damage: 12,
        },
        {
            name: "enigmaticlegacy:etherium_sword",
            damage: 15, // buff of +4
        },
        {
            name: "enigmaticlegacy:etherium_scythe",
            damage: 11, // buff of +3
        },
        {
            name: "minecells:hattoris_katana",
            damage: 13,
        },
        {
            name: "minecells:flint",
            damage: 16,
        },
        {
            name: "minecells:assassins_dagger",
            damage: 7,
        },
        {
            name: "minecells:blood_sword",
            damage: 9,
        },
        {
            name: "minecells:broadsword",
            damage: 11,
        },
        {
            name: "minecells:balanced_blade",
            damage: 8,
        },
        {
            name: "minecells:crowbar",
            damage: 10,
        },
        {
            name: "minecells:cursed_sword",
            damage: 39,
        },
        {
            name: "minecells:spite_sword",
            damage: 9,
        },
        {
            name: "minecraft:netherite_sword",
            damage: 12,
        },
        {
            name: "meetyourfight:twilights_thorn",
            damage: 12,
        },
        {
            name: "reliquary:mercy_cross",
            damage: 10,
        },
        {
            name: "forbidden_arcanus:reinforced_deorum_sword",
            damage: 14.5,
        },
        {
            name: "aquaculture:neptunium_sword",
            damage: 8
        },
        {
            name: "eidolon:reaper_scythe",
            damage: 10
        },
        {
            name: "eidolon:sapping_sword",
            damage: 7
        },
        {
            name: "eidolon:deathbringer_scythe",
            damage: 13
        },
        {
            name: "endermanoverhaul:corrupted_blade",
            damage: 13
        },
        {
            name: "undergarden:forgotten_sword",
            damage: 10
        },
        {
            name: "meetyourfight:cocktail_cutlass",
            damage: 10
        },
        {
            name: "dungeonnowloading:life_stealer",
            damage: 9
        },
        {
            name: "dungeonnowloading:spawner_sword",
            damage: 9
        },
        {
            name: "celestisynth:crescentia",
            damage: 10
        },
        {
            name: "celestisynth:solaris",
            damage: 9
        },
        {
            name: "celestisynth:breezebreaker",
            damage: 9
        },
        // cannot edit poltergeist
        {
            name: "celestisynth:aquaflora",
            damage: 4
        },
        {
            name: "celestisynth:frostbound",
            damage: 15
        },
        {
            name: "celestisynth:keres",
            damage: 23
        }
        
    ];

    tools.forEach((tool) => {
        event.modify(tool.name, (item) => {
            let spd = tool.speed ? tool.speed : item.attackSpeed;

            item.attackDamage = tool.damage;
            // item.attackSpeed = spd;
        });
    });

    let copperTools = ["pickaxe", "shovel", "axe", "hoe"];

    copperTools.forEach((copperTool) => {
        event.modify(`iceandfire:copper_${copperTool}`, (item) => {
            item.digSpeed *= 1.5;
        });
    });
});
