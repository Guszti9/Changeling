from flask import Flask, render_template, url_for, jsonify, request

import queires


app = Flask('changeling')


@app.route('/character_sheet')
def character_sheet():
    sheet = queires.get_sheet_by_id(1);
    return render_template("character-sheet.html")


def main():
    app.run(debug=False)


if __name__ == '__main__':
    main()
