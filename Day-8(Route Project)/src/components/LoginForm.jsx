import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.value]: event.target.value,
    }));
  }
  return (
    <form>
      <label>
        <p>
          Email Adress <sup>*</sup>
        </p>
        <input
          required
          type="email"
          value={formData.email}
          onChange={changeHandler}
          placeholder="Enter email Account"
          name="email"
        />
      </label>
      <label>
        <p>
          Password <sup>*</sup>
        </p>
        <input
          required
          type={showPassword ? "text" : "password"}
          value={formData.password}
          onChange={changeHandler}
          placeholder="Enter email Account"
          name="password"
        />

        <span
          onClick={() => {
            setShowPassword((prev) => !prev);
          }}
        >
          {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
        </span>
        <Link to="#">
          <p>Forget Password</p>
        </Link>
      </label>

      <button>Sign in</button>
    </form>
  );
};

export default LoginForm;
