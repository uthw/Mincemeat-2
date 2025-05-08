import tomlkit
import math
import random


# what a mess
def calculate_new_cooldown(original_cooldown):
    # return round(
    #     random.uniform(0.85, 1.15)
    #     * max(0.5, original_cooldown * (1 / (math.log(original_cooldown + 1) + 1))),
    #     1,
    # )

    # use a larger decay factor for less extreme reductions
    decay_factor = 2.5
    # diminishing returns: longer cooldowns shrink less
    base = original_cooldown * (decay_factor / (math.log(original_cooldown + 1) + 1))
    return round(
        random.uniform(0.85, 1.15)
        * max(0.5, base),
        1,
    )


# read & parse with tomlkit to preserve comments
with open("irons_spellbooks-server.toml", "r", encoding="utf-8") as f:
    content = f.read()
    data = tomlkit.parse(content)

# only adjust traveloptics spells, make their cooldown ~10% longer
for spell_name, spell in data["Spells"].items():
    if spell_name.startswith("traveloptics:") and "CooldownInSeconds" in spell:
        original = spell["CooldownInSeconds"]
        adjusted = calculate_new_cooldown(original) * 1.1
        spell["CooldownInSeconds"] = round(adjusted, 1)

# write back, comments remain in place
with open("irons_spellbooks-server.toml", "w", encoding="utf-8") as f:
    f.write(tomlkit.dumps(data))

print("Traveloptics spell cooldowns adjusted and saved.")
