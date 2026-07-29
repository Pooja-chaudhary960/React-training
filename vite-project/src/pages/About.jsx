import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { submitData } from "../redux/blogSlice1";

const About = () => {
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    gender: "",
    hobbies: [],
    country: "",
  });
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setInputs((prev) => ({
        ...prev,
        hobbies: checked
          ? [...prev.hobbies, value]
          : prev.hobbies.filter((item) => item !== value),
      }));
    } else {
      setInputs((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    dispatch(submitData(inputs));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white shadow-lg rounded-lg p-8 space-y-5"
      >
        <h2 className="text-2xl font-bold text-center text-blue-600">
          Registration Form
        </h2>
        <div>
          <label className="block mb-2 font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={inputs.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block mb-2 font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={inputs.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Gender
          </label>

          <div className="flex gap-6">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={inputs.gender === "Male"}
                onChange={handleChange}
                className="w-4 h-4 text-blue-600"
              />
              Male
            </label>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={inputs.gender === "Female"}
                onChange={handleChange}
                className="w-4 h-4 text-blue-600"
              />
              Female
            </label>
          </div>
        </div>
        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Hobbies
          </label>

          <div className="grid grid-cols-2 gap-3">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="hobbies"
                value="reading"
                checked={inputs.hobbies.includes("reading")}
                onChange={handleChange}
                className="w-4 h-4 text-blue-600"
              />
              Reading
            </label>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="hobbies"
                value="dancing"
                checked={inputs.hobbies.includes("dancing")}
                onChange={handleChange}
                className="w-4 h-4 text-blue-600"
              />
              Dancing
            </label>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="hobbies"
                value="playing"
                checked={inputs.hobbies.includes("playing")}
                onChange={handleChange}
                className="w-4 h-4 text-blue-600"
              />
              Playing
            </label>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="hobbies"
                value="singing"
                checked={inputs.hobbies.includes("singing")}
                onChange={handleChange}
                className="w-4 h-4 text-blue-600"
              />
              Singing
            </label>
          </div>
        </div>
        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Country
          </label>

          <select
            name="country"
            value={inputs.country}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Country</option>
            <option value="Nepal">Nepal</option>
            <option value="India">India</option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default About;