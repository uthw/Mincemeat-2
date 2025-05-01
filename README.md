# Mincemeat 2

A WIP modpack for Minecraft 1.20.1 that contains kitchen-sink, expert, and adventure/RPG elements. Here are some of the highlights:

-   Over 450 mods adding all sorts of things, but optimized to run on low-end computers
-   Over 1,000 handmade recipes, hundreds of quests that explain everything, and extensive customization
-   Progression through the adventure, magic, and tech trees
-   Around 30-40 bosses (I haven't counted in a while)
-   Custom difficulty mechanics, RPG loot, and easy-to-learn movement tech to make combat and exploration fun

## Installation

1. Install a modded Minecraft launcher: [CurseForge](https://www.curseforge.com/download/app) is the most user-friendly and does some steps for you, but you need to pay to remove ads and uses significant RAM in the background. [Prism](https://prismlauncher.org/download/windows/) has better customization and is more performant.
2. Download the latest version from the [Releases section](https://github.com/uthw/Mincemeat-2/releases/latest) on the right.
3. Import the .zip file you downloaded. If using Prism, click "Add Instance" -> "Import" -> "Browse" then select wherever you installed Mincemeat2-v0.x.x.zip.
    - If using Prism, you'll need to manually download some mods and resource packs by clicking the links and ensuring they're downloaded to your Downloads folder.
4. Set your allocated RAM.

    - In CurseForge, you can find this setting by clicking the gear in the bottom left, clicking on Minecraft in the list on the right, and changing the allocated memory slider.
    - In Prism, press the Settings button in the main window, press Java, and change the value for "Maximum memory allocation".
    - Mincemeat 2 is a large modpack, so you should allocate between 8 and 10 GB for the best experience. You can go above 10 if you can/want, but the lowest you can comfortably go is 6 GB.

5. **Skip this step if you’ve used Prism Launcher to play any 1.17+ modpack before, or are using CurseForge.** You might need to also set the Java version. To determine if you need to do this, click the “Edit” button on the right for Mincemeat 2. Then, click “Settings.” If the text box under “Java installation” contains a path to something along the lines of "jdk-17" (not any other number), you can skip this step.
    1. Check the box next to “Java installation”.
    2. Click “Download Java”. If you don't see this, update Prism Launcher.
    3. Choose a version. It doesn’t matter which one you select as long as the version number starts with 17.
    4. Click the “Download” button in the bottom right.
    5. Click “Auto-detect…” and then select the Java version you just downloaded.
6. You're done - your launcher will do the rest of the work for you. Press play.

## Tips

-   Never update, remove, or add mods (especially OptiFine) unless I tell you to.
-   Make an issue here if something isn't right. Before opening an issue, make sure it hasn't been reported yet.

## For servers

Mincemeat 2 can be played alone, but it's more fun with friends.
I include server packs with each version. These are intended for people hosting a server themselves. However, they can be used with a hosting service too, though I've never tried one.
The server pack instructions are included in the pack itself, but can also be viewed online [here](https://github.com/uthw/Mincemeat-2-Server-Pack/blob/main/README.md).

### Server tips

-   Use the FTB Teams button in the top right to invite friends to your team. This lets you sync quest progress and chunk claims.
-   Claim chunks by right clicking them on the minimap. This prevents them from being messed with by other players and mobs.
-   e4mc or Essential as an alternative to hosting a server is not recommended. I've tried e4mc before and it crashes often with this pack - these solutions are best suited for vanilla Minecraft and smaller modpacks.

## Updating

New versions are always posted on this repository's Releases page. They are packaged as CurseForge modpack exports, so you can install into any mainstream modded Minecraft launcher. Some launchers, including Prism, have built-in update features where you can import a new version into your existing instance to save space and time.
Not all changes from updates may apply to your world. You might have to copy all the files in `defaultconfigs` into your world's (found in `saves`) `serverconfig` folder, replacing any duplicates.

### Versioning

I use something similar to semantic versioning for releases. Until the modpack is complete, it will always be 0.x.x

Basically, if the first x changes, you should definitely create a new world. If the second x changes, you might be fine with your current world, but read at least the first paragraph of the changelog to find out for sure.
Versions with "-hf" (formerly "-hotfix") on the end are hotfixes that usually make minimal changes for when a release has major issues. Versions with "-pre" on the end are incomplete updates meant for previewing and are likely to be unstable.
I release new versions every 2-4 weeks on average.

## Credits

I used some scripts from the KubeJS discord server. Credit is given at the top of files with code from there.
guineapigboyx is responsible for a lot of playtesting and quests, including most of what you see in the Equipment, Challenges, and Bestiary sections.

## Want more?

Check out [the original Mincemeat](https://github.com/uthw/mincemeat), the now-abandoned modpack for 1.16.5 which I worked on in 2023. A decent portion of this modpack is copied over from it.

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