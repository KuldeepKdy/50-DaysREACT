import React from "react";

const Manager = () => {
  return (
    <div class="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <div className=" mx-auto max-w-4xl">
        <h1>Pass</h1>
        <p>Your own Password Manager</p>
        <div
          className="text-white flex flex-4
         p-4"
        >
          <input type="text " />
          <div className="flex">
            <input type="text" />
            <input type="text" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manager;
