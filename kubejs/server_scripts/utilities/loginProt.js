// Modified version of login protection script made by cristal_gem and rad23. from KubeJS discord
PlayerEvents.loggedIn((event) => {
    const { server, player } = event;
    const { potionEffects, lookAngle } = player;
    const position = player.getPosition(1);
    server.scheduleRepeatingInTicks(3, (callback) => {
        if (
            !player.lookAngle.equals(lookAngle) ||
            !player.getPosition(1).equals(position)
        ) {
            return;
        }

        potionEffects.add("minecraft:resistance", 4, 4, true, false);
        potionEffects.add(
            "irons_spellbooks:true_invisibility",
            4,
            0,
            true,
            false
        );
    });
});
