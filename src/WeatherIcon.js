import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "CLEAR_SKY",
    "01n": "CLEAR_NIGHT",
    "02d": "FEW_CLOUDS_DAY",
    "02n": "FEW_CLOUDS_NIGHT",
    "03d": "SCATTERED_CLOUDS_DAY",
    "03n": "SCATTERED_CLOUDS_NIGHT",
    "04d": "BROKEN_CLOUDS_DAY",
    "04n": "BROKEN_CLOUDS_NIGHT",
    "09d": "SHOWER_RAINS",
    "10d": "RAINS",
    "11d": "THUNDERSTORM",
    "13d": "SNOW",
    "50d": "MIST",
  };

  return (
    <ReactAnimatedWeather
      icon={codeMapping[props.code]}
      color="1e1e1e"
      size={props.size}
      animate={true}
    />
  );
}
