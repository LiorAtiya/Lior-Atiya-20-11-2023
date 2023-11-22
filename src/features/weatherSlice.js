import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (cityKey) => {
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

      // Extract data from the responses
      const currentConditions = currentConditionsResponse.data;
      const forecasts = forecastsResponse.data;

      // You can return an object containing the relevant data
      return [currentConditions, forecasts];
    } catch (error) {
      return error;
    }
  }
);

export const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    favorites: [],
    weather: {
      current: null,
      forecast: [],
      loading: false,
      error: null,
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWeather.pending, (state) => {
      state.weather.loading = true;
    });
    builder.addCase(fetchWeather.fulfilled, (state, action) => {
      state.weather.loading = false;
      state.weather.current = action.payload[0];
      state.weather.forecast = action.payload[1];
      state.weather.error = "";
    });
    builder.addCase(fetchWeather.rejected, (state, action) => {
      state.weather.loading = false;
      state.weather.current = [];
      state.weather.error = action.error.message;
    });
  },
});

export default weatherSlice.reducer;
