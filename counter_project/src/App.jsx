import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  const [counter, setCounter] = useState(5);

  // let counter = 5

  const addValue = () => {
    setCounter((next) => (next < 20 ? next+1 : 20))
    setCounter((next) => (next < 20 ? next+1 : 20))
    setCounter((next) => (next < 20 ? next+1 : 20))
    setCounter((next) => (next < 20 ? next+1 : 20))
  }

  // const removeValue = () => {

  //   if(counter < 1) {
  //     return 0;
  //   }
  //   setCounter(counter - 1)
  // }

  const removeValue = () => {
    setCounter((prev) => (prev > 0 ? prev - 1 : 0));
  }

  return (
    <>
      <h1>Avi&Vashu</h1>
      <h2>Counter Value: {counter}</h2>
      <button
        onClick={addValue}
        >add value {counter}
      </button>
      <br />
      <button 
        onClick={removeValue}
        >remove value {counter} 
      </button>
      <br />
      <p>footer: {counter}</p>
    </>
  )
}

export default App
