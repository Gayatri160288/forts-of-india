import { useState } from "react";
import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { favorites } = useFavorites();

  return (
    <header className="navbar">

      <Link
        to="/"
        className="logo"
      >
        🏰 Forts of India
      </Link>

      <button
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      <nav className={menuOpen ? "mobile-open" : ""}>

        <a
          href="/#explore"
          onClick={() => setMenuOpen(false)}
        >
          Explore
        </a>

        <a
          href="/#popular"
          onClick={() => setMenuOpen(false)}
        >
          Popular
        </a>

        <Link
          to="/favorites"
          onClick={() => setMenuOpen(false)}
        >
          ❤️ Favorites

          {favorites.length > 0 && (
            <span className="favorite-count">
              {favorites.length}
            </span>
          )}

        </Link>

      </nav>

    </header>
  );
}

export default Navbar;