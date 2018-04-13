import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {
  return(
    <nav>
      <div className="nav-wrapper green lighten-1">
        <Link to="/" className="brand-logo">Assignment 2</Link>
        <a href="" data-activates="mobile-demo" id="button-collapse" className="button-collapse"><i className="material-icons">menu</i></a>
        <ul className="right hide-on-med-and-down">
          <li className="green lighten-2"><a href={`http://www.imdb.com/title/${props.favoriteMovie.imdbID}`} target="_blank">Favorite movie: {props.favoriteMovie.Title}</a></li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/search">Seach movies</Link></li>
          <li><Link to="/movies">Movie library</Link></li>
          <li><Link to="/media">Media</Link></li>
        </ul>
        <ul className="side-nav" id="mobile-demo">
          <li className="green lighten-2"><a href={`http://www.imdb.com/title/${props.favoriteMovie.imdbID}`} target="_blank">Favorite movie: {props.favoriteMovie.Title}</a></li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/search">Seach movies</Link></li>
          <li><Link to="/movies">Movie library</Link></li>
          <li><Link to="/media">Media</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
