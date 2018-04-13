import React, { Component } from 'react';

import PhotoItem from './PhotoItem';
import VideoItem from './VideoItem';
import AudioItem from './AudioItem';

class MediaItems extends Component {
  renderItems() {
    if (this.props.mediaItems) {
      const mediaItems = this.props.mediaItems.map((item) => {
        if (item.type === 'photo') {
          return (
            <PhotoItem key={item.timestamp} item={item} />
          )
        } else if (item.type === 'video') {
          return (
            <VideoItem item={item} />
          )
        } else if (item.type === 'audio') {
          return (
            <AudioItem item={item} />
          )
        }
      })
      return mediaItems
    } else {
      return (
        <div className="col s12 m12 center">
          <h5>No media</h5>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="row">
        {this.renderItems()}
      </div>
    );
  }
}

export default MediaItems;
