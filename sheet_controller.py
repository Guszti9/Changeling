import queires

mental_attributes = ["Intelligence", "Wits", "Resolve"]
physical_attributes = ["Strength", "Dexterity", "Stamina"]
social_attributes = ["Presence", "Manipulation", "Composure"]

mental_skills = ["Academics", "Computer", "Crafts", "Investigation", "Medicine", "Occult", "Politics", "Science"]
physical_skills = ["Athletics", "Brawl", "Drive", "Firearms", "Larceny", "Stealth", "Survival", "Weaponry"]
social_skills = ["Animal Ken", "Empathy", "Expression", "Intimidation", "Persuasion", "Socialize", "Streetwise", "Subterfuge"]


def get_sheet(id):
    sheet_dictionary = {}
    sheet_data = queires.get_sheet_by_id(id)

    attributes = get_attributes(sheet_data["attributes"])
    skills = get_skills(sheet_data["skills"])

    sheet_dictionary["id"] = sheet_data["id"]
    sheet_dictionary.update(attributes)
    sheet_dictionary.update(skills)

    return sheet_dictionary


def get_attributes(attributes_string):
    attributes = {}

    attributes_list = attributes_string.split("|")
    i = 0
    for attribute in attributes_list[0].split(","):
        attributes[mental_attributes[i]] = attribute
        i += 1
    i = 0
    for attribute in attributes_list[1].split(","):
        attributes[physical_attributes[i]] = attribute
        i += 1
    i = 0
    for attribute in attributes_list[2].split(","):
        attributes[social_attributes[i]] = attribute
        i += 1

    return attributes


def get_skills(skills_string):
    skills = {}

    skills_list = skills_string.split("|")
    i = 0
    for skill in skills_list[0].split(","):
        skills[mental_skills[i]] = skill
        i += 1
    i = 0
    for skill in skills_list[1].split(","):
        skills[physical_skills[i]] = skill
        i += 1
    i = 0
    for skill in skills_list[2].split(","):
        skills[social_skills[i]] = skill
        i += 1

    return skills

