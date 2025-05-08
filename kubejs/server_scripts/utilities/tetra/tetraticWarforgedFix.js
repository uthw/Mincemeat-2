// this code is from tetratic combat expanded devs and removes the default warforged requirement to give better combat animations to tetra weapons
// i have also taken the liberty to fix spearheaded weapons using sword animations

let fix = {
    Version: 1.0,
    attributemap: {
        "double/head_left": {
            "double/basic_hammer_left": {
                key: "double/head_left",
                config: {
                    attributes: {
                        parent: "bettercombat:hammer",
                    },
                },
            },
            "double/basic_axe_left": {
                key: "double/head_left",
                config: {
                    attributes: {
                        parent: "bettercombat:heavy_axe",
                    },
                },
            },
            "double/basic_pickaxe_left": {
                key: "double/head_left",
                config: {
                    attributes: {
                        parent: "bettercombat:pickaxe",
                    },
                },
            },
            "double/hoe_left": {
                key: "double/head_left",
                config: {
                    attributes: {
                        parent: "bettercombat:pickaxe",
                    },
                },
            },
            "double/claw_left": {
                key: "double/head_left",
                config: {
                    attributes: {
                        parent: "bettercombat:pickaxe",
                    },
                },
            },
            "double/adze_left": {
                key: "double/head_left",
                config: {
                    attributes: {
                        parent: "bettercombat:pickaxe",
                    },
                },
            },
            "double/sickle_left": {
                key: "double/head_left",
                config: {
                    attributes: {
                        parent: "bettercombat:sickle",
                    },
                },
            },
            "double/slime_hammer": {
                config: {
                    attributes: {
                        parent: "bettercombat:fist",
                    },
                },
            },
        },
        "single/head": {
            "single/trident": {
                config: {
                    attributes: {
                        parent: "bettercombat:trident",
                    },
                },
            },
            "single/spearhead": {
                conditions: [
                    {
                        type: "module",
                        key: "single/handle",
                        value: "single/light_handle",
                        config: {
                            scaleY: 1.75,
                            scaleZ: 1.5,
                            attributes: {
                                parent: "bettercombat:trident",
                            },
                        },
                    },
                    {
                        type: "module",
                        key: "single/handle",
                        value: "single/basic_handle",
                        config: {
                            scaleY: 1.75,
                            scaleZ: 1.5,
                            attributes: {
                                parent: "bettercombat:trident",
                            },
                        },
                    },
                    {
                        type: "module",
                        key: "single/handle",
                        value: "single/long_handle",
                        config: {
                            scaleY: 2.0,
                            scaleZ: 1.5,
                            attributes: {
                                parent: "bettercombat:spear",
                            },
                        },
                    },
                ],
                config: {
                    // This makes tetra spears use the same configuration as Spartan Weaponry spears; in other words, they are one-handed polearms
                    attributes: {
                        attack_range: 3.5,
                        pose: "bettercombat:pose_two_handed_polearm",
                        two_handed: true,
                        category: "spear",
                        attacks: [
                            {
                                hitbox: "FORWARD_BOX",
                                damage_multiplier: 1,
                                angle: 0,
                                upswing: 0.5,
                                animation: "bettercombat:two_handed_stab_right",
                                swing_sound: {
                                    id: "bettercombat:spear_stab",
                                },
                            },
                        ],
                    },
                },
            },
            "single/basic_shovel": {
                config: {
                    attributes: {
                        parent: "bettercombat:staff",
                    },
                },
            },
        },
        "sword/blade": {
            "sword/basic_blade": {
                config: {
                    attributes: {
                        parent: "bettercombat:sword",
                    },
                },
            },
            "sword/heavy_blade": {
                config: {
                    attributes: {
                        parent: "bettercombat:claymore",
                    },
                },
            },
            "sword/machete": {
                config: {
                    attributes: {
                        parent: "bettercombat:cutlass",
                    },
                },
            },
            "sword/throwing_knife": {
                config: {
                    attributes: {
                        parent: "bettercombat:dagger",
                    },
                },
            },
            "sword/short_blade": {
                config: {
                    attributes: {
                        parent: "bettercombat:dagger",
                    },
                },
            },
            "sword/bastard_blade": {
                config: {
                    attributes: {
                        parent: "bettercombat:lance",
                    },
                },
            },
            "sword/flamberge_blade": {
                config: {
                    attributes: {
                        parent: "bettercombat:scythe",
                    },
                },
            },
        },
    },
};

ServerEvents.highPriorityData((event) => {
    event.addJson("tetratic:configs/tetra.json", fix);
});
