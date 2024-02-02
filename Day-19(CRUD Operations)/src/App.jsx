import React from "react";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Create from "./Create";
import Update from "./Update";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit/:id" element={<Update/>} />
      </Routes>
    </div>
  );
};

export default App;
