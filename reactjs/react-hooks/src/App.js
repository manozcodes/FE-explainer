import {useState} from "react";

import './App.css';
import Addition from "./Addition";

function App() {
  // const [<statename>, <setStateName>] = useState(<stateInitialValue>);

  const [country, setCountry] = useState('Nepal');
  // localStorage.setItem('country', 'Nepal');
  // const country = localStorage.getItem('country');



  // console.log('checking country', country)

  const changeCountry = (value) => {
    setCountry(value);
  }

  const famous = [
    {country: 'United Kingdom', popularity: 'Fish and Chips'},
    {country: 'Sweden', popularity: 'Fika'},
    {country: 'Ukraine', popularity: 'Borscht'},
    {country: 'Nepal', popularity: 'Momo'}
  ]

  // console.log('debug', Object.keys((famous => famous[country])))


  const getTheIndex = famous?.findIndex((el) => el.country === country);

  const countryList = ['United Kingdom', 'Sweden', 'Ukraine', 'Nepal']

  return (
    <div className="App" style={{marginTop: '50px'}}>
      Currently, I've selected: {country}
      <p>And this country is famous for: 
        {famous[getTheIndex]?.popularity}
        </p>


      <div style={{display: 'flex', gap: '10px', marginTop: '30px', justifyContent: 'center'}}>
        {countryList?.map((elem, index) => {
          return(
            <button key={index} onClick={() => changeCountry(elem)}>Choose {elem}</button>
          )
        })}
        {/* <button onClick={() => changeCountry('United Kingdom')}>Choose United Kingdom</button>
        <button onClick={() => changeCountry('Sweden')}>Choose Sweden</button>
        <button onClick={() => changeCountry('Ukraine')}>Choose Ukraine</button> */}
      </div>



      <p style={{
        color: country === 'United Kingdom' ? 'green' : country === 'Ukraine' ? 'blue' : 'red',
      }}
      >
        {country === 'United Kingdom' ? 'Congrats! UK is selected' : 'Oops! This is not UK'}
      </p>

      <Addition />

    </div>
  );
}

export default App;
