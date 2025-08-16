import logo from './logo.svg';
import './App.css';
import MyTable from './MyTable';
import { useEffect, useState } from 'react';
import Card from './Card';
import { Input } from './common/Input';

function App() {
  const [myData, setMyData] = useState([])
  const [search, setSearch] = useState('')
  const [movies, setMovies] = useState([
    {
      id: 1,
      name: 'Titanic',
      description : 'Historice movie'
    },
    {
      id:2,
      name: 'Avatar',
      description : 'Sci-fi movie'
    },
    {
      id:3,
      name: 'Mission Impossible',
      description : 'Action'
    },
    {
      id:4,
      name: 'Avengers',
      description : 'Sci-fi movie'
    }
  ])

  useEffect(() => {
    const response = fetch('https://jsonplaceholder.typicode.com/todos/').then((res) => res.json()).then((data) => setMyData(data));
  }, [])

  console.log({search})

  const searchOnChange = (value) => {
    setSearch(value)
  }

  return (
    <div className="App">
      <h1>Props</h1>
      <div style={{display: 'flex', gap: '10px', justifyContent: 'left'}}>
        <p>Search by movie name:</p>
        <Input searchOnChange={searchOnChange}/>
      </div>
      <div style={{display: 'flex', gap: '10px'}}>
        {movies?.map((movie, index) => {
          return(
            <Card movie={movie} index={index}/>
          )
        })}
      </div>
      {/* allData is a props */}
      {/* <MyTable allData={myData}/> */}
    </div>
  );

}

export default App;




