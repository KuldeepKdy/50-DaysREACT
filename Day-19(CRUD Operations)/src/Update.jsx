import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "./redux/slices/UserReducer";

const Update = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const existingUser = users.filter((f) => f.id == id);
  const { name, email } = existingUser[0];
  const [uname, setName] = useState(name);
  const [uemail, setEmail] = useState(email);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleUpdate = (event) => {
    event.preventDefault();
    dispatch(updateUser({ id: id, name: uname, email: uemail }));
    navigate("/");
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-pink-100 ">
      <div className="p-5 border">
        <h3>Update User</h3>
        <form className=" flex flex-col gap-5" onSubmit={handleUpdate}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              value={uname}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="@gmail.com"
              value={uemail}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <br />
          <button className=" flex items-center justify-center p-3 rounded-md bg-black text-white">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update;
