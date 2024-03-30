import React, { useState, useEffect } from 'react';
import InputForm from './routes/InputForm/InputForm';
import './App.css';

function Loading() {
  return (
    <div className="loading-container">
      <h1>One moment...</h1>
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay before transitioning to the next screen
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loading />
      ) : (
        <div className="fade-out">
          <InputForm />
        </div>
      )}
    </div>
  );
}

export default App;