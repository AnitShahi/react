import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  const addValue = () => {
    // counter = counter + 1;
    setCounter(counter + 1)
    console.log("clicked",counter);
  }

  const addRemove = () => {
    setCounter(counter - 1)
  }

  // let counter = 15 

  return (
    <>
      <h1>counter project</h1>
      <h2>counter value: {counter} </h2>

      <button onClick={addValue}>Add value {counter} </button>
      <br /> <br />
      <button onClick={addRemove}>Remove value {counter} </button>
      <p>footer: {counter} </p>
    </>
  )
}

export default App
