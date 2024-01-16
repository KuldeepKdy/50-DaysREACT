import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Performance from "./pages/Performance";
import News from "./pages/News";
import Setting from "./pages/Setting";
import Support from "./pages/Support";
import Transition from "./pages/Transition";

const App = () => {
  return (
    <div className="App">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/news" element={<News />} />
        <Route path="/performance" element={<Performance />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/support" element={<Support />} />
        <Route path="/transition" element={<Transition />} />
      </Routes>
    </div>
  );
};

export default App;
