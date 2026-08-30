import { Link } from "react-router-dom";

function FortCard({ fort }) {
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

          <p className="fort-type">
            {fort.type}
          </p>

          <h3>
            {fort.name}
          </h3>

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