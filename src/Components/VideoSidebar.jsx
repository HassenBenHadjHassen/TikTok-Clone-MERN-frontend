import React, { useState } from 'react'
import "./VideoSidebar.css"

//Icons
import FavoriteIcon from '@mui/icons-material/Favorite';
import MessageIcon from '@mui/icons-material/Message';
import ShareIcon from '@mui/icons-material/Share';

function VideoSidebar({likes, shares, messages}) {

    const [liked, isLiked] = useState(false)

  return (
      <div className='videoSidebar'>
          <div className="videoSidebar__button">
              {liked ? <FavoriteIcon fontSize='large' style={{color: "red"}} onClick={(event) => isLiked(false)} /> : <FavoriteIcon fontSize='large' onClick={(event) => isLiked(true)} />}
              <p>{liked ? likes + 1: likes}</p>
          </div>

          <div className="videoSidebar__button">
              <MessageIcon fontSize='large' />
              <p>{messages}</p>
          </div>
          
          <div className="videoSidebar__button">
              <ShareIcon fontSize='large' />
              <p>{shares}</p>
          </div>
    </div>
  )
}

export default VideoSidebar