import React from 'react'

const About = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#222',
      color: '#fff',
    }}>
      <h1 style={{ fontSize: '4rem', marginBottom: '2rem' }}>About Us</h1>
      <p style={{ fontSize: '1.5rem', lineHeight: '1.5', marginBottom: '2rem' }}>
        We are a team of passionate film enthusiasts who love movies and TV shows.
        Our mission is to provide you with the best recommendations and reviews of your favorite shows.
        Follow us for the latest updates and discover new amazing titles.
      </p>
      <p style={{ fontSize: '1.2rem', lineHeight: '1.5' }}>
        &copy; 2023 Netflix. All rights reserved.
      </p>
    </div>
  )
}

export default About