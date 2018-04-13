import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Header from './components/Header';
import SearchMovies from './components/movie_search/SearchMovies';
import MovieLibrary from './components/movie_library/MovieLibrary';
import Media from './components/media/Media';
import Home from './components/home/Home';

import { OMDb } from './config/ApiKeys';

class App extends Component {
  state = {
    favoriteMovie: {},
    savedMovies: []
  }

  componentDidMount() {
    this.loadFavoriteMovie()
    this.loadSavedMovies()
  }

  loadFavoriteMovie() {
    var favoriteMovie = JSON.parse(localStorage.getItem('favoriteMovie'));
    if (favoriteMovie) {
      this.setState({favoriteMovie})
    } else {
      localStorage.setItem('favoriteMovie', JSON.stringify({}));
    }
  }

  loadSavedMovies() {
    var savedMovies = JSON.parse(localStorage.getItem('savedMovies'));
    if (savedMovies) {
      this.setState({savedMovies})
      return savedMovies
    } else {
      localStorage.setItem('savedMovies', JSON.stringify([]));
      return []
    }
  }

  addFavoriteMovie = (movie) => {
    localStorage.setItem('favoriteMovie', JSON.stringify(movie));
    this.setState({favoriteMovie: movie})
    alert(movie.Title + ' added as favorite movie.')
  }

  saveMovie = async (movie) => {
    const ROOT_URL = 'https://www.omdbapi.com/'
    const API_KEY = `?apikey=${OMDb}`
    const searchType = '&i='
    const URL = `${ROOT_URL}${API_KEY}${searchType}${movie.imdbID}`
    await axios.get(URL)
    .then(movie => {
      let newSavedMovies = this.loadSavedMovies()
      newSavedMovies.push(movie.data)
      localStorage.setItem('savedMovies', JSON.stringify(newSavedMovies));
      this.setState({savedMovies: newSavedMovies})
      alert(movie.data.Title + ' saved in movie library.')
    })
    .catch(error => console.log(error))
  }

  deleteSavedMovie = (movie) => {
    if (movie) {
      var savedMovies = this.loadSavedMovies()
      var removeThisMovie = savedMovies.map((movie) => {return movie.imdbID}).indexOf(movie)
      savedMovies.splice(removeThisMovie, 1)
      localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
      this.setState({savedMovies: savedMovies})
      alert('Movie deleted!')
    }
  }

  render() {
    return (
      <HashRouter>
        <div>
          <Header favoriteMovie={this.state.favoriteMovie} />
          <Switch>
            <Route
              exact path="/search"
              render={() => <SearchMovies
                onAddFavoriteMovie={this.addFavoriteMovie}
                onSaveMovie={this.saveMovie} />}
            />
            <Route
              exact path="/movies"
              render={() => <MovieLibrary
                onDeleteSavedMovie={this.deleteSavedMovie}
                favoriteMovie={this.state.favoriteMovie}
                savedMovies={this.state.savedMovies} />}
            />
            <Route
              exact path="/media"
              render={() => <Media />}
            />
            <Route
              exact path="/"
              render={() => <Home />}
            />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
