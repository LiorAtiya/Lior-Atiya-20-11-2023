import React from "react";

function FavoriteCard({ cityKey, city, temperature, WeatherText, handleClick }) {
  return (
    <button
      className="p-4 m-10 text-center bg-blue-500 rounded-md"
      onClick={() => handleClick(cityKey,city)}
    >
      <p>{city}</p>
      <p>{temperature}&deg;C</p>
      <p>{WeatherText}</p>
    </button>
  );
}

export default FavoriteCard;
