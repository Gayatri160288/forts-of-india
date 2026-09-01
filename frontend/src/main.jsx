import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./index.css";

import { FavoritesProvider } from "./context/FavoritesContext";
import { VisitedProvider } from "./context/VisitedContext";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <BrowserRouter>

      <FavoritesProvider>

        <VisitedProvider>

          <App />

        </VisitedProvider>

      </FavoritesProvider>

    </BrowserRouter>
  </React.StrictMode>
);