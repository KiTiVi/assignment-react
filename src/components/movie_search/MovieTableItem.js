import React, { Component } from 'react';

class MovieTableItem extends Component {
  render() {
    return (
      <tr>
        <td><img src={this.props.movie.Poster} alt={this.props.movie.Title} /></td>
        <td>{this.props.movie.Title}</td>
        <td>{this.props.movie.Year}</td>
        <td><a onClick={() => this.props.onAddFavoriteMovie(this.props.movie)} className="secondary-content"><i className="small material-icons">favorite_border</i></a></td>
        <td><a onClick={() => this.props.onSaveMovie(this.props.movie)} className="secondary-content"><i className="small material-icons">add_circle_outline</i></a></td>
      </tr>
    );
  }
};

export default MovieTableItem;
