import React, {useState} from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MessageIcon from '@mui/icons-material/Message';
import ShareIcon from '@mui/icons-material/Share';
const VideoSidebar = ({likes,messages,shares}) => {
    const [liked,setLiked]=useState(false)
    return (
        <div className={'videosidebar'}>
            <div className={'videosidebar-button'}>
                {liked ? (
                    <FavoriteIcon fontSize="large" onClick={(e) => setLiked(false)} />
                ) : (
                    <FavoriteBorderIcon
                        fontSize="large"
                        onClick={(e) => setLiked(true)}
                    />
                )}
                <p>{liked ? likes + 1 : likes}</p>
            </div>
            <div className="videosidebar-button">
                <MessageIcon fontSize="large" />
                <p>{messages}</p>
            </div>
            <div className="videosidebar-button">
                <ShareIcon fontSize="large" />
                <p>{shares}</p>
            </div>
        </div>
    );
};

export default VideoSidebar;