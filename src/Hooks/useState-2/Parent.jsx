import React, { useState } from "react";

const Parent = () => {

  // const expensive = () => {
  //   console.log("Expensive");
  //   return 10;
  // };

  const[allValues, setAllValues] = useState({fiirsName: "Rakesh", lastName: "Kushwaha"})
  // const [task, setTask] = useState(["Learn React", "Build Project"]);
  // const [count, setCount] = useState(()=>expensive());    // Lazy initialization

  const handleClick = () => {
    setAllValues({...allValues, fiirsName: "Shivam", lastName: "Maurya" })
  }

  // const handleTask = ()=> {
  //   setTask([...task, "Practice Hooks"])
  // }

  return (
    <>
      <div>
        My firstName is {allValues.fiirsName} and lastName is {allValues.lastName}.
      </div>
      <button onClick={handleClick}>Update</button>

      {/* {task.map((val) => {
        return <li>{val}</li>;
      })}
      <button onClick={handleTask}>Add Task</button> */}

      {/* {count}
      <button onClick={() => setCount(count + 2)}>Click</button> */}
    </>
  );
};

export default Parent;
