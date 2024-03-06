import React from 'react'
import '../Component/Counter.css'

function Counter({number, setNumber, increaseNo, decreaseNo}) {
  return (
    <>
    <div className="main">
    <h1>Counter: {number}</h1>
    <div className="btn">
    <button
    onClick={increaseNo}
    >Increase</button>
    <button
    onClick={decreaseNo}
    >Decrease</button>
    </div>
    </div>
    </>
  )
}

export default Counter