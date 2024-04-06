// priority: 0
// This is made by zachattack4321, ChiefAurg, and Uncandango
/*
    DOCUMENTATION
    pData add_iron_max_mana stores the irons max mana bonus that we will add from ars max-mana-boosting equipment
    pData add_ars_max_mana is the opposite, a bonus to ars max mana from irons equipment

*/

const ManaCap = Java.loadClass(
    "com.hollingsworth.arsnouveau.api.util.ManaUtil"
);

/*
 *  initializing the data on login
 */
PlayerEvents.loggedIn((event) => {
    let pData = event.player.persistentData;
    if (!pData.contains("add_iron_max_mana"))
        pData.putInt("add_iron_max_mana", 0);
    if (!pData.contains("add_ars_max_mana"))
        pData.putInt("add_ars_max_mana", 0);

    // kube attribute modifiers are cleared on players logging off, so we have to initialize them
    event.player.modifyAttribute(
        "irons_spellbooks:max_mana",
        "custom",
        pData.getInt("add_iron_max_mana"),
        "addition"
    );
    event.player.modifyAttribute(
        "ars_nouveau:ars_nouveau.perk.max_mana",
        "custom",
        pData.getInt("add_ars_max_mana"),
        "addition"
    );
});

PlayerEvents.tick((event) => {
    if (event.player.age % 60 != 0) return;
    let pData = event.player.persistentData;

    // gets the real, unmodified by this script, max value of the mana
    // we can get this by getting the total and subtracting what we've added so far, stored in persistant data
    let raw_ars_max_mana =
        ManaCap.getMaxMana(event.player) -
        100 -
        pData.getInt("add_ars_max_mana");
    let raw_irons_max_mana =
        event.player.getAttributeTotalValue("irons_spellbooks:max_mana") -
        100 -
        pData.getInt("add_iron_max_mana");

    // updates the persistant data with how much we are adding to each max
    pData.putInt("add_iron_max_mana", raw_ars_max_mana);
    pData.putInt("add_ars_max_mana", raw_irons_max_mana);

    // update the attributes themselves, using a "custom" attribute modifier that only we ever touch/update
    event.player.modifyAttribute(
        "irons_spellbooks:max_mana",
        "custom",
        pData.getInt("add_iron_max_mana"),
        "addition"
    );
    event.player.modifyAttribute(
        "ars_nouveau:ars_nouveau.perk.max_mana",
        "custom",
        pData.getInt("add_ars_max_mana"),
        "addition"
    );

    // prints the values we need for debugging
    // print_irons(event);
    // print_ars(event);
});

let print_irons = (/** @type {Internal.SimplePlayerEventJS} */ event) => {
    event.server.tell(
        "Irons 'Total Value': " +
            event.player.getAttributeTotalValue("irons_spellbooks:max_mana")
    );
    event.server.tell(
        "How much we added to that: " +
            event.player.persistentData.getInt("add_iron_max_mana")
    );
    event.server.tell("------------------------------------------");
};

let print_ars = (/** @type {Internal.SimplePlayerEventJS} */ event) => {
    event.server.tell("Ars 'Total Value': " + ManaCap.getMaxMana(event.player));
    event.server.tell(
        "How much we added to that: " +
            event.player.persistentData.getInt("add_ars_max_mana")
    );
    event.server.tell("------------------------------------------");
};
