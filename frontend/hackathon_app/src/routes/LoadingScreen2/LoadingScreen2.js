import React from 'react';
import './LoadingScreen2.scss'; // Import CSS for styling
import Gif from './running_terrier.gif'; // Import GIF file

function Loading() {
  return (
    <div className="loading-container">
      <div className="background-image" style={{ backgroundImage: `url(${Gif})` }}>
        {/* <h1 className="loading-text">One moment...</h1> */}
      </div>
    </div>
  );
}

export default Loading;
