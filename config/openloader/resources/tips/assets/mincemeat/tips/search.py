import os
import json


def search_phrase_in_json_files(directory, phrase):
    results = {}
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith(".json"):
                file_path = os.path.join(root, file)
                try:
                    with open(file_path, "r") as f:
                        data = json.load(f)
                        # Convert JSON data to string for searching
                        data_str = json.dumps(data)
                        if phrase in data_str:
                            results[file_path] = data_str
                except json.JSONDecodeError:
                    # Skip files that are not valid JSON
                    continue
    return results


# Specify the directory and phrase
directory = os.path.dirname(__file__)
print(directory)
phrase = "language"

# Perform the search
results = search_phrase_in_json_files(directory, phrase)

# Print the results
for file_path, content in results.items():
    print(f"Found phrase in file: {file_path}")
    print(f"Content: {content}")
    print()
