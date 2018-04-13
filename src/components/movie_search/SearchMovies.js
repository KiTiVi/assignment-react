import React, { Component } from 'react';

import MovieTable from './MovieTable';
import SearchBar from './SearchBar';

import { OMDb } from '../../config/ApiKeys';

class SearchMovies extends Component {
  state = { movies: [] };

  movieSearch(term) {
    const ROOT_URL = 'https://www.omdbapi.com/'
    const API_KEY = `?apikey=${OMDb}`
    let searchTerm = '&s=' + term;
    const URL = `${ROOT_URL}${API_KEY}${searchTerm}`

    fetch(URL)
    .then(response => response.json())
    .then(movies => {
      if (movies.Search) {
        this.setState({ movies: movies.Search });
      } else {
        this.setState({ movies: [] });
        alert('Could not find any movies...')
      }
    })
    .catch(error => console.error(error))
  }

  render() {
    return (
      <div className="container">
        <h3>Search Movies</h3>
        <SearchBar onSearchSubmit={term => this.movieSearch(term)} />
        <MovieTable
          onAddFavoriteMovie={this.props.onAddFavoriteMovie}
          onSaveMovie={this.props.onSaveMovie}
          movies={this.state.movies} />
      </div>
    );
  }
}

export default SearchMovies;
