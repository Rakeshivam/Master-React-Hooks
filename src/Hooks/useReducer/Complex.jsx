import React, { useReducer } from "react";

const Complex = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "UPDATE_FORM":
        return {
          ...state,
          [action.payload.field]: action.payload.value,
        };
      case "RESET_FORM":
        return initialState;
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    dispatch({
      type: "UPDATE_FORM",
      payload: {
        field: e.target.name,
        value: e.target.value,
      },
    });
  };

  const handleReset = () => {
    dispatch({
      type: "RESET_FORM",
    });
  };
  console.log(state);

  return (
    <>
      <input
        onChange={handleChange}
        type="text"
        placeholder="Enter name"
        name="name"
        value={state.name}
      />
      <br />
      <input
        onChange={handleChange}
        type="email"
        placeholder="Enter email"
        name="email"
        value={state.email}
      />
      <br />
      <input
        onChange={handleChange}
        type="password"
        placeholder="Enter password"
        name="password"
        value={state.password}
      />
      <br />
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

export default Complex;
