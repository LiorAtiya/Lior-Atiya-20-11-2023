import React from "react";

function DailyWeather({ day, celsius }) {
  return (
    <div className="p-4 text-center text-white bg-teal-500 rounded-md">
      <p>{day}</p>
      <p>{celsius}&deg;C</p>
    </div>
  );
}

export default DailyWeather;
