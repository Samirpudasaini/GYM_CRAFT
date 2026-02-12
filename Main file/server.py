from flask import Flask, request, jsonify
import mysql.connector
from mysql.connector import Error
from flask_cors import CORS  # Importing CORS to handle cross-origin requests

app = Flask(__name__)
CORS(app)  # Enabling CORS to allow requests from all origins

# Database connection function
def db_connection():
    try:
        conn = mysql.connector.connect(
            host='localhost',
            database='gym_db',  # Replace with your actual database name
            user='root',  # Replace with your MySQL username
            password='Bank@890'  # Replace with your MySQL password
        )
        if conn.is_connected():
            return conn
    except Error as e:
        print(f"Error: {e}")
        return None

# Registration endpoint
@app.route('/register', methods=['POST'])
def register():
    data = request.json
    username = data['username']
    email = data['email']
    password = data['password']

    conn = None
    cursor = None

    try:
        conn = db_connection()
        cursor = conn.cursor()

        # Insert new user into the database
        cursor.execute("INSERT INTO users (username, email, password) VALUES (%s, %s, %s)", (username, email, password))
        conn.commit()
        return jsonify({"status": "success", "message": "Registration successful"})
    except mysql.connector.Error as err:
        print(f"Error: {err}")
        if err.errno == 1062:  # Error code for duplicate entry
            return jsonify({"status": "error", "message": "User already exists"})
        else:
            return jsonify({"status": "error", "message": "An error occurred: " + str(err)})
    finally:
        if cursor is not None:
            cursor.close()
        if conn is not None:
            conn.close()

# Login endpoint
@app.route('/login', methods=['POST'])
def login():
    data = request.json
    username = data['username']
    password = data['password']

    conn = None
    cursor = None

    try:
        conn = db_connection()
        cursor = conn.cursor()

        # Check user credentials
        cursor.execute("SELECT * FROM users WHERE username = %s AND password = %s", (username, password))
        user = cursor.fetchone()

        if user:
            return jsonify({"status": "success", "message": "Login successful"})
        else:
            return jsonify({"status": "error", "message": "Invalid username or password"})
    except Error as e:
        print(f"Error: {e}")
        return jsonify({"status": "error", "message": "An error occurred: " + str(e)})
    finally:
        if cursor is not None:
            cursor.close()
        if conn is not None:
            conn.close()

# Index route
@app.route('/')
def index():
    return "Welcome to the Gym API!"

if __name__ == '__main__':
    app.run(debug=True)