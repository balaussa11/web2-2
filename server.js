require('dotenv').config()
console.log(process.env.OPENWEATHER_API_KEY)

const express = require('express')
const axios = require('axios')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static('public'))

app.get('/api/weather', async (req, res) => {
  const city = req.query.city

  if (!city) {
    return res.status(400).json({ error: 'City is required' })
  }

  try {
    // Получаем погоду
    const weatherResponse = await axios.get(
      'https://api.openweathermap.org/data/2.5/weather',
      {
        params: {
          q: city,
          appid: process.env.OPENWEATHER_API_KEY,
          units: 'metric'
        }
      }
    )

    const data = weatherResponse.data
    const countryCode = data.sys.country

    // Получаем валюту через Rest Countries API
    const countryResponse = await axios.get(`https://restcountries.com/v3.1/alpha/${countryCode}`)
    const currencies = countryResponse.data[0].currencies
    const currencyKey = Object.keys(currencies)[0]
    const currencyName = currencies[currencyKey].name
    const currencySymbol = currencies[currencyKey].symbol

    // Формируем результат
    const result = {
      temperature: data.main.temp,
      feels_like: data.main.feels_like,
      description: data.weather[0].description,
      coordinates: data.coord,
      wind_speed: data.wind.speed,
      country_code: countryCode,
      rain_volume_last_3h: data.rain ? data.rain['3h'] : 0,
      currency: {
        code: currencyKey,
        name: currencyName,
        symbol: currencySymbol
      }
    }

    res.json(result)

  } catch (error) {
    console.error(error.response?.data || error.message)
    res.status(500).json({ error: 'Failed to fetch weather data', details: error.response?.data || error.message })
  }
})

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
