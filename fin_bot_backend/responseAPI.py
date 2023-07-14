from flask import Flask, request
from flask_cors import CORS, cross_origin
from Finbot_model.chatterbot import respond

app = Flask(__name__)

cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

id_count = 0

test = []

@app.route("/reset", methods=["GET", "POST"])
def reset():

    if request.method == "POST":

        test.clear()

    return test

@app.route('/handle_data', methods=['POST', 'GET'])
def handle_data():

    if request.method == "POST":

        global id_count

        projectpath = request.json["title"]
        # your code
        # return a response

        test.append({"id" : id_count, "you" : projectpath, "Chatbot": respond(projectpath)})

        id_count += 1

        return test
    
    else:

        return test


if __name__ == "__main__":

    app.run(debug=True)
