import { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "../src/assets/search.svg";
import MovieCard from "./components/MovieCard";
function App() {
  const API_URL = "http://www.omdbapi.com/?apikey=ac046523";
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const SearchMovies = async (movieTitle) => {
    const response = await fetch(`${API_URL}&s=${movieTitle}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  const SearchClick = () => {
    SearchMovies(searchValue);
    // setSearchValue("");
  };

  useEffect(() => {
    SearchMovies("Spiderman");
  }, []);
  return (
    <div className="MovieLand-outer">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          value={searchValue}
          placeholder="Search for movies"
          onChange={(event) => setSearchValue(event.target.value)}
        />
        <img src={SearchIcon} alt="search" onClick={SearchClick} />
      </div>

      <div className="container">
        {movies?.length > 0 ? (
          movies.map((movie) => <MovieCard key={movie.imdbID} disc={movie} />)
        ) : (
          <div className="empty">
            <h2>No Movies Found</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
