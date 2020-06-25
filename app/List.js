import React from 'react';

// Function rendering a div for each video in the list

export default function (props) {
  const videos = props.videos;

  return videos.map((video, idx) => {
    return (
      <div key={idx} className='video'>
        <div className='title'>{idx < 9 ? '0' + (idx + 1) : idx + 1}. {video.title}</div>
        <div className='time'>{video.minutes}m {video.seconds}s</div>
      </div>
    )
  });
}
