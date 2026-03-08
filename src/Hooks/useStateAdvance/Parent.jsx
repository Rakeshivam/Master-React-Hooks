import React, { useState } from "react";

const UseStateAdvance = () => {
  const [state, setState] = useState({
    firstName: "Shivam",
    lastName: "Maurya",
    address: { city: "Noida", country: "India" },
  });

  const handleClick = () => {
    setState({
      ...state,
      firstName: "Rakesh",
      address: { ...state.address, city: "BLR" },
    });
  };

  return (
    <>
      <div>
        My firstName is {state.firstName} and lastName is {state.lastName} and
        city is {state.address.city} and country is {state.address.country}
      </div>
      <button onClick={handleClick}>Update</button>
    </>
  );
};

export default UseStateAdvance;
