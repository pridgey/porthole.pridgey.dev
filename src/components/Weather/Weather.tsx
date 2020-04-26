import React, { useEffect, useState } from "react";
import {
  DataStack,
  WeatherItem,
  WeatherSubItem,
  WeatherWrap,
  WeatherIcon,
} from "./Weather.styles";
import { getWeatherIcon } from "./Weather.functions";

export const Weather = () => {
  const [weatherData, setWeatherData] = useState({
    WeatherIcon: undefined,
    WeatherDescription: "",
    Temperature: 0,
    FeelsLike: 0,
  });

  useEffect(() => {
    const getWeather = () => {
      fetch(
        `https://api.weatherbit.io/v2.0/current?key=${process.env.react_app_weather_key}&units=I&city=Denver,CO`
      )
        .then((result) => {
          if (result.ok) {
            return result.json();
          } else {
            throw new Error("Failed to retrieve weather data");
          }
        })
        .then((wthData) => {
          if (wthData.data[0]) {
            const retrievedWeather = {
              WeatherIcon: wthData.data[0].weather.code,
              WeatherDescription: wthData.data[0].weather.description,
              Temperature: wthData.data[0].temp,
              FeelsLike: wthData.data[0].app_temp,
            };
            setWeatherData(retrievedWeather);
          }
        })
        .catch((error) => console.log("Error Occurred", error));
    };

    setInterval(getWeather, 3600000);

    getWeather();
  }, []);

  return (
    <WeatherWrap>
      <WeatherIcon>{getWeatherIcon(weatherData.WeatherIcon || "")}</WeatherIcon>
      <DataStack>
        <WeatherItem>{`${weatherData.Temperature} °F with ${weatherData.WeatherDescription}`}</WeatherItem>
        <WeatherSubItem>{`Feels Like: ${weatherData.FeelsLike} °F`}</WeatherSubItem>
      </DataStack>
    </WeatherWrap>
  );
};
