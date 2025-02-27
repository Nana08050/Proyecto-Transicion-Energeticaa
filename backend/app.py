from flask import Flask, jsonify
from flask_cors import CORS
import pandas as pd
app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})  # Habilitar CORS para cualquier origen

@app.route("/datos")
def datos():
    # Leer el archivo CSV
    df = pd.read_csv("./datos.csv")  # Asegúrate de que el archivo está en la misma carpeta
    
    # Convertir a JSON
    datos_json = {
        "categorias": df["YEAR"].tolist(),
        "valores": df["VALUE"].tolist()
    }
    return jsonify(datos_json)

if __name__ == "__main__":
    app.run(debug=True)
