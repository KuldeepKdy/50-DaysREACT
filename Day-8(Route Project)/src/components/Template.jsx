import React from "react";
import frameImage from "../assets/Deepsleep.jpeg";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import { FcGoogle } from "react-icons/fc";

const Template = ({ title, desc1, desc2, image, formtype, setIsLoggedIn }) => {
  return (
    <div className="flex w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0 justify-between">
      <div className="w-11/12 max-w-[450px]">
        <h1 className="text-gray-100 font-semibold text-[1.775rem] leading-[2.375rem]">
          {title}
        </h1>
        <p className="text-[1rem] leading-[1.4rem] mt-2">
          <span className="text-green-300">{desc1}.</span>
          <br />
          <span className="text-blue-300 italic">{desc2}.</span>
        </p>
        {formtype === "Signup" ? (
          <SignupForm setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <LoginForm setIsLoggedIn={setIsLoggedIn} />
        )}
        <div className="flex w-full items-center my-4 gap-x-2">
          <div className="w-full h-[1px] bg-gray-800 "></div>
          <p className="text-gray-800 font-medium leading[1.375rem] ">OR</p>
          <div className="w-full h-[1px] bg-gray-800 font-medium leading-[1.375rem]"></div>
        </div>

        <button className="bg-gray-800 w-full flex justify-center items-center rounded-[8px] font-medium text-gray-200 border-gray-500 px-[12px] py-[6px] gap-x-2 mt-4">
          <FcGoogle />
          <p>Sign in with Google</p>
        </button>
      </div>
      <div className="relative w-11/12 max-w-[450px]">
        <img
          src={frameImage}
          alt="Pattern"
          width={558}
          height={504}
          loading="lazy"
        />
        <img
          src={image}
          alt="Pattern"
          width={558}
          height={490}
          loading="lazy"
          className="absolute -top-4 right-4"
        />
      </div>
    </div>
  );
};

export default Template;
