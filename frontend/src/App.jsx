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
import SearchResults from "./components/SearchResults";
import ExplorerProgress from "./components/ExplorerProgress";

import forts from "./data/forts";

function Home() {

  const [selectedState, setSelectedState] = useState("All");

  const [searchTerm, setSearchTerm] = useState("");

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

  const searchResults = forts.filter((fort) => {

    const search = searchTerm
      .trim()
      .toLowerCase();

    if (!search) {
      return false;
    }

    return (
      fort.name.toLowerCase().includes(search) ||
      fort.state.toLowerCase().includes(search) ||
      fort.location.toLowerCase().includes(search) ||
      fort.type.toLowerCase().includes(search)
    );
  });

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const clearSearch = () => {
    setSearchTerm("");
  };

  return (
    <>
      <Navbar />

      <Hero
        onSearch={handleSearch}
      />

      <ExplorerProgress
        totalForts={forts.length}
      />

      <SearchResults
        results={searchResults}
        searchTerm={searchTerm}
        onClear={clearSearch}
      />

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
          {selectedState === "All"
            ? "Popular Forts"
            : `${selectedState} Forts`}
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