import queires


def get_contracts():
    return queires.get_contracts()


def edit_contract(id, data):
    group_id = queires.get_contract_group_id_by_name(data["groupName"])["id"]
    queires.update_contract(id, data["name"], data["type"], group_id, data["description"], data["loophole"],
                            data["dicePool"])


def add_contract(data):
    group_id = queires.get_contract_group_id_by_name(data["groupName"])["id"]
    return queires.add_contract(data["name"], data["type"], group_id, data["description"], data["loophole"],
                                data["dicePool"])["id"]


def get_contract_by_id(id):
    return queires.get_contract_by_id(id)


def get_names():
    names = queires.get_contarct_names()
    name_list = []
    for name in names:
        name_list.append(name["name"])
    return name_list


def get_groups():
    groups = queires.get_contract_groups()
    group_list = []
    for group in groups:
        group_list.append(group["name"])
    return group_list

