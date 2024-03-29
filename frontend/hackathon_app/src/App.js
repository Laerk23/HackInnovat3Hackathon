import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //delay the loading screen
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
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
          <NextPage />
        </div>
      )}
    </div>
  );
}

export default App;