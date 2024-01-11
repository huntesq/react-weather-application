import React, { useState } from "react";
import "./Weather.css";
import "./App.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      city: response.data.city,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      iconUrl:
        "https://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png",
      date: new Date(response.data.time * 1000),
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
        <WeatherInfo />
      </div>
    );
  }
}
