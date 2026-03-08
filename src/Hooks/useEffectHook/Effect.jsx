import React, { useEffect, useState } from "react";

const Effect = () => {
  const [count, setCount] = useState(0);
  //   const [number, setNumber] = useState(10);

  //   useEffect(() => {
  //     console.log("Learning useEffect");
  //   }, [number]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {/* <h2>Count : {count}</h2>
      <h2>Count Down : {number}</h2>
      <button onClick={() => setCount(count + 1)}>Increament</button>
      <button onClick={() => setNumber(number - 1)}>Decreament</button> */}

      <h3>Timer : {count}</h3>
    </>
  );
};

export default Effect;
