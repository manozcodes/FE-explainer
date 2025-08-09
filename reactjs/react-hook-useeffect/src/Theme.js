import React, { useEffect, useState } from 'react'
import './index.css'

const Theme = () => {
    const [myTheme, setMyTheme] = useState('')

    useEffect(() => {
        const mySavedTheme = localStorage.getItem('theme')
        console.log({mySavedTheme})
        if(mySavedTheme){
            setMyTheme(mySavedTheme || 'light')
        }

    },[])


    useEffect(() => {
        document.body.className = myTheme
        localStorage.setItem('theme', myTheme)
    },[myTheme])

 

  return (
    <div style={{
        color: myTheme === "light" ? 
        'black' : 'white',
    }}>
        Toggle Theme: 
        <span onClick={() => setMyTheme('dark')}>Dark</span> | 
        <span onClick={() => setMyTheme('light')}>Light</span>
    </div>
  )

}

export default Theme

