import data_manager
import json


def get_contract_by_id(id):
    contract = data_manager.execute_select(
        """
        SELECT
            contract.id AS id,
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
        WHERE contract.id = %(id)s;
        """, {"id": id}, False)
    return contract


def get_contracts():
    contracts = data_manager.execute_select(
        """
        SELECT 
            cg.name AS group_name,
            cg.id AS group_id,
            contract.name As name,
            contract.id As id,
            type
        FROM contract
        JOIN contract_group cg on contract.contract_group_id = cg.id
        ORDER BY group_name, name;
        """)
    return contracts


def get_contract_groups():
    contracts = data_manager.execute_select(
        """
        SELECT id, name, description, background_color, main_color, secondary_color
        FROM contract_group;
        """)
    return contracts


def get_contract_group_by_id(id):
    return data_manager.execute_select(
        """
        SELECT * FROM contract_group
        WHERE id = %(board_id)s;
        """, {"board_id": id}, False)


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
        """, {"board_id": sheet_id}, False)
    return sheet


def update_contract(id, name, type, group_id, description, loophole, dice_pool):
    data_manager.execute_insert(
        """
        UPDATE contract
        SET
            name = %(name)s,
            type = %(type)s,
            contract_group_id = %(group_id)s,
            description = %(description)s,
            loophole = %(loophole)s,
            dice_pool = %(dice_pool)s
        WHERE id = %(id)s;
        """, {"id": id, "name": name, "type": type, "group_id": group_id, "description": description,
              "loophole": loophole, "dice_pool": dice_pool}
    )


def update_contract_group(id, name, description, background_color, main_color, secondary_color):
    data_manager.execute_insert(
        """
        UPDATE contract_group
        SET
            name = %(name)s,
            description = %(description)s,
            background_color = %(background_color)s,
            main_color = %(main_color)s,
            secondary_color = %(secondary_color)s
        WHERE id = %(id)s;
        """, {"id": id, "name": name, "description": description, "background_color": background_color,
              "main_color": main_color, "secondary_color": secondary_color}
    )


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
    return data_manager.execute_select(
        """
        INSERT INTO contract (name, type, contract_group_id, description, loophole, dice_pool)
        VALUES (%(name)s, %(type)s, %(group_id)s, %(description)s, %(loophole)s, %(dice_pool)s)
        RETURNING id;
        """, {"name": name, "type": type, "group_id": group_id,
              "description": description, "loophole": loophole, "dice_pool": dice_pool}, False)


def add_contract_group(name, description, background_color, main_color, secondary_color):
    return data_manager.execute_select(
        """
        INSERT INTO contract_group (name, description, background_color, main_color, secondary_color)
        VALUES (%(name)s, %(description)s, %(background_color)s, %(main_color)s, %(secondary_color)s)
        RETURNING id;
        """, {"name": name, "description": description, "background_color": background_color,
              "main_color": main_color, "secondary_color": secondary_color}, False)
