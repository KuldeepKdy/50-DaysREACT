import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [count, setcount] = useState(0);
  function decreaseHandler() {
    setcount(count - 1);
  }
  function increaseHandler() {
    setcount(count + 1);
  }
  function resetHandler() {
    setcount(0);
  }
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-slate-500 flex-col gap-10">
      <div className="font-medium text-2xl ">
        Increment & Decrement
      </div>
      <div className="bg-slate-50 flex justify-center gap-12 py-3 rounded-sm text-2xl  ">
        <button
          onClick={decreaseHandler}
          className="border-r-2 text-center w-20 border-black text-5xl"
        >
          -
        </button>
        <div className="font-bold gap-12 text-5xl">{count}</div>
        <button
          onClick={increaseHandler}
          className="border-l-2 text-center w-20 border-black text-5xl px-3"
        >
          +
        </button>
      </div>
      <button
        onClick={resetHandler}
        className="bg-black text-white px-5 py-2 rounded-sm text-lg"
      >
        Reset
      </button>
    </div>
  );
};

export default App;
