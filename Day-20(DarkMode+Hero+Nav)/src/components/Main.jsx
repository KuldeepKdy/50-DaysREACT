import React, { useState } from "react";
import { GoLink } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
const Main = () => {
  const myProjects = [
    {
      projectTitle: "reactvproject",
      category: ["react"],
      imgPath: "a",
    },
    {
      projectTitle: "react and css Project",
      category: ["react", "css"],
      imgPath: "b",
    },
    {
      projectTitle: "css project",
      category: ["css"],
      imgPath: "c",
    },
    {
      projectTitle: "react project",
      category: ["react"],
      imgPath: "d",
    },
    {
      projectTitle: "css Project",
      category: ["css"],
      imgPath: "e",
    },
    {
      projectTitle: "JavaScript project",
      category: ["js"],
      imgPath: "f",
    },
    {
      projectTitle: "node project",
      category: ["node"],
      imgPath: "f",
    },
    {
      projectTitle: "node project",
      category: ["node"],
      imgPath: "g",
    },
    {
      projectTitle: "JavaScript project",
      category: ["js"],
      imgPath: "h",
    },
  ];
  const handleClick = (buttonCategory) => {
    setcurrentActive(buttonCategory);
    const newArr = myProjects.filter((item) => {
      const ZZZ = item.category.filter((myItem) => {
        return myItem === buttonCategory;
      });
      return ZZZ[0] === buttonCategory;
    });
    setarr(newArr);
  };
  const [currentactive, setcurrentActive] = useState("all");
  const [arr, setarr] = useState(myProjects);
  return (
    <main className="flex w-full  pt-32 border border-green-400 gap-5 items-center justify-center">
      <section className="flex-grow-1  flex-col gap-2 h-full w-[40%] flex items-center justify-center  border border-red-500">
        <button
          onClick={() => {
            setcurrentActive("all");
            setarr(myProjects);
          }}
          className={`bg-gray-400 bg-opacity-25 px-5 py-2 rounded-lg + ${
            currentactive === "all" ? "active" : null
          }`}
        >
          All Projects
        </button>
        <button
          onClick={() => {
            handleClick("css");
          }}
          className={`bg-gray-400 bg-opacity-25 px-5 py-2 rounded-lg + ${
            currentactive === "css" ? "active" : null
          }`}
        >
          Html and Css
        </button>
        <button
          onClick={() => {
            handleClick("js");
          }}
          className={`bg-gray-400 bg-opacity-25 px-5 py-2 rounded-lg + ${
            currentactive === "js" ? "active" : null
          }`}
        >
          JavaScript
        </button>
        <button
          onClick={() => {
            handleClick("react");
          }}
          className={`bg-gray-400 bg-opacity-25 px-5 py-2 rounded-lg + ${
            currentactive === "react" ? "active" : null
          }`}
        >
          React & MUI
        </button>
        <button
          onClick={() => {
            handleClick("node");
          }}
          className={`bg-gray-400 bg-opacity-25 px-5 py-2 rounded-lg + ${
            currentactive === "node" ? "active" : null
          }`}
        >
          Node & Express
        </button>
      </section>

      <section className="flex-grow-2 gap-10 flex-wrap w-full h-full flex items-center justify-center  border-red-500 border">
        {arr.map((item) => {
          return (
            <article
              key={item.imgPath}
              className=" flex flex-col  w-[20rem] hover:border hover:rotate-1 transition-all duration-100 ease-linear bg-gradient-to-b from-gray-600  hover:border-blue-400 bg-gray-400 bg-opacity-25 px-5 py-2 rounded-lg items-center justify-center"
            >
              <img
                className=""
                src="https://images.pexels.com/photos/3752194/pexels-photo-3752194.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt=""
              />
              <div>
                <h1>{item.projectTitle}</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Eius, deserunt.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-5">
                    <GoLink />
                    <FaGithub />
                  </div>
                  <a href="#">More→</a>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default Main;
