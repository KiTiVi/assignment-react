import React from 'react';

import MovieTableItem from './MovieTableItem';

const MovieTable = (props) => {
  const movieItems = props.movies.map((movie) => {
    return <MovieTableItem
            onAddFavoriteMovie={props.onAddFavoriteMovie}
            onSaveMovie={props.onSaveMovie}
            key={movie.imdbID}
            movie={movie} />
  });

  return (
    <table className="bordered highlight">
      <thead>
        <tr>
          <th>Poster</th>
          <th>Title</th>
          <th>Year</th>
          <th className="right-align">Favorite</th>
          <th className="right-align">Add to library</th>
        </tr>
      </thead>

      <tbody>
        {movieItems}
      </tbody>
    </table>
  );
};

export default MovieTable;
