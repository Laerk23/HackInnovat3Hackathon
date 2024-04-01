import React from 'react';
import { useNavigate, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.scss'; // Make sure the path matches the location of your SCSS file
import videoBg from './11960240-hd_1920_1080_24fps.mp4';
import yourImage from "./download.png"; // Ensure this path is correct
// import Loader from "/Users/avidhruva/Desktop/HackInnovat3Hackathon/frontend/hackathon_app/src/routes/Loading Screen 1/LoadingScreen1.js"

const WelcomePage = () => {
  let navigate = useNavigate(); // Hook for navigation

  // Function to navigate to LoadingScreen1
  const goToLoadingScreen1 = () => {
    navigate('./InputForm'); // Adjust the route as necessary
  };

  return (
    // <Loader />
    <div className="main">
      <div className="overlay"></div>
      <div className="red-nav-bar"></div>
      <video src={videoBg} autoPlay loop />
      <div className="content">
        <h1 className="welcome-text"><b>Welcome To The</b></h1>
        <img src={yourImage} alt="Descriptive Alt Text" />
        <h2 className="welcome-text2"><b>Schedule Optimizer</b></h2>
        <button className="button" onClick={goToLoadingScreen1}>Configure My Schedule</button>
      </div>
    </div>
  );
};


export default WelcomePage;