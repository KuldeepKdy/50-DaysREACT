import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experiance from "./components/Experiance";

const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experiance />

      <SocialLinks />
    </div>
  );
};

export default App;
