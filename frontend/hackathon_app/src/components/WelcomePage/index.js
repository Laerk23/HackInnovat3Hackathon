import React from 'react';
import './index.scss'; // Make sure the path matches the location of your SCSS file
// import { functionLoading } from './Loading Screen 1/LoadingScreen1'; // Adjust the import path as needed
import videoBg from './11960240-hd_1920_1080_24fps.mp4'
import yourImage from "./download.png"
const WelcomePage = () => {
  return (
    <div className="main">
    <div className="overlay"></div>
    <div class="red-nav-bar"></div>
      <video src={videoBg} autoPlay loop />  
        <div className="content">
          <h1 className="welcome-text"><b>Welcome To The</b></h1>
          <img src={yourImage} alt="Descriptive Alt Text" />
          <h2 className="welcome-text2"><b>Schedule Optimizer</b></h2>
          <button className="button">Configure My Schedule</button>
          </div>
        </div>
  );
};

export default WelcomePage;
