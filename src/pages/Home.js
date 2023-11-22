import React, {
  useEffect,
  useState, // , { useEffect }
} from "react";
import SearchBar from "../components/SearchBar";
import Weather from "../components/Weather";
// import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../features/weatherSlice";

function Home() {
  const [defaultCity, setDefaultCity] = useState(true);
  const dispatch = useDispatch();
  const currWeather = useSelector((state) => state.weather.weather);

  useEffect(() => {
    dispatch(fetchWeather(215854));
  }, [dispatch]);

  // const handleResultSearch = (results) => {
  //   setArrayReuslts(results);
  //   console.log(results);
  // };

  // const jsonString =
  //   '[{"Version":1,"Key":"214236","Type":"City","Rank":55,"LocalizedName":"Afula","Country":{"ID":"IL","LocalizedName":"Israel"},"AdministrativeArea":{"ID":"Z","LocalizedName":"Northern District"}}]';
  // const jsonObject = JSON.parse(jsonString);

  return (
    <div>
      {/* {!currWeather.loading && currWeather.current.length
        ? console.log(currWeather)
        : null} */}
      <SearchBar />

      {currWeather.loading && <div>Loading...</div>}
      {currWeather.loading && currWeather.error ? (
        <div>{currWeather.error}</div>
      ) : null}
      {!currWeather.loading &&
      currWeather.current &&
      currWeather.forecast &&
      currWeather.current.length ? (
        defaultCity ? (
          <>
            {console.log(currWeather.forecast.DailyForecasts)}
            <Weather
              city={"Tel-Aviv"}
              details={currWeather.current[0]}
              forecasts={currWeather.forecast.DailyForecasts}
            />
          </>
        ) : (
          <Weather
            city={"Tel-Aviv"}
            details={currWeather.current[0]}
            forecasts={currWeather.forecast.DailyForecasts}
          />
        )
      ) : null}
    </div>
  );
}

export default Home;
