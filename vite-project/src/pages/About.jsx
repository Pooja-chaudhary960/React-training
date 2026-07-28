import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { submitData } from "../redux/blogSlice1";

const About = () => {
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    dispatch(submitData(inputs));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={inputs.name}
          onChange={handleChange}
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={inputs.email}
          onChange={handleChange}
        />

        <label>Gender</label>

        <input
          type="radio"
          name="gender"
          value="Male"
          checked={inputs.gender === "Male"}
          onChange={handleChange}
        />
        <label>Male</label>

        <input
          type="radio"
          name="gender"
          value="Female"
          checked={inputs.gender === "Female"}
          onChange={handleChange}
        />
        <label>Female</label>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default About;