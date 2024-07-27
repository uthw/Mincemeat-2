import toml
import math
import random

# what a mess
def calculate_new_cooldown(original_cooldown):
    return round(random.uniform(0.85, 1.15) * max(0.5, original_cooldown * (1 / (math.log(original_cooldown + 1) + 1))), 1)

with open('irons_spellbooks-server.toml', 'r') as file:
    data = toml.load(file)

for spell in data['Spells']:
    if 'CooldownInSeconds' in data['Spells'][spell]:
        original_cooldown = data['Spells'][spell]['CooldownInSeconds']
        new_cooldown = calculate_new_cooldown(original_cooldown)
        data['Spells'][spell]['CooldownInSeconds'] = new_cooldown

with open('irons_spellbooks-server.toml', 'w') as file:
    toml.dump(data, file)

print("Cooldowns have been successfully adjusted and saved to 'spells_config_modified.toml'.")
