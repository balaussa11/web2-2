# web2-2
# Weather & Currency App

# 📌 Project Description

This web application displays weather and currency information for a selected city.
All API calls are handled on the server side to provide a clean and secure user experience.

User enters a city name

Server fetches weather and country information

Frontend displays the data in a responsive and user-friendly interface

# 🛠 Technologies

Node.js

Express.js

Axios

HTML / CSS / JavaScript (frontend)

REST APIs:

OpenWeather API
 — weather data

Rest Countries API
 — country and currency information

# ⚙️ Installation & Running

1.Install dependencies:
npm init -y
npm install express axios cors dotenv

2.Create a .env file in the project root with my OpenWeather API key:
OPENWEATHER_API_KEY=MY_API_KEY

3.Start the server:
node server.js


4.Open browser:
http://localhost:3000

5.Enter a city and click Get Weather

# 🔹 APIs Used
1️⃣ OpenWeather API

Fetches real-time weather data for the city
Server returns:
temperature
feels_like
description
coordinates
wind_speed
country_code
rain_volume_last_3h

2️⃣ Rest Countries API

Fetches country information using country code (ISO)
Server returns currency details:
code — currency code (e.g., GBP)
name — currency name (e.g., British pound)
symbol — currency symbol (e.g., £)

# 🌐 Frontend

Responsive design using CSS
Displays:
Weather (temperature, description, feels-like, wind speed, rain)
Country (ISO code)
Currency (code, name, symbol)

# 💡 Features & Design

All third-party API calls are server-side, keeping API keys hidden
Simple, clean, and responsive UI
Error handling:
Invalid city → displays user-friendly message
Server errors → returns JSON with details

<img width="1918" height="955" alt="Снимок экрана 2025-12-28 161053" src="https://github.com/user-attachments/assets/ac9feb47-1353-44a3-b465-515581ab8b7c" />


# 📚 References

OpenWeather API Documentation
Rest Countries API Documentation
