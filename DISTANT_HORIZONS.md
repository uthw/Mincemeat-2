# How to use Distant Horizons with Mincemeat 2

Distant Horizons uses LODs to allow high render distances to be attainable without sacrificing FPS. This basically means things in the distance will render in lower quality, and is how other open-world games like Breath of the Wild work.

Out of the box, DH is **incompatible** with Mincemeat 2 and some tweaks in order to work:

### Configure Distant Horizons

DH has a config menu accessible from the options menu, found to the left of the FOV slider. You will want to change these settings to get the best performance for your PC.

If you are running Mincemeat 2 v0.5.11, open `minecraft/config/DistantHorizons.toml` and change the value of `distantGeneratorMode` from `"FEATURES"` to `"INTERNAL_SERVER"`. This will fix log spam with Yung's Better Caves and likely other mod incompatiblities I don't know about.

### Configure Alex's Caves

1. Go to the mod list menu.
2. Find the Alex's Caves mod and click its "Config" button.
3. Click on "alexscaves-client".
4. Click on the "Visuals" button.
5. Turn OFF "Biome Ambient Light Coloring". If left on, this setting causes DH to not render LODs at all.

### Allocate more RAM

You should set your allocated memory to 12-16 GB for optimal performance, especially if you're going to use shaders. Any less than that will be a struggle.

### Notes

I tested this in a singleplayer world with an AMD CPU, Nvidia GPU, and Linux. I also used DH in combination with Complementary Shaders 5.7.1 and Euphoria Patches 1.8.6 at high settings without any issues apart from worrying 1% lows.

Because DH isn't included with the modpack by default, issues related to it aren't guaranteed to be worked on. Make sure you're always using the latest version of DH.
