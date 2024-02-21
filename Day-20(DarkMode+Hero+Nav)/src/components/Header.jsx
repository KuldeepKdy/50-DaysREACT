import React, { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import { GiCrossMark } from "react-icons/gi";
import { MdSunny } from "react-icons/md";
import { BsMoonStarsFill } from "react-icons/bs";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mode, setMode] = useState(false);
  return (
    <header className="w-screen  py-4 h-auto flex items-center justify-around border fixed  ">
      <button
        onClick={() => setMobileMenu(!mobileMenu)}
        className="flex md:hidden items-center text-3xl bg-gray-400 bg-opacity-25 rounded-full px-4 py-2"
      >
        {mobileMenu ? <GiCrossMark /> : <IoMenuSharp />}
      </button>
      <nav className="hidden md:flex">
        <ul className="flex gap-4 bg-gray-400 bg-opacity-25 rounded-full px-5 py-3">
          <li>About</li>
          <li>Article</li>
          <li>Projects</li>
          <li>Speaking</li>
          <li>Contact</li>
        </ul>
      </nav>
      <button
        onClick={() => setMode(!mode)}
        className="bg-gray-400 text-xl bg-opacity-25 rounded-full px-5 py-3"
      >
        {mode ? <MdSunny /> : <BsMoonStarsFill />}
      </button>
      <nav
        className={
          mobileMenu ? "flex  absolute top-16 left-48 backdrop-blur " : "hidden relative"
        }
      >
        <ul className="flex flex-col gap-4  text-xl  bg-gray-400 bg-opacity-25 rounded-2xl px-10 py-5">
          <li>About</li>
          <li>Article</li>
          <li>Projects</li>
          <li>Speaking</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
