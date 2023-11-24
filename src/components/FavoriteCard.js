import React from "react";

const FavoriteCard = ({
  cityKey,
  city,
  temperature,
  WeatherText,
  icon,
  handleClick,
}) => {
  return (
    <button
      className="max-w-md mx-auto overflow-hidden bg-teal-400 shadow-md rounded-xl md:max-w-2xl animate-slideup"
      onClick={() => handleClick(cityKey, city)}
    >
      <div className="bg-teal-300 shadow-md rounded-xl md:flex">
        <div className="p-8">
          <div className="text-sm font-semibold tracking-wide text-teal-700 uppercase">
            {city}
          </div>
          <p className="block mt-1 text-lg font-medium leading-tight text-center text-black">
            {temperature}
          </p>
          <p className="mt-2 text-gray-500">{WeatherText}</p>
          <img className="m-auto" src={`/images/${icon}-s.png`} width={100} alt='weatherIcon'></img>
        </div>
      </div>
    </button>
  );
};

export default FavoriteCard;
