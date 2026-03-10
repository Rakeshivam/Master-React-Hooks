import React, { useState } from "react";

const useCounter = (initialState = 100, step = 2) => {
  const [counter, setCounter] = useState(initialState);

  const handleIncreament = () => {
    setCounter(counter + step);
  };

  const handleDecreament = () => {
    setCounter(counter - step);
  };
  return {counter, handleDecreament, handleIncreament}
};

export default useCounter;
