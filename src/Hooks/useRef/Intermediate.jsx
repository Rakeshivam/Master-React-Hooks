import React, { useRef, useState } from "react";

const Intermediate = () => {
  const [name, setName] = useState("Rakesh");

  const inputRef = useRef();

  const handleReset = () => {
    setName("");
    inputRef.current.focus();
  };

  const handleChange = () => {
    inputRef.current.style.color = "red";
  };

  return (
    <>
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="type something..."
        value={name}
        ref={inputRef}
      />
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleChange}>Change Input</button>
    </>
  );
};

export default Intermediate;
