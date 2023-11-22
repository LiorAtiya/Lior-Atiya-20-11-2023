import React from "react";

function Header() {
  return (
    
    <nav className="flex flex-wrap items-center justify-center p-5 bg-teal-500 md:justify-between lg:justify-between">
      <div className="flex items-center flex-shrink-0 mr-6 text-center text-white md:text-left lg:text-left xl:text-left">
        <svg
          className="w-8 h-8 mr-2 fill-current"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
        </svg>
        <span className="text-xl font-semibold tracking-tight">Abra Weather Task</span>
      </div>
      {/* <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 text-teal-200 border border-teal-400 rounded hover:text-white hover:border-white">
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div> */}
      <div className="flex">
        <div className="">
          <a
            href={`/`}
            className="inline-block px-4 py-2 mt-0 text-sm leading-none text-white border border-white rounded hover:border-transparent hover:text-teal-500 hover:bg-white"
          >
            Home
          </a>
        </div>
        <div className="">
          <a
            href={`/Favorites`}
            className="inline-block px-4 py-2 mt-0 text-sm leading-none text-white border border-white rounded hover:border-transparent hover:text-teal-500 hover:bg-white"
          >
            Favorites
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
