#!/bin/bash
set -e

curl -s -H "Content-Type:application/json" \
    -X POST "http://localhost:5000/api/v1/auth/login" \
    -d '{"email":"alex@gmail.com","password":"caroline"}'