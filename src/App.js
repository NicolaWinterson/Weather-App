import React, { useState, useEffect } from "react";
import './App.css';
import DateBuilder from "./Components/DateBuild/DateBuilder.jsx";
import WeatherIcons from "./Components/WeatherIcons/WeatherIcons.jsx";

const App = () => {

  const [weather, setWeather] = useState({});
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    

    const getWeather = async () => {
      try {
        const URL = `${process.env.REACT_APP_API_BASE}weather?q=${query}&units=metric&APPID=${
          process.env.REACT_APP_API_KEY
        }`;
        console.log(URL);
        const response = await fetch(URL, {
          mode: "cors"
        });
        console.log(response);
        const data = await response.json();
        console.log("response done, let's read the json");
        setWeather(data);
        console.log(data.hits);
      } catch (error) {
        setError(error);
        console.log("it is broken");
        console.error(error.message);
      }
    };

    getWeather();
    console.log("effect has been run");
  }, [query]);

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  if (error) {
    return <div style={{ color: "red" }}>{error.message}</div>;
  }

  const getWeatherClass = weatherInfo => {
    let weatherClass = "app";
    let weatherDesc = "";
    console.log("info " + weatherInfo);

    if (
      typeof weatherInfo !== "undefined" &&
      typeof weatherInfo.weather !== "undefined"
    ) {
      weatherDesc = weather.weather[0].main;

      switch (weatherDesc) {
        case "Rain":
          weatherClass = "app rain";
          break;
        case "Clouds":
          weatherClass = "app";
          break;
        case "Clear":
          weatherClass = "app clear";
          break;
        case "Snow":
          weatherClass = "app snow";
          break;
        case "Thunderstorm":
          weatherClass = "app storm";
          break;
        default:
          weatherClass = "app";
      }
      console.log("more info " + weatherInfo.weather);
    }
    console.log("weatherInfo: " + weatherInfo);
    console.log("weatherClass: " + weatherClass);

    return weatherClass;
  };

  return (
    <div className={getWeatherClass(weather)}>
      <form onSubmit={getSearch} className="search-box">
        <input
          type="text"
          className="search-bar"
          placeholder="Search..."
          value={search}
          onChange={updateSearch}
        />
      </form>
      {typeof weather.main !== "undefined" ? (
        <div>
          <div className="location-box">
            <div className="location">
              {weather.name}, {weather.sys.country}
            </div>
            <div className="date">{DateBuilder(new Date())}</div>
          </div>
          <div className="weather-box">
            <div className="temperature">{Math.round(weather.main.temp)}°c</div>
            <div className="weather">
              {weather.weather[0].main}
              <WeatherIcons weather={weather.weather[0].main} />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default App;
