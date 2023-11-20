import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Favorite from "./pages/Favorite";
import Home from "./pages/Home";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Home",
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
    <Header />
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);
