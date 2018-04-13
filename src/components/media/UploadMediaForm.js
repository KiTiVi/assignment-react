import React, { Component } from 'react';
import axios from 'axios';

class UploadMediaForm extends Component {
  state = {
    fileType: '',
    progressBar: null,
    progress: 0
  };

  handleChange = (event) => {
    this.setState({fileType: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    var formData = new FormData(event.target)
    formData.append('type', formData.get('type'))
    formData.append('title', formData.get('title'))
    formData.append('media', formData.get('media'))
    const config = {
    onUploadProgress: (progressEvent) => {
      var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
      this.setState({progress: percentCompleted})
      this.renderProgressBar()
    }
  }
    axios.post('http://ddwap.mah.se/ah0327/server.php', formData, config)
    .then(() => {
      this.setState({progressBar: null, progress: 0})
    })
    .catch(error => console.error(error))
    event.target.reset()
  }

  renderInput() {
    if (this.state.fileType === 'photo') {
      return (
        <div>
          <div className="input-field">
            <input id="icon_prefix" type="text" name="title" className="validate" required />
            <label htmlFor="icon_prefix">Title</label>
          </div>

          <div className="file-field input-field">
            <div className="btn green lighten-1">
              <span>File</span>
              <input type="file" name="media" accept="image/*" required/>
            </div>
            <div className="file-path-wrapper">
              <input className="file-path validate" type="text" />
            </div>
          </div>

          <button className="btn waves-effect waves-light green lighten-1" type="submit" name="action">Submit
            <i className="material-icons right">send</i>
          </button>
        </div>
      )
    } else if (this.state.fileType === 'video') {
      return (
        <div>
          <div className="input-field">
            <input id="icon_prefix" type="text" name="title" className="validate" required />
            <label htmlFor="icon_prefix">Title</label>
          </div>

          <div className="file-field input-field">
            <div className="btn green lighten-1">
              <span>File</span>
              <input type="file" name="media" accept="video/*" required/>
            </div>
            <div className="file-path-wrapper">
              <input className="file-path validate" type="text" />
            </div>
          </div>

          <button className="btn waves-effect waves-light green lighten-1" type="submit" name="action">Submit
            <i className="material-icons right">send</i>
          </button>
        </div>
      )
    } else if (this.state.fileType === 'audio') {
      return (
        <div>
          <div className="input-field">
            <input id="icon_prefix" type="text" name="title" className="validate" required />
            <label htmlFor="icon_prefix">Title</label>
          </div>

          <div className="file-field input-field">
            <div className="btn green lighten-1">
              <span>File</span>
              <input type="file" name="media" accept="audio/*" required/>
            </div>
            <div className="file-path-wrapper">
              <input className="file-path validate" type="text" />
            </div>
          </div>

          <button className="btn waves-effect waves-light green lighten-1" type="submit" name="action">Submit
            <i className="material-icons right">send</i>
          </button>
        </div>
      )
    }
  }

  renderProgressBar() {
    this.setState({progressBar:
      <div className="progress col s12 m6">
        <div className="determinate" style={{width: `${this.state.progress}%`}}></div>
      </div>
    })
  }

  resetProgressBar() {
    this.setState({progressBar: null})
  }

  render() {
    return (
      <div>
        <div className="col s12 m6">
        <form encType="multipart/form-data" onSubmit={this.handleSubmit}>
          <select value={this.state.fileType} onChange={this.handleChange} className="browser-default" name="type">
            <option value="" defaultValue>Select filetype</option>
            <option value="photo">Photo</option>
            <option value="video">Video</option>
            <option value="audio">Audio</option>
          </select>
          {this.renderInput()}
        </form>
        </div>
        {this.state.progressBar}
      </div>
    );
  }
}

export default UploadMediaForm;
