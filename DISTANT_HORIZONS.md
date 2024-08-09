# How to use Distant Horizons with Mincemeat 2

Distant Horizons uses LODs to allow high render distances to be attainable without sacrificing FPS. This basically means things in the distance will render in lower quality, and is how other open-world games like Breath of the Wild work.

Out of the box, DH is **incompatible** with Mincemeat 2 and needs some tweaks in order to run. Here they are:

### Configure ModernFix

1. Open Mincemeat 2 and open the mod list from the title screen.
2. Search for ModernFix, select it, and press the "Config" button.
3. Scroll down to the bottom of the list of mixins.
4. You'll see an option called "mixin.perf.remove_spawn_chunks (modified)" in italics. Click on the button next to it to disable it. This setting causes a crash when loading a world with DH if left on. Be aware that disabling it will make creating a new world take significantly longer.

### Configure Alex's Caves

1. Go back to the mod list menu.
2. Find the Alex's Caves mod and click its "Config" button.
3. Click on "alexscaves-client".
4. Click on the "Visuals" button.
5. Turn OFF "Biome Ambient Light Coloring". If left on, this setting causes DH to not render LODs at all.

### Allocate more RAM

If you run DH with 8 GB or less allocated, you'll be lucky if your game survives more than 1 minute. You should set your allocated memory to 12 GB or more for ideal performance.

You can find the Distant Horizons settings button next to the FOV slider in the options.
