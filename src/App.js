import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`container ${animate ? 'animate' : ''}`}>
      <h1>hi</h1>
    </div>
  );
}

export default App;