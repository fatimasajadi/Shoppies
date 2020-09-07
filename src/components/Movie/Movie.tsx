import React from "react";
import { Movie as IMovie } from "../../utils/api";
import AddButton from "../AddButton/AddButton";
import placholder from "../../assets/movie_placeholder.png";

import "./Movie.css";

interface Props {
  movie: IMovie;
  added: boolean;
  onAdd(movie: IMovie): void;
  onRemove(id: string): void;
  maxedOut: boolean;
}

function Movie({ movie, added, onAdd, onRemove }: Props) {
  const image =
    !movie.Poster || movie.Poster === "N/A" ? placholder : movie.Poster;

  return (
    <div className="movie">
      <div className="poster">
        <img src={image} alt={movie.Title} />
      </div>
      <div className="title">{movie.Title}</div>
      <div className="year">{movie.Year}</div>
      <div className="type">{movie.Type}</div>
      <AddButton
        onClick={() => {
          if (added) {
            onRemove(movie.imdbID);
          } else {
            onAdd(movie);
          }
        }}
        added={added}
      />
    </div>
  );
}

export default Movie;
