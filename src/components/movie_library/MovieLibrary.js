import React from 'react';
import MovieLibraryItem from './MovieLibraryItem';

const MovieLibrary = (props) => {
  const movieItemsHej = props.savedMovies.map((movie) => {
    return (
      <MovieLibraryItem
        onDeleteSavedMovie={props.onDeleteSavedMovie}
        key={movie.imdbID}
        movie={movie} />
      )
  })

  return (
    <div className="container">
      <h3>Movie Library</h3>
      <table className="bordered highlight">
        <thead>
          <tr>
            <th>Poster</th>
            <th>Title</th>
            <th>Year</th>
            <th>Runtime</th>
            <th>IMDB</th>
            <th className="right-align">Delete</th>
          </tr>
        </thead>

        <tbody>
          {movieItemsHej}
        </tbody>
      </table>
    </div>
  );
}



export default MovieLibrary;
