import axios from "axios";
import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";

const WEATHER_API_URL = import.meta.env.VITE_WEATHER_API_URL;
const GEOCODING_API_URL = import.meta.env.VITE_GEOCODING_API_URL;

const CURRENT_FIELDS =
  "temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m,wind_direction_10m";

const App = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [city, setCity] = useState({
    name: "Addis Ababa",
    country: "Ethiopia",
  });

  useEffect(() => {
    async function fetchInitialWeather() {
      try {
        const response = await axios.get(WEATHER_API_URL, {
          params: {
            latitude: 9.03,
            longitude: 38.74,
            current: CURRENT_FIELDS,
          },
        });

        setWeather(response.data.current);
      } catch {
        setError("Could not load weather. Please try again.");
      } finally {
        setLoading(false);
      }
    }

    fetchInitialWeather();
  }, []);

  async function handleSearch(searchName) {
    setLoading(true);
    setError("");

    try {
      const locationResponse = await axios.get(GEOCODING_API_URL, {
        params: {
          name: searchName,
          count: 1,
        },
      });

      const result = locationResponse.data.results?.[0];

      if (!result) {
        setWeather(null);
        setError("City not found. Please try another city.");
        return;
      }

      const weatherResponse = await axios.get(WEATHER_API_URL, {
        params: {
          latitude: result.latitude,
          longitude: result.longitude,
          current: CURRENT_FIELDS,
        },
      });

      setCity({
        name: result.name,
        country: result.country || "",
      });

      setWeather(weatherResponse.data.current);
    } catch {
      setWeather(null);
      setError("Could not load weather. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="app">
      <header className="app-header">
        <h1>
          <span className="header-icon">🌤️</span>
          Weather App
        </h1>

        <p>Check the current weather in your city.</p>
      </header>

      <SearchBar onSearch={handleSearch} />

      <section className="weather-area" aria-live="polite">
        {loading && <p className="status-message">Loading weather...</p>}

        {error && <p className="status-message error-message">{error}</p>}

        {weather && !loading && <WeatherCard city={city} weather={weather} />}
      </section>
    </main>
  );
};

export default App;
