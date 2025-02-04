# Mincemeat 2

A WIP modpack for Minecraft 1.20.1 that contains kitchen-sink, expert, and adventure/RPG elements.

## Installation

1. Download the latest version from the [Releases section](https://github.com/uthw/Mincemeat-2/releases/latest) on the right
2. Download Prism Launcher and sign in with it. I'd recommend Prism Launcher because it's performant, has no ads, and you can update the modpack when new versions come out instead of making a new instance. **This means you can keep your settings and worlds after updating.**

    - You must have [Java 17](https://www.oracle.com/java/technologies/downloads/#jdk17-windows) installed to play modded 1.17+ using Prism Launcher.

3. Click Add Instance --> Import and select Mincemeat 2 v0.x.x. **Do not enable any optional mods.**

### Optimization

4. (OPTIONAL) While you wait for the mods to download, download and install GraalVM for Java 17. This is the optimal Java version for modded Minecraft 1.16.5+
5. (ONLY IF YOU DID STEP 4) Select Mincemeat 2 --> Edit (on the right) --> Settings --> Auto-detect... --> select GraalVM
6. Set minimum and maximum memory allocation to 8192 MiB
7. If your computer has 8GB or less of RAM, instead disable EMI, EMI Loot, and EMI Trades in your mod list. Also disable Every Compat if you're playing singleplayer. Then, install the latest versions of Just Enough Resources and Just Enough Trades. You can then run the modpack with 4-6GB of RAM allocated.
8. Type in [these](https://gist.github.com/uthw/3648819b8acf988ed21260f62f83e05f) JVM arguments
###
9. Press play.

## Tips

-   Never update mods unless I tell you to.
-   Don't add OptiFine.
-   Make an issue here if something isn't right. Before opening an issue, make sure it hasn't been reported yet.
-   This modpack is on the heavier side, and runs best with 8-12 GB of RAM allocated. From my experience, anything above or below will cause lag spikes.

## Versioning

I use something similar to semantic versioning for releases. Until the modpack is complete, it will always be v0.x.x

If the first x changes with a new release, it means worlds from old versions will fail to load or new chunks in those worlds will be significantly different from old chunks to the point where making a new world is recommended.
If only the second x changes, worlds from old versions are compatible with the new release, but you should read the patch notes to see if new chunks will have any differences from old ones.
Sometimes, a version will have "-hotfix" followed by a number at the end. These are typically released when a version has major issues and needs a patch quickly. For ease of updating on a server, they usually won't add or remove mods.

## Credits

I used some scripts from the KubeJS discord server, credit is given at the top of files with code from there
Shoutout to guineapigboyx for playtesting every single version of this modpack, reporting issues, and creating a lot of quests. Most of what you see in the Equipment, Challenges, and Bestiary sections are his work.

## Want more?

Check out [the original Mincemeat](https://github.com/uthw/mincemeat), the now-abandoned modpack for 1.16.5 which I spent a lot of time on during the summer of 2023.

## License

As of v0.4.8, Mincemeat 2 (at least things I made for it) is now licensed under GPL 3.0. This means you can generally use it for whatever you want without restrictions, including your own modpack as long as it is also licensed under GPL 3.0.
Files made by me include those found in:

-   `kubejs`, unless a creator is credited at the top of the file
-   `config/openloader/resources`
-   `config/openloader/data`, except the zip files
-   `schematics`
-   `config/ftbquests`
-   `config/fancymenu`

It's pretty hard to violate this license unintentionally, but see the `LICENSE` file for the entire thing if you'd like.
