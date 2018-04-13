import React, { Component } from 'react';

class SearchBar extends Component {
  state = {searchTerm: ''}

  handleSubmit = (event) => {
    event.preventDefault()
    if (this.state.searchTerm !== '') {
      this.props.onSearchSubmit(this.state.searchTerm)
    }
  }

  updateSearchTerm = (event) => {
    this.setState({searchTerm: event.target.value});
  }

  render() {
    return (
      <form className="col s12" onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="input-field col s12">
            <i className="material-icons prefix">local_movies</i>
            <input type="text"
              value={this.state.searchTerm}
              onChange={this.updateSearchTerm}
              className="validate" />
            <label htmlFor="title">Movie title</label>
          </div>
          <div className="input-field col s12">
            <input type="submit" value="SEARCH" className="btn waves-effect waves-light green lighten-1" />
          </div>
        </div>
      </form>
    );
  }
}

export default SearchBar;
