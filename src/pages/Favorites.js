import React, { useState } from "react";
import FavoriteCard from "../components/FavoriteCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchWeather } from "../features/weatherSlice";
import { useNavigate } from "react-router-dom";

function Favorite() {
  const favoritesList = useSelector((state) => state.weather.favorites);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isCelsius, setIsCelsius] = useState(true);

  const handleClickFavoriteCity = (cityKey, cityName) => {
    dispatch(fetchWeather({ cityKey: cityKey, cityName: cityName }));
    navigate("/");
  };

  const toFahrenheit = (celsius) => {
    return (celsius * 9) / 5 + 32;
  };

  return (
    <>
      {isCelsius ? (
        <div className="mt-4 text-center">
          <button
            onClick={() => setIsCelsius(false)}
            className="px-4 text-white bg-teal-500 rounded-md"
          >
            Fahrenheit Mode
          </button>
        </div>
      ) : (
        <div className="mt-4 text-center">
          <button
            onClick={() => setIsCelsius(true)}
            className="px-4 text-white bg-teal-500 rounded-md"
          >
            Celsius Mode
          </button>
        </div>
      )}

      <div className="flex flex-wrap justify-center mt-3">
        {favoritesList?.map((item, index) => (
          <div key={index}>
            {isCelsius ? (
              <FavoriteCard
                cityKey={item.cityKey}
                city={item.cityName}
                temperature={item.temperature + "°C"}
                WeatherText={item.WeatherText}
                handleClick={handleClickFavoriteCity}
              />
            ) : (
              <FavoriteCard
                cityKey={item.cityKey}
                city={item.cityName}
                temperature={
                  toFahrenheit((item.temperature).toFixed(2)) +
                  "°F"
                }
                WeatherText={item.WeatherText}
                handleClick={handleClickFavoriteCity}
              />
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default Favorite;
