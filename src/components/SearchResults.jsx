import { Link } from "react-router-dom";

function SearchResults({ results, searchTerm, onClear }) {
  if (!searchTerm.trim()) {
    return null;
  }

  return (
    <section className="search-results">

      <div className="search-results-header">

        <div>
          <p className="search-label">
            SEARCH RESULTS
          </p>

          <h2>
            {results.length}{" "}
            {results.length === 1 ? "fort" : "forts"} found
          </h2>
        </div>

        <button
          className="clear-search"
          onClick={onClear}
        >
          Clear Search
        </button>

      </div>

      {results.length === 0 ? (

        <div className="no-results">
          <h3>
            No forts found
          </h3>

          <p>
            Try searching by fort name, state or location.
          </p>
        </div>

      ) : (

        <div className="search-result-list">

          {results.map((fort) => (

            <Link
              key={fort.id}
              to={`/forts/${fort.id}`}
              className="search-result-item"
              onClick={onClear}
            >

              <div
                className="search-result-image"
                style={{
                  backgroundImage: `url(${fort.image})`,
                }}
              />

              <div className="search-result-content">

                <p className="fort-type">
                  {fort.type}
                </p>

                <h3>
                  {fort.name}
                </h3>

                <p>
                  📍 {fort.location}
                </p>

              </div>

              <span className="search-result-arrow">
                →
              </span>

            </Link>

          ))}

        </div>

      )}

    </section>
  );
}

export default SearchResults;