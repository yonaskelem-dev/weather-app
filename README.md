# Weather App 🌤️

A simple weather application built with React and Vite. It allows users to search for a city and view its current weather.

## Features

- Search weather by city name
- Display temperature and weather conditions
- Show humidity, wind speed, and other weather details
- Load default weather for Addis Ababa

## Technologies Used

- React
- JavaScript
- Axios
- CSS
- Open-Meteo API

## Installation

1. Clone the repository:

   ```bash
   git clone YOUR-REPOSITORY-URL
   ```

2. Open the project folder:

   ```bash
   cd weather-application
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the project root and add:

   ```env
   VITE_WEATHER_API_URL=https://api.open-meteo.com/v1/forecast
   VITE_GEOCODING_API_URL=https://geocoding-api.open-meteo.com/v1/search
   ```

5. Start the application:

   ```bash
   npm run dev
   ```

## API

This project uses the free [Open-Meteo API](https://open-meteo.com/) for weather forecasts and city search.

## License

This project is open source and available for learning purposes.
