#!/bin/bash
green='\033[1;32m'
nc='\033[0m'
FLASK_APP=app:create_app
FLASK_DEBUG=1
echo -e "${green}🚀 run_flask is running ${nc}"
flask run