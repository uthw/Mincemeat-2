ServerEvents.tags("item", (event) => {
    Item.list.forEach((item) => {
        const id = item.id;

        if (/spawn_egg/.test(id)) {
            event.add("mincemeat:sounds/spawn_eggs", id);
            return;
        }

        // if (!/concrete/.test(id) && /(_dust|:dust_|:crushed|_powder|:powdered)/.test(id)) {
        //     event.add("mincemeat:dirty_metals", id);
        //     return;
        // }

        if (/(bone_meal|bone$)/.test(id)) {
            event.add("mincemeat:sounds/bones", id);
            return;
        }

        // if (/fishing_rod/.test(id)) {
        //     event.add("mincemeat:sounds/fishing_rods", id);
        //     return;
        // }

        // if (/(_ingot|_ring|ring_of|_capacitor|_scrap|_bangle|_sheet)/.test(id)) {
        //     event.add("mincemeat:sounds/ingot_metals", id);
        //     return;
        // }

        if (!/upgrade_aquatic/.test(id) && /(template|upgrade)/.test(id)) {
            event.add("mincemeat:sounds/smithing_templates", id);
            return;
        }

        if (/paper/.test(id)) {
            event.add("mincemeat:sounds/papers", id);
            return;
        }

        if (/(_gem|tetra:pristine|_orb|_crystal$)/.test(id)) {
            event.add("mincemeat:sounds/shiny_metals", id);
            return;
        }

        if (!/undergarden/.test(id) && /(shard|fragment|_nugget|_scale)/.test(id)) {
            event.add("mincemeat:sounds/shards", id);
            return;
        }

        if (/_minecart/.test(id)) {
            event.add("mincemeat:sounds/minecarts", id);
            return;
        }

        if (/_bucket/.test(id)) {
            event.add("mincemeat:sounds/filled_buckets", id);
            return;
        }

        if (
            /(flesh|gum|gelatin|slime|goo_|honeycomb|guts|tendril|_gland|swet_ball)/.test(id) ||
            (/_heart/.test(id) && !/scalinghealth/.test(id)) ||
            (/worm/.test(id) && !/void/.test(id) && !/death/.test(id)) ||
            (/rotten/.test(id) && !/betterarcheology/.test(id))
        ) {
            event.add("mincemeat:sounds/wet_mob_drops", id);
            return;
        }

        // Food

        if (
            (/_pie/.test(id) && !/piece/.test(id)) ||
            /cake$/.test(id) ||
            /sail|_feather|cloth/.test(id)
        ) {
            event.add("mincemeat:sounds/banner_template", id);
            return;
        }

        if (
            /(coffee_cup|_stew|_soup|fried_rice|_milkshake|_latte|_curry|_broth)/.test(id) ||
            (/ice_cream/.test(id) && !/alexcaves/.test(id) && !/ice_cream_block/.test(id)) ||
            /(_tea|_wine|_soda|gurt)$/.test(id)
        ) {
            event.add("mincemeat:sounds/bowl_foods", id);
            return;
        }

        if (
            (!/experience_bottle/.test(id) && /bottle/.test(id)) ||
            /(jar|nut_butter|_smoothie|_tank|flask|vial|sauce|cider)/.test(id) ||
            /(_juice)$/.test(id)
        ) {
            event.add("mincemeat:sounds/brewing_items", id);
            return;
        }

        if (
            (!/kelpy/.test(id) && /kelp/.test(id)) ||
            /(cactus|leaves|bread|carrot|_apple|potato|salad|berries|fruit|_roll)/.test(id) ||
            (!/berr/.test(id) && /straw/.test(id))
        ) {
            event.add("mincemeat:sounds/crop_food", id);
            return;
        }

        if ((/_egg/.test(id) && !/spawn_egg/.test(id)) || /dragonegg|_shell$/.test(id)) {
            event.add("mincemeat:sounds/exoskeletal", id);
            return;
        }

        // hard foods
        if (/(_boat|candy|peppermint|lollipop)/.test(id) || /nut$/.test(id)) {
            event.add("mincemeat:sounds/birch_boat", id);
            return;
        }

        // if there is no specific sound for food default to meat and fish
        if (item.isEdible()) {
            event.add("mincemeat:sounds/meat_and_fish", id);
            return;
        }

        // Equipment-------------------------

        if (/trident/.test(id)) {
            event.add("mincemeat:sounds/trident", id);
            return;
        }

        // Magic equipment
        if (
            /(spell_book|tome|_wand|:glyph|staff_of|_scepter|experience_bottle|ritual|familiar|:thread|_focus|rune|_echo)/.test(
                id,
            ) ||
            (/staff$/.test(id) && !/bone_staff$/.test(id) && !/quarterstaff$/.test(id)) ||
            (/_heart/.test(id) && /scaleinghealth/.test(id))
        ) {
            event.add("mincemeat:sounds/enchanting_books", id);
            return;
        }

        // Non metal equipment
        if (
            /(hood|_hat|_pants|_cape|cloak|_shoe|_tunic|_brush|_belt|robe|_hide|quiver|backpack)/.test(
                id,
            ) ||
            (/leather/.test(id) && !/_leather_flower/.test(id))
        ) {
            event.add("mincemeat:sounds/leather_equipment", id);
            return;
        }

        if (
            /(chain|_pendant|_amulet|hippogryph_armor|necklace|locket|:key|_key|_coin)/.test(id) ||
            (/wire/.test(id) && !/wireless/.test(id))
        ) {
            event.add("mincemeat:sounds/chainmail_equipment", id);
            return;
        }

        // Light equipment
        if (
            /(_sword|_pickaxe|_dagger|_katana|_rapier|_knife|_tomahawk|_mace|_aiot|_paxel|_basic_shield|_helmet|_boots|_shears|_glove|_saber|_chakram|_claw|pickarang|_hook|grappl|_shovel|_hoe|goggle|wrench|_machete|screwdriver|horn|_blade|_bracelet|_grenade|bomb)/.test(
                id,
            ) ||
            (/compass/.test(id) && !/naturescompass/.test(id)) ||
            (/_gun/.test(id) && /minigun/.test(id))
        ) {
            event.add("mincemeat:sounds/iron_equipment", id);
            return;
        }

        // Heavy equipment
        if (
            /(_axe|_greatsword|_hammer|_warhammer|_battleaxe|_longsword|_saw|_drill|:drill|_chestplate|_leggings|_suit|mekasuit|_cannon|minigun|dragonarmor|weapon_column|_gavel|_gauntlet|horse_armor)/.test(
                id,
            ) ||
            (/_shield/.test(id) && !/_basic_shield/.test(id)) ||
            /thrower$/.test(id)
        ) {
            event.add("mincemeat:sounds/netherite_equipment", id);
            return;
        }

        // Polearms
        if (
            /(_spear|_halberd|_lance|_javelin|_boomerang|_glaive|_scythe|_polearm|flute|dart_shooter|slingshot)/.test(
                id,
            ) ||
            (/_pike/.test(id) && !/cooked_pike/.test(id)) ||
            /stick$/.test(id) ||
            /quarterstaff$/.test(id)
        ) {
            event.add("mincemeat:sounds/wooden_equipment", id);
            return;
        }

        if (/crossbow|_bow$|:bow/.test(id)) {
            event.add("mincemeat:sounds/bows", id);
            return;
        }
    });
});
