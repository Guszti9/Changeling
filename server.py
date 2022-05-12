from flask import Flask, render_template, url_for, jsonify, request

import queires
import sheet_controller
import contract_controller


app = Flask('changeling')


@app.route('/character_sheet')
def character_sheet():
    sheet = sheet_controller.get_sheet(1)
    return render_template("character-sheet.html", sheet=sheet)


@app.route('/api/sheet/update_attr', methods=['PUT'])
def update_attr():
    if request.method == 'PUT':
        sheet_controller.update_attr(request.json['name'], request.json['value'], request.json['id'])
        return jsonify({"massage": "ok"})


@app.route('/api/sheet/update_skill', methods=['PUT'])
def update_skill():
    if request.method == 'PUT':
        sheet_controller.update_skill(request.json['name'], request.json['value'], request.json['id'])
        return jsonify({"massage": "ok"})


@app.route('/api/contract', methods=['GET'])
def contract():
    contracts = contract_controller.get_contracts()
    return render_template("contract.html", contracts=contracts)


def main():
    app.run(debug=False)


if __name__ == '__main__':
    main()
