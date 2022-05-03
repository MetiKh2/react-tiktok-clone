import React from 'react';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Ticker from "react-ticker";
const VideoFooter = ({channel,description,song}) => {
    return (
        <div className={'videofooter'}>
           <div className={'videofooter-text'}>
               <h3>@{channel}</h3>
               <p>{description}</p>
               <div className={'videofooter-ticker'}>
                   <MusicNoteIcon className={'videofooter-icon'}/>
                   <Ticker  mode={'smooth'}>
                       {({index}) => (
                           <>
                               <p>{song}</p>
                           </>
                       )
                       }
                   </Ticker>
               </div>
           </div>
            <img
                className="videofooter-record"
                src="https://static.thenounproject.com/png/934821-200.png"
                alt=""
            />
        </div>
    );
};

export default VideoFooter;