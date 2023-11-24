import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) === true
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const switchMode = () => {
    if (darkMode) {
      localStorage.setItem("darkMode", JSON.stringify(false));
    } else {
      localStorage.setItem("darkMode", JSON.stringify(true));
    }
    setDarkMode(!darkMode);
  };

  return (
    <nav className="flex flex-wrap items-center justify-center p-5 bg-teal-500 md:justify-between lg:justify-between">
      <div className="flex items-center flex-shrink-0 mr-6 text-center text-white md:text-left lg:text-left xl:text-left">
        <img src={`/images/abra-icon.png`} width={100} alt="weatherIcon"></img>
        <span className="ml-3 text-xl font-semibold tracking-tight">
          {" "}
          Weather Task
        </span>
      </div>
      <button
        onClick={() => switchMode()}
        className="inline-block px-4 py-2 mt-0 text-sm leading-none text-white border border-white rounded hover:border-transparent hover:text-teal-500 hover:bg-white"
      >
        {darkMode ? "Light" : "Dark"} Mode
      </button>
      <div className="flex">
        <div className="">
          <Link
            to={`/`}
            className="inline-block px-4 py-2 mt-0 text-sm leading-none text-white border border-white rounded hover:border-transparent hover:text-teal-500 hover:bg-white"
          >
            Home
          </Link>
        </div>
        <div className="">
          <Link
            to={`/Favorites`}
            className="inline-block px-4 py-2 mt-0 text-sm leading-none text-white border border-white rounded hover:border-transparent hover:text-teal-500 hover:bg-white"
          >
            Favorites
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
