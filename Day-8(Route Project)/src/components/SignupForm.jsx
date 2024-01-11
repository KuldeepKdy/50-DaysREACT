import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }
  return (
    <div>
      <div>
        <button>Student</button>
        <button>Instructor</button>
      </div>

      <form>
        {/* first name and lastname  */}
        <div>
          <label>
            <p>
              First Name<sup>*</sup>
            </p>
            <input
              required
              type="text"
              name="firstName"
              onChange={changeHandler}
              placeholder="Enter First name"
              value={formData.firstName}
            />
          </label>
          <label>
            <p>
              Last Name<sup>*</sup>
            </p>
            <input
              required
              type="text"
              name="lastName"
              onChange={changeHandler}
              placeholder="Enter Last name"
              value={formData.lastName}
            />
          </label>
        </div>

        <label>
          <p>
            Email Address<sup>*</sup>
          </p>
          <input
            required
            type="email"
            name="email"
            onChange={changeHandler}
            placeholder="@gmail.com"
            value={formData.email}
          />
        </label>
        <div>
          <label>
            <p>
              Create Password<sup>*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              onChange={changeHandler}
              placeholder="********"
              value={formData.password}
            />
            <span
              onClick={() => {
                setShowPassword((prev) => !prev);
              }}
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </label>
          <label>
            <p>
              Confirm Password<sup>*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              onChange={changeHandler}
              placeholder="********"
              value={formData.confirmPassword}
            />
            <span
              onClick={() => {
                setShowPassword((prev) => !prev);
              }}
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutLineEye />}
            </span>
          </label>
        </div>
        <button>Create Account</button>
      </form>
    </div>
  );
};

export default SignupForm;
