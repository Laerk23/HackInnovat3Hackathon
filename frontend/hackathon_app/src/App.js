import React, { useState, useEffect } from 'react';
import './App.css';
import LoadingScreen1 from './routes/Loading Screen 1/LoadingScreen1'; // Import LoadingScreen1 component
import InputForm from './routes/InputForm/InputForm'; // Import InputForm component
import LoadingScreen2 from './routes/LoadingScreen2/LoadingScreen2'; // Import LoadingScreen2 component

function App() {
  const [showLoading1, setShowLoading1] = useState(true);
  const [showInputForm, setShowInputForm] = useState(false);
  const [inputFormCompleted, setInputFormCompleted] = useState(false);
  const [showLoading2, setShowLoading2] = useState(false);

  useEffect(() => {
    // Simulate backend process
    const backendProcess = setTimeout(() => {
      setShowInputForm(true); // Show InputForm after a delay
      setShowLoading1(false); // Hide LoadingScreen1
    }, 2500);

    return () => clearTimeout(backendProcess);
  }, []);

  useEffect(() => {
    // Start LoadingScreen2 when InputForm is completed
    if (!inputFormCompleted) return;

    const interval = setInterval(() => {
      setShowLoading2((prev) => !prev); // Toggle showLoading2 every second
    }, 1000);

    return () => clearInterval(interval);
  }, [inputFormCompleted]);

  return (
    <div className="App">
      {showLoading1 && <LoadingScreen1 />}
      {showInputForm && (
        <InputForm
          onComplete={() => {
            setInputFormCompleted(true);
          }}
        />
      )}
      {showLoading2 && <LoadingScreen2 />}
    </div>
  );
}

export default App;