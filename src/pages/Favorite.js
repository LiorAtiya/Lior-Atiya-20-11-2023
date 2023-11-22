import React from "react";
import FavoriteCard from "../components/FavoriteCard";

function Favorite() {
  const otherDays = [
    {
      city: "Tel-Aviv",
      celsius: "20",
      WeatherText: "Mostly cloudy",
    },
    {
      city: "Afula",
      celsius: "20",
      WeatherText: "Mostly cloudy",
    },
    {
      city: "Haifa",
      celsius: "20",
      WeatherText: "Mostly cloudy",
    },
    {
      city: "Shoham",
      celsius: "20",
      WeatherText: "Mostly cloudy",
    },
    {
      city: "New-York",
      celsius: "20",
      WeatherText: "Mostly cloudy",
    },
    {
      city: "New-York",
      celsius: "20",
      WeatherText: "Mostly cloudy",
    },
  ];

  return (
    <div className="">
      <div className="flex flex-wrap justify-center">
        {otherDays.map((item, index) => (
          <div key={index}>
            <FavoriteCard
              city={item.city}
              celsius={item.celsius}
              WeatherText={item.WeatherText}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorite;
