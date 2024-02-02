import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  const users = useSelector((state) => state.users);
  
  return (
    <div className="w-full h-screen flex flex-col gap-5">
      <h2>Crud App With JSON Server</h2>
      <Link
        to="/create"
        className=" flex items-center justify-center p-3 rounded-md bg-black text-white"
      >
        Create +
      </Link>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map(({ id, name, email }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{email}</td>
              <td className=" flex gap-2">
                <button className="p-3 rounded-md bg-black text-white">
                  Edit
                </button>
                <button className="p-3 rounded-md bg-black text-white">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
