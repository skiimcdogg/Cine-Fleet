import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './../styles/main-interface.css';

function MainInterface(props) {
    const [genres, setGenres] = useState([]);
    const [loading, setLoading] = useState(false);

    let oneMovieArr = [];
    
    oneMovieArr.push(props.movie.genre_ids);

    let genreArr = genres.length > 0 ? genres.filter((e) => oneMovieArr.includes(e.id)) : [];
    
    let url = 'https://api.themoviedb.org/3/genre/movie/list?api_key=cd1bd6de3fb68a4df732f8ce7ef76b69&language=en-US'
    const fetchGenres = () => {
        axios.get(url)
        .then((response) => {
            setGenres(response.data.genres)
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            setLoading(false)
        })
    }
    
    useEffect(() => {
        setLoading(true)
        fetchGenres()
    }, [])
    
  
    if(loading) {
        return <p>Data is loading ...</p>
    }

    
  console.log(props.movie.title, "props" );
  return (
     
    <div className="movie-container">
      
      <div className="movie-card">
        <h2>{props.movie.title}</h2>
        <img
          className="movie-img"
          src={
            'https://image.tmdb.org/t/p/original' + props.movie.poster_path
          }
          alt={props.movie.title}
        />
        <p>Release date : {props.movie.release_date}</p>
        <p>Genres :</p>
        {
                genreArr.map((genre, index) => (
                <p key={index}> {genre.name} </p>
            ))
        }
      </div> 
      
    </div>
  );
}

export default MainInterface;
