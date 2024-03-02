import React, { useEffect, useState } from "react";
import ProgressBar from "./components/ProgressBar";

const App = () => {
  const [value, setValue] = useState(0);
  const [sucess, setSucess] = useState(false);
  useEffect(() => {
    setInterval(() => {
      setValue((val) => val + 1);
    }, 100);
  }, []);

  return (
    <div className="w-full p-10 h-screen gap-5 flex flex-col items-center justify-center">
      <span>Progress Bar</span>
      <ProgressBar value={value} onComplete={() => setSucess(true)} />
      <span>{sucess ? "Complete!" : "Loading..."}</span>
    </div>
  );
};

export default App;
