BlockEvents.modification((event) => {
    event.modify("waystones:waystone", (block) => {
        block.setDestroySpeed(100000);
        block.setExplosionResistance(100);
    });
    event.modify("waystones:mossy_waystone", (block) => {
        block.setDestroySpeed(100000);
        block.setExplosionResistance(100);
    });
    event.modify("waystones:sandy_waystone", (block) => {
        block.setDestroySpeed(100000);
        block.setExplosionResistance(100);
    });
});
