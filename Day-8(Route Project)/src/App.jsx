import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/Login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/Signup"
          element={<Signup setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default App;
