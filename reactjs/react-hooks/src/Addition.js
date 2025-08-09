import React, { useState } from 'react'

const Addition = () => {
    const [total, setTotal] = useState(0)
    const [firstNumber, setFirstNumber] = useState(0)
    const [secondNumber, setSecondNumber] = useState(0)


    const handleSubmit = () => {
        let totalValue = Number(firstNumber) + Number(secondNumber);
        setTotal(totalValue)
    }

  return (
    <div>
      <div>Do the addition:</div>
      <input type="number" onChange={(event) => setFirstNumber(event.target.value)} />
      <input type="number" onChange={(event) => setSecondNumber(event.target.value)}/>

      {total > 0 ? `Total : ${total}` : ''}
      
      <button onClick={handleSubmit}>Submit</button> 
    </div>
  )
}

export default Addition