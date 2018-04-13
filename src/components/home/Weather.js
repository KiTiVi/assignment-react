import React, { Component } from 'react';
import { OpenWeatherMap } from '../../config/ApiKeys';

class Weather extends Component {
  state = {
    temperature: null,
    weatherInfo: null,
    weatherImg: null
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.onSuccess, this.onFail, {});
  }

  onSuccess = (position) => {
    const ROOT_URL = 'https://api.openweathermap.org/data/2.5/weather?'
    const LAT = `lat=${position.coords.latitude}`
    const LON = `lon=${position.coords.longitude}`
    const API_KEY = `&APPID=${ OpenWeatherMap }`
    const UNITS = '&units=metric'
    const URL = `${ROOT_URL}${LAT}&${LON}&${API_KEY}&${UNITS}`
    fetch(URL)
    .then(data => data.json())
    .then(result => {
      this.setState({
        temperature: result.main.temp,
        weatherInfo: result.weather[0].description,
        weatherImg: result.weather[0].icon
      })
    })
  }
  onFail(){
    alert("Vi kunde tyvärr inte hämta din plats just nu.");
  }

  renderWeather() {
    if (this.state.temperature) {
      return (
        <div>
          <img src={"https://openweathermap.org/img/w/" + this.state.weatherImg + ".png"} alt="Icon of current weather"/>
          <p>Temperature: {this.state.temperature}°C</p>
          <p>Description: {this.state.weatherInfo}</p>
        </div>
      )
    } else {
      return (
        <div className="preloader-wrapper big active">
          <div className="spinner-layer spinner-green-only">
            <div className="circle-clipper left">
              <div className="circle"></div>
            </div><div className="gap-patch">
              <div className="circle"></div>
            </div><div className="circle-clipper right">
              <div className="circle"></div>
            </div>
          </div>
        </div>
      )
    }
  }

  render() {
    return (
          <div className="card">
            <div className="card-content center">
              <span className="card-title">Weather</span>
              {this.renderWeather()}
            </div>
            <div className="card-action">
              <a href="https://openweathermap.org/api">Link to used API</a>
            </div>
          </div>

    );
  }
}

export default Weather;
