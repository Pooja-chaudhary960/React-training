import React, { useState } from "react";
import { use } from "react";

const UseStateHook = () => {
  const [color, setColor] = useState("Red");
  const [count, setCount]=useState(0);
  const [letter, setLetter]=useState("Hello World");
  const [car, setCar]=useState(
    {
      brand:"BMW",
      model:"Mustang",
      year:"1964",
      color:"red"
    }
  )
  const updateColor=()=>{
    setCar(previousState=>{
      return {...previousState, model:"Kathmandu", year:"1990", color:"blue"}
    })
  }
  const addData = ()=>{
   setCount((prev)=>prev+1)
   setCount((prev)=>prev+1)
  }
  
  return (
    <>
      <h1>This is {color}</h1>
      <button className="border-2" onClick={() => setColor("Blue")}>
        Change Color
      </button>
      <h1>Counter:{count}</h1>
      <button className="border-2" onClick={addData}>Increment</button>
      <button className="border-2" onClick={()=>setCount(count-1)}>Decrement</button>
      <div >
        <h1>{letter}</h1>
        <button className="border-2" onClick={()=>setLetter(letter.toUpperCase())}>UpperCase</button>
        <button className="border-2" onClick={()=>setLetter(letter.toLowerCase())}>LowerCase</button>
      </div>
      <div>
        <h1>Brand:{car.brand}</h1>
        <p>It is {car.color} {car.model} from {car.year}</p>
        <button className="border-2" onClick={updateColor}>update</button>
      </div>
    </>
  );
};

export default UseStateHook;