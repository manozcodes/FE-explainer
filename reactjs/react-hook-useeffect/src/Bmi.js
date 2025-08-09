import React, { useEffect, useState } from 'react'

// / body weight mass app
const Bmi = () => {
  const [weight, setWeight] = useState(0);
  // [localStorage.getItem('weight'), localStorage.setItem('weight', 20)]
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState(0);
  

//   console.log('data', weight, height)

  useEffect(() => {
    setBmi(Number(weight / (height * height)))
  }, [height, weight])


  return (
    <>
    <div>Bmi Calculator</div>
    <form action="">
      <input type="text" placeholder='Enter your weight'  onChange={(event) => setWeight(event.target.value)}/>
      <input type="text" placeholder='Enter your height' onChange={(event) => setHeight(event.target.value)}/>
      {/* <button onClick={() => setBmi(Number(weight / (height * height)))}>Calculate</button> */}
      {weight > 0 && height > 0 && <p>Your BMI: {Number(bmi)?.toFixed(3)}</p>}
    </form>
    </>
  )
}

export default Bmi