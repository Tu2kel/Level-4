import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { MovieContext } from "./MovieProvider";

function Home() {
  const { getAvengers, movies } = useContext(MovieContext);

  useEffect(() => {
    getAvengers();
  }, []);

  const filteredMovies = movies.filter(
    (movie) => movie.imdbID !== "tt0118661" && movie.imdbID !== "tt0054518"
  );

  return (
    <div className="homeContainer">
      <h1 className="heading"> Home of the Avengers </h1>
      <iframe
        className="youtube"
        width="100%"
        height="800"
        // height="800"
        src="https://www.youtube.com/embed/6ZfuNTqbHE8?autoplay=1&amp;mute=0&amp;volume=10%"
        title="Marvel Studios&#39; Avengers: Infinity War Official Trailer"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <ul className="generatedMovList">
        {filteredMovies.map((movie) => (
          <li key={movie.imdbID}>
            <Link to={`/movies/${movie.imdbID}`}>{movie.Title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
