import React, { useEffect, useState } from "react";

const Manager = () => {
  const [form, setForm] = useState({
    site: "",
    username: "",
    password: "",
  });

  const [passwordArray, setPasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      passwordArray = JSON.parse(passwords);
    }
  }, []);

  const savePassword = () => {
    setPasswordArray([...passwordArray, form]);
    localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]));
    console.log(form);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <div
        className="flex w-full h-full items-start justify-center px-20  flex-col 
     pt-20"
      >
        <div className="logo w-full  flex items-center justify-center font-bold text-center ">
          <span>Pass</span>
          <span className="text-zinc-500 font-bold text-center">OP?</span>
        </div>
        <p className="w-full text-center mb-5">Your own Password Manager</p>
        <div className="text-white w-full h-full  md:w-[60%] flex flex-col gap-5 p-10  items-center justify-start">
          <input
            type="text "
            name="site"
            value={form.site}
            onChange={handleChange}
            placeholder="Enter Website URL"
            className="w-full rounded-sm py-1.5 px-3 outline-none border-2 border-b-teal-400 text-black "
          />
          <div className="flex w-full items-center justify-center gap-5">
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              placeholder="Enter Username"
              className="w-full rounded-sm py-1 px-3 outline-none border-2 border-b-teal-400 text-black "
            />
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter Password"
              className="w-full rounded-sm py-1 px-3 outline-none border-2 border-b-teal-400 text-black "
            />
          </div>
          <button
            onClick={savePassword}
            className="px-4 py-2 rounded-full bg-purple-500 mt-5"
          >
            Add Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default Manager;
