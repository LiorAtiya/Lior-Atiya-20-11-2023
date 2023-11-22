import React from "react";

function DailyWeather({ day, celsius }) {
  return (
    <div className="bg-blue-500 p-4 rounded-md text-center">
      <p>{day}</p>
      <p>{celsius}&deg;C</p>
    </div>
  );
}

export default DailyWeather;
