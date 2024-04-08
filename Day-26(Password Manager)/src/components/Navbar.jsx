import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-purple-200 flex items-center justify-between px-4 h-14">
      <div className="logo font-bold ">
        <span>Pass</span>
        <span className="text-zinc-500 font-bold text-left text-lg">OP?</span>
      </div>
      <ul>
        <li className="flex gap-4">
          <a className="hover:font-bold" href="/">
            Home
          </a>
          <a className="hover:font-bold" href="#">
            About
          </a>
          <a className="hover:font-bold" href="#">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
