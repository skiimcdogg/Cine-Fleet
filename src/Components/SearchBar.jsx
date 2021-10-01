import React from 'react'

import './../styles/search-bar.css'

const SearchBar = ({ search, handleSearchFn }) => {
 return (
    <div className="search-box">
       <input
        onChange={(event) => handleSearchFn(event.target.value)}
        type='text'
        name='search'
        value={search}
        placeholder='Search movies...'
        className="input-search"
      /> 
    </div>
 )
}

export default SearchBar;