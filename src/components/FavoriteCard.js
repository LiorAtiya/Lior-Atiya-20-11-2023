import React from "react";

function FavoriteCard({ key, city, celsius, WeatherText }) {
  return (
    <button
      className="bg-blue-500 m-10 p-4 rounded-md text-center"
    >
      <p>{city}</p>
      <p>{celsius}&deg;C</p>
      <p>{WeatherText}</p>
    </button>
  );
}

export default FavoriteCard;
