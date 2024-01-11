import React from "react";
import "./App.css";
import { Route, Routes, NavLink} from "react-router-dom";
import MainHeader from "./components/MainHeader";
import Home from "./components/Home";
import Support from "./components/Support";
import About from "./components/About";
import Labs from "./components/Labs";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/About">About</NavLink>
            <NavLink to="/Support">Support</NavLink>
            <NavLink to="/labs">Labs</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<MainHeader />}></Route>
        {/* Default Route */}
        <Route index element={<Home />}></Route>
        <Route path="/Support" element={<Support />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Labs" element={<Labs />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
};

export default App;
