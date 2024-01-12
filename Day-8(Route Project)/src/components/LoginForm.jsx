import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged In");
    navigate("/Dashboard");
  }
  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col w-full gap-y-4 mt-6"
    >
      <label className="w-full">
        <p className="text-[0.875rem] text-gray-600 mb-1 leading-[1.375rem]">
          Email Adress <sup className="text-pink-200">*</sup>
        </p>
        <input
          required
          type="email"
          value={formData.email}
          onChange={changeHandler}
          placeholder="Enter email Account"
          name="email"
          className="bg-gray-700 rounded-[0.5rem] text-gray-500 w-full p-[12px] "
        />
      </label>
      <label className="w-full relative">
        <p className="text-[0.875rem] text-gray-600 mb-1 leading-[1.375rem]">
          Password <sup className="text-pink-200">*</sup>
        </p>
        <input
          required
          type={showPassword ? "text" : "password"}
          value={formData.password}
          onChange={changeHandler}
          placeholder="Enter Password"
          name="password"
          className="bg-gray-700 rounded-[0.5rem] text-gray-500 w-full p-[12px] "
        />

        <span
          className="absolute right-3  top-[38px] cursor-pointer text-white text-[22px]"
          onClick={() => {
            setShowPassword((prev) => !prev);
          }}
        >
          {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
        </span>
        <Link to="#">
          <p className="text-xs mt-1 text-blue-300 max-w-max ml-auto ">
            Forget Password
          </p>
        </Link>
      </label>

      <button className="bg-yellow-400 rounded-[8px] text-black font-medium px-[12px] py-[8px] mt-6">
        Sign in
      </button>
    </form>
  );
};

export default LoginForm;
