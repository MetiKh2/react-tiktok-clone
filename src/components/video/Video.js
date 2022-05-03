import React, {useRef, useState} from 'react';
import './video.css'
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";
const Video = ({ url, channel, description, song, likes, messages, shares }) => {
    const [playing,setPlaying]=useState(false)
    const videoRef=useRef(null)
    const onVideoPress = (e) => {
        if(playing){
            videoRef.current.pause();
            setPlaying(false)
        }
        else{
            videoRef.current.play();
            setPlaying(true)
        }
    }
    return (
        <div className={'video'}>
            <video onClick={onVideoPress} ref={videoRef} loop className={'video-player'}>
                <source
                    src={url}
                />
            </video>
            <VideoFooter channel={channel} description={description} song={song} />
            <VideoSidebar likes={likes} messages={messages} shares={shares} />
        </div>
    );
};

export default Video;