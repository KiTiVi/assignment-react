import React from 'react';

const PhotoItem = ({item}) => {
  return (
    <div className="col s12 m3">
      <div className="card">
        <div className="card-content">
          <span className="card-title">{item.title}</span>
          <p>Uploaded: {item.timestamp}</p>
        </div>
        <div className="card-image">
          <img className="materialboxed"
            src={`http://ddwap.mah.se/ah0327/${item.path}`}
            alt={item.title} />
        </div>
      </div>
    </div>
  )
}

export default PhotoItem;
