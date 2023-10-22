import { useEffect } from "react";
import "./body.css";
import { useState } from "react";

const Weather = () => {
  const [weatherData, setweatherData] = useState("");
  const apikey = "3cf458be8f80b56b634bc863713571a9";

  const getWeather = async () => {
    try {
      //
      const response = await fetch(
        "https://api.ipgeolocation.io/ipgeo?apiKey=901ab119096b4572b354f42af258b63d"
      );
      const data = await response.json();
      const cityName = await data.city;

      // get the weather

      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${apikey}`
      );
      const weatherResponse = await res.json();
      setweatherData(weatherResponse);
    } catch (error) {
      console.log(error);
    }
  };
  // Display the weather Icons
  const weatherIcon = (iconCode) =>
    `https://openweathermap.org/img/w/${iconCode}.png`;

  useEffect(() => {
    getWeather();
  }, []);

  //
  //
  //
  // Calender codes
  let days = ["Sun", "Mon", "Tue", "Wed", " Thur", "Fri", "Sat"];
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const d = new Date();
  const day = d.getDate();
  const dayInWords = days[d.getDay()];
  const month = months[d.getMonth()];
  return (
    <div className="weather__container">
      <div className="first__section__wrapper">
        <div className="first__section">
          {weatherData ? (
            <div>
              <h2>{weatherData.name}</h2>
              <p id="size">{Math.floor(weatherData?.main?.temp - 273.15)}°</p>

              <div className="lower_part">
                <div className="img___container">
                  <img src={weatherIcon(weatherData.weather[0].icon)} alt="" />
                </div>
                <p>{weatherData.weather[0].main}</p>
                <div className="text">
                  <p>H:{Math.floor(weatherData?.main?.temp_max - 273.15)}°</p>
                  <p> L:{Math.floor(weatherData?.main?.temp_min - 273.15)}°</p>
                </div>
              </div>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <p className="label">Weather</p>
      </div>

      {/* Calendar section */}

      <div className="second__section__container">
        <div className="second__section">
          <div className="styled__texts">
            <span>{dayInWords}</span>
            <p id="month">{month}</p>
          </div>

          <p id="day">{day}</p>
        </div>
        <p className="label">Calendar</p>
      </div>
    </div>
  );
};

export default Weather;
