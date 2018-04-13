import React from 'react';
import Weather from './Weather';

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m7">
          <h3>Welcome</h3>
          <p>This is a school assignment built in ReactJS, Materialize and Axios.</p>
          <p>The website consists of weather information for your location, a movie search, movie library and media library.</p>
        </div>
        <div className="col s12 m5">
          <Weather />
        </div>
      </div>
    </div>
  );
}

export default Home;
