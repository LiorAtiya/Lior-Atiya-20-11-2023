export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';
export const FETCH_WEATHER_REQUEST = 'FETCH_WEATHER_REQUEST';
export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';
export const FETCH_WEATHER_FAILURE = 'FETCH_WEATHER_FAILURE';

export const addToFavorites = (city) => ({ type: ADD_TO_FAVORITES, payload: city });
export const removeFromFavorites = (city) => ({ type: REMOVE_FROM_FAVORITES, payload: city });
export const fetchWeatherRequest = () => ({ type: FETCH_WEATHER_REQUEST });
export const fetchWeatherSuccess = (data) => ({ type: FETCH_WEATHER_SUCCESS, payload: data });
export const fetchWeatherFailure = (error) => ({ type: FETCH_WEATHER_FAILURE, payload: error });