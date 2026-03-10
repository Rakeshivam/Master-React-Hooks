import React from "react";
import ChildA from "./ChildA";

const Parent = () => {
  const name = "Rakesh";
  return (
    <>
      <ChildA name={name} />
    </>
  );
};

export default Parent;
