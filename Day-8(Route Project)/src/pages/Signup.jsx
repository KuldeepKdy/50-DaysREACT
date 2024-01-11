import React from "react";
import Template from "../components/Template";
import loginImg from "../assets/Deepsleep.jpeg";
const Login = ({ setIsLoggedIn }) => {
  return (
    <div>
      <Template
        title="Join the millions learning to code with StudyNotation for free"
        desc1="Build skills for today, tomorrow, and beyond"
        desc2="Education to future-proof your career"
        image={loginImg}
        formtype="login"
        setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  );
};

export default Login;
