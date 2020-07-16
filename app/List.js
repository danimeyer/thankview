import React from 'react';

// Function rendering a div for each video in the list

export default function (props) {
  const videos = props.videos;
  const handleClick = props.handleClick;

  return videos.map((video, idx) => {
    return (
      <button key={idx} className="video" onClick={handleClick}>
        <div className="title">
          {idx < 9 ? '0' + (idx + 1) : idx + 1}. {video.title}
        </div>
        <div className="time">
          {video.minutes}m {video.seconds}s
        </div>
      </button>
    );
  });
}
