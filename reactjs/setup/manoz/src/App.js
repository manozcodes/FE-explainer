import {useState} from 'react'

const App = () => {
    const [count, setCount] = useState(0)
    // uState is on of the react-hooks

    // const [name, setName] = useState(value)

    const sumOf = (a=10,b=10) => {
        console.log(a+b)
        return a+b;
    }

    const sumOf1 = () => {
        return 10;
    }

   

  return (
    <div style={{display: 'flex', gap: '10px', marginTop: '10px'}}>
        <button onClick={() => sumOf()}>Sum It!</button>
        <button onClick={sumOf1}>Sum It 1!</button>

        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>

        <h1>My Counter Value: {count}</h1>
    </div>
  )
}

export default App
