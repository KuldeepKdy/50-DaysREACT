import React from "react";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Create from "./Create";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </div>
  );
};

export default App;
