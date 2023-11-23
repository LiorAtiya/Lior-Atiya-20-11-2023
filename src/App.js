import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/Favorites",
      element: <Favorites />,
    },
  ]);

  return (
    <div className="h-screen dark:bg-gray-700">
      <Header />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
