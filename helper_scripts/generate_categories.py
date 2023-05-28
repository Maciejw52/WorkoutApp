import json


def extract_primary_muscles(json_file):
    with open(json_file, encoding='utf-8') as f:
        data = json.load(f)

    levels = set()
    mechanics = set()
    categories = set()
    forces = set()
    primary_muscles = set()

    exercises = data.get("exercises", [])

    for exercise in exercises:
        level = exercise.get("level")
        mechanic = exercise.get("mechanic")
        category = exercise.get("category")
        force = exercise.get("force")
        muscles = exercise.get("primaryMuscles", [])

        if level:
            levels.add(level)
        if mechanic:
            mechanics.add(mechanic)
        if category:
            categories.add(category)
        if force:
            forces.add(force)
        if muscles:
            primary_muscles.update(muscles)

    return {
        "levels": list(levels),
        "mechanics": list(mechanics),
        "categories": list(categories),
        "forces": list(forces),
        "primaryMuscles": list(primary_muscles)
    }


# Usage example
input_json_file = "src/database/exercises.json"
output_json_file = "src/database/categories.json"

primary_muscles_list = extract_primary_muscles(input_json_file)

# Create a dictionary with the primary muscles list
output_data = {"primaryMuscles": primary_muscles_list}

# Write the data to the output JSON file
with open(output_json_file, "w") as f:
    json.dump(output_data, f, indent=4)

print(f"Primary muscles extracted and saved to {output_json_file}")
