import React from 'react'
import Title from './common/Title'
import Description from './common/Description'

const Card = ({movie, index}) => {
  return (
    <div key={index} className='movie-card' style={{width: '200px', border: '1px solid #ccc', padding: '10px', borderRadius: '5px', margin: '10px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)'}}>
        <Title title={movie.name}/>
        <Description description={movie.description}/>
    </div>
  )
}

export default Card