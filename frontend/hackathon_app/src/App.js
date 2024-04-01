import React, { useState, useEffect } from 'react';
import './App.css';
import WelcomePage from './components/WelcomePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoadingScreen1 from './routes/Loading Screen 1/LoadingScreen1'; // Import LoadingScreen1 component
import InputForm from './routes/InputForm/InputForm'; // Import InputForm component
import LoadingScreen2 from './routes/LoadingScreen2/LoadingScreen2'; // Import LoadingScreen2 component

function App() {
  const [currentScreen, setCurrentScreen] = useState('loading1');
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    //   setTimeout(() => {
    setCurrentScreen('inputForm');
    // }, 2500);

    fetch('http://localhost:5000/api/courses')
      .then(response => response.json())
      .then(data => {
        setCourses(data);
        setCurrentScreen('loading2');
      })
      .catch(error => {
        console.error('Error fetching course data:', error);
      });
  }, []);

  return (
    <div className="App">
      <Router>
        <div>
          {currentScreen === 'loading1' && <LoadingScreen1 />}
          {currentScreen === 'inputForm' && (
            <Routes>
              <Route path="/" element={<WelcomePage />} />
              <Route path="/InputForm" element={<InputForm />} />
            </Routes>
          )}
          {currentScreen === 'loading2' && <LoadingScreen2 />}
        </div>
      </Router>
    </div>
  );
}

export default App;
