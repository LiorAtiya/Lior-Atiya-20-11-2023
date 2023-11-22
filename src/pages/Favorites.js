import React from "react";
import FavoriteCard from "../components/FavoriteCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchWeather } from "../features/weatherSlice";
import { useNavigate } from "react-router-dom";

function Favorite() {
  const favoritesList = useSelector((state) => state.weather.favorites);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClickFavoriteCity = (cityKey, cityName) => {
    dispatch(fetchWeather({ cityKey: cityKey, cityName: cityName }));
    navigate("/");
  };

  return (
    <div className="">
      <div className="flex flex-wrap justify-center">
        {favoritesList?.map((item, index) => (
          <div key={index}>
            <FavoriteCard
              cityKey={item.cityKey}
              city={item.cityName}
              temperature={item.temperature}
              WeatherText={item.WeatherText}
              handleClick={handleClickFavoriteCity}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorite;
