import data_manager
import json


def get_contract_by_id(id):
    contract = data_manager.execute_select(
        """
        SELECT
            cg.name AS group_name,
            contract.name AS name,
            contract.description AS description,
            loophole,
            cost,
            dice_pool,
            dice_pool_against,
            type
        FROM contract
        JOIN contract_group cg on contract.contract_group_id = cg.id
        WHERE contract.id = %(id)s
        """, {"id": id}, False)
    return contract


def get_contracts():
    contracts = data_manager.execute_select(
        """
        SELECT 
            cg.name AS group_name,
            contract.name As name,
            contract.id As id,
            type
        FROM contract
        JOIN contract_group cg on contract.contract_group_id = cg.id;
        """)
    return contracts


def get_contract_groups():
    contracts = data_manager.execute_select(
        """
        SELECT name
        FROM contract_group;
        """)
    return contracts


def get_contract_group_id_by_name(name):
    id = data_manager.execute_select(
        """
        SELECT id
        FROM contract_group
        WHERE name = %(name)s;
        """, {"name": name}, False)
    return id


def get_sheet_by_id(sheet_id):
    sheet = data_manager.execute_select(
        """
        SELECT * FROM sheet
        WHERE id = %(board_id)s;
        """
        , {"board_id": sheet_id}, False)
    return sheet


def update_attr_by_sheet_id(attr_str, sheet_id):
    data_manager.execute_insert(
        """
        UPDATE sheet
        SET attributes = %(attr_str)s
        WHERE id =  %(sheet_id)s; 
        """, {"attr_str": attr_str, "sheet_id": sheet_id})


def update_skills_by_sheet_id(skills_str, sheet_id):
    data_manager.execute_insert(
        """
        UPDATE sheet
        SET skills = %(skills_str)s
        WHERE id =  %(sheet_id)s; 
        """, {"skills_str": skills_str, "sheet_id": sheet_id})


def add_contract(name, type, group_id, description, loophole, dice_pool):
    data_manager.execute_insert(
        """
        INSERT INTO contract (name, type, contract_group_id, description, loophole, dice_pool)
        VALUES (%(name)s, %(type)s, %(group_id)s, %(description)s, %(loophole)s, %(dice_pool)s);
        """, {"name": name, "type": type, "group_id": group_id,
              "description": description, "loophole": loophole, "dice_pool": dice_pool})

