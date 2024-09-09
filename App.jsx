import { useState } from "react";
import axios from "axios";
import "./App.css";
import WeatherComponent from "./WeatherComponent";

function App() {
  const [city, setCity] = useState();
  const [weather, Setweather] = useState();

  const callingWeatherAPI = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q= ${city}&appid=${`afb604f0b4e0aa25c3fe01d4d27d2b63`}`
      );
      Setweather(response);
      console.log(response);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        alert("City not found. Please enter a valid city name.");
      } else {
        alert("An error occurred. Please try again later.");
      }
      Setweather(null);
    }
  };

  function handleChange(event) {
    setCity(event.target.value);
  }

  function handleClick() {
    if (!city) {
      alert("Please enter a city name!");
      return;
    } else {
      callingWeatherAPI();
    }
  }
  return (
    <>
      <div className="container">
        <WeatherComponent />
        <input type="text" value={city} onChange={handleChange} /> <br></br>
        <button onClick={handleClick}>Get Weather</button>
        {weather && (
          <>
            <div className="city"> {weather.data.name}</div>
            <p className="temp">
              Temprature: <i> {weather.data.main.temp}F</i>
            </p>
            <p className="description">
              Atmospheric Conditions:{" "}
              <i> {weather.data.weather[0].description}</i>
            </p>
          </>
        )}
      </div>
    </>
  );
}

export default App;
