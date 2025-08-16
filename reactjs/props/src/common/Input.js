import React from 'react'

export const Input = ({searchOnChange}) => {
  return (
    <input onChange={(e) => searchOnChange(e.target.value)}/>
  )
}
