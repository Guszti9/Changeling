import queires

types = ["Mental", "Physical", "Social"]

mental_attributes = ["Intelligence", "Wits", "Resolve"]
physical_attributes = ["Strength", "Dexterity", "Stamina"]
social_attributes = ["Presence", "Manipulation", "Composure"]

attribute_names = [mental_attributes, physical_attributes, social_attributes]

mental_skills = ["Academics", "Computer", "Crafts", "Investigation", "Medicine", "Occult", "Politics", "Science"]
physical_skills = ["Athletics", "Brawl", "Drive", "Firearms", "Larceny", "Stealth", "Survival", "Weaponry"]
social_skills = ["Animal Ken", "Empathy", "Expression", "Intimidation", "Persuasion", "Socialize", "Streetwise", "Subterfuge"]

skill_names = [mental_skills, physical_skills, social_skills]


def get_sheet(id):
    sheet_dictionary = {}
    sheet_data = queires.get_sheet_by_id(id)

    attributes = get_attributes(sheet_data["attributes"])
    skills = get_skills(sheet_data["skills"])

    sheet_dictionary["id"] = sheet_data["id"]
    sheet_dictionary["Attributes"] = attributes
    sheet_dictionary["Skills"] = skills

    return sheet_dictionary


def get_attributes(attributes_string):
    attributes = {}

    attributes_type_list = attributes_string.split("|")
    i = 0
    for attribute_type in attributes_type_list:
        attributes[types[i]] = {}
        j = 0
        for attribute in attribute_type.split(","):
            attributes[types[i]][attribute_names[i][j]] = attribute
            j += 1
        i += 1

    return attributes


def get_skills(skills_string):
    skills = {}

    skills_type_list = skills_string.split("|")
    i = 0
    for skill_type in skills_type_list:
        skills[types[i]] = {}
        j = 0
        for skill in skill_type.split(","):
            skills[types[i]][skill_names[i][j]] = skill
            j += 1
        i += 1

    return skills


def update_attr(attr_name, attr_value, sheet_id):
    attr_string = queires.get_sheet_by_id(sheet_id)["attributes"]

    attributes = get_attributes(attr_string)
    for type, attr_type in attributes.items():
        for name, value in attr_type.items():
            if name == attr_name:
                attributes[type][name] = str(attr_value)

    attr_string = create_string_from_dict(attributes)
    queires.update_attr_by_sheet_id(attr_string, sheet_id)


def update_skill(skill_name, skill_value, sheet_id):
    skills_string = queires.get_sheet_by_id(sheet_id)["skills"]

    skills = get_skills(skills_string)
    for type, skills_type in skills.items():
        for name, value in skills_type.items():
            if name == skill_name:
                skills[type][name] = str(skill_value)

    skills_string = create_string_from_dict(skills)
    queires.update_skills_by_sheet_id(skills_string, sheet_id)


def create_string_from_dict(dict):
    str = ""
    for type in dict:
        str += ",".join([value for name, value in dict[type].items()])
        str += "|"
    return str[0:-1]

