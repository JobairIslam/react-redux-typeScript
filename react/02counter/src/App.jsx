import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter,setCounter]=useState(15)
  // let counter = 15 ;

  const addValue = ()=>{
    // setCounter(counter+1)
    setCounter((counter)=>counter+1)
    
  }
  const removeValue = ()=>{
    setCounter((counter)=>counter-1)
  }

  return (
    <>
      <h1>jobair islam asif{counter}</h1>
      <h2>counter value {counter}</h2>
      <button onClick={addValue}>add value</button>{" "}
      <button onClick={removeValue}>remove value</button>
      <p>footer{counter}</p>
    </>
  )
}

export default App
