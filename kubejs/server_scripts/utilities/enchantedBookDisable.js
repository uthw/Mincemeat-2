// Discord: devjordan (with minor changes)

MoreJSEvents.updateVillagerOffers((event) => {
    // net.minecraft.world.item.trading.MerchantOffer@4f67aeff][java.util.ArrayList]
    event.getOffers().removeIf((trade) => {
        let isNotAllowedTrade = trade
            .getOutput()
            .getId()
            .match(/.*enchanted_book/g);
        // Return boolean (true if trade matches)
        return !!isNotAllowedTrade;
    });
});
