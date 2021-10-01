import React, { useState } from 'react';
import NavBar from './Components/Navbar'
import MainInterface from './Components/MainInterface';
import './styles/app.css'

function App() {
  const [movie, setMovie] = useState([]);


  const handleOneMovie = (oneMovie) => {  // Les fonctions et états sont ici pour pouvoir distribuer aux deux composants
    setMovie(oneMovie); 
   }; 
  
  return (
    <div className="app">
    <NavBar handleOneMovieFn={handleOneMovie} handlePopularMovieFn={handleOneMovie}/>
    <MainInterface movie={movie} />
    </div>
  );
}

export default App;
