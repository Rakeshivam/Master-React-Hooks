import React from "react";
import Child from "./Child";

const Parent = () => {
    const name = "Rakesh"
  return (
    <>
      <Child  name = {name}/>
    </>
  );
};

export default Parent;
