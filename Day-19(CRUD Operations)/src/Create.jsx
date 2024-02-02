import React, { useState } from "react";
import { addUser } from "./redux/slices/UserReducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addUser({ id: users[users.length - 1].id + 1, name, email }));
    navigate("/");
  };
  return (
    <div className="w-full h-screen flex items-center justify-center bg-pink-100 ">
      <div className="p-5 border">
        <h3>Add New User</h3>
        <form className=" flex flex-col gap-5" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <br />
          <button className=" flex items-center justify-center p-3 rounded-md bg-black text-white">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
