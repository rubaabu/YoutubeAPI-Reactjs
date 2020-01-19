import React from "react";
import './style.css';
import Iframe from 'react-iframe'


const VideoDetail = props => {
   
    const { video } = props;
    if(!video) {
        return<div className="loading">Loading video.....</div>
    }
    const videoItem = video.id.videoId;


    return <div>
    <div className="embed-responsive embed-responsive-21by9 frame">
    
        <Iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${videoItem}`}/> 

    </div>
    
        <h3>{video.snippet.title}</h3>

    
    </div>
}

export default VideoDetail;