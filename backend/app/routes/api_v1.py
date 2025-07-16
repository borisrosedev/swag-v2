from flask import Blueprint, request, jsonify
import logging
logging.basicConfig(level=logging.INFO)

api_v1 = Blueprint("api_v1", __name__, url_prefix="/api/v1")


@api_v1.route("/", methods=["GET"])
def index():
    return jsonify(message="API V1")


@api_v1.route("/auth/login", methods=["POST"])
def auth_login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    
    logging.info(f"email: {email}")
    logging.info(f"password: {password}")
    return jsonify({ "email": email, "password": password }), 200