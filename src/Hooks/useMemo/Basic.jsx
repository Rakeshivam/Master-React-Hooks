import React, { useMemo, useState } from "react";
import Child from "./Child";

const Basic = () => {
  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(100);

  const heavyCalc = useMemo(() => {
    console.log("Heavy Calc");
    let result = 0;
    for (let i = 0; i <= 100000; i++) {
      result += i;
    }
    return result + add;
  }, [add]);

  return (
    <>
      <p>{heavyCalc}</p>
      <button onClick={() => setAdd(add + 1)}>Add</button>
      {add}
      <br />
      <button onClick={() => setMinus(minus - 1)}>Minus</button>
      {minus}
      <Child heavyCalc={heavyCalc} />
    </>
  );
};

export default Basic;
