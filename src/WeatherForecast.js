import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "e0a5a97de9a0b7a951e9d154a8f9bad8";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <WeatherIcon code="props.data.icon" size={52} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">11°</span>
            <span className="WeatherForecast-temperature-min">9°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
