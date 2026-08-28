// Some effects are intentionally left out despite having the same name because they are sufficiently different, like electrified from mine cells and opposing force
const effectMap = {
    "relics:stun": "cataclysm:stun",
    "alexscaves:stunned": "cataclysm:stun",
    "minecells:stunned": "cataclysm:stun",
    "tetra:stun": "cataclysm:stun",
    "relics:bleeding": "minecells:bleeding",
    "attributeslib:bleeding": "minecells:bleeding",
    "tetra:bleeding": "minecells:bleeding",
    "minecells:frozen": "mowziesmobs:frozen",
    "irons_spellbooks:chilled": "cofh_core:chilled",
    "undergarden:chilly": "cofh_core:chilled",
};

const $EventResult = Java.loadClass("net.minecraftforge.eventbus.api.Event$Result");

ForgeEvents.onEvent("net.minecraftforge.event.entity.living.MobEffectEvent$Applicable", (event) => {
    let entity = event.getEntity();

    if (entity.level.isClientSide()) return;

    let effectInstance = event.getEffectInstance();
    if (!effectInstance) return;

    let rawEffect = effectInstance.getEffect();
    let oldEffectId = String($ForgeRegistries.MOB_EFFECTS.getKey(rawEffect));

    if (effectMap[oldEffectId]) {
        event.setResult($EventResult.DENY); // Cancel original effect application

        // Effect info
        let duration = effectInstance.getDuration();
        let amplifier = effectInstance.getAmplifier();
        let isAmbient = effectInstance.isAmbient();
        let isVisible = effectInstance.isVisible();

        let newEffectId = effectMap[oldEffectId];

        // Apply replacement effect with the same parameters
        entity.potionEffects.add(newEffectId, duration, amplifier, isAmbient, isVisible);
    }
});
