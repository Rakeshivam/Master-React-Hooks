import React from 'react'

const Child = ({handleClick}) => {
  console.log("Child re-rendered");
  
  return (
    <button onClick={handleClick}>Click Me!</button>
  )
}

export default React.memo(Child)