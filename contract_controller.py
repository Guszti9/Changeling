import queires


def get_contracts():
    return queires.get_contracts()


def get_contract_by_id(id):
    return queires.get_contract_by_id(id)


def edit_contract(id, data):
    group_id = queires.get_group_id_by_name(data["groupName"])["id"]
    queires.update_contract(id, data["name"], data["type"], group_id, data["description"], data["loophole"],
                            data["dicePool"])


def add_contract(data):
    group_id = queires.get_group_id_by_name(data["groupName"])["id"]
    return queires.add_contract(data["name"], data["type"], group_id, data["description"], data["loophole"],
                                data["dicePool"])["id"]


def get_contract_groups():
    return queires.get_contract_groups()


def get_contract_group_by_id(id):
    return queires.get_contract_group_by_id(id)


def edit_contract_group(id, data):
    return queires.update_contract_group(id, data["name"], data["description"], data["backgroundColor"],
                                         data["mainColor"], data["secondaryColor"])


def add_contract_group(data):
    return queires.add_contract_group(data["name"], data["description"], data["backgroundColor"],
                                      data["mainColor"], data["secondaryColor"])


def get_group_id_by_name(name):
    return queires.get_group_id_by_name(name)


def get_groups_name():
    groups = queires.get_contract_groups()
    group_list = []
    for group in groups:
        group_list.append(group["name"])
    return group_list


def get_seeming_benefit_by_id(id):
    return queires.get_seeming_benefit_by_id(id)


def edit_seeming_benefit(id, data):
    queires.update_seeming_benefit(id, data["name"], data["description"], data["seeming"], data["contract_id"])


def add_seeming_benefit(data):
    return queires.add_seeming_benefit(data["name"], data["description"], data["seeming"], data["contract_id"])


def get_seeming_benefits_by_contract(id):
    return queires.get_seeming_benefits_by_contract(id)

