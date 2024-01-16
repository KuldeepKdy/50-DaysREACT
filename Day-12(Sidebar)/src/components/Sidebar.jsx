import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { MdDashboardCustomize } from "react-icons/md";
import { Link } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <div className={sidebar === false ? "sidebar" : "newsidebar"}>
      <div className="logoContainer">
        <h2 className="title">EverGreen</h2>
      </div>
      <div
        className={
          sidebar === false ? "burgerContainer" : "burgerContainertrue "
        }
        onClick={() => setSidebar(!sidebar)}
      >
        {sidebar === false ? <IoMenu /> : <RxCross1 />}
      </div>
      <div className="profileContainer flex flex-col gap-0.5 text-center">
        <CgProfile />
        <div className="profileContents">
          <p className="name">Hello Kuldeep</p>
          <p>Kuldeepkdy2@gamil.com</p>
        </div>
      </div>

      <div className="contentContainer pt-10 w-full h-full bg-[#D6CFCB]">
        <ul className="flex flex-col  items-center gap-5">
          <li className="flex items-center">
            <MdDashboardCustomize />
            <Link to="/">Dashboard</Link>
          </li>
          <li className="flex items-center">
            <MdDashboardCustomize />
            <Link to="/news">News</Link>
          </li>
          <li className="flex items-center">
            <MdDashboardCustomize />
            <Link to="/performance">Performnce</Link>
          </li>
          <li className="flex items-center">
            <MdDashboardCustomize />
            <Link to="/setting">Setting</Link>
          </li>
          <li className="flex items-center">
            <MdDashboardCustomize />
            <Link to="/support">Support</Link>
          </li>
          <li className="flex items-center">
            <MdDashboardCustomize />
            <Link to="/transition">Transition</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
