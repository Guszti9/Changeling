from flask import Flask, render_template, url_for, jsonify, request

import queires
import sheet_controller
import contract_controller


app = Flask('changeling')


@app.route('/character_sheet')
def character_sheet():
    sheet = sheet_controller.get_sheet(1)
    return render_template("character-sheet.html", sheet=sheet)


@app.route('/sheet/update_attr', methods=['PUT'])
def update_attr():
    if request.method == 'PUT':
        sheet_controller.update_attr(request.json['name'], request.json['value'], request.json['id'])
        return jsonify({"massage": "ok"})


@app.route('/sheet/update_skill', methods=['PUT'])
def update_skill():
    if request.method == 'PUT':
        sheet_controller.update_skill(request.json['name'], request.json['value'], request.json['id'])
        return jsonify({"massage": "ok"})


@app.route('/contract', methods=['GET', 'POST', 'PUT'])
def contract():
    if request.method == 'GET':
        contracts = contract_controller.get_contracts()
        contract_groups = contract_controller.get_contract_groups()
        return render_template("contract.html", contracts=contracts, contract_groups=contract_groups)
    if request.method == 'POST':
        id = contract_controller.add_contract(request.json)
        return jsonify({"massage": "ok", "id": id})


@app.route('/contract/all', methods=['GET'])
def get_all_contact():
    if request.method == 'GET':
        return jsonify(contract_controller.get_contracts())


@app.route('/contract/<id>', methods=['GET', 'PUT'])
def api_contract(id):
    if request.method == 'GET':
        return jsonify(contract_controller.get_contract_by_id(id))
    if request.method == 'PUT':
        contract_controller.edit_contract(id, request.json)
        return jsonify({"massage": "ok"})


@app.route('/contract_group', methods=['POST'])
def contract_group():
    if request.method == 'POST':
        id = contract_controller.add_contract_group(request.json)
        return jsonify({"massage": "ok", "id": id})


@app.route('/contract_group/all', methods=['GET'])
def get_all_contact_group():
    if request.method == 'GET':
        return jsonify(contract_controller.get_contract_groups())


@app.route('/contract_group/<id>', methods=['GET', 'PUT'])
def api_contract_group(id):
    if request.method == 'GET':
        return jsonify(contract_controller.get_contract_group_by_id(id))
    if request.method == 'PUT':
        contract_controller.edit_contract_group(id, request.json)
        return jsonify({"massage": "ok"})


@app.route('/contract_group/names', methods=['GET'])
def get_all_group_name():
    return jsonify(contract_controller.get_groups())


def main():
    app.run(debug=False)


if __name__ == '__main__':
    main()
