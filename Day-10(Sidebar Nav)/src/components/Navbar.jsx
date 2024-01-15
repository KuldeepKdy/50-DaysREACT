import { Link } from "react-router-dom";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
import Slidebar from "./Slidebar";

const Navbar = () => {
  const [hamBurger, setHamBurger] = useState(false);
  return (
    <>
      <nav className="bg-red-400 w-full h-[4rem] flex  text-center items-center justify-around">
        <Link to="/" className="font-bold text-3xl">
          EPIC
        </Link>

        <div className="flex gap-3 ml-[40px] items-center bold">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/products">Products</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="signup">
            <button className="  border-none outline-none text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-2">
              SignUp
            </button>
          </Link>
          <div
            className=" flex md:hidden flex-col"
            onClick={() => setHamBurger(!hamBurger)}
          >
            {hamBurger === true ? <RxCross1 /> : <GiHamburgerMenu />}
          </div>
        </div>
      </nav>
      <div>{hamBurger === true ? <Slidebar /> : ""}</div>
    </>
  );
};

export default Navbar;
