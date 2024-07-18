// credit: DragonS0u1623 -> https://gist.github.com/DragonS0u1623/f76ef63110c21f1adbceb81fa1f0e485

const $MinecraftForge = Java.loadClass(
    "net.minecraftforge.common.MinecraftForge"
);
const $BlockEvent = Java.loadClass("net.minecraftforge.event.level.BlockEvent");
const $SaplingGrowTreeEvent = Java.loadClass(
    "net.minecraftforge.event.level.SaplingGrowTreeEvent"
);
const $BlockItem = Java.loadClass("net.minecraft.world.item.BlockItem");
const $CropBlock = Java.loadClass("net.minecraft.world.level.block.CropBlock");
const $SaplingBlock = Java.loadClass(
    "net.minecraft.world.level.block.SaplingBlock"
);

ForgeEvents.onEvent("net.darkhax.botanypots.events.CropDropEvent", (event) => {
    const { level, pos, crop } = event;
    let seed = crop.getSeed().getFirst().getItem();
    if (seed instanceof $BlockItem) {
        let seedBlock = seed.getBlock();
        if (seedBlock instanceof $CropBlock) {
            let blockstate = seedBlock.getStateForAge(seedBlock.getMaxAge());
            $MinecraftForge.EVENT_BUS.post(
                new $BlockEvent.CropGrowEvent.Post(
                    level,
                    pos,
                    blockstate,
                    level.getBlockState(pos)
                )
            );
        } else if (seedBlock instanceof $SaplingBlock) {
            $MinecraftForge.EVENT_BUS.post(
                new $SaplingGrowTreeEvent(level, level.getRandom(), pos, null)
            );
        }
    }
});
