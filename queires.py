import data_manager
import json


def get_sheet_by_id(sheet_id):
    sheet = data_manager.execute_select(
        """
        SELECT * FROM sheet
        WHERE id = %(board_id)s
        ;
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

