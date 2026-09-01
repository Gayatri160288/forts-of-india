function StateFilter({ states, selectedState, onStateChange }) {
  return (
    <section className="states" id="explore">

      <h2>
        Explore by State
      </h2>

      <div className="state-list">

        <button
          className={selectedState === "All" ? "active" : ""}
          onClick={() => onStateChange("All")}
        >
          All
        </button>

        {states.map((state) => (
          <button
            key={state}
            className={selectedState === state ? "active" : ""}
            onClick={() => onStateChange(state)}
          >
            {state}
          </button>
        ))}

      </div>

    </section>
  );
}

export default StateFilter;