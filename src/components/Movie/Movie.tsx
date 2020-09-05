import React from "react";
import { Movie as IMovie } from "../../utils/api";

import "./Movie.css";

interface Props {
  movie: IMovie;
}

function Movie({ movie }: Props) {
  return (
    <div className="movie">
      <div className="poster">
        <img src={movie.Poster} alt={movie.Title} />
      </div>
      <div className="title">{movie.Title}</div>
      <div className="year">{movie.Year}</div>
      <div className="type">{movie.Type}</div>
    </div>
  );
}

export default Movie;
