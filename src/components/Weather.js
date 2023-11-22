import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import DailyWeather from "./DailyWeather";

function Weather({ city, details, forecasts }) {

  return (
    <div className="flex items-center justify-center">
      <div className="relative w-4/5 mt-10 bg-blue-200 rounded-lg shadow-lg">
        <div className="absolute flex top-2 left-2">
          <button className="px-5 py-2 mx-2 text-white bg-blue-500 rounded-md">
            X
          </button>
          <div>
            <p className="text-lg font-bold">{city}</p>
            <p className="text-lg font-bold">
              {details && details.Temperature.Metric.UnitType}&deg;C
            </p>
          </div>
        </div>

        <div className="absolute flex space-x-2 top-2 right-2">
          <AiOutlineHeart
            alt="Heart Icon"
            className="w-12 h-12 rounded-sm"
            color="black"
          />
          {/* <button className="px-4 py-2 text-white bg-blue-500 rounded-md">
            Button 1
          </button> */}
          <button className="px-4 text-white bg-teal-500 rounded-md">
            Add To Favorite
          </button>
        </div>

        <div className="mt-40 text-center">
          <p className="text-xl font-bold">{details.WeatherText}</p>
        </div>

        <div className="max-w-screen-lg p-4 mx-auto mt-40">
          <div className="flex justify-between space-x-4">
            {forecasts?.map((item, index) => (
              <div key={index} className="w-1/5">
                <DailyWeather
                  day={new Date(item.Date).toDateString()}
                  celsius={item.Temperature.Maximum.UnitType}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
