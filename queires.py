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
