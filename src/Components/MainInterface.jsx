import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './../styles/main-interface.css';

function MainInterface(props) {
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(false);

  let oneMovieArr = [];

  oneMovieArr.push(props.movie.genre_ids);

  let genreArr =
    genres.length > 0
      ? genres.filter((e) => oneMovieArr.flat().includes(e.id))
      : [];

  let url =
    'https://api.themoviedb.org/3/genre/movie/list?api_key=cd1bd6de3fb68a4df732f8ce7ef76b69&language=en-US';
  const fetchGenres = () => {
    axios
      .get(url)
      .then((response) => {
        setGenres(response.data.genres);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    setLoading(true);
    fetchGenres();
  }, []);

  if (loading) {
    return <p>Data is loading ...</p>;
  }
  return (
    <div className="movie-container">
      <div className="title-container">
        <h1>Cine-Fleet</h1>
      </div>
      {props.movie.length === 0 ? <div>
        <p className="no-movie">Select a popular movie or find one on the search bar !</p>
      </div> : 
      <div className="movie-details">
        <div className="movie-card">
        <h2>{props.movie.title}</h2>
        <img
          className="movie-img"
          src={'https://image.tmdb.org/t/p/original' + props.movie.poster_path}
          alt={props.movie.title}
        />
        <p>Release date : {props.movie.release_date}</p>
        <p>Genre(s) :</p>
        <div className="genres">
        {genreArr.map((genre, index) => (
          <p key={index} className="one-genre"> {genre.name} </p>
        ))}
        </div>
        <p>Tmdb rating : {props.movie.vote_average}/10</p>
        </div>
        <div className="separating-div"></div>
        <div className="overview">
          <p>{props.movie.overview}</p>
        </div>
      </div>
      }
    </div>
  );
}

export default MainInterface;
