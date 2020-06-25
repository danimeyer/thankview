import React from 'react';
import ReactDOM from 'react-dom';

import VideoList from './VideoList';
import Video from './Video';

// Home component with two divs, the list of videos and video player itself
const Home = function() {
  return (
    <div id='home'>
      <VideoList />
      <Video />
    </div>
  )
}

ReactDOM.render(
  <Home />,
  document.getElementById('app')
);
