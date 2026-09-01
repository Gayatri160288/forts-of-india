import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const VisitedContext = createContext();

export function VisitedProvider({ children }) {

  const [visited, setVisited] = useState(() => {

    const savedVisited =
      localStorage.getItem("visitedForts");

    return savedVisited
      ? JSON.parse(savedVisited)
      : [];
  });

  useEffect(() => {

    localStorage.setItem(
      "visitedForts",
      JSON.stringify(visited)
    );

  }, [visited]);

  const toggleVisited = (fortId) => {

    setVisited((currentVisited) => {

      if (currentVisited.includes(fortId)) {

        return currentVisited.filter(
          (id) => id !== fortId
        );

      }

      return [
        ...currentVisited,
        fortId,
      ];
    });
  };

  const isVisited = (fortId) => {
    return visited.includes(fortId);
  };

  return (
    <VisitedContext.Provider
      value={{
        visited,
        toggleVisited,
        isVisited,
      }}
    >
      {children}
    </VisitedContext.Provider>
  );
}

export function useVisited() {
  return useContext(VisitedContext);
}