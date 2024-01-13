import React from "react";
import Random from "./components/Random";
import Tag from "./components/Tag";

const App = () => {
  
  return (
    <div className="w-full h-screen flex flex-col background relative overflow-hidden">
      <h1 className="bg-white rounded-lg w-11/12 items-center text-center mt-[20px] ml-[50px] mx-auto px-10 py-1 text-3xl font-bold">
        Random GIFS
      </h1>

      <div className="flex flex-col w-full items-center gap-y-5 mt-[25px]">
        <Random />
        <Tag />
      </div>
    </div>
  );
};

export default App;
