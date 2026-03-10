import React, { createContext } from "react";
import ChildA from "./ChildA";

const data = createContext();
const data1 = createContext()

const Parent = () => {
  const name = "Rakesh";
  const age = 23;

  return (
    <>
      <data.Provider value={name}>
        <data1.Provider value={age}>
        <ChildA />
        </data1.Provider>
      </data.Provider>
    </>
  );
};

export default Parent;
export { data, data1 };
