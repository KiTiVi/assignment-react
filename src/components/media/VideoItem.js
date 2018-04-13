import React from 'react';

const VideoItem = ({item}) => {
  return (
    <div className="col s12 m3">
      <div className="card">
        <div className="card-content">
          <span className="card-title">{item.title}</span>
          <p>Uploaded: {item.timestamp}</p>
        </div>
        <div className="card-image">
          <video width="100%" controls>
            <source src={`http://ddwap.mah.se/ah0327/${item.path}`} type="video/mp4" />
          Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  )
}

export default VideoItem;
