import React from "react";

function DailyWeather({ icon, day, temperature }) {
  return (
    <div className="p-4 text-center text-white bg-teal-500 rounded-md">
      <p>{day}</p>
      <p>{temperature}</p>
      <img className="m-auto" src={`/images/${icon}-s.png`} width={100} alt='weatherIcon'></img>
    </div>
  );
}

export default DailyWeather;
