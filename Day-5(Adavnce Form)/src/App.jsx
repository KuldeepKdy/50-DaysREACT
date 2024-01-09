import React, { useState } from "react";

const App = () => {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");

  // function changeFirstNameHandler(event) {
  //   setFirstName(event.target.value);
  // }
  // function changeLastNameHandler(event) {
  //   setLastName(event.target.value);
  // }
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isVisible: true,
    mode: "",
    favCar: "",
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function submitHandler(event) {
    event.preventDefault();

    console.log("Finally printinf the entre form ka data");
    console.log(formData);
  }
  return (
    <div className="App flex flex-col text-center w-[100vw] h-[100vh] p-[5rem] text-black">
      <form onSubmit={submitHandler} className="App flex flex-col border-4">
        <input
          type="text"
          placeholder="first name"
          onChange={changeHandler}
          name="firstName"
          value={formData.firstName}
        />
        <input
          type="text"
          placeholder="last name"
          onChange={changeHandler}
          name="lastName"
          value={formData.lastName}
        />
        <input
          type="email"
          placeholder="@gmail.com"
          onChange={changeHandler}
          name="email"
          value={formData.email}
        />
        <textarea
          placeholder="Enter your Comments"
          onChange={changeHandler}
          name="comments"
          value={formData.comments}
          cols="30"
          rows="10"
        ></textarea>
        <br />
        <label htmlFor="isVisible">Am i Visible ? </label>
        <input
          id="isVisible"
          type="checkbox"
          onChange={changeHandler}
          name="isVisible"
          checked={formData.isVisible}
        />

        <br />
        <br />

        <fieldset>
          <legend>Mode:</legend>
          <input
            type="radio"
            value="Online-Mode"
            id="Online-Mode"
            onChange={changeHandler}
            name="mode"
            checked={formData.mode === "Online-Mode"}
          />
          <label htmlFor="Online-Mode">Online mode</label>
          <input
            type="radio"
            value="Offline-Mode"
            id="Offline-Mode"
            onChange={changeHandler}
            name="mode"
            checked={formData.mode === "Offline-Mode"}
          />
          <label htmlFor="Online-Mode">Online mode</label>
        </fieldset>
        <label htmlFor="favCar">Tell me Your Fav Car</label>
        <select
          name="favCar"
          id="favCar"
          value={formData.favCar}
          onChange={changeHandler}
        >
          <option value="scarpio">Scarpio</option>
          <option value="fartuner">Fartuner</option>
          <option value="thar">Thar</option>
          <option value="legender">Legender</option>
          <option value="defender">Defender</option>
        </select>
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
