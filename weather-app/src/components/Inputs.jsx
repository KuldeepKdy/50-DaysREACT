import React from "react";
import { FaSearch, FaLocationArrow } from "react-icons/fa";

const Inputs = () => {
  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w-3/4 items-center space-x-4">
        <input
          type="text"
          placeholder="Search for city....."
          className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
        />
        <FaSearch
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
        />
        <FaLocationArrow
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
        />
      </div>
      <div className="flex flex-row ">

      </div>
    </div>
  );
};

export default Inputs;
