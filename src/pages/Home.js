import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchWeather,
  searchCityWeather,
  getCurrentLocationWeather,
  addToFavorites,
  removeFromFavorites,
} from "../features/weatherSlice";

import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import SearchResults from "../components/SearchResults";
import ModalError from "../components/ModalError";

function Home() {
  const dispatch = useDispatch();
  const type = useSelector((state) => state.weather.type);
  const currWeather = useSelector((state) => state.weather.weather);
  const citiesResults = useSelector((state) => state.weather.searchResults);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        if (type === "") {
          dispatch(
            getCurrentLocationWeather({
              lat: position.coords.latitude,
              lon: position.coords.longitude,
            })
          );
        }
      });
    }
  }, [dispatch, type]);

  const handleResultSearch = (cityName) => {
    dispatch(searchCityWeather(cityName));
  };

  const handleClickCity = (cityKey, cityName) => {
    dispatch(fetchWeather({ cityKey: cityKey, cityName: cityName }));
  };

  const handleAddToFavorites = (
    cityKey,
    cityName,
    temperature,
    WeatherText,
    icon
  ) => {
    dispatch(
      addToFavorites({ cityKey, cityName, temperature, WeatherText, icon })
    );
  };

  const handleRemoveFromFavorites = (cityName) => {
    dispatch(removeFromFavorites({ name: cityName }));
  };

  return (
    <div>
      <SearchBar searchRef={handleResultSearch} />

      {type === "SEARCH" && (
        <>
          {citiesResults.loading && <div>Loading...</div>}
          {citiesResults.error ? (
            <ModalError errorMessage="The allowed number of requests has been exceeded" />
          ) : (
            <>
              {!citiesResults.loading &&
              citiesResults.data &&
              citiesResults.data.length === 0 ? (
                <h1 className="mt-3 text-lg font-bold text-center">
                  No matches found
                </h1>
              ) : null}
            </>
          )}
          {!citiesResults.loading &&
          citiesResults.data &&
          citiesResults.data.length !== 0 ? (
            <SearchResults
              citiesList={citiesResults.data}
              chooseCity={handleClickCity}
            />
          ) : null}
        </>
      )}

      {type === "WEATHER" && (
        <>
          {currWeather.loading && <div>Loading...</div>}
          {currWeather.error && (
            <ModalError errorMessage="The allowed number of requests has been exceeded" />
          )}
          {!currWeather.loading &&
          currWeather.current &&
          currWeather.forecast &&
          currWeather.current.length ? (
            <WeatherCard
              cityKey={currWeather.key}
              city={currWeather.city}
              details={currWeather.current[0]}
              forecasts={currWeather.forecast.DailyForecasts}
              handleAddToFavorites={handleAddToFavorites}
              handleRemoveFromFavorites={handleRemoveFromFavorites}
            />
          ) : null}
        </>
      )}

    </div>
  );
}

export default Home;
