import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SignupForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [accountType, setAccountType] = useState("student");

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    if (formData.password != formData.confirmPassword) {
      toast.error("Password don't Match");
      return;
    }
    setIsLoggedIn(true);
    toast.success("Account Created");
    const accountData = {
      ...formData,
    };

    const finalData = {
      ...accountData,
      accountType,
    };

    console.log(finalData);
    navigate("/Dashboard");
  }
  return (
    <div>
      <div className="flex bg-gray-600 p-1 gap-x-1 my-3 rounded-full max-w-max ">
        <button
          className={`${
            accountType === "student"
              ? "bg-gray-800 text-white  "
              : "bg-transparent text-gray-200"
          } py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => setAccountType("student")}
        >
          Student
        </button>
        <button
          className={`${
            accountType === "instructor"
              ? "bg-gray-800 text-white  "
              : "bg-transparent text-gray-200"
          } py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => setAccountType("instructor")}
        >
          Instructor
        </button>
      </div>

      <form onSubmit={submitHandler}>
        {/* first name and lastname  */}
        <div className="flex justify-between mt-[5px]">
          <label>
            <p className="text-[0.875rem] text-gray-600 mb-1 leading-[1.375rem]">
              First Name<sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="firstName"
              onChange={changeHandler}
              placeholder="Enter First name"
              value={formData.firstName}
              className="bg-gray-700 rounded-[0.4rem] text-gray-500 w-full p-[10px] "
            />
          </label>
          <label>
            <p className="text-[0.875rem] text-gray-600 mb-1 leading-[1.375rem]">
              Last Name<sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="lastName"
              onChange={changeHandler}
              placeholder="Enter Last name"
              value={formData.lastName}
              className="bg-gray-700 rounded-[0.4rem] text-gray-500 w-full p-[10px] "
            />
          </label>
        </div>

        <div className="mt-[10px]">
          <label>
            <p className="text-[0.875rem] text-gray-600 mb-1 leading-[1.375rem]">
              Email Address<sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="email"
              name="email"
              onChange={changeHandler}
              placeholder="@gmail.com"
              value={formData.email}
              className="bg-gray-700 rounded-[0.4rem] text-gray-500 w-full p-[10px] "
            />
          </label>
        </div>

        <div className="flex justify-between mt-[10px]">
          <label className="relative">
            <p className="text-[0.875rem] text-gray-600 mb-1 leading-[1.375rem]">
              Create Password<sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              onChange={changeHandler}
              placeholder="********"
              value={formData.password}
              className="bg-gray-700 rounded-[0.4rem] text-gray-500 w-full p-[10px] "
            />
            <span
              className="absolute right-3  top-[38px] cursor-pointer text-white text-[22px]"
              onClick={() => {
                setShowPassword((prev) => !prev);
              }}
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </label>
          <label className="relative">
            <p className="text-[0.875rem] text-gray-600 mb-1 leading-[1.375rem]">
              Confirm Password<sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              onChange={changeHandler}
              placeholder="********"
              value={formData.confirmPassword}
              className="relative bg-gray-700 rounded-[0.4rem] text-gray-500 w-full p-[10px] "
            />
            <span
              className="absolute right-3  top-[38px] cursor-pointer text-white text-[22px]"
              onClick={() => {
                setShowConfirmPassword((prev) => !prev);
              }}
            >
              {showConfirmPassword ? (
                <AiOutlineEyeInvisible />
              ) : (
                <AiOutlineEye />
              )}
            </span>
          </label>
        </div>
        <button className="w-full bg-yellow-400 rounded-[8px] text-black font-medium px-[10px] py-[7px] mt-4">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
