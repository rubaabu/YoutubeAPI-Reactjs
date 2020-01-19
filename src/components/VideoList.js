import React from "react";
import './style.css';


const VideoList = props => {
    const { videos, onVideoSelect } = props;
    const videoItems = videos.map(video => {
    return(

        video = video.id.videoId ? 
       
        <div className="card mb-3 col-md-4 list-group" Style="max-width: 540px;" key={video.etag}>
        <div className="row no-gutters" onClick={() => onVideoSelect(video)} >
        
          <div className="col-md-4">
            <img src={video.snippet.thumbnails.high.url} className="card-img" alt="..." />
          </div>

          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{video.snippet.title}</h5>
              <p className="card-text"><small className="text-muted">{video.snippet.channelTitle}</small></p>
            </div>
          </div>

        </div>
      </div>
        : null
    );

});

    return(
        <div>
            {videoItems}
        </div>
    );
}
export default VideoList