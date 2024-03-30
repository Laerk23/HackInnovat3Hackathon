import React from 'react';
import './LoadingScreen1.scss'; // Import CSS for styling
import Gif from './terrier_walking.gif'; // Import GIF file

function Loading() {
  return (
    <div className="loading-container">
      <div className="background-image" style={{ backgroundImage: `url(${Gif})` }}>
        <p className="loading-text"><b>One moment...</b></p>
      </div>
    </div>
  );
}

export default Loading;
