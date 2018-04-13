import React from 'react';

const MovieLibraryItem = (props) => {
  return (
    <tr>
      <td><img src={props.movie.Poster} alt={props.movie.Title} /></td>
      <td>{props.movie.Title}</td>
      <td>{props.movie.Year}</td>
      <td>{props.movie.Runtime}</td>
      <td><a href={`http://www.imdb.com/title/${props.movie.imdbID}`} target="_blank">IMDB</a></td>
      <td><a onClick={() => props.onDeleteSavedMovie(props.movie.imdbID)} className="secondary-content"><i className="material-icons">delete_forever</i></a></td>
    </tr>
  );
};

export default MovieLibraryItem;
