const bestiaryGroup = "2E16C686F58ACDBC"; // The chapter group that bestiary chapters are found in
const bestiaryTrackerId = "6F672DFAE72A957F"; // The chapter with the tracking quests
const checkProgressId = "33CEC3A0CA4B6752";
const disableNotifId = "6EB79825864A39B7";
const enableNotifId = "6AD6A0808659B94C";

function getCompletionForChapter(chapter, player) {
    let questsInChapter = chapter.getQuests();
    let totalQuestsInChapter = questsInChapter.size();

    let questData = FTBQuests.getData(player.level, player.uuid);
    let count = 0;
    questsInChapter.forEach((quest) => {
        if (questData.isCompleted(quest)) {
            count++;
        }
    });

    let proportion = totalQuestsInChapter === 0 ? 0 : count / totalQuestsInChapter;
    proportion = Number(String(proportion.toFixed(3))) // Stupid fix for floating point errors

    return { total: totalQuestsInChapter, count: count, proportion: proportion.toFixed(3) * 100 };
}

FTBQuestsEvents.completed((event) => {
    event.onlineMembers.forEach((player) => {
        let completedQuestId = event.object.codeString; // Quest ID

        if (completedQuestId === disableNotifId) {
            player.persistentData.putBoolean("dont_announce_bestiary", true);
            console.log(
                "Disabling notifications. new value: " +
                    player.persistentData.getBoolean("dont_announce_bestiary"),
            );
            return;
        }
        if (completedQuestId === enableNotifId) {
            player.persistentData.putBoolean("dont_announce_bestiary", false);
            console.log("Enabling notifications");
            return;
        }

        let level = player.level;
        let questObject = FTBQuests.getObject(level, completedQuestId); // Completed quest object
        let chapter = questObject.getQuestChapter(); // Chapter object
        let chapterString = chapter.codeString; // Chapter ID

        let group = chapter.getGroup(); // Chapter group (the thing you can expand and collapse)

        if (completedQuestId === checkProgressId) {
            // Sorry to anyone reading this code
            player.tell(Text.of("======= Bestiary Progress =======").color("yellow"));
            group.chapters.forEach((bestiaryChapter) => {
                if (bestiaryChapter.codeString !== bestiaryTrackerId) {
                    let completion = getCompletionForChapter(bestiaryChapter, player);
                    if (completion.count > 0) {
                        player.tell(
                            Text.of(
                                `- ${bestiaryChapter.rawTitle}: ${completion.count}/${completion.total} (${completion.proportion}%)`,
                            ).color("yellow"),
                        );
                    }
                }
            });
            player.tell(Text.of("======= End Bestiary Progress =======").color("yellow"));
        }

        if (group.codeString !== bestiaryGroup || chapter.codeString === bestiaryTrackerId || questObject.rawTitle === "") {
            return; // Don't track tasks or non-bestiary quests
        }

        if (player.persistentData.getBoolean("dont_announce_bestiary")) return;

        let completion = getCompletionForChapter(chapter, player);
        completion.count++; // This quest isn't considered completed currently

        player.tell(
            Text.of(
                `You've found ${completion.count}/${completion.total} bestiary entries in ${chapter.rawTitle} (${completion.proportion}%)`,
            ).color("yellow"),
        );
    });
});
