import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import WelcomePage from './components/WelcomePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function Loading() {
  return (
    <div className="loading-container">
      <h1>One moment...</h1>
    </div>
  );
}

// function NextPage() {
//   return (
//     <div>
//       <h1>Welcome to the Next Page!</h1>
//     </div>
//   );
// }

function App() {
  return (
    <Router> {/* Wrap your Routes within Router */}
      <div>
        <Routes>
          <Route path="/Home" element={<WelcomePage />} />
          {/* More routes can be added here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;