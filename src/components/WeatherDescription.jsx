const WeatherDescription = ({ code }) => {
  function getWeatherDescription(code) {
    if (code === 0) return "Clear sky ☀️";
    if (code === 1) return "Mainly clear 🌤️";
    if (code === 2) return "Partly cloudy ⛅";
    if (code === 3) return "Overcast ☁️";
    if ([45, 48].includes(code)) return "Fog 🌫️";
    if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(code)) {
      return "Rain 🌧️";
    }
    if ([71, 73, 75, 77, 85, 86].includes(code)) {
      return "Snow ❄️";
    }
    if ([95, 96, 99].includes(code)) {
      return "Thunderstorm ⛈️";
    }
    return "Unknown weather";
  }
  return <p>{getWeatherDescription(code)}</p>;
};

export default WeatherDescription;
