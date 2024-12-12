from flask import Flask, jsonify
from datetime import datetime

app = Flask(__name__)

@app.route('/')
def home():
    current_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    return f"Server is running! Current time: {current_time}"

@app.route('/time')
def get_time():
    return jsonify({
        "current_time": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
        "timezone": "Local"
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
