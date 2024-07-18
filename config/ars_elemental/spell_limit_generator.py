import os
import toml

directory = "."

# Iterate over each file in the directory
for filename in os.listdir(directory):
    if filename.endswith(".toml"):
        filepath = os.path.join(directory, filename)

        # Open the file and parse the TOML data
        with open(filepath, "r") as file:
            data = toml.load(file)

        # Modify the per_spell_limit value
        data["general"]["per_spell_limit"] = 3

        # Write the modified data back to the file
        with open(filepath, "w") as file:
            toml.dump(data, file)
