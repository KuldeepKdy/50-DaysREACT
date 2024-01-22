import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";

const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <About />

      <SocialLinks />
    </div>
  );
};

export default App;
