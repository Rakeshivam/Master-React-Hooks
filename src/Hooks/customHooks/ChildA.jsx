import React from 'react'
import useCounter from './useCounter'

const ChildA = () => {
    const{counter, handleDecreament, handleIncreament} = useCounter(400,5)
  return (
    <>
        <button onClick={handleIncreament}>Increament</button>
        <button onClick={handleDecreament}>Decreament</button>
        {counter}
    </>
  )
}

export default ChildA