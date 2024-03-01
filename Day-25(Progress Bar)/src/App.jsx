import React from "react";
import ProgressBar from "./components/ProgressBar";

const App = () => {
  return (
    <div>
      <span>Progress Bar</span>
      <ProgressBar value={25} />
    </div>
  );
};

export default App;
