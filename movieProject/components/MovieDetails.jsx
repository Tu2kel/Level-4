import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../components/Styles/Details.css";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios
      .get(`http://www.omdbapi.com/?apikey=beb2d24b&i=${id}`)
      .then((response) => {
        setMovie(response.data);
        
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movDetails">
      <img className="poster" src={movie.Poster} alt={movie.Title} />

      <div className="description">
        <h1 className="titles">{movie.Title} </h1>
        <h3 className="year">Year: {movie.Year}</h3>
        <p className="plot">
          {movie.Plot} <hr />{" "}
        </p>
      </div>
    </div>
  );
}
