import { useState } from "react";
import forts from "../data/forts";

function Hero({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <section className="hero">

      <div className="hero-content">

        <p className="hero-small">
          DISCOVER INDIA'S HERITAGE
        </p>

        <h1>
          Explore the
          <br />
          Forts of India
        </h1>

        <p className="hero-description">
          Discover the history, stories, architecture and beauty
          of India's incredible forts.
        </p>

        <div className="search-box">

          <span>🔍</span>

          <input
            type="text"
            placeholder="Search fort, state or location..."
            value={searchTerm}
            onChange={(event) =>
              setSearchTerm(event.target.value)
            }
            onKeyDown={handleKeyDown}
          />

          <button onClick={handleSearch}>
            Search
          </button>

        </div>

      </div>

    </section>
  );
}

export default Hero;