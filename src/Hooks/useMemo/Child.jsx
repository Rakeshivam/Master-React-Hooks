import React from "react";

const Child = ({ heavyCalc }) => {
  console.log("Child Component Rendered");

  return <div>{heavyCalc}</div>;
};

export default React.memo(Child);
