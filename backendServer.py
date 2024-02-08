from flask import Flask, make_response
import random
import string
from flask import jsonify

app = Flask(__name__)


@app.route("/generate_password", methods=["GET"])
def generate_password():
    length = random.randint(8, 12)
    characters = string.ascii_letters + string.digits + string.punctuation
    result = "".join(random.choice(characters) for _ in range(length))

    response = {"result": result}

    res = make_response(jsonify(response), 200)
    res.headers["Content-Type"] = "application/json"
    res.headers["Access-Control-Allow-Origin"] = "*"
    res.headers["Access-Control-Allow-Methods"] = "GET"
    res.headers["Access-Control-Allow-Headers"] = "Content-Type"

    return res


if __name__ == "__main__":
    app.run(host="localhost", port=8000)
