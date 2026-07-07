import React, { useState, useEffect } from "react";

const UseeffectHook = () => {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);
// No dependency passed: Run in every render
 {/* 
    useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });
*/} 

// Dependency Empty:Run in first render only

    useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
},[]);


// Dependency Passed: Run in first render and when dependency changes
{/*
    useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]);
*/}

  {/* 
    return (
    <>
    <p>Count:{count}</p>
    <button onClick={()=>setCount((c)=>c+1)} className="border-2">+</button>
    <p>Calculation:{calculation}</p>
    </>
  );*/}
  return(
    <div>Count:{count}</div>
  )
};

export default UseeffectHook; 