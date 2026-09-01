import { useVisited } from "../context/VisitedContext";

function ExplorerProgress({ totalForts }) {

  const { visited } = useVisited();

  const visitedCount = visited.length;

  const percentage =
    totalForts === 0
      ? 0
      : Math.round(
          (visitedCount / totalForts) * 100
        );

  return (
    <section className="explorer-progress">

      <div className="progress-header">

        <div>
          <p className="progress-label">
            YOUR EXPLORER JOURNEY
          </p>

          <h2>
            🏆 Fort Explorer
          </h2>
        </div>

        <strong>
          {visitedCount}/{totalForts}
        </strong>

      </div>

      <div className="progress-bar">

        <div
          className="progress-fill"
          style={{
            width: `${percentage}%`,
          }}
        />

      </div>

      <p className="progress-text">
        {visitedCount === 0
          ? "Start exploring India's forts!"
          : visitedCount === totalForts
          ? "🎉 You've explored every fort!"
          : `You've explored ${visitedCount} fort${
              visitedCount === 1 ? "" : "s"
            }. Keep going!`}
      </p>

    </section>
  );
}

export default ExplorerProgress;