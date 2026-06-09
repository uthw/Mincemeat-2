// Dynamically drop rarity materials from various sources based on the player's progression through the game

const mythicStage = "placeholder_1";
const epicStage = "placeholder_2";
const rareStage = "killed_enough_bosses";
const uncommonStage = "minecells_access";

const tierMap = {
    "apotheosis:common_material": 0,
    "apotheosis:uncommon_material": 1,
    "apotheosis:rare_material": 2,
    "apotheosis:epic_material": 3,
    "apotheosis:mythic_material": 4,
};

function getRarityMatTier(player) {
    let stages = player.stages.all; // Array of the player's stages

    // ES5 strikes again
    if (stages.some((stage) => stage === mythicStage)) return "apotheosis:mythic_material";
    if (stages.some((stage) => stage === epicStage)) return "apotheosis:epic_material";
    if (stages.some((stage) => stage === rareStage)) return "apotheosis:rare_material";
    if (stages.some((stage) => stage === uncommonStage)) return "apotheosis:uncommon_material";

    return "apotheosis:common_material";
}

EntityEvents.death((event) => {
    let entity = event.entity;
    let source = event.source.actual;

    if (!source || !source.isPlayer() || !entity.nbt) {
        return;
    }

    let forgeCaps = entity.nbt.getCompound("ForgeCaps");
    if (!forgeCaps) {
        return;
    }

    let dropQuantityRange = [0, 0];

    let championData = forgeCaps.getCompound("champions:champion");
    console.log(`championData: ${championData}`);

    if (championData && championData.contains("tier")) {
        // It's a champion, drop materials based on its tier
        let tier = championData.getInt("tier");

        switch (tier) {
            case 1:
                dropQuantityRange = [1, 2];
                break;
            case 2:
                dropQuantityRange = [1, 4];
                break;
            case 3:
                dropQuantityRange = [2, 5];
                break;
            case 4:
                dropQuantityRange = [4, 8];
                break;
            case 5:
                dropQuantityRange = [5, 10];
                break;
            default:
                dropQuantityRange = [0, 0];
        }

        console.log(`Champion of tier ${tier} killed by player, dropping rarity materials`);
    } else {
        // Check if it's a boss
        let isBoss = false;

        let typeTags = entity.entityType.getTags().toList();

        typeTags.forEach((tagKey) => {
            if (tagKey.location().toString() === "mincemeat:heal_on_player_death") {
                isBoss = true;
                dropQuantityRange = [4, 8];
                console.log("Boss killed by player");
            }
        });
    }

    // "Add" rarity material(s) to the drop by spawning them where the entity died
    if (dropQuantityRange[1] > 0) {
        // Determine tier based on entity health. If the tier found this way is higher than the player's max unlocked tier, cap it to that tier
        let attributes = entity.nbt.getList("Attributes", 10);
        let healthAttribute = null;

        attributes.forEach((attribute) => {
            if (attribute.getString("Name") === "minecraft:generic.max_health") {
                healthAttribute = attribute;
            }
        });

        let maxHealth = healthAttribute ? healthAttribute.getFloat("Base") : 20;

        let dropItem;
        if (maxHealth >= 1750) {
            dropItem = "apotheosis:mythic_material";
        } else if (maxHealth >= 1200) {
            dropItem = "apotheosis:epic_material";
        } else if (maxHealth >= 850) {
            dropItem = "apotheosis:rare_material";
        } else if (maxHealth >= 500) {
            dropItem = "apotheosis:uncommon_material";
        } else {
            dropItem = "apotheosis:common_material";
        }

        let playerMaxTier = tierMap[getRarityMatTier(source)];
        let dropTier = tierMap[dropItem];

        if (dropTier > playerMaxTier) {
            dropItem = Object.keys(tierMap).find((key) => tierMap[key] === playerMaxTier);
        }

        let quantity =
            Math.floor(Math.random() * (dropQuantityRange[1] - dropQuantityRange[0] + 1)) +
            dropQuantityRange[0];

        let itemEntity = entity.block.createEntity("minecraft:item");
        itemEntity.item = `${quantity}x ${dropItem}`;
        itemEntity.spawn();
    }
});

LootJS.modifiers((event) => {
    event
        .addLootTableModifier(/.*chests.*/)
        .apply((ctxt) => {
            console.log("Modifying chest loot tables for rarity material drops");
            let player = ctxt.player;
            console.log(`Loot context player: ${player}`);
            if (!player) return;

            if (Math.random() > 0.02) return;

            let dropItem = getRarityMatTier(player);

            let count = Math.floor(Math.random() * 3) + 1; // 1 to 3 dropped
            ctxt.addLoot(Item.of(dropItem, count));
        });
});
