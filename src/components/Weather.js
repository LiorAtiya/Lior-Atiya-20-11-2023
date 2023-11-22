import React, { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import DailyWeather from "./DailyWeather";
import { useSelector } from "react-redux";

function Weather({
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

  const toFahrenheit = (celsius) => {
    return (celsius * 9) / 5 + 32;
  };

  useEffect(() => {
    const existCity = favoritesList.filter(
      (favorite) => favorite.cityName === city
    );
    if (existCity.length !== 0) {
      setFavoriteCity(true);
    }
  }, [city, favoritesList]);

  return (
    <div className="flex items-center justify-center">
      <div className="relative w-4/5 mt-10 bg-teal-100 border-gray-700 rounded-lg shadow-md lg:w-3/5 md:w-4/5 sm:w-4/5">
        <div className="absolute flex top-2 left-2">
          {/* <button className="px-5 py-2 mx-2 text-white bg-blue-500 rounded-md">
            X
          </button> */}
          <div>
            <p className="text-lg font-bold text-teal-700">{city}</p>
            {isCelsius ? (
              <>
                <p className="text-lg font-bold text-teal-700">
                  {details && details.Temperature.Metric.UnitType+'°C'}
                </p>
                <button
                  onClick={() => setIsCelsius(false)}
                  className="px-4 text-white bg-teal-500 rounded-md"
                >
                  Fahrenheit Mode
                </button>
              </>
            ) : (
              <>
                <p className="text-lg font-bold text-teal-700">
                  {toFahrenheit(details.Temperature.Metric.UnitType).toFixed(2)}
                  °F
                </p>
                <button
                  onClick={() => setIsCelsius(true)}
                  className="px-4 text-white bg-teal-500 rounded-md"
                >
                  Celsius Mode
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
                    details.Temperature.Metric.UnitType,
                    details.WeatherText
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
          <img className="m-auto" src={`/images/01-s.png`} width={200} alt='weatherIcon'></img>
        </div>

        <div className="p-4 mx-auto mt-15">
          <div className="flex flex-wrap justify-center">
            {forecasts?.map((item, index) => (
              <div key={index} className="m-2 bg-teal-500 rounded-md">
                {isCelsius ? (
                  <DailyWeather
                    day={new Date(item.Date).toDateString()}
                    temperature={item.Temperature.Maximum.UnitType+'°C'}
                  />
                ) : (
                  <DailyWeather
                    day={new Date(item.Date).toDateString()}
                    temperature={(toFahrenheit((item.Temperature.Maximum.UnitType).toFixed(2))+'°F')}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
