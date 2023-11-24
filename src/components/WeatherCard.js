import React, { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import DailyWeather from "./DailyWeather";
import { useSelector } from "react-redux";

function WeatherCard({
  cityKey,
  city,
  details,
  forecasts,
  handleAddToFavorites,
  handleRemoveFromFavorites,
}) {
  const [favoriteCity, setFavoriteCity] = useState(false);
  const [isCelsius, setIsCelsius] = useState(true);
  const favoritesList = useSelector((state) => state.weather.favorites);

  function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
  }

  useEffect(() => {
    const existCity = favoritesList.filter(
      (favorite) => favorite.cityName === city
    );
    if (existCity.length !== 0) {
      setFavoriteCity(true);
    }
  }, [city, favoritesList]);

  return (
    <div className="flex items-center justify-center dark:bg-gray-700 animate-slideup">
      <div className="relative w-4/5 mt-10 bg-teal-100 border-gray-700 rounded-lg shadow-md lg:w-3/5 md:w-4/5 sm:w-4/5">
        <div className="absolute flex top-2 left-2">
          <div>
            <p className="text-lg font-bold text-teal-700">{city}</p>
            {isCelsius ? (
              <>
                <p className="text-lg font-bold text-teal-700">
                  {details && details.Temperature.Metric.Value + "°C"}
                </p>
                <button
                  onClick={() => setIsCelsius(false)}
                  className="px-4 text-center text-white bg-teal-500 rounded-md"
                >
                  Fahrenheit Switch
                </button>
              </>
            ) : (
              <>
                <p className="text-lg font-bold text-teal-700">
                  {details.Temperature.Imperial.Value}
                  °F
                </p>
                <button
                  onClick={() => setIsCelsius(true)}
                  className="px-4 text-white bg-teal-500 rounded-md"
                >
                  Celsius Switch
                </button>
              </>
            )}
          </div>
        </div>

        <div className="absolute flex space-x-2 w-44 top-2 right-2 lg:right-2">
          {favoriteCity ? (
            <>
              <AiFillHeart
                alt="Heart Icon"
                className="w-12 h-12 rounded-sm"
                color="black"
              />
              <button
                onClick={() => {
                  handleRemoveFromFavorites(city);
                  setFavoriteCity(false);
                }}
                className="px-4 text-white bg-teal-500 rounded-md"
              >
                Remove From Favorite
              </button>
            </>
          ) : (
            <>
              <AiOutlineHeart
                alt="Heart Icon"
                className="w-12 h-12 rounded-sm"
                color="black"
              />
              <button
                onClick={() => {
                  handleAddToFavorites(
                    cityKey,
                    city,
                    details.Temperature.Metric.Value,
                    details.WeatherText,
                    details.WeatherIcon,
                  );
                  setFavoriteCity(true);
                }}
                className="px-4 text-white bg-teal-500 rounded-md"
              >
                Add To Favorite
              </button>
            </>
          )}
        </div>

        <div className="mt-32 text-center sm:mt-20 md:mt-20 lg:mt-20">
          <p className="text-xl font-bold text-teal-700">
            {details.WeatherText}
          </p>
          <img
            className="m-auto"
            src={`/images/${details.WeatherIcon}-s.png`}
            width={200}
            alt="weatherIcon"
          ></img>
        </div>

        <div className="p-4 mx-auto mt-15">
          <div className="flex flex-wrap justify-center">
            {forecasts?.map((item, index) => (
              <div key={index} className="m-2 bg-teal-500 rounded-md">
                <DailyWeather
                  icon={item.Day.Icon}
                  day={new Date(item.Date).toDateString()}
                  temperature={
                    isCelsius
                      ? `${toCelsius(item.Temperature.Maximum.Value).toFixed(0)} °C`
                      : (item.Temperature.Maximum.Value) + "°F"
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
