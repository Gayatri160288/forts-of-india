import { useState } from "react";
import { useNavigate } from "react-router-dom";
import forts from "../data/forts";

function Hero() {
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const handleSearch = () => {
    const search = searchTerm.trim().toLowerCase();

    if (!search) {
      return;
    }

    const foundFort = forts.find((fort) => {
      return (
        fort.name.toLowerCase().includes(search) ||
        fort.state.toLowerCase().includes(search) ||
        fort.location.toLowerCase().includes(search)
      );
    });

    if (foundFort) {
      navigate(`/forts/${foundFort.id}`);
    } else {
      alert("No fort found. Try another search.");
    }
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