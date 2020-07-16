import React from 'react';

import videos from '../public/walkthroughs';

// Static video player; this needs to be updated so that the poster and src attributes can be changed on click
export default function () {
  return (
    <div id="videoContainer">
      <video controls poster={videos[0].thumb}>
        <source
          src={videos[0].url}
          type="video/mp4"
        />
      </video>
    </div>
  );
}
