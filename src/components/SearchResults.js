import React from "react";

function SearchResults({ citiesList, chooseCity }) {
  return (
    <div className="text-center">
      {citiesList?.map((item, index) => {
        return (
          <button onClick={() => chooseCity(item.Key, item.LocalizedName)} className="w-1/4 p-4 m-5 text-center bg-blue-100 rounded-md">
            {item.LocalizedName}
          </button>
        );
      })}
    </div>
  );
}

export default SearchResults;
