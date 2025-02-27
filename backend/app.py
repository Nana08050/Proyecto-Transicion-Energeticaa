from flask import Flask, jsonify
from flask_cors import CORS  # Importar Flask-CORS
import numpy as np

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})  # Habilitar CORS para cualquier origen

@app.route("/datos")
def datos():
    # Generar datos con numpy
    x = np.linspace(0, 10, 100).tolist()  # Lista de valores en el eje X
    y = np.sin(x).tolist()  # Lista de valores en el eje Y (función seno)

    return jsonify({"x": x, "y": y})  # Enviar los datos en formato JSON

if __name__ == "__main__":
    app.run(debug=True)
