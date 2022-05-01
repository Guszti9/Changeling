from flask import Flask, render_template, url_for, jsonify, request


app = Flask('changeling')


@app.route('/character_sheet')
def character_sheet():
    return render_template("character-sheet.html")




def main():
    app.run(debug=False)


if __name__ == '__main__':
    main()
