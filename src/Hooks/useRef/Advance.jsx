import React, { useEffect, useRef, useState } from "react";

const Advance = () => {
  const [count, setCount] = useState(0);
  const prevCount = useRef();

  useEffect(() => {
    prevCount.current = count;
  }, [count]);
  return (
    <>
      <div>Count : {count}</div>
      {/* <div>PrevCount : {prevCount.current}</div> */}
      <button onClick={() => setCount(count + 1)}>Increament Count</button>
    </>
  );
};

export default Advance;
