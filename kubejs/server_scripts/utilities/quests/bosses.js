// Every quest that requires killing a boss. This array needs to be updated each time a new boss is added.
const bossQuestIds = [
    "78569B65CFBBDB2D",
    "7179EC83E4723D95",
    "354079B354E82E4E",
    "00D6D925A67CDC78",
    "47F8DC09096B0991",
    "520A629F81C286FF",
    "44F41502DDB1A529",
    "125D0F9B857A3775",
    "0FE391A15589A3C7",
    "2C47A12A20C50CE6",
    "1BA05933619C6884",
    "1DEE7C3ED8858245",
    "080F3639CF9971BF",
    "20B6859C7A0C1D09",
    "283CD42DB879C756",
    "70E9EE74EE5A5D7F",
    "72E1C3F859844F04",
    "3C64DA5B6BB4C78A",
    "49E8090E1AA53E7F",
    "589335339A212CB1",
    "1846B85073A4A191",
    "21D6AB95329A4EEF",
    "5FD7C7EDDE0E119C",
    "00294FF7CDCA91F0",
    "3F9A7DCBF8CE1DCB",
    "09F0100DAEDAD582",
    "6B15B902E71DC308",
    "05765DE630B7CDC2",
    "4C66466F73102684",
    "690AAE1274B3821D",
    "732BF9F02A4D0E26",
    "6A8DF7B095C4D714",
    "4093A51E42C29851",
    "71BD95734E41E591",
    "34A83BB5D5DEFC82",
    "7CCAA4C36D8E088F",
    "4C2CB24F4BB67925",
    "4146A3AAFACC851A",
    "0CD34066894BD790",
    "4F0CB3BF8C85DACC",
    "6DF9E50004A7AE0C",
    "5EE95A37004F9F6A",
    "48D4BF288D59E907",
    "45F0109FB953866E",
    "1FB1BEE61B700A79",
    "4274914ACE496985",
    "19B969C38E46F382",
    "27D2F14602F23A12",
    "580FE0FA099B8D6D",
    "1523B768DC9D0F6D",
    "3DE7C32A7F8C8E31",
    "0CB83266473448BA",
];

const syncQuestId = "66FF0F6B5508C690"; // Placeholder checkmark quest that can be used by players on old worlds to refresh their boss kill count
const minBossesForEndAccess = 15;

function refreshBossKillCount(player, shouldTell) {
    let level = player.level;
    let questData = FTBQuests.getData(level, player.uuid);
    let pData = player.persistentData;

    let bossKills = 0;

    let nextMultipleOf5 = Math.ceil(bossQuestIds.length / 5) * 5;
    for (let i = nextMultipleOf5; i >= 5; i -= 5) {
        level.server.runCommandSilent(`kubejs stages remove ${player.username} killed_${i}_bosses`);
    }

    bossQuestIds.forEach((questId) => {
        let questObj = FTBQuests.getObject(level, questId);
        if (questData.isCompleted(questObj)) {
            bossKills++;
        }
    });

    if (shouldTell) player.tell(`You have completed ${bossKills} boss quests!`);
    pData.putInt("boss_kills", bossKills);

    if (bossKills % 5 === 0) {
        level.server.runCommandSilent(`kubejs stages add ${player.username} killed_${bossKills}_bosses`);
    }

    if (bossKills >= minBossesForEndAccess) {
        level.server.runCommandSilent(`kubejs stages add ${player.username} killed_enough_bosses`);
    } else {
        level.server.runCommandSilent(`kubejs stages remove ${player.username} killed_enough_bosses`);
    }
}

FTBQuestsEvents.completed((event) => {
    let completedQuestId = event.object.codeString;

    if (bossQuestIds.includes(completedQuestId)) {
        event.onlineMembers.forEach((player) => {
            let pData = player.persistentData;
            let bossKills = pData.getInt("boss_kills") || 0;
            bossKills++;
            pData.putInt("boss_kills", bossKills);

            player.tell(`You have now defeated ${bossKills} different bosses.`);

            if (bossKills >= minBossesForEndAccess) {
                event.server.runCommandSilent(
                    `kubejs stages add ${player.username} killed_enough_bosses`,
                );
            }
        });
    } else if (completedQuestId === syncQuestId) {
        event.onlineMembers.forEach((player) => {
            refreshBossKillCount(player, true);
        });
    }
});

PlayerEvents.loggedIn(event => {
    let player = event.player;
    refreshBossKillCount(player, false);
})