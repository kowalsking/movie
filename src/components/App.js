import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Movie from "./Movie";
import Search from "./Search";

const MOVIE_API_URL =
  "https://www.omdbapi.com/?s=hero&pages=50&plot=full&apikey=816c8dad";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    fetch(MOVIE_API_URL)
      .then((response) => response.json())
      .then((jsonResponse) => {
        setMovies(jsonResponse.Search);
        setLoading(false);
      });
  }, []);

  const search = (searchValue) => {
    setLoading(true);
    setErrorMessage(null);

    fetch(`https://www.omdbapi.com/?s=${searchValue}&plot=full&apikey=816c8dad`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        console.log(jsonResponse);
        const correctResponse = jsonResponse.Response === "True";
        correctResponse
          ? setMovies(jsonResponse.Search)
          : setErrorMessage(jsonResponse.Error);
        setLoading(false);
      });
  };

  const showMovies = loading && !errorMessage;
  const showError = <div className="errorMessage">{errorMessage}</div>;
  const showContent = movies.map((movie) => (
    <Movie key={movie.imdbID} movie={movie} />
  ));
  const showLoading = <span>loading...</span>;

  return (
    <div className="App">
      <Header text="Kowalsking Cinema" />
      <p className="App-intro">Sharing a few of our favourite movies</p>
      <Search search={search} />
      <div className="movies">
        {showMovies ? showLoading : errorMessage ? showError : showContent}
      </div>
    </div>
  );
};

export default App;
