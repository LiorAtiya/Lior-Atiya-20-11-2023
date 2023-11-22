import React from "react";

function Header() {
  return (
    
    <nav className="flex flex-wrap items-center justify-center p-5 bg-teal-500 md:justify-between lg:justify-between">
      <div className="flex items-center flex-shrink-0 mr-6 text-center text-white md:text-left lg:text-left xl:text-left">
        <img src={`/images/abra-icon.png`} width={100} alt='weatherIcon'></img>
        <span className="ml-3 text-xl font-semibold tracking-tight"> Weather Task</span>
      </div>
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
