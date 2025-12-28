document.getElementById('getWeatherBtn').addEventListener('click', async () => {
  const city = document.getElementById('cityInput').value
  const resultDiv = document.getElementById('weatherResult')

  if (!city) {
    resultDiv.innerHTML = 'Please enter a city'
    return
  }

  resultDiv.innerHTML = 'Loading...'

  try {
    const response = await fetch(`/api/weather?city=${city}`)
    const data = await response.json()

    if (data.error) {
      resultDiv.innerHTML = data.error
      return
    }

    resultDiv.innerHTML = `
      <p><strong>Temperature:</strong> ${data.temperature} °C</p>
      <p><strong>Feels like:</strong> ${data.feels_like} °C</p>
      <p><strong>Description:</strong> ${data.description}</p>
      <p><strong>Wind speed:</strong> ${data.wind_speed} m/s</p>
      <p><strong>Country:</strong> ${data.country_code}</p>
      <p><strong>Rain (last 3h):</strong> ${data.rain_volume_last_3h} mm</p>
      <p><strong>Currency:</strong> ${data.currency.name} (${data.currency.code}) ${data.currency.symbol}</p>
    `
  } catch (error) {
    resultDiv.innerHTML = 'Failed to load data'
  }
})
