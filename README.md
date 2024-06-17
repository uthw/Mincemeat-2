# Mincemeat 2

A modpack for Minecraft 1.20.1 that focuses on providing a challenging yet forgiving experience while also having enough content to be enjoyable for anyone.

## Installation

1. Download the latest version from the Releases section on the right
2. Download Prism Launcher and sign in with it. There are many options but Prism is best because it uses little RAM, gives you the most options to maximize your performance, and you can update the modpack when new versions come out instead of making a new instance. **This means you can keep your settings and worlds after updating.**
3. Click Add Instance --> Import and select Mincemeat 2 0.x.x. **Do not enable any optional mods.**

### Optimization

4. (OPTIONAL) While you wait for the mods to download, download and install GraalVM for Java 17. This is the optimal Java version for modded Minecraft 1.16.5+
5. (ONLY IF YOU DID STEP 4) Select Mincemeat 2 --> Edit (on the right) --> Settings --> Auto-detect... --> select GraalVM
6. Set minimum and maximum memory allocation to 8192 MiB
7. Type in [these](https://gist.github.com/uthw/3648819b8acf988ed21260f62f83e05f) JVM arguments

8. Press play. It's normal for the game to crash on the loading screen the first time. Simply relaunch Minecraft if this happens.

## Tips

-   Never update mods unless I tell you to.
-   Don't add OptiFine.
-   Make an issue here if something isn't right.
-   Don't set allocated RAM above 10 GB.

## Versioning

I use something similar to semantic versioning for releases. Until the modpack is complete, it will always be v0.x.x.x

If the first x changes with a new release, it means worlds from old versions will fail to load or new chunks in those worlds will be significantly different from old chunks to the point where making a new world is recommended.
If only the second x changes, worlds from old versions are compatible with the new release, but you should read the patch notes to see if new chunks will have any differences from old ones.
Once guineapigboyx gets a server running, I might add a fourth number that indicates whether a new release is compatible with old servers.

## Credits

I used some scripts from the KubeJS discord server, credit is given at the top of files with code from there
