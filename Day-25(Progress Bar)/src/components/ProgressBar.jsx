import React, { useEffect, useState } from "react";

const ProgressBar = ({ value = 0, onComplete = () => {} }) => {
  const [percent, setPercent] = useState(value);
  useEffect(() => {
    // edge case for less than 0 and more than 100
    setPercent(Math.min(100, Math.max(value, 0)));

    if (value >= 100) {
      onComplete();
    }
  }, [value]);

  return (
    <div className="progress relative overflow-hidden relative flex bg-slate-200 w-[500px] h-[35px] border border-zinc-400 rounded-full">
      {/* tofixed is used to round the input value for eg-50.2 is converted to 50 */}
      <span
        style={{ color: percent > 49 ? "white" : "black" }}
        className="absolute text-white w-full flex justify-center items-center"
      >
        {percent.toFixed()}%
      </span>
      <div
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={percent.toFixed()}
        className="h-full bg-black "
        style={{ width: `${percent}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
