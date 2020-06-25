import React from 'react';

// Static video player; this needs to be updated so that the poster and src attributes can be changed on click
export default function () {
  return (
    <div id="videoContainer">
      <video controls poster='https://assets.thankview.com/assets/videos/thumbnails/1.jpg'>
        <source
          src="https://assets.thankview.com/assets/videos/walkthrough/1_Creating_A_Campaign.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
}
