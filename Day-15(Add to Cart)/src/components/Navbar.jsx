import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-blue-500">
      <div className="flex flex-row justify-between">
        <NavLink to="/">
          <div>
            <img src="https://cdn-icons-png.flaticon.com/512/3190/3190404.png" />
          </div>
        </NavLink>
        <div>
          <NavLink to="/">
            <p>Home</p>
          </NavLink>
          <NavLink to="cart">
            <FaShoppingCart />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
