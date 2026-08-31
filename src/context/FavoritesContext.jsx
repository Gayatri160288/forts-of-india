import { createContext, useContext, useEffect, useState } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("fortFavorites");

    return savedFavorites
      ? JSON.parse(savedFavorites)
      : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "fortFavorites",
      JSON.stringify(favorites)
    );
  }, [favorites]);

  const toggleFavorite = (fortId) => {
    setFavorites((currentFavorites) => {
      if (currentFavorites.includes(fortId)) {
        return currentFavorites.filter(
          (id) => id !== fortId
        );
      }

      return [...currentFavorites, fortId];
    });
  };

  const isFavorite = (fortId) => {
    return favorites.includes(fortId);
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        toggleFavorite,
        isFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}