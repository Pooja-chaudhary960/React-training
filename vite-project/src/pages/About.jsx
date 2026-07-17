import React, { useState } from "react";

const About = () => {
  //const [name, setName] = useState("");
  //const [email, setEmail] = useState("");
  //const [password, setPassword] = useState("");
 // const [gender, setGender] = useState("");
 const [inputs, setInputs] = useState({
 

 });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
  };
  const handleChange = (e) =>{
    const {name,value} = e.target;
   setInputs((prev)=>({...prev,[name]:value}))
  }
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
    <div>
      <h1>Name: {inputs.name}</h1>
      <h2>Email: {inputs.email}</h2>
      <h2>Gender: {inputs.gender}</h2>
    </div>
    </div>
  );
};

export default About;
