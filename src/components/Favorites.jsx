import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

import forts from "../data/forts";
import FortCard from "./FortCard";

function Favorites() {
  const { favorites } = useFavorites();

  const favoriteForts = forts.filter(
    (fort) => favorites.includes(fort.id)
  );

  return (
    <>
      <header className="navbar">

        <div className="logo">
          🏰 Forts of India
        </div>

        <Link
          to="/"
          className="back-link"
        >
          ← Home
        </Link>

      </header>

      <section className="popular favorites-page">

        <h1>
          ❤️ My Favorite Forts
        </h1>

        {favoriteForts.length === 0 ? (

          <div className="empty-favorites">

            <h2>
              No favorites yet
            </h2>

            <p>
              Explore the forts and save your favorites here.
            </p>

            <Link
              to="/"
              className="home-button"
            >
              Explore Forts
            </Link>

          </div>

        ) : (

          <div className="fort-grid">

            {favoriteForts.map((fort) => (
              <FortCard
                key={fort.id}
                fort={fort}
              />
            ))}

          </div>

        )}

      </section>
    </>
  );
}

export default Favorites;