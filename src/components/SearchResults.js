import React from "react";

function SearchResults({ citiesList, chooseCity }) {
  return (
    <div className="text-center">
      <h1 className="mt-3 text-lg font-bold">Search Results:</h1>
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
