import React, { Component } from 'react';
import List from './List';
import videos from '../public/walkthroughs';

export default class VideoList extends Component {
  constructor() {
    super();
    this.state = {
      videos: videos,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    let firstVideo = this.state.videos[0];
    this.setState({ ...this.state, selected: firstVideo });
  }

  handleClick(event) {
    event.preventDefault();
    let title = event.target.innerText.slice(4);
    let updateMe = document.getElementById('videoContainer').childNodes[0];
    console.log(title);
    this.state.videos.forEach((video) => {
      if (video.title === title) {
        let thumbnail = video.thumb;
        let url = video.url;
        updateMe.setAttribute('poster', thumbnail);
        updateMe.setAttribute('src', url);
      }
    });
  }

  render() {
    let videoList = this.state.videos;

    // Calculate total length of videos
    let total = videoList.reduce(
      (accumulator, video) => {
        accumulator.minutes += video.minutes;
        accumulator.seconds += video.seconds;
        return accumulator;
      },
      { minutes: 0, seconds: 0 }
    );

    // Convert seconds into minutes
    let additionalMinutes = Math.floor(total.seconds / 60);
    let remainingSeconds = total.seconds % 60;
    total.minutes += additionalMinutes;
    total.seconds = remainingSeconds;

    // Render list container and list of videos
    return (
      <div id="videoHome">
        <h3>ThankView Walkthrough</h3>
        <p>
          Total: {total.minutes}m {total.seconds}s
        </p>
        <div id="listContainer">
          <List videos={this.state.videos} handleClick={this.handleClick}/>
        </div>
      </div>
    );
  }
}
