import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
} from "react";
import debounce from "lodash/debounce";
import OMDBApi, { Movie as IMovie } from "../../utils/api";
import SearchBar from "../SearchBar/SearchBar";
import Movie from "../Movie/Movie";

import "./App.css";

const omdb = new OMDBApi();

function App() {
  const [term, setTerm] = useState("");
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [nominated, setNominated] = useState<IMovie[]>([]);
  const [loading, setLoading] = useState(false);
  const [isInitial, setIsInitial] = useState(true);
  const [showBanner, setShowBanner] = useState(false);
  const mounted = useRef(false);

  const handleSearch = useMemo(() => {
    return debounce(async (term: string) => {
      setLoading(true);
      const result = await omdb.searchMovie(term);
      setMovies(result.Search);
      setLoading(false);
    }, 500);
  }, []);

  const maxedOut = nominated.length === 5;
  const handleAdd = useCallback(
    (newMovie: IMovie) => {
      if (!maxedOut) {
        setNominated((prev) => [...prev, newMovie]);
      } else {
        setShowBanner(true);
      }
    },
    [maxedOut]
  );
  const handleRemove = useCallback((imdbID: string) => {
    setNominated((prev) => prev.filter((movie) => movie.imdbID !== imdbID));
  }, []);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    if (isInitial) {
      setIsInitial(false);
    }
    handleSearch(term);
  }, [handleSearch, term, mounted, isInitial]);

  useEffect(() => {
    setShowBanner(false);
  }, [nominated]);

  const filteredMovies = movies.filter(
    (movie) => !nominated.some(({ imdbID }) => imdbID === movie.imdbID)
  );

  return (
    <div className="app">
      <SearchBar isInitial={isInitial} value={term} onChange={setTerm} />
      {nominated.length > 0 && (
        <div className="nominated-movies-wrapper">
          <h3>
            Your picked movies <small>({nominated.length} out of 5)</small>{" "}
            {showBanner && (
              <span className="banner">
                You've already picked your 5 movies
              </span>
            )}
          </h3>
          <div className="movies">
            {nominated.map((movie) => {
              return (
                <Movie
                  key={movie.imdbID}
                  maxedOut={maxedOut}
                  movie={movie}
                  onAdd={handleAdd}
                  onRemove={handleRemove}
                  added
                />
              );
            })}
          </div>
        </div>
      )}
      {loading && "Loading..."}
      <div className="movies">
        {filteredMovies.map((movie) => {
          return (
            <Movie
              key={movie.imdbID}
              maxedOut={maxedOut}
              movie={movie}
              onAdd={handleAdd}
              onRemove={handleRemove}
              added={false}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
