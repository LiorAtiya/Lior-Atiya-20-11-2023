import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import Favorite from "./pages/Favorite";
import Home from "./pages/Home";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Favorite",
    element: <Favorite />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Header />
      <RouterProvider router={router} />
      {/* <App /> */}
    </Provider>
  </React.StrictMode>
);
