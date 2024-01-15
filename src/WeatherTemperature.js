import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFaranheit(event) {
    event.preventDefault();
    setUnit("faranheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function faranheit() {
    return (props.celsius * 9) / 5 + 32;
  }
  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          °C|{" "}
          <a href="/" onClick={showFaranheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(faranheit())}</span>
        <span className="unit">
          <a href="/" onClick={showCelsius}>
            °C
          </a>{" "}
          {""}| °F
        </span>
      </div>
    );
  }
}
