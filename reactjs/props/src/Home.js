import React from 'react';

const Home = () => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh'
  }}>
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '200px',
      height: '200px',
      borderRadius: '50%',
      backgroundColor: 'white',
      boxShadow: '0 0 10px rgba(0,0,0,0.2)'
    }}>
      <div style={{
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        backgroundColor: 'green',
        boxShadow: '0 0 10px rgba(0,0,0,0.2)'
      }}></div>
    </div>
    <h1 style={{
      fontSize: '2rem',
      margin: '20px 0'
    }}>Welcome Home</h1>
    <p style={{
      fontSize: '1.2rem',
      margin: '10px 0'
    }}>This is my avocado-inspired home.</p>
  </div>
);

export default Home;