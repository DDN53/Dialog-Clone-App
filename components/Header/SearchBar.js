import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";

export const SearchBar = () => {
  const [isInputVisible, setIsInputVisible] = useState(false);

  const toggleInputVisibility = () => {
    setIsInputVisible(!isInputVisible);
  };

  return (
    <div className="ml-4 flex justify-center items-center">
      <div
        className={`relative rounded-full bg-slate-950 p-3 flex items-center cursor-pointer hover:bg-white shadow-md hover:w-40 hover:z-44 ${
          isInputVisible ? "w-44" : ""
        }`}
        onClick={toggleInputVisibility}
      >
        {isInputVisible && (
          <input
            type="text"
            placeholder="Search Dialog.lk... "
            className="absolute ml-2 outline-none border-none bg-transparent p-3 pr-7 z-40"
          />
        )}
        <IoSearch className="text-white" />
      </div>
    </div>
  );
};

export default SearchBar;
