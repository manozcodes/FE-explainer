import React, { useState, useEffect } from 'react'
import { Toaster, toast } from 'react-hot-toast'
import Bmi from './Bmi'
import Theme from './Theme'

const App = () => {
  const [count, setCount] = useState(10);
  const [name, setName] = useState('');


  // Runs on every render
  // useEffect(() => {
  //   toast(`Runs on every render:You're viewing updated age ${count}`)
  // })

// Runs only once
// useEffect(() => {
//   toast(`You're viewing updated age ${count}`)
// },[]) // [] -> dependency array

// Runs everytime when something changed
// useEffect(() => {
//   name?.length > 0 && toast(`Name has been modified.`)
// },[name]) // [] -> dependency array

// Runs everytime when something changed
useEffect(() => {
  name?.length > 0 && toast(`Name has been modified.`)
},[name, count]) // [] -> multiple item in dependency array



  return (
    <div style={{display: 'flex', gap: '10px', margin: '30px',}}>
      {/* <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <h1>Age: {count}</h1> 
      <input type="text" onChange={(event) => setName(event.target.value)} />
      <h1>Name: {name}</h1>
      </div> */}
      <Toaster />
      {/* <Bmi /> */}
      <Theme />
    </div>
  )
}

export default App

