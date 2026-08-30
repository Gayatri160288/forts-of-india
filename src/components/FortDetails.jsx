import { useParams, Link } from "react-router-dom";
import forts from "../data/forts";

function FortDetails() {
  const { id } = useParams();

  const fort = forts.find(
    (fort) => fort.id === Number(id)
  );

  if (!fort) {
    return (
      <div className="not-found">
        <h2>Fort not found</h2>

        <Link to="/">
          ← Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="fort-details">

      <div
        className="details-hero"
        style={{
          backgroundImage: `url(${fort.image})`,
        }}
      >
        <div className="details-overlay">
          <p>{fort.type}</p>

          <h1>{fort.name}</h1>

          <span>
            📍 {fort.location}
          </span>
        </div>
      </div>

      <div className="details-content">

        <Link
          to="/"
          className="back-link"
        >
          ← Back to Forts
        </Link>

        <div className="details-grid">

          <div>
            <h2>About {fort.name}</h2>

            <p>
              {fort.description}
            </p>
          </div>

          <div className="info-box">

            <h3>Fort Information</h3>

            <p>
              <strong>State:</strong>{" "}
              {fort.state}
            </p>

            <p>
              <strong>Location:</strong>{" "}
              {fort.location}
            </p>

            <p>
              <strong>Type:</strong>{" "}
              {fort.type}
            </p>

          </div>

        </div>

        <div className="coming-soon">

          <h2>🤖 AI Fort Guide</h2>

          <p>
            Ask our AI guide about this fort.
          </p>

          <button>
            Coming Soon
          </button>

        </div>

      </div>

    </div>
  );
}

export default FortDetails;