import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchWeather,
  searchCityWeather,
  addToFavorites,
  removeFromFavorites,
} from "../features/weatherSlice";

import SearchBar from "../components/SearchBar";
import Weather from "../components/Weather";
import SearchResults from "../components/SearchResults";
import ModalError from "../components/ModalError";

function Home() {
  const dispatch = useDispatch();
  const type = useSelector((state) => state.weather.type);
  const currWeather = useSelector((state) => state.weather.weather);
  const citiesResults = useSelector((state) => state.weather.searchResults);

  useEffect(() => {
    // //Deafult fetch of Tel-Aviv
    // if (type === "") {
    //   dispatch(fetchWeather({ cityKey: 215854, cityName: "Tel-Aviv" }));
    // }
  }, [dispatch]);

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
    WeatherText
  ) => {
    dispatch(addToFavorites({ cityKey, cityName, temperature, WeatherText }));
  };

  const handleRemoveFromFavorites = (cityName) => {
    dispatch(removeFromFavorites({ name: cityName }));
  };

  const TEST = {
    cityKey: 12345,
    city: "Afula",
    details: {
      WeatherText: "Cloudy",
      Temperature: {
        Metric: {
          UnitType: 22,
        },
      },
    },
    forecasts: [
      {
        day: new Date(),
        Temperature: {
          Maximum: {
            UnitType: 1,
          },
        },
      },
      {
        day: new Date(),
        Temperature: {
          Maximum: {
            UnitType: 2,
          },
        },
      },
      {
        day: new Date(),
        Temperature: {
          Maximum: {
            UnitType: 3,
          },
        },
      },
      {
        day: new Date(),
        Temperature: {
          Maximum: {
            UnitType: 4,
          },
        },
      },
      {
        day: new Date(),
        Temperature: {
          Maximum: {
            UnitType: 5,
          },
        },
      },
    ],
  };

  return (
    <div>
      <SearchBar searchRef={handleResultSearch} />

      {type === "SEARCH" && (
        <>
          {citiesResults.loading && <div>Loading...</div>}
          {citiesResults.error && (
            <ModalError errorMessage="The allowed number of requests has been exceeded" />
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
            <Weather
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

      <Weather
        cityKey={TEST.cityKey}
        city={TEST.city}
        details={TEST.details}
        forecasts={TEST.forecasts}
        handleAddToFavorites={handleAddToFavorites}
        handleRemoveFromFavorites={handleRemoveFromFavorites}
      />
    </div>
  );
}

export default Home;
