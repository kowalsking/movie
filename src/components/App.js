import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Movie from "./Movie";
import Search from "./Search";

const MOVIE_API_URL = "https://www.omdbapi.com/?s='hero'&apikey=816c8dad";

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

    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
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
  const showContent = movies.map((movie, index) => (
    <Movie key={`${index}-${movie.Title}`} movie={movie} />
  ));
  const showLoading = <span>loading...</span>;

  return (
    <div className="App">
      <Header text="Kowalsking Cinema" />
      <Search search={search} />
      <p className="App-intro">Sharing a few of our favourite movies</p>
      <div className="movies">
        {showMovies ? showLoading : errorMessage ? showError : showContent}
      </div>
    </div>
  );
};

export default App;
