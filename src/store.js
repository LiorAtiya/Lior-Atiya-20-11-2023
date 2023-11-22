import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./features/counterSlice";
import weatherReducer from "./features/weatherSlice";

export default configureStore({
  reducer: {
    // counter: counterReducer,
    weather: weatherReducer,
  },
});
