import React, { useReducer } from "react";

const Reducer = () => {
  const initialState = {
    count: 0,
  };

  const reducerFn = (state, action) => {
    console.log("State", state);
    console.log("Action", action);

    switch (action.type) {
      case "Increament":
        return { count: state.count + 1 };

      case "Decreament":
        return { count: state.count - 1 };

      case "Reset":
        return { count: 0 };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducerFn, initialState);

  return (
    <>
      <button onClick={() => dispatch({ type: "Increament" })}>
        Increament
      </button>
      <button onClick={() => dispatch({ type: "Decreament" })}>
        Decreament
      </button>
      <button onClick={() => dispatch({ type: "Reset" })}>Reset</button>
      {state.count}
    </>
  );
};

export default Reducer;
