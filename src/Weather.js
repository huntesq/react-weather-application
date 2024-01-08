import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
            />
          </div>
          <div className="col-5">
            <input type="submit" value="search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>Johannesburg</h1>
      <ul>
        <li>Tuesday 22:55</li>
        <li>Rain</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/rain_s_cloudy.png"
            alt="Rain"
          />
          8°C
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 12%</li>
            <li>Humidity: 48%</li>
            <li>Wind: 12km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
