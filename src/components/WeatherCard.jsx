
import WeatherDescription from "./WeatherDescription";

function getWeatherIcon(code) {
  if (code === 0) return "☀️";
  if (code === 1 || code === 2) return "🌤️";
  if (code === 3) return "☁️";
  if ([45, 48].includes(code)) return "🌫️";
  if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(code))
    return "🌧️";
  if ([71, 73, 75, 77, 85, 86].includes(code))
    return "❄️";
  if ([95, 96, 99].includes(code)) return "⛈️";

  return "🌤️";
}

const WeatherCard = ({ city, weather }) => {
  const now = new Date();

  const date = now.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const time = now.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });

  return (
    <div className="weather-card">
      <section className="current-weather">
        <div className="location-block">
          <div className="location-name">
            <span aria-hidden="true">📍</span>
            <h2>{city.name}</h2>
          </div>

          <p className="country-name">{city.country}</p>
        </div>

        <div className="date-time">
          <span>{date}</span>
          <span>{time}</span>
        </div>

        <div className="temperature-block">
          <span className="main-weather-icon" aria-hidden="true">
            {getWeatherIcon(weather.weather_code)}
          </span>

          <div className="temperature">
            {Math.round(weather.temperature_2m)}
            <span>°C</span>
          </div>

          <div className="description">
            <WeatherDescription code={weather.weather_code} />
          </div>
        </div>
      </section>

      <section className="weather-details" aria-label="Weather details">
        <div className="detail-item">
          <span className="detail-icon">♨</span>
          <div>
            <span className="detail-label">Feels like</span>
            <strong>
              {Math.round(weather.apparent_temperature)}°C
            </strong>
          </div>
        </div>

        <div className="detail-item">
          <span className="detail-icon">♢</span>
          <div>
            <span className="detail-label">Humidity</span>
            <strong>{weather.relative_humidity_2m}%</strong>
          </div>
        </div>

        <div className="detail-item">
          <span className="detail-icon">☔</span>
          <div>
            <span className="detail-label">Precipitation</span>
            <strong>{weather.precipitation} mm</strong>
          </div>
        </div>

        <div className="detail-item">
          <span className="detail-icon">≋</span>
          <div>
            <span className="detail-label">Wind speed</span>
            <strong>{weather.wind_speed_10m} km/h</strong>
          </div>
        </div>

        <div className="detail-item">
          <span className="detail-icon">➤</span>
          <div>
            <span className="detail-label">Wind direction</span>
            <strong>{weather.wind_direction_10m}°</strong>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WeatherCard;
