import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

function FortCard({ fort }) {
  const {
    toggleFavorite,
    isFavorite,
  } = useFavorites();

  const favorite = isFavorite(fort.id);

  const handleFavorite = (event) => {
    event.preventDefault();
    event.stopPropagation();

    toggleFavorite(fort.id);
  };

  return (
    <div className="fort-card">

      <Link
        to={`/forts/${fort.id}`}
        className="fort-card-link"
      >

        <div
          className="fort-image"
          style={{
            backgroundImage: `url(${fort.image})`,
          }}
        />

        <div className="fort-content">

          <div className="fort-card-header">

            <div>
              <p className="fort-type">
                {fort.type}
              </p>

              <h3>
                {fort.name}
              </h3>
            </div>

            <button
              className={`favorite-button ${
                favorite ? "favorite-active" : ""
              }`}
              onClick={handleFavorite}
              aria-label="Add to favorites"
            >
              {favorite ? "❤️" : "♡"}
            </button>

          </div>

          <p>
            📍 {fort.location}
          </p>

          <p className="fort-description">
            {fort.description}
          </p>

          <span className="view-details">
            View Details →
          </span>

        </div>

      </Link>

    </div>
  );
}

export default FortCard;