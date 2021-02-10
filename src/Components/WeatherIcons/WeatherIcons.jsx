import React from "react";

const WeatherIcons = ({ weather }) => {
  const renderWeatherIcon = () => {
    console.log(weather);
    console.log(typeof weather);
    if (weather === "Clouds") {
      return (
        <div className="app-cloudy">
          <img
            className="weather-icon"
            src="iconfinder_weather-icons-cloudy-3_2087718.svg"
            alt="Clouds Icon"
          />
        </div>
      );
    } else if (weather === "Clear") {
      return (
        <div className="app-clear">
          <img
            className="weather-icon"
            src="iconfinder_weather-icons-sunny_2087721.svg"
            alt="Clear Icon"
          />
        </div>
      );
    } else if (weather === "Rain") {
      return (
        <div className="app-clear">
          <img
            className="weather-icon"
            src="iconfinder_weather-icons-rainy-2_2087714.svg"
            alt="Rain Icon"
          />
        </div>
      );
    } else if (weather === "Thunderstorm") {
      return (
        <div className="app-clear">
          <img
            className="weather-icon"
            src="iconfinder_weather-icons-stormy_2087712.svg"
            alt="Srorm Icon"
          />
        </div>
      );
    } else if (weather === "Snow") {
      return (
        <div className="app-clear">
          <img
            className="weather-icon"
            src="iconfinder_weather-icons-snowy_2087713.svg"
            alt="Snow Icon"
          />
        </div>
      );
    } else {
      return <h4>FAIL :-(</h4>;
    }
  };
  return <div>{renderWeatherIcon()}</div>;
};

/* 
  render() {
    if (weather.weather[0].main === "Clouds") {
      return (
    <div classname="app-cloudy">
      <img
        className="weather-icon"
        src="iconfinder_weather-icons-cloudy-2_2087719.svg"
        alt="Cloudy Icon"
      />
    </div>
      );
    } else if (weather.weather[0].main === "Clear") {
      return (
      <div classname="app-clear">
        <img
          className="weather-icon"
          src="iconfinder_weather-icons-sunny_2087721.svg"
          alt="Clear Icon"
        />
      </div>
      );
    } else if (this.state.whichComponentToShow === "Snow") {
      return (
        <div className="App">
          <Header />
        </div>
      );
    }
    return null;
  }
}; */

export default WeatherIcons;
