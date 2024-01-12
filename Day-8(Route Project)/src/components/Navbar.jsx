import React from "react";
import logo from "../assets/brand.svg";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
const Navbar = (props) => {
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;
  return (
    <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
      <Link to="/">
        <img src={logo} alt="Logo" width={160} height={32} loading="lazy" />
      </Link>

      <nav className="">
        <ul className="flex gap-x-6 text-gray-100">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>

      <div className="flex items-center gap-x-4 ">
        {!isLoggedIn && (
          <Link to="/Login">
            <button className="bg-gray-800 text-gray-100 py-[6px] px-[12px] rounded-[8px] border-b border-t">
              Login
            </button>
          </Link>
        )}
        {!isLoggedIn && (
          <Link to="/Signup">
            <button className="bg-gray-800 text-gray-100 py-[6px] px-[12px] rounded-[8px] border-b border-t">
              Sign Up
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/">
            <button
              onClick={() => {
                setIsLoggedIn(false);
                toast.success("Logged Out");
              }}
            >
              Log out
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link>
            <button to="/Dashboard">Dashboard</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
