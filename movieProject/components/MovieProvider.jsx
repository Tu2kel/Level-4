import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export default function MovieProvider(props) {
  const [movies, setMovies] = useState([]);

  function getAvengers() {
    axios
      .get(`http://www.omdbapi.com/?apikey=beb2d24b&s=avengers`)
      .then((response) => {
        setMovies(response.data.Search);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("is get request hit");
  }

  return (
    <MovieContext.Provider value={{ getAvengers, movies }}>
      {props.children}
    </MovieContext.Provider>
  );
}
