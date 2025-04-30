@echo off
start "" "http://localhost:3000"
start /b node server.js >nul 2>&1
exit