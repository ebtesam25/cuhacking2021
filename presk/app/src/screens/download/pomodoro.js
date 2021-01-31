import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import YouTube from "react-youtube";
var cElement = null;
function Pause(props) {
  return <button onClick={props.handleClick}>Pause</button>;
}

function Video(props) {
  console.log(props);
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1
    }
  };

  useEffect(() => {
    if (cElement) {
      props.isPaused
        ? cElement.target.pauseVideo()
        : cElement.target.playVideo();
    }
  }, [props.isPaused]);

  const _onReady = event => {
    console.log("_onReady");
    cElement = event;
    // event.target.playVideo();
  };

  const _onStateChange = event => {
    // event.target.pauseVideo()
  };
  return (
    <YouTube
      videoId={"21X5lGlDOfg"}
      opts={opts}
      onReady={_onReady}
      onStateChange={_onStateChange}
    />
  );
}

function Trial() {
  const [isPaused, setIsPaused] = useState(false);
  const togglePause = () => {
    console.log("togglePause");
    setIsPaused(!isPaused);
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Video isPaused={isPaused} />
      <Pause handleClick={togglePause} />
    </div>
  );
}

