import React, { useState } from "react";
import "./Weather.css";
import "./App.css";
import axios from "axios";

export default function Weather(props) {
  
  const [weatherData, setWeatherData] = useState({ready:false});

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
        ready:true
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl:
        "https://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png",
        date: "Tuesday 22:55"
    });

    
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row ">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-5">
              <input
                type="submit"
                value="search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>{weatherData.date}</li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
                className="float-left"
              />
              <div className="float-left">
                <span className="temperature">
                  {Math.round(weatherData.temperature)}
                </span>
                <span className="unit">°C</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity} %</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "8ba84ff1f0d264o7e59dft09ea490231";
    const apiUrl =
      "https://api.shecodes.io/weather/v1/current?query={props.defaultCity}&key={key}";
    
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
