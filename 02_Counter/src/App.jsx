/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'


// Main aim was how to propagate the changes in react 
// useState(default value, reference) -> retutn type is an Object 


function App() {
 const [counter, setCounter] = useState(10)


  
  // let counter = 10
  // const addValue = () => {
  //   console.log("Value added", Math.random());
  //   console.log("Clicked", Math.random());
  //   console.log("Clicked", counter);
  //   counter = counter + 1
  // } 



  const addValue = () => {
    console.log("Clicked", counter);
    if (counter < 20) {
      setCounter(counter + 1)  // This counter not goes above 20
    }
  } 



  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)  // This counter not below 0
    }
  }



  return (
    <>
      <h1>Hello React</h1>

      <h2>Counter value is: {counter}</h2>
      <button
        onClick={addValue}
      >Add Value</button>

      <br />

      <button
      onClick={removeValue}>Remove Value</button>
  </>
    
  )
}

export default App
