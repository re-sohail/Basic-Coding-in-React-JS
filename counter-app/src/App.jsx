import React, { useState } from 'react'
import Counter from './Component/Counter'

function App() {
  let [number, setnumber] = useState(0)
  let increaseNo = () => {
    return(
      setnumber(number + 1)
    )
  }
  let decreaseNo = () => {
    return(
      setnumber(number - 1)
    )
  }
  return (
    <>
    <Counter number= {number} setNumber ={setnumber} increaseNo ={increaseNo} decreaseNo ={decreaseNo} />
    </>
  )
}

export default App