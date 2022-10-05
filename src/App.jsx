import axios from "./axios.js";
import React, { useEffect, useState } from "react";
import "./App.css";

//Components
import Video from "./Components/Video";

function App() {

  const [videos, setVideos] = useState([])

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get('/v2/posts');
      setVideos(response.data);

      return response;
    }
  
    fetchPosts();
  }, [])
  

  return (
    <div className="app">
      {/* Video */}
      <div className="app__videos">
        {videos.map(({url, channel, description, song, likes, messages, shares}) => (
          <Video
            url={url}
            likes={likes}
            channel={channel}
            description={description}
            song={song}
            messages={messages}
            shares={shares}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
