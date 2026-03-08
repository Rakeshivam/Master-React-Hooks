import React, { useRef } from "react";

const UseRef = () => {
  const currentRef = useRef(0);

  const handleClick = () => {
    currentRef.current += 1;
    console.log(currentRef.current);
  };

  return (
    <>
      {/* <div>count: {currentRef.current}</div> */}
      <button onClick={handleClick}>Click</button>
    </>
  );
};

export default UseRef;
