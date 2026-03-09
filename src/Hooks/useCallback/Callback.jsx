import React, { useCallback, useState } from "react";
import Child from "./Child";

const Callback = () => {
  const [count, setCount] = useState(0);
  const [minus, setMinus] = useState(100);

  const handleClick = useCallback(() => {
    console.log("Button Clicked");
    
  },[])
  return (
    <>
      <p>count : {count}</p>
      <button onClick={() => setCount(count + 1)}>Increament</button>
      <p>Minus : {minus}</p>
      <button onClick={() => setMinus(minus-1)}>Minus</button>
      <br />
      <Child handleClick = {handleClick}/>
      
    </>
  );
};

export default Callback;
