import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    // Fetches data from the backend container
    fetch('http://43.205.138.109:5000/api/message')
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => setMessage('Error connecting to backend'));
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial' }}>
      <h1>React Frontend inside Docker</h1>
      <p>Backend Status: <strong>{message}</strong></p>
    </div>
  );
}

export default App;
