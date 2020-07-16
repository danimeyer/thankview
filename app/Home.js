import React, { Component } from 'react';

import videos from '../public/walkthroughs';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      videos: videos,
      selected: '',
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    let firstVideo = this.state.videos[0];
    this.setState({ ...this.state, selected: firstVideo });
  }

  handleClick(event) {
    // event.preventDefault();
    let title = event.target.innerText.slice(4);
    console.log(title)
    this.state.videos.forEach(video => {
      if (video.title === title) {
        console.log('I found a match')
        this.setState({...this.state, selected: video})
        console.log(this.state.selected)
      }
    })

    // let selected = this.state.videos.filter((video) => video.title === title);
    // console.log(selected);
    // this.setState({ ...this.state, selected: event.target.value });
  }

  render() {
    // console.log(this.state.selected)
    let videoList = this.state.videos;
    let selected = this.state.selected;

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

    return (
      <div id="home">
        {/* Video List div */}
        <div id="videoHome">
          <h3>ThankView Walkthrough</h3>
          <p>
            Total: {total.minutes}m {total.seconds}s
          </p>
          <div id="listContainer">
            {videoList.map((video, idx) => {
              return (
                <button key={idx} className="video" onClick={this.handleClick}>
                  <div className="title">
                    {idx < 9 ? '0' + (idx + 1) : idx + 1}. {video.title}
                  </div>
                  <div className="time">
                    {video.minutes}m {video.seconds}s
                  </div>
                </button>
              );
            })}
          </div>
        </div>
        {/* Video Container div */}
        <div id="videoContainer">
          <video controls poster={selected.thumb}>
            <source src={selected.url} type="video/mp4" />
          </video>
        </div>
      </div>
    );
  }
}
