import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  const [showScrollBTN, setshowScrollBTN] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setshowScrollBTN(true);
      } else {
        setshowScrollBTN(false);
      }
    });
  }, []);

  return (
    <div className=" bg-black w-screen min-h-screen text-white">
      <Header />
      <Main />

      {showScrollBTN && (
        <a href="#up">
          <button
            onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-10 right-20 py-2 px-4  bg-gray-400 bg-opacity-25 rounded-2xl"
          >
            Arrow Up
          </button>
        </a>
      )}
    </div>
  );
};

export default App;
