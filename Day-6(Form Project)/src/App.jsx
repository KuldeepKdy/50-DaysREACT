import React, { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    comments: false,
    candidates: false,
    offers: false,
    pushNotifications: "",
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("Finally printig the form data");
    console.log(formData);
  }
  return (
    <div className="flex flex-col items-center">
      <form onSubmit={submitHandler}>
        <label htmlFor="firstName">First Name</label>
        <br />
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Kuldeep"
          value={formData.firstName}
          onChange={changeHandler}
          className="outline "
        />
        <br />
        <label htmlFor="lastName">First Name</label>
        <br />
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Yadav"
          value={formData.lastName}
          onChange={changeHandler}
          className="outline "
        />
        <br />
        <label htmlFor="email">Email Address</label>
        <br />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Kuldeepkdy@gmail.com"
          value={formData.email}
          onChange={changeHandler}
          className="outline"
        />
        <br />
        <label htmlFor="country">Country</label>
        <br />
        <select
          name="country"
          id="country"
          value={formData.country}
          onChange={changeHandler}
          className="outline"
        >
          <option value="">India</option>
          <option value="">Australia</option>
          <option value="">USA</option>
          <option value="">Mexico</option>
        </select>

        <br />
        <label htmlFor="streetAddress">Street</label>
        <br />
        <input
          type="text"
          name="streetAddress"
          id="streetAddress"
          placeholder="B-25"
          value={formData.streetAddress}
          onChange={changeHandler}
          className="outline "
        />
        <br />
        <label htmlFor="city">City</label>
        <br />
        <input
          type="text"
          name="city"
          id="city"
          placeholder="B-25"
          value={formData.city}
          onChange={changeHandler}
          className="outline "
        />
        <br />
        <label htmlFor="state">State</label>
        <br />
        <input
          type="text"
          name="state"
          id="state"
          placeholder="Haryana"
          value={formData.state}
          onChange={changeHandler}
          className="outline "
        />
        <br />
        <label htmlFor="postalCode">Postal Code</label>
        <br />
        <input
          type="text"
          name="postalCode"
          id="postalCode"
          placeholder="101111"
          value={formData.postalCode}
          onChange={changeHandler}
          className="outline "
        />
        <fieldset>
          <legend>By Email</legend>
          <div className="flex">
            <input
              type="checkbox"
              name="comments"
              id="comments"
              checked={formData.comments}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="comments">Comments</label>
              <p>Get notified when someones posts a comment on a posting.</p>
            </div>
          </div>
          <div className="flex">
            <input
              type="checkbox"
              name="candidates"
              id="candidates"
              checked={formData.candidates}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="candidates">candidates</label>
              <p>Get notified when a candidate applied for a job.</p>
            </div>
          </div>
          <div className="flex">
            <input
              type="checkbox"
              name="offers"
              id="offers"
              checked={formData.offers}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="offers">Offers</label>
              <p>Get notified when someones posts a offer.</p>
            </div>
          </div>
        </fieldset>
        <fieldset>
          <legend>Push Notification</legend>
          <p>These are delievered via SMS to your mobile phone</p>
          <br />
          <label htmlFor="pushEverything">Everything</label>
          <input
            type="radio"
            id="pushEverything"
            name="pushNotifications"
            value="Everything"
            onChange={changeHandler}
          />
          <br />
          <label htmlFor="pushEmail">Same as Email</label>
          <input
            type="radio"
            id="pushEmail"
            name="pushNotifications"
            value="Same as Email"
            onChange={changeHandler}
          />
          <br />
          <label htmlFor="pushNoting">No push notification</label>

          <input
            type="radio"
            id="pushNoting"
            name="pushNotifications"
            value="No Push Notification"
            onChange={changeHandler}
          />
        </fieldset>

        <button className="bg-blue-600 text-white font-bold rounded-md px-4 py-2">
          Save
        </button>
      </form>
    </div>
  );
};

export default App;
