import React from "react";
import useCounter from "./useCounter";

const ChildB = () => {
  const { counter, handleDecreament, handleIncreament } = useCounter();
  return (
    <>
      <button onClick={handleIncreament}>Increament</button>
      <button onClick={handleDecreament}>Decreament</button>
      {counter}
    </>
  )
};

export default ChildB;
