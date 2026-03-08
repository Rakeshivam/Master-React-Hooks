import React, { useState } from "react";

const Parent = () => {
  const [count, setCount] = useState(0);
  //   const [state, setState] = useState({ clicks: 0, count: 0 });
  //   const [items, setItems] = useState([]);

  return (
    <>
      <h1>UseState Hook</h1>
      <div>Button Clicked : {count} times</div>
      <div>
        <button onClick={() => setCount(count + 1)}>Click Me!</button>
        {/* <button onClick={()=> {setCount((prev) => prev+1); setCount((prev)=>prev+1)}}>Click Me!</button> */}
      </div>

      {/* <div>
            Button Clicked : {state.count}
        </div>
        <div>Clicks: {state.clicks} times</div>
        <div>
            <button onClick={()=> {setState({...state, count: state.count+5, clicks: state.clicks+1})}}>Click</button>
        </div> */}

      {/* <div>Items : {items}</div>
      <div>
        <button
          onClick={() => {
            setItems([...items, `${items.length + 1}`]);
          }}
        >
          Add Items
        </button>
      </div> */}
    </>
  );
};

export default Parent;
