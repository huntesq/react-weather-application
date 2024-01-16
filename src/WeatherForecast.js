import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
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
