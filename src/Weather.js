import React, { useState } from "react";
import axios from "axios";
import "./weather.css";

export default function WeatherSearch() {
  let [city, setCity] = useState("");
  let [temperature, setTemperature] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();

    let apiKey = "9b4aa1e9d9995bf996aaf55cc902b1e5";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showTemperature);
  }

  function showTemperature(response) {
    setTemperature(
      <div className="list-weather">
        <ul>
          <li>Temperature:{response.data.main.temp} </li>
          <li>Description: {response.data.weather.decription}</li>
          <li>Humidity: {response.data.main.humidity}%</li>
          <li>Wind: {response.data.wind.speed}</li>
          <li>
            <img
              src={`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
              alt={response.data.weather.description}
            />
          </li>
        </ul>
      </div>
    );
  }

  function changeCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="WeatherSearch">
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Type a city" onChange={changeCity} />
        <input type="submit" value="Search" />
      </form>
      <h2>{temperature}</h2>
    </div>
  );
}
