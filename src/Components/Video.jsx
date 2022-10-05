import React, { useRef, useState } from 'react';
import "./Video.css"

import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";


function Video({url, likes, shares, messages, channel, description, song}) {
  const [playing, isPlaying] = useState(false)
  const videoRef = useRef(null);

  function handleVideoPress(event) {
    if (playing) {
      videoRef.current.pause();
      isPlaying(false)
    } else {
      videoRef.current.play();
      isPlaying(true)
    }
  }


  return (
    <div className='video'>
      <video
        className='video__player'
        src={url}
        loop
        ref={videoRef}
        onClick={handleVideoPress}
      />

      {/* Video Footer */}
      <VideoFooter channel={channel} description={description} song={song} />

      {/* Video Sidebar */}
      <VideoSidebar likes={likes} messages={messages} shares={shares} />
    </div>
  )
}

export default Video;