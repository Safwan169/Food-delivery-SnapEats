import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {

    const handleSearch = (e) => {
    e.preventDefault();
    const searchQuery = e.target.elements.search.value;
    console.log(`Searching for: ${searchQuery}`);
  };
  return (
    <>
      <form onSubmit={handleSearch} className="flex-grow  flex">
        <div className="flex flex-grow  sm:p-0 relative">
          <input
            type="text"
            name="search"
            placeholder="Find your product"
            className=" w-full py-2 px-4   border-2 border-yellow-400 rounded-2xl  text-gray-700"
          />
          <button className="absolute right-0 top-0 bottom-0 bg-yellow-400  rounded-r-2xl mr-2 sm:mr-0 my-2 sm:my-0 px-4 text-white">
            <FiSearch size={16} />
          </button>
        </div>
      </form>
    </>
  );
};

export default SearchBar;
