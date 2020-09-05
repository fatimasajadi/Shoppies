import React, { useState, useEffect, useMemo } from "react";
import debounce from "lodash/debounce";
import OMDBApi, { Movie as IMovie } from "../../utils/api";
import SearchBar from "../SearchBar/SearchBar";
import Movie from "../Movie/Movie";

import "./App.css";

const omdb = new OMDBApi();

function App() {
  const [term, setTerm] = useState("");
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = useMemo(() => {
    return debounce(async (term: string) => {
      setLoading(true);
      const result = await omdb.searchMovie(term);
      setMovies(result.Search);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    handleSearch(term);
  }, [term]);

  return (
    <div className="app">
      <SearchBar value={term} onChange={setTerm} />
      {loading && "Loading..."}
      <div className="movies">
        {movies.map((movie) => {
          return <Movie key={movie.imdbID} movie={movie} />;
        })}
      </div>
    </div>
  );
}

export default App;
