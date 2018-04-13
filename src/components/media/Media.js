import React, { Component } from 'react';
import axios from 'axios';

import UploadMediaForm from './UploadMediaForm';
import MediaItems from './MediaItems';

class Media extends Component {
  state = {
    sort: '',
    mediaItems: null
  }

  componentDidMount() {
    this.requestMedia('')
  }

  requestMedia = async (sort) => {
    let { data } = await axios.get(`https://ddwap.mah.se/ah0327/server.php?action=getMedia${sort}`)
    this.setState({mediaItems: data.files})
  }

  handleChange = (event) => {
    let sort = event.target.value;
    this.requestMedia(sort)
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <h3>Upload Media</h3>
            <UploadMediaForm />
          </div>
          <h5>Sort:</h5>
          <form>
            <select value={this.state.value} onChange={this.handleChange} className="browser-default">
              <option value="">All</option>
              <option value="&type=photo">Photo</option>
              <option value="&type=video">Video</option>
              <option value="&type=audio">Audio</option>
            </select>
          </form>
        </div>

        <MediaItems mediaItems={this.state.mediaItems} />

      </div>
    );
  }
}

export default Media;
