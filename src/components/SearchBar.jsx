import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (city.trim()) {
      onSearch(city.trim());
    }
  }

  return (
    <form onSubmit={handleSubmit} className="search-area">
      <span className="search-icon" aria-hidden="true">
        ⌕
      </span>

      <input
        type="text"
        aria-label="City name"
        placeholder="Enter a city (e.g. London, Paris, Addis Ababa)"
        value={city}
        onChange={(event) => setCity(event.target.value)}
      />

      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
