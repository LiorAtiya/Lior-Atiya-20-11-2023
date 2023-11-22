import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async ({ cityKey, cityName }) => {
    try {
      const apiKey = process.env.REACT_APP_ACCUWEATHER_API_KEY;

      const [currentConditionsResponse, forecastsResponse] = await Promise.all([
        axios.get(
          `http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${apiKey}`
        ),
        axios.get(
          `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=${apiKey}`
        ),
      ]);

      const currentConditions = currentConditionsResponse.data;
      const forecasts = forecastsResponse.data;

      return [cityKey, cityName, currentConditions, forecasts];
    } catch (error) {
      throw error;
    }
  }
);

export const searchCityWeather = createAsyncThunk(
  "weather/searchCityWeather",
  async (cityName) => {
    try {
      const apiKey = process.env.REACT_APP_ACCUWEATHER_API_KEY;

      const response = await axios.get(
        `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${cityName}`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const initialState = {
  type: "",
  checkExist: false,
  favorites: localStorage.getItem("favoritesCities")
    ? JSON.parse(localStorage.getItem("favoritesCities"))
    : [],
  searchResults: {
    data: [],
    loading: false,
    error: null,
  },
  weather: {
    city: null,
    key: null,
    current: null,
    forecast: [],
    loading: false,
    error: null,
  },
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    addToFavorites(state, action) {
      state.favorites.push(action.payload);
      localStorage.setItem("favoritesCities", JSON.stringify(state.favorites));
    },
    removeFromFavorites(state, action) {
      const nextFavorites = state.favorites.filter(
        (favorite) => favorite.cityName !== action.payload.name
      );
      state.favorites = nextFavorites;
      localStorage.setItem("favoritesCities", JSON.stringify(state.favorites));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWeather.pending, (state) => {
      state.weather.loading = true;
    });
    builder.addCase(fetchWeather.fulfilled, (state, action) => {
      state.weather.loading = false;
      state.weather.key = action.payload[0];
      state.weather.city = action.payload[1];
      state.weather.current = action.payload[2];
      state.weather.forecast = action.payload[3];
      state.type = "WEATHER";
      state.weather.error = "";
    });
    builder.addCase(fetchWeather.rejected, (state, action) => {
      state.weather.loading = false;
      state.weather.current = [];
      state.type = "WEATHER";
      state.weather.error = action.error.message;
    });

    //searchCityWeather
    builder.addCase(searchCityWeather.pending, (state) => {
      state.searchResults.loading = true;
    });
    builder.addCase(searchCityWeather.fulfilled, (state, action) => {
      state.searchResults.loading = false;
      state.searchResults.data = action.payload;
      state.type = "SEARCH";
      state.searchResults.error = "";
    });
    builder.addCase(searchCityWeather.rejected, (state, action) => {
      state.searchResults.loading = false;
      state.searchResults.data = [];
      state.type = "SEARCH";
      state.searchResults.error = action.error.message;
    });
  },
});

export const { addToFavorites, removeFromFavorites } = weatherSlice.actions;

export default weatherSlice.reducer;
