import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

import './../styles/nav-bar.css';

function NavBar(props) {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);
  const [movieSearch, setMovieSearch] = useState([]);

  const handleSearch = (valueFromSearch) => {
    setSearch(valueFromSearch);
  };

  let urlSearch =
    'https://api.themoviedb.org/3/search/movie?api_key=cd1bd6de3fb68a4df732f8ce7ef76b69&query=' +
    search;

  const fetchSearchMovie = () => {
    axios
      .get(urlSearch)
      .then((response) => {
        setMovieSearch(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchMovies = () => {
    let url =
      'https://api.themoviedb.org/3/discover/movie?api_key=cd1bd6de3fb68a4df732f8ce7ef76b69&page=1';
    axios
      .get(url)
      .then((response) => {
        // console.log(response.data.results);
        setMovies(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchSearchMovie();
  }, [urlSearch]);

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="nav-bar">
      <div className="flex-search">
        <SearchBar search={search} handleSearchFn={handleSearch} />

        <div className="flex-btn">
          {movieSearch.map((item, index) => (
            <button
              className="btns"
              key={index}
              onClick={() => props.handleOneMovieFn(item)}
            >
              {item.title}
            </button>
          ))}
        </div>
      </div>
      <div className="titles">
        {movies.map((item, index) => (
          <p className="popular-movie" onClick={() => props.handlePopularMovieFn(item)} key={index}>{item.title}</p>
        ))}
      </div>
    </div>
  );
}

export default NavBar;
