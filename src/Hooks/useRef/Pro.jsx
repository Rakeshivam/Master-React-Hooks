import React, { useRef, useState } from "react";

const Pro = () => {
  const [count, setCount] = useState(0);
  let timerRef = useRef(null);

  const startTimer = () => {
    timerRef.current = window.setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    if (timerRef) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  return (
    <>
      <div>
        <p>Timer : {count}</p>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
      </div>
    </>
  );
};

export default Pro;
