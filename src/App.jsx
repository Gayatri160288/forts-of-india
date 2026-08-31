import { useMemo, useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StateFilter from "./components/StateFilter";
import FortCard from "./components/FortCard";
import Footer from "./components/Footer";
import FortDetails from "./components/FortDetails";
import Favorites from "./components/Favorites";

import forts from "./data/forts";

function Home() {
  const [selectedState, setSelectedState] = useState("All");

  const states = useMemo(() => {
    return [
      ...new Set(
        forts.map((fort) => fort.state)
      ),
    ];
  }, []);

  const filteredForts =
    selectedState === "All"
      ? forts
      : forts.filter(
          (fort) =>
            fort.state === selectedState
        );

  return (
    <>

      <Navbar />

      <Hero />

      <StateFilter
        states={states}
        selectedState={selectedState}
        onStateChange={setSelectedState}
      />

      <section
        className="popular"
        id="popular"
      >

        <h2>
          Popular Forts
        </h2>

        <div className="fort-grid">

          {filteredForts.map((fort) => (
            <FortCard
              key={fort.id}
              fort={fort}
            />
          ))}

        </div>

      </section>

      <Footer />

    </>
  );
}

function App() {
  return (
    <div className="app">

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/forts/:id"
          element={<FortDetails />}
        />
        <Route
          path="/favorites"
          element={<Favorites />}
        />

      </Routes>

    </div>
  );
}

export default App;