import React from "react";
import { useNavigate } from "react-router-dom";

const Labs = () => {
  const navigate = useNavigate();
  function clickHandler() {
    //move to about page
    navigate("/Support");
  }
  return (
    <div>
      <div>This is Labs Page</div>
      <button onClick={clickHandler} className="p-2 bg-green-400">
        Move to About Page
      </button>
    </div>
  );
};

export default Labs;
